import React from 'react';
import S from './styleInquiryList'

const MdInquiryList = ({ inquiryList }) => {
  return (
    <S.ListWrapper>
      <S.ListTitle>
        <h1>문의 내역</h1>
      </S.ListTitle>
      
      <S.Head>
        <p>제목</p>
        <p>질문구분</p>
        <p>제목</p>
        <p>작성자</p>
        <p>작성일</p>
      </S.Head>
      
      {inquiryList.map((inquiry) => (
        <S.InquiryList key={inquiry.id}>
          <S.Span>{inquiry.id}</S.Span>
          <S.Span>{inquiry.type}</S.Span>
          <S.Span>{inquiry.title}</S.Span>
          <S.Span>{inquiry.writer}</S.Span>
          <S.Span>{inquiry.date}</S.Span>
        </S.InquiryList>
      ))}


      
    </S.ListWrapper>
  );
};

export default MdInquiryList;