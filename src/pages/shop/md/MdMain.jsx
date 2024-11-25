import React from 'react';
import S from './styleMain'
import { Link } from 'react-router-dom'

const mdBest = [
  { id: 1, name: "BEST상품 1", price: 65000, image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510"},
  { id: 2, name: "BEST상품 2", price: 65000, image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510"},
  { id: 3, name: "BEST상품 3", price: 65000, image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510"}
]

const mds = [
  { id: 4, name: "상품 4", price: 65000, image: "/image4" },
  { id: 5, name: "상품 5", price: 65000, image: "/image5" },
  { id: 6, name: "상품 6", price: 65000, image: "/image6" },
  { id: 7, name: "상품 7", price: 65000, image: "/image7" },
  { id: 8, name: "상품 8", price: 65000, image: "/image8" },
  { id: 9, name: "상품 9", price: 65000, image: "/image9" },
  { id: 10, name: "상품 10", price: 65000, image: "/image10" },
  { id: 11, name: "상품 11", price: 65000, image: "/image11" },
  { id: 12, name: "상품 12", price: 65000, image: "/image12" },
  { id: 13, name: "상품 13", price: 65000, image: "/image13" },
  { id: 14, name: "상품 14", price: 65000, image: "/image14" },
  { id: 15, name: "상품 15", price: 65000, image: "/image15" },
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
            <S.BestPrice>{best.price}</S.BestPrice>
          </S.Best>
        ))}
        </S.BestList>
        </S.BestWrapper>
    </S.MainWrapper>
  );
};

export default MdMain;