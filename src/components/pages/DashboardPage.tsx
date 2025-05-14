import React, { Suspense } from 'react';
import LoginForm from '../LoginForm';
import { toast } from 'sonner';
import LoadingFallback from '../common/LoadingFallback';
import PageHeader from '../common/PageHeader';
import PageSection from '../common/PageSection';

// 지연 로딩을 사용하여 초기 로딩 성능 향상
const TestComponent = React.lazy(() => import('../TestComponent'));
const DataFetchingExample = React.lazy(() => import('../DataFetchingExample'));

const DashboardPage: React.FC = () => {
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

  return (
    <>
      <PageHeader 
        title="라이브러리 테스트 페이지"
        description="다양한 React 라이브러리를 테스트하기 위한 페이지입니다."
      />
      
      <PageSection>
        <div className="flex justify-center mb-8">
          <button 
            onClick={showExampleToast}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            토스트 알림 표시
          </button>
        </div>
      </PageSection>
      
      <PageSection title="폼 및 데이터 가져오기 예제">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <LoginForm />
          </div>
          
          <Suspense fallback={<LoadingFallback />}>
            <DataFetchingExample />
          </Suspense>
        </div>
      </PageSection>
      
      <PageSection title="기존 Tailwind 테스트 컴포넌트">
        <Suspense fallback={<LoadingFallback />}>
          <TestComponent />
        </Suspense>
      </PageSection>
    </>
  );
};

export default DashboardPage;
