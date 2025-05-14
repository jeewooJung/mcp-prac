import React from 'react';
import PageHeader from '../common/PageHeader';
import PageSection from '../common/PageSection';

const SettingsPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="설정" 
        description="애플리케이션 설정 및 환경설정을 관리합니다"
      />
      
      <PageSection title="사용자 환경설정">
        <p className="text-center text-gray-600 dark:text-gray-300">
          이 섹션에는 사용자별 설정이 표시됩니다.
        </p>
      </PageSection>
      
      <PageSection title="시스템 설정">
        <p className="text-center text-gray-600 dark:text-gray-300">
          이 섹션에는 시스템 설정이 표시됩니다.
        </p>
      </PageSection>
    </>
  );
};

export default SettingsPage;
