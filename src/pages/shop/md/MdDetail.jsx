import React from 'react';
import S from './styleDetail';

const md = 
  { id: 1, name: "BEST상품 1", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" }
  const MdDetail = () => {
  return (
    <S.Wrapper>

      <button>카트 추가</button>
      <button>바로 구매</button>
      <button>문의하기</button>
      
    </S.Wrapper>
  );
};

export default MdDetail;