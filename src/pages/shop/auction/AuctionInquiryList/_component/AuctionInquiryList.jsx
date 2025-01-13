import React, { useEffect, useState } from 'react';
import S from './styleInquiryList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const AuctionInquiryList = () => {
  const [inquiryList, setInquiryList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await fetch('http://localhost:8000/shop/auction/inquiry/list');
        if(!response.ok) {
          throw new Error("문의 내역 목록을 가져오는데 실패했습니다.")
        }

        const datas = await response.json();
        setInquiryList(datas.inquiryList || []);
      } catch (error) {
        console.error("InquiryListError", error);
      }
    };

    getList();

  }, []);

  const handleGoBack = () => {
    navigate('/shop/auction');
  };

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
      
      {inquiryList.map((inquiry, i) => (
        <Link to={`/shop/auction/inquiry/${inquiry._id}`} key={inquiry._id}>
        <S.InquiryList key={inquiry._id}>
          <S.Left1>
            {/* <S.ListItem>{inquiry._id}</S.ListItem> */}
            <S.ListItem>{i + 1}</S.ListItem>
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
            <S.ListItem>
              {new Date(inquiry.updatedAt || inquiry.createdAt).toLocaleDateString()}
            </S.ListItem>
          </S.Right2>
        </S.InquiryList>
        </Link>
      ))}

        <S.BackButton onClick={handleGoBack}>홈으로 돌아가기</S.BackButton>
    </S.ListWrapper>
  );
};

export default AuctionInquiryList;