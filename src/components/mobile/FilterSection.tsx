import React, { useState } from 'react';
import { ChevronRight, Grid } from 'lucide-react';

interface FilterSectionProps {
  onSizeGuideClick: () => void;
  onSoldOutFilterChange: (checked: boolean) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  onSizeGuideClick,
  onSoldOutFilterChange,
}) => {
  const [soldOutFilter, setSoldOutFilter] = useState(false);
  
  const handleSoldOutFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSoldOutFilter(e.target.checked);
    onSoldOutFilterChange(e.target.checked);
  };

  return (
    <section className="border-t border-b border-gray-200">
      {/* 사이즈 가이드 버튼 */}
      <div className="p-4">
        <button
          onClick={onSizeGuideClick}
          className="w-full bg-gray-900 text-white py-2 rounded flex items-center justify-between px-3"
        >
          <div className="flex items-center">
            <span className="text-sm font-semibold">사이즈 가이드</span>
            <span className="text-xs ml-2">보러가기</span>
          </div>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* 필터 옵션 */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="soldOutFilter"
            checked={soldOutFilter}
            onChange={handleSoldOutFilterChange}
            className="w-5 h-5 border border-gray-300 rounded text-gray-900 focus:ring-0"
          />
          <label htmlFor="soldOutFilter" className="ml-2 text-sm font-semibold">
            품절제외
          </label>
        </div>
        
        <button className="p-1" aria-label="보기 방식 변경">
          <Grid size={18} className="text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default FilterSection;
