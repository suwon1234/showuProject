import React from 'react';
import { useSelector } from 'react-redux';
import PaymentButton from './PaymentButton';

const Detail = () => {

  const { email } = useSelector((state) => state.user.currentUser)
  const name = "홍길홍"

  const productName = "고구마 맛탕";
  const productPrice = 20000;
  // 유저의 이메일,
  // 유저의 이름,




  // 상품 이름,
  // 상품의 가격

  return (
    <div>
      <div>
        <p>결제 상품 : { productName}</p>
        <p>결제 가격 : { productPrice.toLocaleString('ko-KR')}원</p>
      </div>
      <div>
        <PaymentButton
          productPrice={productPrice}
          orderName={productName}
          customerName={name}
          customerEmail={email}
        />
      </div>  
    </div>
  );
};

export default Detail;