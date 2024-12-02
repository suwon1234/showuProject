import React from 'react';
import MdInquiryList from './_component/MdInquiryList';

const InquiryListContainer = () => {

  const inquiryList = [
    { id: 1, type: '기타', title: '제목', writer: '홍길동', date: '0000/00/00'},
    { id: 2, type: '기타', title: '제목', writer: '홍길동', date: '0000/00/00'},
    { id: 3, type: '기타', title: '제목', writer: '홍길동', date: '0000/00/00'},
    { id: 4, type: '기타', title: '제목', writer: '홍길동', date: '0000/00/00'},
    { id: 5, type: '기타', title: '제목', writer: '홍길동', date: '0000/00/00'},
    { id: 6, type: '기타', title: '제목', writer: '홍길동', date: '0000/00/00'},
    { id: 7, type: '기타', title: '제목', writer: '홍길동', date: '0000/00/00'},
    { id: 8, type: '기타', title: '제목', writer: '홍길동', date: '0000/00/00'},
  ]

  return (
    <div>
      <MdInquiryList inquiryList={inquiryList}/>
    </div>
  );
};

export default InquiryListContainer;