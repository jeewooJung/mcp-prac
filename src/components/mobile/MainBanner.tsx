import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerItem {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
}

interface MainBannerProps {
  banners: BannerItem[];
}

const MainBanner: React.FC<MainBannerProps> = ({ banners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full bg-gray-900 aspect-square max-h-[343px]">
      {/* 슬라이더 컨텐츠 */}
      <div className="relative w-full h-full overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            {/* 그라데이션 오버레이 */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            {/* 텍스트 영역 */}
            <div className="absolute bottom-8 left-5 right-5 text-white">
              <h2 className="text-xl font-semibold leading-7 tracking-tight mb-1">
                {banner.title}
              </h2>
              {banner.subtitle && (
                <p className="text-sm text-white">{banner.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 화살표 네비게이션 */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 rounded-full p-1"
        aria-label="이전 슬라이드"
      >
        <ChevronLeft size={20} className="text-white" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 rounded-full p-1"
        aria-label="다음 슬라이드"
      >
        <ChevronRight size={20} className="text-white" />
      </button>

      {/* 인디케이터 */}
      <div className="absolute bottom-5 right-5 z-20 bg-black/70 px-3 py-1 rounded-full flex items-center text-xs text-white">
        <span className="text-white">{currentSlide + 1}</span>
        <span className="text-gray-400 mx-0.5">/</span>
        <span className="text-gray-400">{banners.length}</span>
      </div>
    </section>
  );
};

export default MainBanner;
