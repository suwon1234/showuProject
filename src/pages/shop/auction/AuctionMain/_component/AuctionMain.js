// 경매 - 메인페이지
import React, { useEffect, useState } from 'react';
import S from './styleMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCircleChevronLeft, faCircleChevronRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AuctionMain = () => {
  const [auctionItems, setAuctionItems] = useState([]);

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

  const ClosingItems = auctionItems.slice(0, 3); 
  const otherItems = auctionItems.slice(3); 

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
            {ClosingItems.map((closing) => (
              <S.Closing key={closing.id}>
                <Link to={'/shop/auction/detail'}>
                <img src={closing.image} alt={closing.image} className='image' />
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
          {otherItems.map((auction) => (
          <S.Closing key={auction.id}>
            {/* <Link to={"/shop/mdDetail"}> */}
            <img src={auction.image} alt={auction.image} className='image'/>
            {/* </Link>    */}
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