import React from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  imageUrl: string;
  brand: string;
  name: string;
  code: string;
  discount?: number;
  price: number;
  soldOut?: boolean;
  liked?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  brand,
  name,
  code,
  discount,
  price,
  soldOut = false,
  liked = false
}) => {
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);
  
  return (
    <div className="flex flex-col w-full">
      {/* 상품 이미지 */}
      <div className="relative bg-gray-100 aspect-[5/6] mb-4 group">
        <img 
          src={imageUrl}
          alt={name}
          className={`w-full h-full object-cover ${soldOut ? 'opacity-60' : ''}`}
        />
        
        {/* 장바구니 버튼 */}
        <button 
          className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="장바구니에 추가"
          disabled={soldOut}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3334 4H10.6667V2.66667C10.6667 1.2 9.4667 0 8.00004 0C6.53337 0 5.33337 1.2 5.33337 2.66667V4H2.66671C1.93337 4 1.33337 4.6 1.33337 5.33333V13.3333C1.33337 14.0667 1.93337 14.6667 2.66671 14.6667H13.3334C14.0667 14.6667 14.6667 14.0667 14.6667 13.3333V5.33333C14.6667 4.6 14.0667 4 13.3334 4ZM6.66671 2.66667C6.66671 1.93333 7.26671 1.33333 8.00004 1.33333C8.73337 1.33333 9.33337 1.93333 9.33337 2.66667V4H6.66671V2.66667ZM13.3334 13.3333H2.66671V5.33333H13.3334V13.3333Z" fill="black"/>
          </svg>
        </button>

        {/* 품절 뱃지 */}
        {soldOut && (
          <div className="absolute bottom-2 left-2 bg-gray-100 px-2 py-1 text-xs text-gray-600 font-medium">
            품절
          </div>
        )}
      </div>

      {/* 상품 정보 */}
      <div className="flex flex-col">
        <span className="text-xs font-medium text-gray-900 mb-1">{brand}</span>
        <h3 className="text-sm text-gray-900 font-normal line-clamp-2 mb-1">{name}</h3>
        <span className="text-xs text-gray-400 mb-2">{code}</span>
        
        {/* 가격 정보 */}
        <div className="flex items-center mb-2">
          {discount && discount > 0 && (
            <span className="text-sm font-semibold text-red-600 mr-1">{discount}%</span>
          )}
          <span className="text-sm font-semibold text-gray-900">{formattedPrice}원</span>
        </div>

        {/* 좋아요 버튼 */}
        <div className="flex items-center">
          <button 
            className="flex items-center justify-center w-6 h-6"
            aria-label={liked ? "좋아요 취소" : "좋아요"}
          >
            <Heart 
              size={16} 
              className={liked ? "fill-red-600 text-red-600" : "text-gray-400"}
              strokeWidth={liked ? 0 : 2} 
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
