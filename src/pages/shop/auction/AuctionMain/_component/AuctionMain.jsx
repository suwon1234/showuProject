// 경매 - 메인페이지
import React, { useEffect, useState } from 'react';
import S from './styleMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCircleChevronLeft, faCircleChevronRight, faClock, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AuctionMain = () => {
  const [auctionItems, setAuctionItems] = useState([]);
  const [heartedItems, setHeartedItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 상태
  const itemsPerSlide = 3; // 한 번에 3개씩 보여줌
  const slideWidth = 1090; // 슬라이드 너비

  useEffect(() => {

    const getAuction = async () => {
      try {
        const response = await fetch('http://localhost:4000/auction');
        const datas = await response.json();
        setAuctionItems(datas);
      } catch (error) {
        console.error("AuctionMainError", error);
      }
    };

    getAuction();

  }, [])

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === Math.ceil(auctionItems.length / itemsPerSlide) - 1 ? 0 : prev + 1
    ); // 마지막 슬라이드에서 처음으로 돌아감
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(auctionItems.length / itemsPerSlide) - 1 : prev - 1
    ); // 처음 슬라이드에서 마지막으로 돌아감
  };

  // 현재 슬라이드에 맞는 BEST 아이템을 선택
  const visibleBestItems = auctionItems.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  );
  
  const handleHeartClick = (e, id) => {
    e.preventDefault(); // 하트 클릭 => 링크 이동 X
    setHeartedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id) // 하트 제거
        : [...prev, id] // 하트 추가
    );
  };

  return (
    <S.MainWrapper>
      <S.MdTitle>
        <h1 className='auction-title'>경매</h1>
        <FontAwesomeIcon icon={faChevronDown} className='icon1' />
      </S.MdTitle>

      <S.ClosingWrapper>
        <S.ClosingTitle>
          <h1 className='closing-title'>오늘 마감</h1>
        </S.ClosingTitle>
    
        <S.ClosingItems>
          <S.LeftIconWrapper>
            <FontAwesomeIcon icon={faCircleChevronLeft} />
          </S.LeftIconWrapper>

          <S.ClosingListWrapper>
            {visibleBestItems.map((closing) => (
              <S.Closing key={closing.id}>
                <Link to={`/shop/auction/detail/${closing.id}`}>
                <div className="image-wrapper">
                  <img src={closing.image} alt={closing.image} className='image' />
                  <S.HeartIconWrapper isHearted={heartedItems.includes(closing.id)}
                    onClick={(e) => handleHeartClick(e, closing.id)} >
                      <FontAwesomeIcon icon={faHeart} />
                  </S.HeartIconWrapper>
                </div>
                </Link>
                <div className='closing-name'>{closing.name}</div>
                <S.Closing2>
                  <div className='closing-number'>{closing.number} |</div>
                  <FontAwesomeIcon className='icon' icon={faClock} />
                  <div className='closing-time'>{closing.time}</div>
                </S.Closing2>
              </S.Closing>
            ))}
          </S.ClosingListWrapper>
          
          <S.RightIconWrapper>
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </S.RightIconWrapper>
        </S.ClosingItems>
      </S.ClosingWrapper>

      <S.CategoryButton>
        <div>
          <button>showU</button>
          <button>공연</button>
          <button>뮤지컬</button>
          <button>영화</button>
          <button>영화</button>
          <button>연극</button>
          <button>밴드</button>
        </div>
      </S.CategoryButton>

      <S.AuctionWrapper>
        <div className='auction-list'>
          {auctionItems.slice(6).map((auction) => (
          <S.Closing key={auction.id}>
            <Link to={`/shop/auction/detail/${auction.id}`}>
            <div className="image-wrapper">
            <img src={auction.image} alt={auction.image} className='image'/>
            <S.HeartIconWrapper isHearted={heartedItems.includes(auction.id)}
              onClick={(e) => handleHeartClick(e, auction.id)} >
                <FontAwesomeIcon icon={faHeart} />
            </S.HeartIconWrapper>
            </div>
            </Link> 
            <div className='closing-name'>{auction.name}</div>
            <S.Closing2>
              <div className='closing-number'>{auction.number} |</div>
              <FontAwesomeIcon className='icon' icon={faClock} />
              <div className='closing-time'>{auction.time}</div>
            </S.Closing2>
          </S.Closing>
        ))}
        </div>
      </S.AuctionWrapper>

      <S.ButtonWrapper>
        <button>
          <FontAwesomeIcon icon={faChevronRight} className='icon2'/>
          경매 더보기
        </button>
      </S.ButtonWrapper>
    </S.MainWrapper>
  );
};

export default AuctionMain;