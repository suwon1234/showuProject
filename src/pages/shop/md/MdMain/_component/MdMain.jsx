// MD 메인페이지
import React from 'react';
import S from './styleMain'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCircleChevronLeft,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';


const mdBest = [
  { id: 1, name: "BEST상품 1", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510"},
  { id: 2, name: "BEST상품 2", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510"},
  { id: 3, name: "BEST상품 3", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510"}
]

const mds = [
  { id: 4, name: "상품 4", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 5, name: "상품 5", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 6, name: "상품 6", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 7, name: "상품 7", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 8, name: "상품 8", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 9, name: "상품 9", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 10, name: "상품 10", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 11, name: "상품 11", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 12, name: "상품 12", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 13, name: "상품 13", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 14, name: "상품 14", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
  { id: 15, name: "상품 15", price: "65,000", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510" },
];

const MdMain = () => {
  
  return (
    <S.MainWrapper>
      <S.MdTitle>
        <h1 className='md-title'>MD</h1>
        <FontAwesomeIcon icon={faChevronDown} className='icon1' />
      </S.MdTitle>

      <S.BestWrapper>
      <S.BestTitle>
        <h1 className='best-title'>BEST</h1>
      </S.BestTitle>
      
      <S.BestItems>
        <S.LeftIconWrapper>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
        </S.LeftIconWrapper>
        


        <S.BestListWrapper>
          {mdBest.map((best) => (
          <S.Best key={best.id}>
              <Link to={'/shop/mddetail'}>
              <img src={best.image} alt={best.image} className='image' />
              </Link>
            <div className='best-name'>{best.name}</div>
            <div className='best-price'>{best.price}원</div>
          </S.Best>
        ))}
        </S.BestListWrapper>
        

        <S.RightIconWrapper>
        <FontAwesomeIcon icon={faCircleChevronRight} />
        </S.RightIconWrapper>
      </S.BestItems>
      </S.BestWrapper>

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

      <S.MdWrapper>
        <div className='md-list'>{mds.map((md) => (
          <S.Md key={md.id}>
            <Link to={"/shop/mdDetail"}>
            <img src={md.image} alt={md.image} className='image'/>
            </Link>   
            <div className='md-name'>{md.name}</div>
            <div className='md-price'>{md.price}원</div>
          </S.Md>
        ))}
        </div>
      </S.MdWrapper>

        <S.ButtonWrapper>
          <button>
            <FontAwesomeIcon icon={faChevronRight} className='icon2'/>
            MD 더보기
          </button>
        </S.ButtonWrapper>
    </S.MainWrapper>
  );
};

export default MdMain;