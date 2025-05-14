import './index.css';
import { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { usePageStore } from './stores/usePageStore';

// 지연 로딩을 사용하여 초기 로딩 성능 향상
const TestComponent = lazy(() => import('./components/TestComponent'));
const DataFetchingExample = lazy(() => import('./components/DataFetchingExample'));
const MobileMain = lazy(() => import('./components/mobile/MobileMain'));

function App() {
  // 클라이언트 사이드 렌더링을 위한 마운트 상태
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Zustand 스토어 사용
  const { activePage } = usePageStore();

  // 예제 토스트 표시 함수
  const showExampleToast = () => {
    toast('샘플 알림', {
      description: 'Sonner 라이브러리를 사용한 알림입니다.',
      action: {
        label: '확인',
        onClick: () => console.log('Toast action clicked')
      }
    });
  };
  // 클라이언트 사이드에서 렌더링이 완료될 때까지 대시보드 페이지를 기본으로 보여줍니다
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Dashboard 페이지 - 기본적으로 표시하거나, activePage가 dashboard인 경우 */}
        {(!isMounted || activePage === 'dashboard') && (
          <>
            <section className="mb-12">
              <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
                라이브러리 테스트 페이지
              </h1>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                다양한 React 라이브러리를 테스트하기 위한 페이지입니다.
              </p>
              
              <div className="flex justify-center mb-8">
                <button 
                  onClick={showExampleToast}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  토스트 알림 표시
                </button>
              </div>
            </section>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center">
                <LoginForm />
              </div>
              
              <Suspense fallback={
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                </div>
              }>
                <DataFetchingExample />
              </Suspense>
            </div>
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
                기존 Tailwind 테스트 컴포넌트
              </h2>
              
              <Suspense fallback={
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                </div>
              }>
                <TestComponent />
              </Suspense>
            </section>
          </>
        )}
          {/* Projects 페이지 - MobileMain 컴포넌트 */}
        {isMounted && activePage === 'projects' && (
          <section id="mobile-main-section" className="mt-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
              피그마 디자인 - 모바일 메인
            </h2>
            
            <div className="max-w-md mx-auto border border-gray-200 shadow-lg rounded-md overflow-hidden">
              <Suspense fallback={
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                </div>
              }>
                <MobileMain />
              </Suspense>
            </div>
          </section>
        )}
          {/* Team 페이지 */}
        {isMounted && activePage === 'team' && (
          <section className="mt-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
              팀 페이지
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300">
              이 섹션에는 팀 정보가 표시됩니다.
            </p>
          </section>
        )}
          {/* Settings 페이지 */}
        {isMounted && activePage === 'settings' && (
          <section className="mt-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
              설정 페이지
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300">
              이 섹션에는 설정이 표시됩니다.
            </p>
          </section>
        )}
      </main>
      
      <footer className="bg-white dark:bg-gray-900 py-6 border-t border-gray-200 dark:border-gray-800 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 MCP Dev. 모든 라이브러리가 성공적으로 추가되었습니다.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;