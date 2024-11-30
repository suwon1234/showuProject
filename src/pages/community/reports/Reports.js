// 제보내역 페이지 /community/reports

import React from "react";
import S from "./styleReports";

const Reports = () => {
  const reportsData = [
    { id: 1, title: "제보합니다.", content: "2025 온난화가 계속될 제보...", date: "2024.11.03 18:30" },
    { id: 2, title: "제보합니다.", content: "헤드스타트 재정난 심화 내용...", date: "2024.10.31 12:59" },
    { id: 3, title: "제보합니다.", content: "알려진 팝업스토어 정보 제보...", date: "2024.10.29 20:01" },
  ];

  return (
    <S.Wrapper>
    <S.SubWrapper>
      <S.Title>
        <p>제보 내역 확인</p>
      </S.Title>
      <S.SubTitle>
        <ul>
          <li>제보 내역</li>
        </ul>
      </S.SubTitle>
      <S.TableWrapper>
        
        <table>
          <thead>
            <tr>
              <th>제목</th>
              <th>내용</th>
              <th>제보 날짜</th>
            </tr>
          </thead>
          <tbody>
            {reportsData.map((report) => (
              <tr key={report.id}>
                <td>{report.title}</td>
                <td>{report.content}</td>
                <td>{report.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.TableWrapper>
      <S.Pagination>
        <span>«</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>»</span>
      </S.Pagination>
    </S.SubWrapper>
    </S.Wrapper>
  );
};

export default Reports;
