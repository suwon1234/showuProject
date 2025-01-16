// 경매 - 상세페이지
import React, { useEffect, useState } from 'react';
import S from './styleDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircleChevronLeft, faCircleChevronRight, faCircleExclamation, faClock, faHeart, faLock, faPencil } from '@fortawesome/free-solid-svg-icons';
import DeliveryPopup from './DeliveryPopup';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import BidPopup from './BidPopup';

// const AuctionDetail = ({auctionItems, auctionInfo}) => {
const AuctionDetail = () => {
  const { id } = useParams();
  const [PopupVisible1, setPopupVisible1] = useState(false);
  const [PopupVisible2, setPopupVisible2] = useState(false);
  const [auctionProduct, setAuctionProduct] = useState(null);
  const [auctionProducts, setAuctionProducts] = useState([]);
  const [inquiryList, setInquiryList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 상태
  const ProductsPerSlide = 3; // 한 번에 3개씩 보여줌
  const navigate = useNavigate();
  const location = useLocation();

  const openPopup1 = () => setPopupVisible1(true);
  const closePopup1 = () => setPopupVisible1(false);
  const openPopup2 = () => setPopupVisible2(true);
  const closePopup2 = () => setPopupVisible2(false);
  
  // 회원 맞춤 슬라이드에 들어갈 상품 
  const visibleBestProduct = Array.isArray(auctionProducts) && auctionProducts.slice(
    currentSlide * ProductsPerSlide,
    (currentSlide + 1) * ProductsPerSlide
  );

  useEffect(() => {
    
    const getAuctionProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8000/shop/auction`);
        const datas = await response.json();
        setAuctionProducts(datas);
      } catch (error) {
        console.error("AuctionMainError", error);
      }
    };

    getAuctionProducts();

  }, [])

  useEffect(() => {

    const getAuctionDetail = async () => {
      try {
        const response = await fetch(`http://localhost:8000/shop/auction/detail/${id}`);
        const datas = await response.json();
        setAuctionProduct(datas);
      } catch (error) {
        console.error("AuctionDetailError", error);
      }
    };
  
    getAuctionDetail();

  }, [id]);  



  if(!auctionProduct) {
    return <p>상품을 찾을 수 없습니다.</p>
  }

  if (auctionProducts.length === 0) {
    return <p>경매 상품이 없습니다. 잠시 후 다시 시도해주세요.</p>;
  }
  
  const maxSlideIndex = Math.floor(auctionProducts.length / ProductsPerSlide);
  if (currentSlide > maxSlideIndex) {
    setCurrentSlide(maxSlideIndex);
  }

  // 문의하기 
  const sendInquiry = () => {
    const confirmInquiry = window.confirm("문의 등록을 하시겠습니까?");
    
    if (confirmInquiry) {
      navigate('/shop/md/inquiry', { state: { auctionName: auctionProduct.auctionName } });
    } else {
      return; 
    }
  };

  // 문의 내역
  const sendInquiryList = () => {
    navigate('shop/auction/inquiry/list')
  }

  const handleBid = () => {
    if (auctionProduct) {
      navigate('/shop/auction/payment', { state: { auctionProduct } });
    } else {
      console.log('상품 정보가 없습니다.');
    }
  };

  return (
    <S.DetailWrapper>
      <S.Title>
        <h1>{auctionProduct.auctionName}</h1>
      </S.Title>

      <S.AuctionWrapper>
        {/* <S.Image src={process.env.PUBLIC_URL + "/images/shop/md/md1.jpg"} alt="경매 상품" /> */}
        <S.Image src={auctionProduct.image} alt="경매 상품" />
        <S.Auction>
          <S.InfoContainer>
            <S.InfoWrapper>
              <S.Label>남은 시간</S.Label>
              <S.AuctionInfo>{auctionProduct.time}</S.AuctionInfo>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Label>경매 번호</S.Label>
              <S.AuctionInfo>{auctionProduct.auctionId}</S.AuctionInfo>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Label>입찰 기록</S.Label>
              <S.AuctionInfo>{auctionProduct.count}회</S.AuctionInfo>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Label>입찰 단위</S.Label>
              <S.AuctionInfo>{Number(auctionProduct.unit).toLocaleString()}원</S.AuctionInfo>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Label>희망 입찰가</S.Label>
              <S.AuctionInfo> {Number(auctionProduct.bid).toLocaleString()}원</S.AuctionInfo>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Label>예상 구매가</S.Label>
              <S.AuctionInfo>{Number(auctionProduct.finalPrice).toLocaleString()}원</S.AuctionInfo>
            </S.InfoWrapper>
          </S.InfoContainer>

          
          <S.ButtonContainer>
            <div className='button-wrapper1'>
              <button className='button bid' onClick={openPopup1}><p>입찰하기</p></button>
              <button className='button delivery' onClick={openPopup2}><p>배송 정보</p></button>
            </div>
            <div className='button-wrapper1'>
              <button className='button delivery' onClick={() => { sendInquiry();
                navigate('/shop/auction/inquiry', { state: { auctionName: auctionProduct.auctionName } }) }}>
                  <p>문의하기</p>
                  </button>
              <button className='button delivery' onClick={() => { sendInquiryList();
                navigate('/shop/auction/inquiry/list') }}>
                  <p>문의 내역</p>
                </button>
            </div>
          </S.ButtonContainer>

          {PopupVisible1 && (
            <BidPopup
              title="입찰하기" onClose={closePopup1} handleBid={handleBid} auctionProduct={auctionProduct}>
            </BidPopup>
          )}

          {PopupVisible2 && (
            <DeliveryPopup 
              title="배송 정보" onClose={closePopup2}>
            </DeliveryPopup>
          )}
        </S.Auction>
      </S.AuctionWrapper>
      
      <S.Info>
        <p>물품 정보</p>
        <tbody>
          <tr>
            <th>물품 크기</th>
            <td>0</td>
          </tr>
          <tr>
            <th>제조국</th>
            <td>한국</td>
          </tr>
          </tbody>
      </S.Info>

      <S.Content>
        <p>{auctionProduct.description}</p>
      </S.Content>

      <S.ImageWrapper>
        <S.Image2 className='content-image' src={auctionProduct.imageDetail} alt="경매 상품" />
      </S.ImageWrapper>

      {/* <S.Customized>
        <p>회원 맞춤 경매</p>
        <FontAwesomeIcon className='icon' icon={faChevronDown} />
        <S.ClosingItems>
          <S.LeftIconWrapper>
            <FontAwesomeIcon icon={faCircleChevronLeft} />
          </S.LeftIconWrapper>

          <S.ClosingListWrapper>
            {visibleBestProduct && visibleBestProduct.length > 0 ? (
              visibleBestProduct.map((item) => (
                <S.Closing key={item.id}>
                  <img src={item.image} alt={item.image} className='image' />
                  <div className='closing-name'>{item.name}</div>
                  <S.Closing2>
                    <div className='closing-number'>{item.count}회 |</div>
                    <FontAwesomeIcon className='icon' icon={faClock} />
                    <div className='closing-time'>{item.time}</div>
                  </S.Closing2>
                </S.Closing>
              ))
            ) : (
              <p>추천 상품이 없습니다.</p>
            )}
          </S.ClosingListWrapper>

          
          <S.RightIconWrapper>
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </S.RightIconWrapper>
        </S.ClosingItems>
      </S.Customized> */}

      {/* <S.Inquiry>
      <S.Info>
        <p>물품 문의</p>
      </S.Info>

      <S.Head>
        <S.Left1>
          <S.HeadItem>번호</S.HeadItem>
        </S.Left1>
        <S.Left2>
          <S.HeadItem>구분</S.HeadItem>
        </S.Left2>

        <S.PrivateWrapper>
          <S.Blank></S.Blank>
        </S.PrivateWrapper>
        
        <S.Center>
          <S.HeadItem>제목</S.HeadItem>
        </S.Center>
        <S.Right1>
          <S.HeadItem>작성자</S.HeadItem>
        </S.Right1>
        <S.Right2>
          <S.HeadItem>작성일</S.HeadItem>
        </S.Right2>
      </S.Head>
      
      {inquiryList.map((inquiry, i) => (
        <Link to={`/shop/auction/inquiry/${inquiry._id}`}>
        <S.InquiryList key={inquiry._id}>
          <S.Left1>
            <S.ListItem>{i + 1}</S.ListItem>
          </S.Left1>
          <S.Left2>
            <S.ListItem>{inquiry.type}</S.ListItem>
          </S.Left2>

          <S.PrivateWrapper>
          <FontAwesomeIcon className='icon' icon={faLock} />
          <S.Private>비공개 질문입니다.</S.Private>
          </S.PrivateWrapper>

          <S.Center>
            <S.ListItem>{inquiry.title}</S.ListItem>
          </S.Center>
          <S.Right1>
            <S.ListItem>{inquiry.writer}</S.ListItem>
          </S.Right1>
          <S.Right2>
            <S.ListItem>{new Date(inquiry.createdAt).toLocaleDateString()}</S.ListItem>
          </S.Right2>
        </S.InquiryList>
        </Link>
      ))}
      </S.Inquiry>

      <S.ButtonWrapper>
        {/* <Link to={"/shop/auction/inquiry"} state={{ productName : auctionProduct.name }}> */}
        {/* <Link to={"/shop/auction/inquiry"} state={{ auctionName : auctionProduct.auctionName }}>
      <S.InquiryButton>
        <p>문의하기</p>
        <FontAwesomeIcon className='icon' icon={faPencil} />
      </S.InquiryButton>
      </Link>
      </S.ButtonWrapper> */} 

      
      <S.Info>
        <p>반품 / 영수증</p>
      </S.Info>
      
      <S.Caution>
        <p className='caution'>반품 시 주의 사항</p>
        <p>아래 각호의 경우에는 반품이 되지 않습니다.</p>
        <p>- 소비자의 책임 있는 사유로 상품 등이 멸실 / 훼손된 경우(단지 확인을 위한 포장 훼손 제외)</p>
        <p>- 소비자의 사용 / 소비에 의해 상품 등의 가치가 현저히 감소한 경우</p>
        <p>- 시간의 경과에 의해 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우</p>
        <p>- 복제가 가능한 상품 등의 포장을 훼손한 경우</p>
        <p>- 판매 / 생산방식의 특성상, 반품 시 판매자 에게 회복할 수 없는 손해가 발생하는 경우(주문접수 후 개별생산, 맞춤 제작 등)</p>
        <p className='caution'>파손물품 반품 시 주의 사항</p>
        <p>물품 수령시 택배기사와 함께 물품의 파손여부를 확인하신 후,</p>
        <p>반품 신청시 파손이미지를 등록해 주시면 안전하고 신속하게 환불처리를 해드리고 있습니다.</p>
        <p>영수증 발행 : 온라인현금영수증(소득공제용 / 지출증빙용)</p>
        <p>영수증 신청 : 수령확인시에 개인소득공제용 또는 사업자회원님의 지출증빙용(세금계산서대체)으로 신청하실 수 있습니다.</p>
      </S.Caution>

      <S.SellerWrapper>
        <S.Seller>
        <S.Box><FontAwesomeIcon className='icon' icon={faCircleExclamation} /></S.Box>
        <p>판매자 정보</p>
      </S.Seller>
      <p>(주)showU에 등록된 상품과 상품내용은 개별 판매자가 등록한 것으로서, ㈜showU는 중개시스템만 제공하며 해당 등록내용에 대하여 일체의 책임을 지지 않습니다.</p>
      <p>판매자가 사업자회원이 아닌 개인회원의 경우 판매자 정보는 [showU 결제처리] 이후 판매자의 연락처 등을 구매한 소비자에게 즉시 제공하게 됩니다.</p>
      <p className='service'>구매안정서비스(KCP) 가입 업체 : A000000000000</p>
      <p>showU은 구매안전서비스(KCP)에 가입하였으며, showU에 등록된 모든 입점 판매자는 자동적으로 해당 서비스에 가입하였습니다. </p>
      </S.SellerWrapper>

    </S.DetailWrapper>
  );
};

export default AuctionDetail;