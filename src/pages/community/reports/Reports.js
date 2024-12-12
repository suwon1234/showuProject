// 제보내역 페이지 /community/reports

import React from "react";
import S from "./styleReports";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Reports = () => {
  const reportsData = [
    { id: 1, title: "제보합니다.", content: "2025 웃는남자 캐스팅 제보...", date: "2024.12.01 18:30" },
    { id: 2, title: "제보합니다.", content: "지킬앤하이드 캐스팅 변경 정...", date: "2024.11.13 12:59" },
    { id: 3, title: "제보합니다.", content: "알라딘 팝업스토어 정보 제보...", date: "2024.10.29 20:01" },
    { id: 4, title: "제보합니다.", content: "현재 뮤지컬 시장은 어떠한지...", date: "2024.10.29 20:01" },
    { id: 5, title: "제보합니다.", content: "되살아난 연극시장! 출연진은...", date: "2024.10.29 20:01" },
    { id: 6, title: "제보합니다.", content: "샤롯데씨어터가 브로드웨이로...", date: "2024.10.29 20:01" },
  ];

  return (
    <S.Wrapper>
      <S.TopTitle>
        News
      </S.TopTitle>
      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className='icon' />
      </S.IconWrapper>
    <S.SubWrapper>

    <S.TitleContainer>
      <S.Title>
        <p>제보 내역 확인</p>
      </S.Title>
      <S.SubTitle>
        <ul>
          <li>제보 내역</li>
        </ul>
      </S.SubTitle>
      </S.TitleContainer>

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
                <td>
                <Link className="linkStyle" to={`/community/reports/${report.id}`}>
                  {report.content}
                </Link>
                </td>
                <td>{report.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.TableWrapper>
      <S.PageNumber>
        <span>«</span>
        <p>1</p>
        <span>»</span>
      </S.PageNumber>
    </S.SubWrapper>
    </S.Wrapper>
  );
};

export default Reports;
