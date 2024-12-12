// 경매 팝업 - 배송 정보
import React from 'react';
import S from './styleDeliveryPopup';

const DeliveryPopup = ({ title, children, onClose }) => {
  return (
    <S.PopupOverlay onClick={onClose}>
    <S.PopupContainer onClick={(e) => e.stopPropagation()}>
      <S.PopupTitle>{title}</S.PopupTitle>
      <S.PopupContent>{children}</S.PopupContent>
      <S.PopupButtonWrapper>
      <S.PopupButton onClick={onClose}>확인</S.PopupButton>
      </S.PopupButtonWrapper>
    </S.PopupContainer>
  </S.PopupOverlay>
  );
};

export default DeliveryPopup;