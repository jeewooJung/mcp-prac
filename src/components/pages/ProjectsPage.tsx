import React, { Suspense } from 'react';
import LoadingFallback from '../common/LoadingFallback';
import PageHeader from '../common/PageHeader';
import PageSection from '../common/PageSection';

// 지연 로딩을 사용하여 초기 로딩 성능 향상
const MobileMain = React.lazy(() => import('../mobile/MobileMain'));

const ProjectsPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="프로젝트" 
        description="현재 진행 중인 모바일 디자인 프로젝트입니다"
      />
      
      <PageSection title="피그마 디자인 - 모바일 메인">
        <div className="max-w-md mx-auto border border-gray-200 shadow-lg rounded-md overflow-hidden">
          <Suspense fallback={<LoadingFallback />}>
            <MobileMain />
          </Suspense>
        </div>
      </PageSection>
    </>
  );
};

export default ProjectsPage;
