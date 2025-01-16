import React, { useState } from 'react';
import S from './stylePayment';
import Dropdown2 from './Dropdown2';
import Dropdown1 from './Dropdown1';
import { faCheckCircle, faCreditCard, faMoneyBillTransfer, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaymentButton from '../payment/PaymentButton';
import Postcode from './PostCode';

const MdPayment = () => {
  const { state } = useLocation();
  const initialSelectedOptions = state?.selectedOptions || [];
  const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions); 
  const options = ['옵션 1', '옵션 2', '옵션 3']; 
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone1, setUserPhone1] = useState('');
  const [userPhone2, setUserPhone2] = useState('');
  const [userPhone3, setUserPhone3] = useState('');
  const [userPhone4, setUserPhone4] = useState('');
  const [userPhone5, setUserPhone5] = useState('');
  const [userPhone6, setUserPhone6] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [errors, setErrors] = useState({})
  const [hoveredField, setHoveredField] = useState(null); 
  const [userDetailAddress, setUserDetailAddress] = useState(''); // 나머지 주소 (선택)
  const [userPostcode, setUserPostcode] = useState('');
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false); 

  const handleAddressSelect = (zonecode, address) => {
    setUserPostcode(zonecode);
    setUserAddress(address);
    setIsPostcodeOpen(false); 
  };


  // 배송비 계산
  let productTotal = 0;
  selectedOptions.forEach(item => { productTotal += item.price * item.quantity }); 
  const deliveryFee = productTotal >= 70000 ? 0 : 3000; // 배송비 조건 (7만원 이상 무배)
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

  const validateField = (field, value) => {
    return value.trim() === '';
  };

  const handleBlur = (field, value) => {
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  // 결제 진행 함수
  const handlePayment = () => {
    // 결제 진행 시 필요한 데이터 준비
    const paymentData = {
      productName: selectedOptions.map(item => item.name),
      price: selectedOptions.map(item => item.price),
      totalAmount,
      customerName: userName,
      customerEmail: userEmail,
      paymentMethod: '카드', // 예시로 카드 결제
      deliveryFee,
    };

    // 결제 API 호출 등 결제 진행
    console.log(paymentData);
    // 예를 들어, axios를 통해 결제 요청을 보낼 수 있습니다.
    // axios.post('/api/payment/md', paymentData)
    //   .then(response => {
    //     navigate('/shop/md/payment/success');
    //   })
    //   .catch(error => {
    //     console.error('결제 처리 중 오류 발생:', error);
    //   });
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
                onClick={() => deleteProduct(i)} />
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
            <input type="text" id="name" placeholder="이름" value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onBlur={() => handleBlur('userName', userName)} />
              {errors.userName && <S.ErrorText>필수 항목입니다.</S.ErrorText>}
          </S.InputName>
        </S.OrderInfo>

        <S.OrderInfo>
          <p>이메일</p>
          <S.EmailWrapper>
          <S.InputEmail>
            <input type="text" className="email-input" id="email" placeholder="이메일 입력" value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              onBlur={() => handleBlur('userEmail', userEmail)} />
            <span>@</span>
            <S.Dropdown1>
              <Dropdown1 options={options} />
            </S.Dropdown1>
          </S.InputEmail>
          {errors.userEmail && <S.ErrorText>필수 항목입니다.</S.ErrorText>}
          </S.EmailWrapper>
        </S.OrderInfo>

        <S.OrderInfo>
          <p>휴대전화</p>
          <S.InputPhone>
            <S.PhoneWrapper>
              <input type="text" maxLength="3" className="phone-input" value={userPhone1}
                onChange={(e) => setUserPhone1(e.target.value)}
                onBlur={() => handleBlur('userPhone1', userPhone1)} />
            {errors.userPhone1 && <S.ErrorText>필수 항목입니다.</S.ErrorText>}
            </S.PhoneWrapper>
            <span>-</span>
            <S.PhoneWrapper>
              <input type="text" maxLength="4" className="phone-input" value={userPhone2}
                onChange={(e) => setUserPhone2(e.target.value)}
                onBlur={() => handleBlur('userPhone2', userPhone2)} />
                {errors.userPhone2 && <S.ErrorText>필수 항목입니다.</S.ErrorText>}
            </S.PhoneWrapper>
            <span>-</span>
            <S.PhoneWrapper>
              <input type="text" maxLength="4" className="phone-input" value={userPhone3}
                onChange={(e) => setUserPhone3(e.target.value)}
                onBlur={() => handleBlur('userPhone3', userPhone3)} />
                {errors.userPhone3 && <S.ErrorText>필수 항목입니다.</S.ErrorText>}
            </S.PhoneWrapper>
          </S.InputPhone>
        </S.OrderInfo>

        <S.Info>배송지</S.Info>
        <S.OrderInfo>
          <p>주문자</p>
          <S.InputName>
            <input type="text" id="name" placeholder="이름" value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onBlur={() => handleBlur('userName', userName)} />
              {errors.userName && <S.ErrorText>필수 항목입니다.</S.ErrorText>}
          </S.InputName>
        </S.OrderInfo>


        <S.OrderInfo>
          <p>주소</p>
          <S.InputAddress>
            {/* <S.Code> */}
              {/* <p className="code">우편번호</p> */}
              <input
                type="text"
                value={userPostcode}
                placeholder="우편번호"
                readOnly
                onClick={() => setIsPostcodeOpen(true)} 
              />
            {/* </S.Code> */}
            <input type="text" value={userAddress} placeholder="기본 주소" readOnly />
            <input
              type="text"
              placeholder="나머지 주소(선택)"
              value={userDetailAddress}
              onChange={(e) => setUserDetailAddress(e.target.value)}
            />
          </S.InputAddress>
        </S.OrderInfo>

        {isPostcodeOpen && (
          <S.PostcodePopup>
            <Postcode onComplete={handleAddressSelect} />
            <S.CloseButton onClick={() => setIsPostcodeOpen(false)}>닫기</S.CloseButton>
          </S.PostcodePopup>
        )}

        <S.OrderInfo>
          <p>휴대전화</p>
          <S.InputPhone>
            <S.PhoneWrapper>
              <input type="text" maxLength="3" className="phone-input" value={userPhone4}
                onChange={(e) => setUserPhone4(e.target.value)}
                onBlur={() => handleBlur('userPhone4', userPhone4)} />
            {errors.userPhone4 && <S.ErrorText>필수 항목입니다.</S.ErrorText>}
            </S.PhoneWrapper>
            <span>-</span>
            <S.PhoneWrapper>
              <input type="text" maxLength="4" className="phone-input" value={userPhone5}
                onChange={(e) => setUserPhone5(e.target.value)}
                onBlur={() => handleBlur('userPhone5', userPhone5)} />
                {errors.userPhone5 && <S.ErrorText>필수 항목입니다.</S.ErrorText>}
            </S.PhoneWrapper>
            <span>-</span>
            <S.PhoneWrapper>
              <input type="text" maxLength="4" className="phone-input" value={userPhone6}
                onChange={(e) => setUserPhone6(e.target.value)}
                onBlur={() => handleBlur('userPhone6', userPhone6)} />
                {errors.userPhone6 && <S.ErrorText>필수 항목입니다.</S.ErrorText>}
            </S.PhoneWrapper>
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

      <S.PaymentButton>
        <S.BackButton onClick={handleBackButton}>이전 페이지로</S.BackButton>
        <PaymentButton onClick={handlePayment}>
          <p>{totalAmount.toLocaleString()}원</p> 결제 진행
        </PaymentButton>
      </S.PaymentButton>
    </S.PaymentWrapper>
  );
};

export default MdPayment;
