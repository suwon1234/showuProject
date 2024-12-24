// MD - 결제정보 페이지
import React from 'react';
import S from './stylePayInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MdPayInfo = ({ items }) => {
  return (
    <S.CompletedWrapper>
      <S.OrderCompleted>
        <FontAwesomeIcon className='icon' icon={faBagShopping} />
        <p>주문이 완료되었습니다.</p>
      </S.OrderCompleted>

      <S.PaymentProduct>
        <S.InfoWrapper>
          <S.Info>주문 상품</S.Info>
          <S.OrderNumber>주문번호 :</S.OrderNumber>
        </S.InfoWrapper>

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
              <S.ProductImage src={process.env.PUBLIC_URL + "/images/shop/md/md1.jpg"} alt="주문 상품" />
              <S.Left>{item.name}</S.Left>
              <S.Center>1</S.Center>
              <S.Right>{item.price.toLocaleString()} 원</S.Right>
            </S.PaymentItem>
          ))}
        </S.PaymentList>
      </S.PaymentProduct>
      
      <S.Container>
        <S.CustomerWrapper>
          <S.CustomerInfo>주문자 정보</S.CustomerInfo>
          <S.Info2>이름</S.Info2>
          <S.Info2>휴대전화</S.Info2>
          <S.Info2>배송지 주소</S.Info2>
        </S.CustomerWrapper>

        <S.PaymentWrapper>
          <S.PaymentInfo>결제 정보</S.PaymentInfo>
          <S.Info2>결제 수단</S.Info2>
          <S.Info2>상품 금액</S.Info2>
          <S.Info2>할인 금액</S.Info2>
          <S.Info2>배송비</S.Info2>
          <S.Info2>총 결제 금액</S.Info2>
        </S.PaymentWrapper>
      </S.Container>

      <S.PaymentButton>
        <S.BackButton>주문 상세보기</S.BackButton>
        <Link to={'/shop/md'}>
          <S.NextButton>계속 쇼핑하기</S.NextButton>
        </Link>
      </S.PaymentButton>
      
    </S.CompletedWrapper>
  );
};

export default MdPayInfo;