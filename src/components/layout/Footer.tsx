import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const Footer: React.FC = () => {
  const { appName, version } = useAppContext();
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-6 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>© 2025 {appName} v{version}. 모든 라이브러리가 성공적으로 추가되었습니다.</p>
      </div>
    </footer>
  );
};

export default Footer;
