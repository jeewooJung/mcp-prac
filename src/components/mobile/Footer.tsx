import React from 'react';
import { Home, Grid, Heart, User, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto">
      {/* 푸터 컨텐츠 */}
      <div className="bg-white border-t border-gray-200 px-4 py-6">
        <div className="flex mb-4">
          <button className="text-sm font-semibold text-gray-900 mr-4">
            개인정보처리방침
          </button>
          <div className="w-1 h-1 rounded-full bg-gray-600 self-center mr-4"></div>
          <button className="text-sm text-gray-900">
            이용약관
          </button>
        </div>

        <div className="mb-4">
          <div className="flex text-sm mb-2">
            <span className="text-gray-600 mr-2">이메일 :</span>
            <span className="text-gray-900">customer@anchors-biz.com</span>
          </div>
        </div>

        <p className="text-sm text-gray-600">
          © Anchors All rights reserved
        </p>
      </div>

      {/* 플로팅 버튼 */}
      <div className="fixed right-4 bottom-20 flex flex-col items-end space-y-3 z-10">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center shadow-lg"
          aria-label="맨 위로"
        >
          <ArrowUp size={18} className="text-white" />
        </button>
      </div>

      {/* 탭 바 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around z-10">
        <button className="py-3 flex flex-col items-center flex-1">
          <Home size={22} className="text-gray-900" />
          <span className="mt-1 text-[11px] text-gray-900 font-medium">홈</span>
        </button>
        <button className="py-3 flex flex-col items-center flex-1">
          <Grid size={22} className="text-gray-500" />
          <span className="mt-1 text-[11px] text-gray-500 font-medium">카테고리</span>
        </button>
        <button className="py-3 flex flex-col items-center flex-1">
          <Heart size={22} className="text-gray-500" />
          <span className="mt-1 text-[11px] text-gray-500 font-medium">좋아요</span>
        </button>
        <button className="py-3 flex flex-col items-center flex-1">
          <User size={22} className="text-gray-500" />
          <span className="mt-1 text-[11px] text-gray-500 font-medium">마이페이지</span>
        </button>
      </nav>
    </footer>
  );
};

export default Footer;
