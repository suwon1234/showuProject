// MD - 결제 페이지
import React, { useState } from 'react';
import S from './stylePayment';
import Dropdown2 from './Dropdown2';
import Dropdown1 from './Dropdown1';
import { faCheckCircle, faCreditCard, faMoneyBillTransfer, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MdPayment = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const initialSelectedOptions = state?.selectedOptions || [];
  const navigate = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions); // 장바구니 상품

  const options = ['옵션 1', '옵션 2', '옵션 3']; 

  const iconPaymentMethods = [
    { label: "체크/신용 카드", icon: faCreditCard },
    { label: "무통장 입금", icon: faMoneyBillTransfer }
  ];
  
  const imagePaymentMethods = [
    { label: "토스페이", image: `${process.env.PUBLIC_URL}/images/shop/md/toss-pay.png` },
    { label: "네이버페이", image: `${process.env.PUBLIC_URL}/images/shop/md/naver-pay.png` },
    { label: "카카오페이", image: `${process.env.PUBLIC_URL}/images/shop/md/kakao-pay.png` },
  ];

  let productTotal = 0;
  selectedOptions.forEach(item => { productTotal += item.price * item.quantity }); 
  const deliveryFee = productTotal >= 70000 ? 0 : 3000;
  const discountAmount = 0;
  const totalAmount = productTotal + deliveryFee - discountAmount;

  // 결제 상품 삭제 
  const deleteProduct = (index) => {
    const confirmDelete = window.confirm("해당 상품을 삭제하시겠습니까?");
    if (confirmDelete) {
      setSelectedOptions((prev) => prev.filter((item, i) => i !== index));
    }
  };

  // 이전 페이지로 이동
  const handleBackButton = () => {
    const confirmLeave = window.confirm("작성하신 정보가 모두 사라집니다. 취소하시겠습니까?");
    if (confirmLeave) {
      navigate(`/shop/md`); 
    }
  };

  return (
    <S.PaymentWrapper>
      <S.PaymentTitle>
        <h1>주문 / 결제</h1>
      </S.PaymentTitle>

      <S.PaymentProduct>
        <S.Info>주문 상품</S.Info>

        <S.Head>
          <S.Left></S.Left>
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
          {selectedOptions.map((item, i) => (
            <S.PaymentItem key={i}>
              <S.ProductImage src={item.image || "/images/shop/md/md1.jpg"} alt="주문 상품" />
              <S.Left>{item.name}</S.Left>
              <S.Center>{item.quantity}</S.Center>
              <S.Right>{(item.price * item.quantity).toLocaleString()} 원</S.Right>
              <FontAwesomeIcon className='icon' icon={faXmark} 
                onClick={() => deleteProduct(i)} 
              />
            </S.PaymentItem>
          ))}
        </S.PaymentList>

        <S.TotalAmount>총 상품 금액 ({selectedOptions.length}개)</S.TotalAmount>

      </S.PaymentProduct>

      <S.InfoWrapper>
      <S.Info>주문 정보</S.Info>

      <S.OrderInfo>
      <p>주문자</p>
      <S.InputName>
      <input type='text' id='name' placeholder='이름' />
      </S.InputName>
      </S.OrderInfo>

      <S.OrderInfo>
      <p>이메일</p>
      <S.InputEmail>
      <input type="text" className="email-input" id='email' placeholder='이메일 입력' />
      <span>@</span>
      <S.Dropdown1>
      <Dropdown1 options={options} /> 
      </S.Dropdown1>
      </S.InputEmail>
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

      <S.Info>배송지</S.Info>
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

      <S.Dropdown2>
      <Dropdown2 options={options} /> 
      </S.Dropdown2>

      
      <S.BasicAddress>
      <S.Icon icon={faCheckCircle} />
      <p>기본 배송지로 저장</p>
      </S.BasicAddress>

      </S.InfoWrapper>


      <S.PayWrapper>
        <S.Info>결제 금액</S.Info>

        <S.OrderInfoWrapper>
          <S.OrderInfo>
            <p>상품 금액</p>
          </S.OrderInfo>
          <S.Price>{productTotal.toLocaleString()} 원</S.Price>
        </S.OrderInfoWrapper>

        <S.OrderInfoWrapper>
          <S.OrderInfo>
            <p>배송비</p>
          </S.OrderInfo>
          <S.Price>{deliveryFee.toLocaleString()} 원</S.Price>
        </S.OrderInfoWrapper>

        <S.OrderInfoWrapper>
          <S.OrderInfo>
            <p>할인 금액</p>
          </S.OrderInfo>
          <S.Price>{discountAmount.toLocaleString()} 원</S.Price>
        </S.OrderInfoWrapper>
      </S.PayWrapper>

      <S.OrderInfoWrapper>
        <S.TotalWrapper>
          <S.TotalAmount2>총 결제 금액
            <S.Price className='total-amount'>{totalAmount.toLocaleString()} 원</S.Price>
          </S.TotalAmount2>
        </S.TotalWrapper>
      </S.OrderInfoWrapper>

      <S.MethodWrapper>
        <S.Info>결제 수단</S.Info>
        {iconPaymentMethods.map((method) => (
          <S.OrderInfo key={method.label}>
            <S.Icon icon={faCheckCircle} />
            <S.Icon2 icon={method.icon} />
            <p>{method.label}</p>
          </S.OrderInfo>
        ))}

        {imagePaymentMethods.map((method) => (
          <S.OrderInfo key={method.label}>
            <S.Icon icon={faCheckCircle} />
            <S.Image img src={method.image} alt={method.label} />
            <p>{method.label}</p>
          </S.OrderInfo>
        ))}
      </S.MethodWrapper>

      <S.PaymentButton>
          <S.BackButton onClick={handleBackButton}>이전 페이지로</S.BackButton>
        <Link to={'/shop/md/payment/info'}>
          <S.NextButton><p>{totalAmount.toLocaleString()}원</p>결제 진행 </S.NextButton>
        </Link>
      </S.PaymentButton>

    </S.PaymentWrapper>
  );
};

export default MdPayment;
