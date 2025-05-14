import React from 'react';
import PageHeader from '../common/PageHeader';
import PageSection from '../common/PageSection';

const TeamPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="팀 페이지" 
        description="조직 정보 및 팀원 구성을 확인할 수 있습니다"
      />
      
      <PageSection title="팀 구성원">
        <p className="text-center text-gray-600 dark:text-gray-300">
          이 섹션에는 팀 정보가 표시됩니다.
        </p>
      </PageSection>
    </>
  );
};

export default TeamPage;
