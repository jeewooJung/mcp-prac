import { useThemeStore } from '../stores/useThemeStore';
import { usePageStore } from '../stores/usePageStore';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  const { activePage, setActivePage } = usePageStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // 테마 변경 시 HTML element에 클래스 추가/제거
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // 로컬 스토리지에 테마 설정 저장
    localStorage.setItem('theme-storage', JSON.stringify({
      state: { theme },
      version: 0,
    }));
  }, [theme]);
  
  // 페이지 변경 시 스크롤 이동 함수
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // 페이지 변경 핸들러
  const handlePageChange = (page: string) => {
    setActivePage(page);
    if (page === 'projects') {
      scrollToSection('mobile-main-section');
    }
  };
  
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800 dark:text-white">MCP Dev</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handlePageChange('dashboard'); }}
                className={`${activePage === 'dashboard' ? 'border-indigo-500 text-gray-900 dark:text-white' : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Dashboard
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handlePageChange('team'); }}
                className={`${activePage === 'team' ? 'border-indigo-500 text-gray-900 dark:text-white' : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Team
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handlePageChange('projects'); }}
                className={`${activePage === 'projects' ? 'border-indigo-500 text-gray-900 dark:text-white' : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Projects
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handlePageChange('settings'); }}
                className={`${activePage === 'settings' ? 'border-indigo-500 text-gray-900 dark:text-white' : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Settings
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <motion.div
        className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handlePageChange('dashboard'); setIsMobileMenuOpen(false); }}
            className={`${activePage === 'dashboard' ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 text-indigo-700 dark:text-indigo-300' : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Dashboard
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handlePageChange('team'); setIsMobileMenuOpen(false); }}
            className={`${activePage === 'team' ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 text-indigo-700 dark:text-indigo-300' : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Team
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handlePageChange('projects'); setIsMobileMenuOpen(false); }}
            className={`${activePage === 'projects' ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 text-indigo-700 dark:text-indigo-300' : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Projects
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handlePageChange('settings'); setIsMobileMenuOpen(false); }}
            className={`${activePage === 'settings' ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 text-indigo-700 dark:text-indigo-300' : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
          >
            Settings
          </a>
          <div className="border-transparent flex items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <span className="text-gray-600 dark:text-gray-300 mr-2">Theme:</span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
