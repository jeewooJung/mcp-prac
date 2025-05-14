import './index.css';
import { useState, useEffect } from 'react';
import PageLayout from './components/layout/PageLayout';
import { AppContextProvider } from './contexts/AppContext';
import PageRouter from './components/router/PageRouter';

function App() {
  // 클라이언트 사이드 렌더링을 위한 마운트 상태
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <AppContextProvider value={{ appName: 'MCP Dev Application', version: '1.1.0' }}>
      <PageLayout>
        <PageRouter isMounted={isMounted} />
      </PageLayout>
    </AppContextProvider>
  );
}

export default App;