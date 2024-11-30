import React, { useState } from 'react';
import S from './styleCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faCheckCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

const MdCart = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState(Array(items.length).fill(false)); // 체크 상태 초기화

  const toggleCheck = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <S.CartWrapper>
      <S.CartTitle>
        <h1>장바구니</h1>
      </S.CartTitle>

        <S.Delete>
          <FontAwesomeIcon className='icon' icon={faCircleExclamation} />
          <p>장바구니에 담긴 상품은 90일 동안 보관 후 삭제됩니다.</p>
        </S.Delete>

        <S.ProductList>
        {items.map((item, index) => (
          <S.ProductItem key={item.id}>
            <S.CheckIcon onClick={() => toggleCheck(index)} checked={checkedItems[index]}>
              <FontAwesomeIcon className='icon1' icon={faCheckCircle} />
            </S.CheckIcon>
            <S.ProductImage src={process.env.PUBLIC_URL + "/images/md/md-1.jpg"} alt="장바구니 상품" />

            <S.ProductInfo>
              <S.ProductName>{item.name}</S.ProductName>
              <S.QuantityControl>
                <S.QuantityButton>-</S.QuantityButton>
                <span>1</span>
                <S.QuantityButton>+</S.QuantityButton>
              </S.QuantityControl>
              <S.ProductPrice>{item.price}원</S.ProductPrice>
              <FontAwesomeIcon className='icon2' icon={faXmark} />
            </S.ProductInfo>
          </S.ProductItem>
        ))}
      </S.ProductList>

      <S.Total>
      <S.TotalAmount>
        총 상품 금액 ({items.length}개)
      </S.TotalAmount>
      <S.Pay>0 원</S.Pay>
      <S.CheckoutButton>
        결제 진행
      </S.CheckoutButton>
      </S.Total>
    </S.CartWrapper>
  );
};

export default MdCart;