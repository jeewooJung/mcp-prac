import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';

interface TopNavProps {
  cartItemCount?: number;
  onSearchClick?: () => void;
  onCartClick?: () => void;
}

const TopNav: React.FC<TopNavProps> = ({
  cartItemCount = 0,
  onSearchClick,
  onCartClick,
}) => {
  return (
    <header className="w-full">
      {/* 상태 표시줄 + 알림 배너 */}
      <div className="bg-gray-900 text-white py-2.5 px-4 text-center text-xs">
        <p>CS/구매/환불 안내</p>
      </div>

      {/* 네비게이션 바 */}
      <nav className="bg-white border-b border-gray-200 h-[52px] px-4 flex items-center justify-between">
        {/* 로고 */}
        <div>
          <h1 className="text-lg font-bold">BRAND</h1>
        </div>

        {/* 아이콘 그룹 */}
        <div className="flex items-center gap-3">
          {/* 검색 아이콘 */}
          <button
            onClick={onSearchClick}
            className="w-7 h-7 flex items-center justify-center"
            aria-label="검색"
          >
            <Search size={20} />
          </button>

          {/* 장바구니 아이콘 */}
          <div className="relative">
            <button
              onClick={onCartClick}
              className="w-7 h-7 flex items-center justify-center"
              aria-label="장바구니"
            >
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* 검색 바 */}
      <div className="px-4 py-3 flex items-center bg-white">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="상품코드를 입력해주세요"
            className="w-full border border-gray-200 rounded-md h-9 px-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2" aria-label="검색">
            <Search size={16} className="text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
