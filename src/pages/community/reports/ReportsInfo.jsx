// 제보 내역 상세 페이지

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import S from './sytleReportsInfo';


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
      name: "홍길동",
      phone: "010-1234-5678",
      email: "abc123@gmail.com",
      content: "2025 웃는남자 캐스팅으로 규현, 이석훈, 박효신, NCT도영이 맡았다고 합니다.",
    },
    {
      id: 2,
      title: "지킬 앤 하이드 캐스팅 변경 정보입니다.",
      name: "홍길동",
      phone: "010-1234-5678",
      email: "abc123@gmail.com",
      content: "김성철 배우 부상으로 전동석 배우로 변경되었습니다.",
    },
    {
      id: 3,
      title: "알라딘 팝업스토어 정보 제보합니다.",
      name: "홍길동",
      phone: "010-1234-5678",
      email: "abc123@gmail.com",
      content: "알라딘 팝업스토어를 개최합니다.",
    },
  ];


  const report = reportsData.find(report => report.id === Number(id));

  if (!report) {
    return <S.ErrorMessage>제보 내역이 존재하지 않습니다.</S.ErrorMessage>; 
  }

  const { title, content, date } = report;

  return (
    <S.Wrapper>
      <S.SubWrapper>
        <div>
            <S.Title>{title}</S.Title>
            <S.Content>{content}</S.Content>
        </div>
      </S.SubWrapper>

      <S.buttonWrapper>
        <button onClick={handleBack}>홈으로</button>
      </S.buttonWrapper>

    </S.Wrapper>
  );
};

export default ReportsInfo;

