// MD 장바구니 페이지
import React, { useState } from 'react';
import S from './styleCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faCheckCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

const MdCart = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState(Array(items.length).fill(false));
  const [number, setNumber] = useState(Array(items.length).fill(1));

  // 전체 상품 선택
  const SelectAll = () => {
    const allChecked = checkedItems.every(item => item);
    setCheckedItems(Array(items.length).fill(!allChecked));
  };

  // 각 상품 선택
  const SelectEach = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  // 수량 감소
  const decrease = (index) => { setNumber(prevNumber => {
    const newNumber = [...prevNumber];
    if (newNumber[index] > 1) {
      newNumber[index] -= 1;
    }
    return newNumber;
  });
 };

  // 수량 증가
  const increase = (index) => { setNumber(prevNumber => {
    const newNumber = [...prevNumber];
    newNumber[index] += 1;
    return newNumber;
  });
 };

  return (
    <S.CartWrapper>
      <S.CartTitle>
        <h1>장바구니</h1>
      </S.CartTitle>
      
      <S.Delete>
        <FontAwesomeIcon className='icon1' icon={faCircleExclamation} />
        <p>장바구니에 담긴 상품은 90일 동안 보관 후 삭제됩니다.</p>
      </S.Delete>

      <S.SelectAll>
        <S.CheckIcon1 onClick={SelectAll} checked={checkedItems.every(item => item)}>
          <FontAwesomeIcon className='icon2' icon={faCheckCircle}  />
        </S.CheckIcon1>
        <span>해당 상품 전체 선택</span>
      </S.SelectAll>
      
      <S.BarWrapper>
        <S.BarName>상품명</S.BarName>
        <S.BarQuantity>수량</S.BarQuantity>
        <S.BarPrice>금액</S.BarPrice>
      </S.BarWrapper>

      <S.ProductList>
        {items.map((item, index) => (
          <S.ProductItem key={item.id}>
            <S.CheckIcon2 onClick={() => SelectEach(index)} checked={checkedItems[index]}>
              <FontAwesomeIcon className='icon2' icon={faCheckCircle} style={{ color: checkedItems[index] ? '#ffd400' : '#fff' }} />
            </S.CheckIcon2>
            <S.ProductImage src={process.env.PUBLIC_URL + "/images/md/md-1.jpg"} alt="장바구니 상품" />
            
            <S.ProductInfo>
              <S.ProductName>{item.name}</S.ProductName>
              <S.QuantityControl>
                <S.QuantityButton onClick={() => decrease(index)}>-</S.QuantityButton>
                <span>{number[index]}</span>
                <S.QuantityButton onClick={() => increase(index)}>+</S.QuantityButton>
              </S.QuantityControl>
              <S.ProductPrice>{item.price.toLocaleString()}원</S.ProductPrice>
              <FontAwesomeIcon className='icon3' icon={faXmark} />
            </S.ProductInfo>
          </S.ProductItem>
        ))}
      </S.ProductList>

      <S.Total>
        <S.TotalAmount>총 상품 금액 ({items.length}개)</S.TotalAmount>
        <S.Pay>0 원</S.Pay>
        <S.CheckoutButton>결제 진행</S.CheckoutButton>
      </S.Total>
    </S.CartWrapper>
  );
};

export default MdCart;