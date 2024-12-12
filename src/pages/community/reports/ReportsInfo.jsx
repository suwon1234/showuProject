// 제보 내역 상세 페이지

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import S from './sytleReportsInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const ReportsInfo = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const handleBack = () => {
    const userCheck =window.confirm("제보 내역 화면으로 이동합니다. 이동하시겠습니까?");
    if (userCheck) {
      navigate('/community/reports');
    }
  };



  const reportsData = [
    {
      id: 1,
      title: "2025 웃는남자 캐스팅 제보합니다.",
      name: "그윈플렌",
      phone: "010-1234-5678",
      email: "abc123@gmail.com",
      content: "2025 웃는남자 캐스팅으로 규현, 이석훈, 박효신, NCT도영이 맡았다고 합니다.",
    },
    {
      id: 2,
      title: "지킬 앤 하이드 캐스팅 변경 정보입니다.",
      name: "홍지킬",
      phone: "010-1234-5678",
      email: "abc123@gmail.com",
      content: "김성철 배우 부상으로 전동석 배우로 변경되었습니다.",
    },
    {
      id: 3,
      title: "알라딘 팝업스토어 정보 제보합니다.",
      name: "캉라딘",
      phone: "010-1234-5678",
      email: "abc123@gmail.com",
      content: "알라딘 팝업스토어를 개최합니다.",
    },
  ];


  const report = reportsData.find(report => report.id === Number(id));

  if (!report) {
    return <S.ErrorMessage>제보 내역이 존재하지 않습니다.</S.ErrorMessage>; 
  }

  const { title, content, name, phone, email} = report;

  return (
    <S.Wrapper>
      <S.TopTitle>News</S.TopTitle>
      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className='icon' />
      </S.IconWrapper>

      <S.SubWrapper>
        
        <S.Titles>
          <S.MainTitle>News</S.MainTitle>
          <S.SubTitle>가장 먼저 접하는 showU 소식</S.SubTitle>
        </S.Titles>

        <S.Section>
            <S.Title>{title}</S.Title>
            <S.Line2></S.Line2> 
            <S.Content>{`이름 : ${name}`}</S.Content>
            <S.Content>{`연락처 : ${phone}`}</S.Content>
            <S.Content>{`이메일 : ${email}`}</S.Content>
            <S.Content2>{`제보 내용 : ${content}`}</S.Content2>
        </S.Section>

      <S.buttonWrapper>
        <button onClick={handleBack}>홈으로</button>
      </S.buttonWrapper>

      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default ReportsInfo;

