import React, { useState } from 'react';
import TopNav from './TopNav';
import MainBanner from './MainBanner';
import FilterSection from './FilterSection';
import ProductCard from './ProductCard';
import Footer from './Footer';

// 상품 데이터 타입 정의
interface Product {
  id: number;
  imageUrl: string;
  brand: string;
  name: string;
  code: string;
  price: number;
  discount?: number;
  soldOut?: boolean;
  liked?: boolean;
}

// 배너 데이터 타입 정의
interface Banner {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
}

const MobileMain: React.FC = () => {
  // 카트 아이템 수 상태
  const [cartItemCount, setCartItemCount] = useState(3);  // 랜덤 이미지 URL 생성 함수
  const getRandomImageUrl = () => {
    const randomNum = Math.floor(Math.random() * 149) + 1;
    // 괄호가 포함된 원래 URL 형식
    return `https://glnx9dqg6236.edge.naverncp.com/ori (${randomNum}).png`;
  };
  // 샘플 배너 데이터
  const banners: Banner[] = [
    {
      id: '1',
      imageUrl: getRandomImageUrl(),
      title: 'NEW ORI PRIVATE SALE',
      subtitle: '오리 프라이빗 세일 최대 60% 할인'
    },
    {
      id: '2',
      imageUrl: getRandomImageUrl(),
      title: 'SUMMER COLLECTION',
      subtitle: '여름 신상 컬렉션 출시'
    },
    {
      id: '3',
      imageUrl: getRandomImageUrl(),
      title: 'LUXURY ESSENTIALS',
      subtitle: '럭셔리 필수 아이템'
    },
    {
      id: '4',
      imageUrl: getRandomImageUrl(),
      title: 'LIMITED ITEMS',
      subtitle: '한정판 아이템 모음'
    },
    {
      id: '5',
      imageUrl: getRandomImageUrl(),
      title: 'EXCLUSIVE OFFERS',
      subtitle: '회원 전용 특별 혜택'
    }
  ];
  // 샘플 상품 데이터
  const products: Product[] = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    imageUrl: getRandomImageUrl(),
    brand: ['ORI', 'CHANEL', 'GUCCI', 'PRADA', 'BURBERRY', 'HERMES'][index % 6],
    name: ['캐시미어 스웨터', '실크 블라우스', '울 코트', '가죽 재킷', '데님 팬츠', '플리츠 스커트'][index % 6] + ` ${index + 1}`,
    code: `PROD${10000 + index}`,
    price: 120000 + (index * 10000),
    discount: index % 3 === 0 ? 20 : undefined,
    soldOut: index % 7 === 0,
    liked: index % 5 === 0
  }));

  // 이벤트 핸들러
  const handleSearchClick = () => {
    console.log('검색 클릭');
  };

  const handleCartClick = () => {
    console.log('장바구니 클릭');
  };

  const handleSizeGuideClick = () => {
    console.log('사이즈 가이드 클릭');
  };

  const handleSoldOutFilterChange = (checked: boolean) => {
    console.log(`품절 상품 ${checked ? '제외' : '포함'}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white max-w-md mx-auto relative">
      {/* 상단 네비게이션 */}
      <TopNav 
        cartItemCount={cartItemCount} 
        onSearchClick={handleSearchClick}
        onCartClick={handleCartClick}
      />
      
      {/* 메인 콘텐츠 영역 */}
      <main className="flex-grow">
        {/* 메인 배너 슬라이더 */}
        <MainBanner banners={banners} />
        
        {/* 필터 및 사이즈 가이드 섹션 */}
        <FilterSection 
          onSizeGuideClick={handleSizeGuideClick}
          onSoldOutFilterChange={handleSoldOutFilterChange}
        />
          {/* 상품 그리드 - 피그마 디자인에 따라 3열로 변경 */}
        <section className="px-3 py-6">
          <div className="grid grid-cols-3 gap-x-2 gap-y-5">
            {products.map(product => (
              <ProductCard 
                key={product.id}
                imageUrl={product.imageUrl}
                brand={product.brand}
                name={product.name}
                code={product.code}
                price={product.price}
                discount={product.discount}
                soldOut={product.soldOut}
                liked={product.liked}
              />
            ))}
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default MobileMain;
