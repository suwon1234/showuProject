import React from 'react';
import AuctionDetail from './_component/AuctionDetail';

const DetailContainer2 = () => {

  const auctionItems = [
    { id: 1, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510"},
    { id: 2, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510"},
    { id: 3, name: "베르사유의 장미 고블렛", number: "88회", time: "20시간 47분", image: "https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510"}
  ]

  const inquiryList = [
    { id: 1, type: '기타', title: '제목1', writer: '홍길동', date: '0000/00/00'},
    { id: 2, type: '기타', title: '제목2', writer: '홍길동', date: '0000/00/00'},
    { id: 3, type: '기타', title: '제목3', writer: '홍길동', date: '0000/00/00'},
  ]

  const auctionInfo = [
    { id: 1, time: "1일 5시간 58분 23초", number: "2410CCOLWWG", record: 60, unit: 1000, pay: 166000 },
    { id: 2, time: "1일 5시간 58분 23초", number: "2410CCOLWWG", record: 60, unit: 1000, pay: 166000 },
    { id: 3, time: "1일 5시간 58분 23초", number: "2410CCOLWWG", record: 60, unit: 1000, pay: 166000 },
  ]

  return (
    <div>
      <AuctionDetail auctionItems={auctionItems} inquiryList={inquiryList} auctionInfo={auctionInfo} />
    </div>
  );
};

export default DetailContainer2;