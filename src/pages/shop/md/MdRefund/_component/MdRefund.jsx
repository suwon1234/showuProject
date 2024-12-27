// MD - 반품페이지
import React, { useEffect, useState } from 'react';
import S from './styleRefund';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const MdRefund = ({ items }) => {

  const options = ['옵션 1', '옵션 2', '옵션 3']; 

  const [checkedItems, setCheckedItems] = useState(Array(items.length).fill(false));
  const [number, setNumber] = useState(Array(items.length).fill(1));
  const [refundAmount, setRefundAmount] = useState(0);

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

  useEffect(() => {
    let totalRefund = 0;
    checkedItems.forEach((isChecked, index) => {
      if (isChecked) {
        totalRefund += items[index].price * number[index];
      }
    });
    setRefundAmount(totalRefund);
  }, [checkedItems, number, items])

  return (
    <S.ReturnWrapper>
      <S.ReturnTitle>
        <h1>반품 신청</h1>
      </S.ReturnTitle>


      <S.ReturnProduct>
      <S.Info>반품 상품</S.Info>
      <S.SelectAll>
        <S.CheckIcon1 onClick={SelectAll} checked={checkedItems.every(item => item)}>
          <FontAwesomeIcon className='icon2' icon={faCheckCircle}  />
        <S.P>해당 상품 전체 선택</S.P>
        </S.CheckIcon1>
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
      </S.ReturnProduct>

      <S.ReturnForm>
        <table className="return-form">
          <tr>
            <th>반품 사유</th>
            <td colSpan="2">
            <S.Dropdown>
            <Dropdown options={options} /> 
            </S.Dropdown>
            <S.Input type='text' placeholder='반품 사유를 입력해주세요.' />
            </td>
          </tr>
          <tr>
            <th>반품 발송 방법</th>
            <td colSpan="2">
              <S.TypeWrapper>
              <S.Icon icon={faCheckCircle} />
              <p>지정택배 방문요청 (판매사와 계약된 택배업체에서 방문수령 수거)</p>
              </S.TypeWrapper>
              <S.TypeWrapper>
              <S.Icon icon={faCheckCircle} />
              <p>직접 발송 (구매자께서 개별로 상품을 이미 발송한 경우)</p>
              </S.TypeWrapper>
            </td>
          </tr>
          <tr>
            <th>상품 수거지 주소</th>
            <td colSpan="2">
            <S.OrderInfo>
            <p>받는 사람</p>
            <S.InputName>
            <input type='text' id='name' placeholder='이름' />
            </S.InputName>
            </S.OrderInfo>

            <S.OrderInfo>
            <p>주소</p>
            <S.InputAddress>
            <S.Code>
              <p className='code'>우편번호</p>
            </S.Code>
            <input type='text' placeholder='기본 주소' />
            <input type='text' placeholder='나머지 주소(선택)' />
            </S.InputAddress>
            </S.OrderInfo>

            <S.OrderInfo>
            <p>휴대전화</p>
            <S.InputPhone>
            <input type="text" maxlength="3" class="phone-input" />
            <span>-</span>
            <input type="text" maxlength="4" class="phone-input" />
            <span>-</span>
            <input type="text" maxlength="4" class="phone-input" />
            </S.InputPhone>
            </S.OrderInfo>
            </td>
          </tr>
          </table>
          </S.ReturnForm>

          <S.Estimated>
          <S.Info>예상 환불 금액</S.Info>

            <S.OrderInfoWrapper>
            <S.OrderInfo>
              <p>상품 금액</p>
            </S.OrderInfo>
              <S.Price>{refundAmount.toLocaleString()}원</S.Price>
            </S.OrderInfoWrapper>

            <S.OrderInfoWrapper>
            <S.OrderInfo>
              <p>배송비</p>
            </S.OrderInfo>
              <S.Price>0원</S.Price>
            </S.OrderInfoWrapper>

            <S.OrderInfoWrapper>
            <S.OrderInfo>
              <p>할인</p>
            </S.OrderInfo>
              <S.Price>0원</S.Price>
            </S.OrderInfoWrapper>
          </S.Estimated>

        <S.OrderInfoWrapper>
      <S.TotalWrapper>
      <S.TotalAmount2>예상 환불 금액
      <S.Price className='total-amount'>{refundAmount.toLocaleString()}원</S.Price>
      </S.TotalAmount2>
      </S.TotalWrapper>
      </S.OrderInfoWrapper>

          <S.PaymentButton>
        <Link to={'/shop/md/payment/info'}>
        <S.BackButton>취소</S.BackButton>
        </Link>
        <Link to={'/shop/md/refund/info'}>
          <S.NextButton>반품 신청하기</S.NextButton>
        </Link>
      </S.PaymentButton>
      
    </S.ReturnWrapper>
  );
};

export default MdRefund;