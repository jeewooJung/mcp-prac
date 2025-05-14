import React, { useState } from 'react';
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
  onLikeToggle?: (isLiked: boolean) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  brand,
  name,
  code,
  discount,
  price,
  soldOut = false,
  liked = false,
  onLikeToggle
}) => {
  // 내부적으로 좋아요 상태 관리
  const [isLiked, setIsLiked] = useState(liked);
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);
    return (
    <div className="flex flex-col w-full">
      {/* 상품 이미지 - 3열 레이아웃에 맞게 조정 */}
      <div className="relative bg-gray-100 aspect-[5/6] mb-2 group">
        <img 
          src={imageUrl}
          alt={name}
          className={`w-full h-full object-cover ${soldOut ? 'opacity-60' : ''}`}
        />
        
        {/* 장바구니 버튼 - 작게 조정 */}
        <button 
          className="absolute top-1.5 right-1.5 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="장바구니에 추가"
          disabled={soldOut}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3334 4H10.6667V2.66667C10.6667 1.2 9.4667 0 8.00004 0C6.53337 0 5.33337 1.2 5.33337 2.66667V4H2.66671C1.93337 4 1.33337 4.6 1.33337 5.33333V13.3333C1.33337 14.0667 1.93337 14.6667 2.66671 14.6667H13.3334C14.0667 14.6667 14.6667 14.0667 14.6667 13.3333V5.33333C14.6667 4.6 14.0667 4 13.3334 4ZM6.66671 2.66667C6.66671 1.93333 7.26671 1.33333 8.00004 1.33333C8.73337 1.33333 9.33337 1.93333 9.33337 2.66667V4H6.66671V2.66667ZM13.3334 13.3333H2.66671V5.33333H13.3334V13.3333Z" fill="black"/>
          </svg>
        </button>

        {/* 품절 뱃지 - 작게 조정 */}
        {soldOut && (
          <div className="absolute bottom-1.5 left-1.5 bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-600 font-medium">
            품절
          </div>
        )}
      </div>

      {/* 상품 정보 - 더 작고 간결하게 조정 */}
      <div className="flex flex-col">
        <span className="text-[10px] font-medium text-gray-900 mb-0.5">{brand}</span>
        <h3 className="text-[11px] text-gray-900 font-normal line-clamp-1 mb-0.5">{name}</h3>
        <span className="text-[9px] text-gray-400 mb-1">{code}</span>
        
        {/* 가격 정보 - 더 작게 조정 */}
        <div className="flex items-center mb-1">
          {discount && discount > 0 && (
            <span className="text-xs font-semibold text-red-600 mr-0.5">{discount}%</span>
          )}
          <span className="text-xs font-semibold text-gray-900">{formattedPrice}원</span>
        </div>        {/* 좋아요 버튼 - 더 작게 조정 */}
        <div className="flex items-center">
          <button 
            className="flex items-center justify-center w-4 h-4"
            aria-label={isLiked ? "좋아요 취소" : "좋아요"}
            onClick={(e) => {
              e.preventDefault();
              const newLikedState = !isLiked;
              setIsLiked(newLikedState);
              if (onLikeToggle) {
                onLikeToggle(newLikedState);
              }
            }}
          >
            <Heart 
              size={12} 
              className={isLiked ? "fill-red-600 text-red-600" : "text-gray-400"}
              strokeWidth={isLiked ? 0 : 2} 
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
