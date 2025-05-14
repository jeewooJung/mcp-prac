import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

// 앱 전체에서 사용할 컨텍스트 타입 정의
interface AppContextType {
  appName: string;
  version: string;
}

// 기본값 설정
const defaultAppContext: AppContextType = {
  appName: 'MCP Dev',
  version: '1.0.0',
};

// 컨텍스트 생성
const AppContext = createContext<AppContextType>(defaultAppContext);

// 컨텍스트 제공자 컴포넌트
interface AppContextProviderProps {
  children: ReactNode;
  value?: Partial<AppContextType>;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ 
  children, 
  value = {} 
}) => {
  const contextValue = {
    ...defaultAppContext,
    ...value
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// 컨텍스트를 쉽게 사용하기 위한 훅
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};
