// 경매 팝업 - 배송 정보
import React from 'react';
import S from './styleDeliveryPopup';

const DeliveryPopup = ({ title, onClose }) => {
  return (
    <S.PopupOverlay onClick={onClose}>
    <S.PopupContainer onClick={(e) => e.stopPropagation()}>
      <S.PopupTitle>{title}</S.PopupTitle>
      <S.PopupTableWrapper>
      <S.PopupTable>
        <tbody>
          <tr>
            <S.PopupLabel>배송지역</S.PopupLabel>
            <S.PopupValue>전국 (제주권 및 도서산간 지역은 배송비가 추가될 수 있습니다.)</S.PopupValue>
          </tr>
          <tr>
            <S.PopupLabel>배송방법</S.PopupLabel>
            <S.PopupValue>택배</S.PopupValue>
          </tr>
          <tr>
            <S.PopupLabel>배송비용</S.PopupLabel>
            <S.PopupValue>착불 5,000원</S.PopupValue>
          </tr>
        </tbody>
      </S.PopupTable>
      </S.PopupTableWrapper>

      <S.PopupButtonWrapper>
      <S.PopupButton onClick={onClose}>확인</S.PopupButton>
      </S.PopupButtonWrapper>
    </S.PopupContainer>
  </S.PopupOverlay>
  );
};

export default DeliveryPopup;