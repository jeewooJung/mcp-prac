import React, { Suspense, lazy } from 'react';
import { usePageStore } from '../../stores/usePageStore';
import LoadingFallback from '../common/LoadingFallback';

// 페이지 컴포넌트 지연 로딩
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const TeamPage = lazy(() => import('../pages/TeamPage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage'));

interface PageRouterProps {
  isMounted: boolean;
}

const PageRouter: React.FC<PageRouterProps> = ({ isMounted }) => {
  // Zustand 스토어 사용
  const { activePage } = usePageStore();
  
  // 현재 활성화된 페이지 결정
  const renderActivePage = () => {
    if (!isMounted || activePage === 'dashboard') {
      return <DashboardPage />;
    } else if (activePage === 'projects') {
      return <ProjectsPage />;
    } else if (activePage === 'team') {
      return <TeamPage />;
    } else if (activePage === 'settings') {
      return <SettingsPage />;
    }
    return null;
  };
  
  return (
    <Suspense fallback={<LoadingFallback />}>
      {renderActivePage()}
    </Suspense>
  );
};

export default PageRouter;
