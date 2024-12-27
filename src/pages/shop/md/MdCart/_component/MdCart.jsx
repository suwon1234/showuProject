import React, { useEffect, useState } from 'react';
import S from './styleCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faCheckCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MdCart = () => {
  const [product, setProduct] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const [number, setNumber] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const SelectAll = () => {
    const allChecked = checkedItems.every(item => item);
    setCheckedItems(Array(product.length).fill(!allChecked));
  };

  const SelectEach = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const decrease = (index) => {
    setNumber(prevNumber => {
      const newNumber = [...prevNumber];
      if (newNumber[index] > 1) newNumber[index] -= 1;
      return newNumber;
    });
  };

  const increase = (index) => {
    setNumber(prevNumber => {
      const newNumber = [...prevNumber];
      newNumber[index] += 1;
      return newNumber;
    });
  };

  useEffect(() => {
    const getMdCart = async () => {
      try {
        const response = await fetch(`http://localhost:4000/md`);
        const datas = await response.json();
        setProduct(datas);
        setCheckedItems(Array(datas.length).fill(false));
        setNumber(Array(datas.length).fill(1));
      } catch (error) {
        console.error("MdCartError", error);
      }
    };

    getMdCart();
  }, []);

  useEffect(() => {
    let total = 0;
    product?.forEach((item, index) => {
      if (checkedItems[index]) {
        total += item.price * number[index];
      }
    });
    setTotalAmount(total);
  }, [checkedItems, number, product]);

  if (!product || product.length === 0) {
    return <p>장바구니에 담긴 상품이 없습니다.</p>;
  }

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
          <FontAwesomeIcon className='icon2' icon={faCheckCircle} />
        </S.CheckIcon1>
        <span>해당 상품 전체 선택</span>
      </S.SelectAll>

      <S.BarWrapper>
        <S.BarName>상품명</S.BarName>
        <S.BarQuantity>수량</S.BarQuantity>
        <S.BarPrice>금액</S.BarPrice>
      </S.BarWrapper>

      <S.ProductList>
        {product.map((item, index) => (
          <S.ProductItem key={item.id}>
            <S.CheckIcon2 onClick={() => SelectEach(index)} checked={checkedItems[index]}>
              <FontAwesomeIcon className='icon2' icon={faCheckCircle} style={{ color: checkedItems[index] ? '#ffd400' : '#fff' }} />
            </S.CheckIcon2>
            <S.ProductImage src={process.env.PUBLIC_URL + "/images/shop/md/md1.jpg"} alt="장바구니 상품" />

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
        <S.TotalAmount>총 상품 금액 ({product?.length}개)</S.TotalAmount>
        <S.Pay>{totalAmount.toLocaleString()}원</S.Pay>
        <Link to={'/shop/md/payment'}>
          <S.CheckoutButton>결제 진행</S.CheckoutButton>
        </Link>
      </S.Total>
    </S.CartWrapper>
  );
};

export default MdCart;
