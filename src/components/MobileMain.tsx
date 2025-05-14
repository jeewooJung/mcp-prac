import React, { useState } from 'react';
import TopNav from './mobile/TopNav';
import MainBanner from './mobile/MainBanner';
import FilterSection from './mobile/FilterSection';
import ProductCard from './mobile/ProductCard';
import Footer from './mobile/Footer';

interface Product {
  id: string;
  imageUrl: string;
  brand: string;
  name: string;
  code: string;
  price: number;
  discount?: number;
  soldOut?: boolean;
  liked?: boolean;
}

interface Banner {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
}

const MobileMain: React.FC = () => {
  // 샘플 데이터 - 실제 구현시 API에서 데이터를 가져오게 됩니다
  const [cartItemCount] = useState<number>(2);
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      brand: 'DIOR',
      name: '[22SS] 디올 오블리크 레이디 디올 미니백',
      code: 'ABCDEF1234',
      price: 3650000,
      discount: 20,
      soldOut: false,
      liked: true
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      brand: 'DIOR',
      name: '[22SS] 디올 새들백 블랙',
      code: 'ABCDEF5678',
      price: 4850000,
      discount: 0,
      soldOut: true,
      liked: false
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      brand: 'DIOR',
      name: '[22FW] 디올 30 몽테인백 울트라 매트',
      code: 'GHIJK9876',
      price: 5200000,
      discount: 10,
      soldOut: false,
      liked: false
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      brand: 'DIOR',
      name: '[22FW] 디올 바이저',
      code: 'LMNOP5432',
      price: 980000,
      discount: 0,
      soldOut: false,
      liked: true
    }
  ]);

  const banners: Banner[] = [
    {
      id: 'banner1',
      imageUrl: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'NEW DIOR PRIVATE SALE',
      subtitle: '디올 22SS 시즌오프 최대 30% 할인'
    },
    {
      id: 'banner2',
      imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'PRADA FW COLLECTION',
      subtitle: '프라다 신상품 입고 알림'
    },
    {
      id: 'banner3',
      imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'LUXURY WATCH COLLECTION',
      subtitle: '롤렉스 및 오메가 신모델 런칭'
    }
  ];

  const handleSearchClick = () => {
    console.log('검색 버튼 클릭');
  };

  const handleCartClick = () => {
    console.log('장바구니 버튼 클릭');
  };

  const handleSizeGuideClick = () => {
    console.log('사이즈 가이드 클릭');
  };

  const handleSoldOutFilterChange = (checked: boolean) => {
    if (checked) {
      // 품절 상품 제외
      const filteredProducts = products.filter(product => !product.soldOut);
      setProducts(filteredProducts);
    } else {
      // 원래 데이터로 복원 (실제 구현에선 API에서 다시 불러오는 방식이 될 수 있음)
      setProducts([
        {
          id: '1',
          imageUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          brand: 'DIOR',
          name: '[22SS] 디올 오블리크 레이디 디올 미니백',
          code: 'ABCDEF1234',
          price: 3650000,
          discount: 20,
          soldOut: false,
          liked: true
        },
        {
          id: '2',
          imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          brand: 'DIOR',
          name: '[22SS] 디올 새들백 블랙',
          code: 'ABCDEF5678',
          price: 4850000,
          discount: 0,
          soldOut: true,
          liked: false
        },
        {
          id: '3',
          imageUrl: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          brand: 'DIOR',
          name: '[22FW] 디올 30 몽테인백 울트라 매트',
          code: 'GHIJK9876',
          price: 5200000,
          discount: 10,
          soldOut: false,
          liked: false
        },
        {
          id: '4',
          imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          brand: 'DIOR',
          name: '[22FW] 디올 바이저',
          code: 'LMNOP5432',
          price: 980000,
          discount: 0,
          soldOut: false,
          liked: true
        }
      ]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <TopNav 
        cartItemCount={cartItemCount} 
        onSearchClick={handleSearchClick} 
        onCartClick={handleCartClick} 
      />
      
      <main>
        {/* 메인 배너 */}
        <MainBanner banners={banners} />

        {/* 필터 섹션 */}
        <FilterSection
          onSizeGuideClick={handleSizeGuideClick}
          onSoldOutFilterChange={handleSoldOutFilterChange}
        />

        {/* 상품 그리드 */}
        <section className="p-4 grid grid-cols-2 gap-4 bg-white">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard
                imageUrl={product.imageUrl}
                brand={product.brand}
                name={product.name}
                code={product.code}
                price={product.price}
                discount={product.discount}
                soldOut={product.soldOut}
                liked={product.liked}
              />
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileMain;
