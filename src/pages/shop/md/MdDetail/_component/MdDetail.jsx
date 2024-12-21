// MD - 상세페이지
import React, { useEffect, useState } from 'react'; 
import S from './styleDetail';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown' 

const MdDetail = () => {
  const options = ['옵션 1', '옵션 2', '옵션 3']; 

  const { id } = useParams();  // URL에서 id를 받아옴
  const [product, setProduct] = useState(null);  // 상품 정보를 저장할 상태

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const response = await fetch(`http://localhost:4000/md/${id}`);
        const productData = await response.json();
        setProduct(productData); // 상세 정보를 저장
      } catch (error) {
        console.error("상품 상세 정보 로드 오류", error);
      }
    };
    
    getProductDetail();
  }, [id]);  // id가 변경될 때마다 실행되도록 설정

  if (!product) {
    return <p>상품을 찾을 수 없습니다.</p>; // 상품을 못 찾은 경우
  }

  return (
    <S.Wrapper>
      <S.DetailContainer>
        <S.ImageWrapper>
          <img src={product.images} alt={product.name}/>
        </S.ImageWrapper>
        
        <S.DetailWrapper>
          <S.MdTitle>
            <p>뮤지컬</p>
            <p>{product.name}</p>
            <p>{product.price.toLocaleString()}원</p>
          </S.MdTitle>
        
          <S.Dropdown>
            <p>옵션 선택</p>
            <Dropdown options={options} /> 
          </S.Dropdown>
          
          <S.Max>
            <FontAwesomeIcon icon={faCircleExclamation} className='icon1'/>
            <p>각 옵션별로 최대 2개까지 구매 가능합니다.</p>
          </S.Max>
      
          <S.ButtonWrapper2>
            <div className='button-wrapper1'>
              {/* <Link to={'/shop/md/detail/cart'}> */}
                <button className='button cart'><p>카트 추가</p></button>
              {/* </Link> */}
              {/* <Link to={'/shop/md/detail/payment'}> */}
                <button className='button buy'><p>바로 구매</p></button>
              {/* </Link> */}
            </div>
              {/* <Link to={'/shop/md/detail/inquiry'}> */}
                <button className='button inquiry'><p>문의하기</p></button>
              {/* </Link> */}
          </S.ButtonWrapper2>
        </S.DetailWrapper>
      </S.DetailContainer>
      
      <S.MdInfo>
        <p className='description'>상품 설명</p>
        <S.ImageWrapper2>
          <img className='imagewrapper' src={product.detailsImage} alt="상세 이미지"/>
        </S.ImageWrapper2>
        <S.ButtonWrapper3>
          <button>
            <FontAwesomeIcon icon={faChevronUp} className='icon2'/>
            상세 정보 접기
          </button>
        </S.ButtonWrapper3>

      <S.Notice>
        <p className='notice'>상품 고시정보</p>
        <tbody>
          <tr>
            <th>품명 / 모델명</th>
            <td>{product.name}</td>
          </tr>
          <tr>
            <th>제조자(사)</th>
            <td>showU</td>
          </tr>
          <tr>
            <th>제조국</th>
            <td>국산</td>
          </tr>
          <tr>
            <th>법에 의한 인증, 허가 등을 확인할 수 있는 경우</th>
            <td>해당 없음</td>
          </tr>
          <tr>
            <th>A/S 책임자와 전화번호</th>
            <td>showU 고객센터 : 1234-5678</td>
          </tr>
        </tbody>
      </S.Notice>

      <S.Return>
        <p className='return'>반품/교환 정보</p>
        <p className='return2'>반품/교환 가능 기간</p>
        <S.Content>
          <p>구매자는 상품을 수령한 날부터 7일 이내에 교환/반품 신청을 하여야 하며,</p>
          <p>표시·광고 내용과 다르거나 계약 내용과 다르게 이행된 경우에는 상품 수령 후 3개월 이내에 청약 철회가 가능합니다.</p>
          <p>(단, 변심의 경우 교환은 불가하며, 반품 취소만 가능합니다.)</p>
        </S.Content>
        <p className='return2'>반품/교환 비용</p>
        <S.Content>
          <p>구매자의 변심으로 반품을 원할 경우에는 구매자가 배송비 지불</p>
          <p>상품 하자나 제품 불일치, 배송 이슈로 인한 반품의 경우에는 판매자가 배송비 지불</p>
        </S.Content>
        <p className='return2'>반품/교환 시 유의사항</p>
        <S.Content>
          <p>아래와 같은 경우 반품/교환이 제한될 수 있습니다.</p>
          <p>구매자에게 책임이 있는 사유로 상품이 멸실 또는 훼손된 경우(단, 내용 확인을 위한 포장 개봉의 경우는 예외)</p>
          <p>구매자의 전부 또는 일부의 사용, 소비(디지털코드 등록 포함)에 의해 상품의가치가 현저히 감소한 경우</p>
          <p>시간의 경과에 의하여 재판매가 곤란할 정도로 상품의 가치가 현저히 감소한 경우</p>
          <p>복제가 가능한 상품의 포장을 훼손한 경우(앨범/도서/영상출판물/포토카드/포스터카드/포스터 등을 비롯한 복제 가능한 상품의 포장 개봉 시)</p>
          <p>주문/제작 상품의 제작이 이미 진행된 경우(판매자에게 회복 불가능한 손해가 예상되고, 그러한 예정으로 청약철회권 행사가 불가하다는 사실을 서면 동의받은 경우)</p>
          <p>상품의 일부 구성품을 사용하였거나, 분실하였거나 취급 부주의로 인한 파손/고장/오염으로 재판매 불가한 경우, 일부 구성품이 동봉되지 않은 채 반송된 경우</p>
        </S.Content>
          <p className='return2'>소비자 피해 보상 및 환불지연에 따른 배상</p>
        <S.Content>
          <p>상품의 불량에 의한 반품, 교환, A/S, 환불, 품질보증 및 피해보상 등에 관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에 준하여 처리됨.</p>
          <p>대금 환불 및 환불 지연에 따른 배상금 지급 조건, 절차 등은 전자상거래 등에서 의 소비자 보호에 관한 법률에 따라 처리함.</p>
        </S.Content>
        </S.Return>
      </S.MdInfo>
    </S.Wrapper>


  );
};

export default MdDetail;