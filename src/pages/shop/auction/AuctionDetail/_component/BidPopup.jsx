// 경매 팝업 - 입찰 정보
import React from 'react';
import S from './styleBidPopup';
import { useNavigate } from 'react-router-dom';

const BidPopup = ({ title, onClose, auctionProduct }) => {
  const navigate = useNavigate();

  const handleBid = () => {
    navigate('/shop/auction/payment', {
      state: { auctionProduct } 
    });
  };

  return (
    <S.PopupOverlay onClick={onClose}>
      <S.PopupContainer onClick={(e) => e.stopPropagation()}>
        <S.PopupTitle>{title}</S.PopupTitle>
        <S.PopupContent>
          <p>
            <span>입찰 실수 및 허위 입찰</span>은 사고건으로 이어질 수 있으며, 
            <span> 사고건(미입금, 구매취소, 반품 실책 등) 2건</span> 이상 누적 시
          </p>
          <p> 
            사이트 이용 제한 및 사고수수료가 발생할 수 있습니다. 
          </p>
          <p>
            따라서 물품의 이미지 및 설명을 자세히 확인하시어 신중한 입찰 부탁드립니다.
          </p>
        </S.PopupContent>
        <S.BoxWrapper>
          <S.Box>
            <p>입찰금액</p>
          </S.Box>
        </S.BoxWrapper>

        <S.BidButton>
          <S.BackButton onClick={onClose}>취소</S.BackButton>
          <S.NextButton onClick={handleBid}>신중하게 입찰하기</S.NextButton>
        </S.BidButton>
      </S.PopupContainer>
    </S.PopupOverlay>
  );
};

export default BidPopup;
