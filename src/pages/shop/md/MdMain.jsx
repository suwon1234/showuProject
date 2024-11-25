import React from 'react';
import S from './styleMain'
import { Link } from 'react-router-dom'

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
      <S.Md>
        <h1>MD</h1>
      </S.Md>
      
      <S.Best>
        <h2>BEST</h2>
      </S.Best>
      
      <S.BestWrapper>
        <S.BestList>{mdBest.map((best) => (
          <S.Best key={best.id}>
            <S.BestImage>
              {/* <Link to={"/mdDetail"}> */}
              <img src={best.image} />
              {/* </Link> */}
            </S.BestImage>
            <S.BestTitle>{best.name}</S.BestTitle>
            <S.BestPrice>{best.price}원</S.BestPrice>
          </S.Best>
        ))}
        </S.BestList>
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
        <S.MdList>{mds.map((md) => (
          <S.Md2 key={md.id}>
            <S.MdImage>
              <img src={md.image} />
            </S.MdImage>
            <S.MdTitle>{md.name}</S.MdTitle>
            <S.MdPrice>{md.price}원</S.MdPrice>
          </S.Md2>
        ))}
          </S.MdList>
      </S.MdWrapper>
    </S.MainWrapper>
  );
};

export default MdMain;