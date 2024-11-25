import React from 'react';
import MdDetail from './MdDetail';

const mdBest = [
  { id: 1, name: "BEST상품 1", price: 65000, image: "/image1"},
  { id: 2, name: "BEST상품 2", price: 65000, image: "/image2"},
  { id: 3, name: "BEST상품 3", price: 65000, image: "/image3"}
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
    <div>
      <MdDetail />
    </div>
    </S.MainWrapper>
  );
};

export default MdMain;