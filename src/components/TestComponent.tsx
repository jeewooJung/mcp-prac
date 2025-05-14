import { useState } from 'react';

function TestComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
      
      {/* 헤더 섹션 */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 
                      [mask-image:radial-gradient(circle_at_70%_30%,transparent_20%,black_70%)]"></div>
        <h1 className="text-4xl font-extrabold text-white mb-2 relative z-10">
          Tailwind CSS + React + TypeScript
        </h1>
        <p className="text-blue-100 text-lg max-w-xl relative z-10">
          Successfully set up Tailwind CSS with React and TypeScript! 
          Check out these interactive components below.
        </p>
        
        {/* 배지 */}
        <div className="flex space-x-2 mt-4">
          <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full font-medium">React</span>
          <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full font-medium">TypeScript</span>
          <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full font-medium">Tailwind CSS</span>
        </div>
      </div>
      
      {/* 메인 콘텐츠 */}
      <div className="p-6 lg:p-8">
        
        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* 카드 1 */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 
                       p-5 rounded-xl shadow-sm border border-green-100 dark:border-gray-600 
                       hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">Responsive Design</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Layouts that automatically adapt to any screen size.</p>
          </div>
          
          {/* 카드 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 
                        p-5 rounded-xl shadow-sm border border-blue-100 dark:border-gray-600 
                        hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">Rich Components</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Pre-styled components ready to use in your projects.</p>
          </div>
          
          {/* 카드 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 
                        p-5 rounded-xl shadow-sm border border-purple-100 dark:border-gray-600 
                        hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">Dark Mode</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Built-in dark mode support for all components.</p>
          </div>
        </div>
        
        {/* 탭 인터페이스 */}
        <div className="mb-8">
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
            <button 
              onClick={() => setActiveTab(0)}
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === 0 
                  ? 'text-blue-600 border-b-2 border-blue-500 dark:text-blue-400 dark:border-blue-400' 
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Features
            </button>
            <button 
              onClick={() => setActiveTab(1)}
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === 1 
                  ? 'text-blue-600 border-b-2 border-blue-500 dark:text-blue-400 dark:border-blue-400' 
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Customization
            </button>
            <button 
              onClick={() => setActiveTab(2)}
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === 2 
                  ? 'text-blue-600 border-b-2 border-blue-500 dark:text-blue-400 dark:border-blue-400' 
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Performance
            </button>
          </div>
          
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            {activeTab === 0 && (
              <div className="text-gray-700 dark:text-gray-300">
                <h3 className="font-bold text-lg mb-2">Key Features</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Utility-first approach</li>
                  <li>Responsive design system</li>
                  <li>Dark mode support</li>
                  <li>Modern CSS features</li>
                </ul>
              </div>
            )}
            
            {activeTab === 1 && (
              <div className="text-gray-700 dark:text-gray-300">
                <h3 className="font-bold text-lg mb-2">Customization Options</h3>
                <p>Tailor the framework to your needs by extending the theme, creating custom components, and more.</p>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-600">
                    <code className="text-sm text-pink-500 dark:text-pink-400">tailwind.config.js</code>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-600">
                    <code className="text-sm text-pink-500 dark:text-pink-400">@layer components</code>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 2 && (
              <div className="text-gray-700 dark:text-gray-300">
                <h3 className="font-bold text-lg mb-2">Performance Optimizations</h3>
                <p>Only the used CSS is included in your final bundle, resulting in minimal file sizes.</p>
                <div className="mt-3 h-4 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full rounded-full" style={{ width: '5%' }}>
                    <span className="sr-only">5% of traditional CSS size</span>
                  </div>
                </div>
                <p className="text-xs text-right mt-1">Just 5% of traditional CSS size</p>
              </div>
            )}
          </div>
        </div>
        
        {/* 아코디언 */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-8">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-4 flex justify-between items-center bg-gray-50 dark:bg-gray-700 text-left"
          >
            <span className="font-medium text-gray-800 dark:text-white">Learn how to get started</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          <div 
            className={`bg-white dark:bg-gray-800 overflow-hidden transition-all ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 text-gray-700 dark:text-gray-300">
              <p className="mb-3">Install Tailwind CSS with these simple steps:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Install dependencies: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">npm install -D tailwindcss</code></li>
                <li>Create your config file: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">npx tailwindcss init</code></li>
                <li>Add the directives to your CSS</li>
                <li>Start using Tailwind in your components!</li>
              </ol>
            </div>
          </div>
        </div>
        
        {/* 버튼 그룹 */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="btn-primary flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            Create Project
          </button>
          
          <button className="btn-secondary flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Documentation
          </button>
          
          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
            Animated Button
          </button>
          
          <button className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <span>Completed</span>
            <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </button>
        </div>
        
      </div>
      
      {/* 푸터 */}
      <div className="bg-gray-50 dark:bg-gray-900 p-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Created with Tailwind CSS and React TypeScript
          </p>
          <div className="flex space-x-4">
            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default TestComponent;
