import React from 'react';
import S from './stylePayment';

const MdPayment = ({ items }) => {
  return (
    <S.PaymentWrapper>
      <S.PaymentTitle>
        <h1>주문 / 결제</h1>
      </S.PaymentTitle>

      <S.PaymentProduct>
        <S.Info>주문 상품</S.Info>

        <S.Head>
          <S.Left>
          <S.HeadItem>상품명</S.HeadItem>
          </S.Left>
          <S.Center>
          <S.HeadItem>수량</S.HeadItem>
          </S.Center>
          <S.Right>
          <S.HeadItem>금액</S.HeadItem>
          </S.Right>
        </S.Head>

        <S.PaymentList>
          {items.map((item, index) => (
            <S.PaymentItem key={item.id}>
              <S.ProductImage src={process.env.PUBLIC_URL + "/images/md/md-1.jpg"} alt="주문 상품" />
              <S.Left>{item.name}</S.Left>
              <S.Center>1</S.Center>
              <S.Right>{item.price.toLocaleString()} 원</S.Right>
              </S.PaymentItem>
          ))}

        </S.PaymentList>
      </S.PaymentProduct>

      <S.Info>주문 정보</S.Info>

      <S.Info>배송지</S.Info>

      <S.Info>결제 금액</S.Info>
      
    </S.PaymentWrapper>
  );
};

export default MdPayment;