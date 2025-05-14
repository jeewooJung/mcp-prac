import React from 'react';
import type { ReactNode } from 'react';

interface PageSectionProps {
  title?: string;
  className?: string;
  children: ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({ title, className = '', children }) => {
  return (
    <section className={`mb-10 ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default PageSection;
