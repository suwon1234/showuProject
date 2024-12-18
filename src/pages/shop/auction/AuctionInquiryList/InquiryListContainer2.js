import React from 'react';
import AuctionInquiryList from './_component/AuctionInquiryList';

const InquiryListContainer2 = () => {

  const inquiryList = [
    { id: 1, type: '기타', title: '제목1', writer: '홍길동', date: '0000/00/00'},
    { id: 2, type: '기타', title: '제목2', writer: '홍길동', date: '0000/00/00'},
    { id: 3, type: '기타', title: '제목3', writer: '홍길동', date: '0000/00/00'},
    { id: 4, type: '기타', title: '제목4', writer: '홍길동', date: '0000/00/00'},
    { id: 5, type: '기타', title: '제목5', writer: '홍길동', date: '0000/00/00'},
    { id: 6, type: '기타', title: '제목6', writer: '홍길동', date: '0000/00/00'},
    { id: 7, type: '기타', title: '제목7', writer: '홍길동', date: '0000/00/00'},
    { id: 8, type: '기타', title: '제목8', writer: '홍길동', date: '0000/00/00'},
  ]

  return (
    <div>
      <AuctionInquiryList inquiryList={inquiryList}/>
    </div>
  );
};

export default InquiryListContainer2;