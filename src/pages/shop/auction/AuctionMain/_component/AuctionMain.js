// 경매 - 메인페이지
import React from 'react';
import S from './styleMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCircleChevronLeft, faCircleChevronRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const auctionClosing = [
  { id: 1, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510"},
  { id: 2, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510"},
  { id: 3, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510"}
]

const auctions = [
  { id: 4, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 5, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 6, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 7, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 8, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 9, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 10, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 11, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 12, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 13, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 14, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 15, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
];

const AuctionMain = () => {

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
            {auctionClosing.map((closing) => (
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
        <div className='auction-list'>{auctions.map((auction) => (
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