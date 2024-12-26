// MD - 문의내역 페이지
import React, { useEffect, useState } from 'react';
import S from './styleInquiryList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const MdInquiryList = () => {
  const [inquiryList, setInquiryList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await fetch('http://localhost:4000/inquiry');
        const datas = await response.json();
        setInquiryList(datas);
      } catch (error) {
        console.error("InquiryListError", error);
      }
    };

    getList();

  }, []);

  return (
    <S.ListWrapper>
      <S.ListTitle>
        <h1>문의 내역</h1>
      </S.ListTitle>
      
      <S.Head>
        <S.Left1>
          <S.HeadItem>번호</S.HeadItem>
        </S.Left1>
        <S.Left2>
          <S.HeadItem>구분</S.HeadItem>
        </S.Left2>

        <S.PrivateWrapper>
          <S.Blank></S.Blank>
        </S.PrivateWrapper>
        
        <S.Center>
          <S.HeadItem>제목</S.HeadItem>
        </S.Center>
        <S.Right1>
          <S.HeadItem>작성자</S.HeadItem>
        </S.Right1>
        <S.Right2>
          <S.HeadItem>작성일</S.HeadItem>
        </S.Right2>
      </S.Head>
      
      {inquiryList.map((inquiry) => (
        <S.InquiryList key={inquiry.id}>
          <S.Left1>
            <S.ListItem>{inquiry.id}</S.ListItem>
          </S.Left1>
          <S.Left2>
            <S.ListItem>{inquiry.type}</S.ListItem>
          </S.Left2>

          <S.PrivateWrapper>
          <FontAwesomeIcon className='icon' icon={faLock} />
          <S.Private>비공개 질문입니다.</S.Private>
          </S.PrivateWrapper>

          <S.Center>
            <S.ListItem>{inquiry.title}</S.ListItem>
          </S.Center>
          <S.Right1>
            <S.ListItem>{inquiry.writer}</S.ListItem>
          </S.Right1>
          <S.Right2>
            <S.ListItem>{inquiry.date}</S.ListItem>
          </S.Right2>
        </S.InquiryList>
      ))}
    </S.ListWrapper>
  );
};

export default MdInquiryList;