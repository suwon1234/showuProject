// 커뮤니티 글쓰기 내역 페이지

import React, { useEffect, useState } from 'react';
import S from './styleHistory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const History = () => {
  const [historysData, setHistorysData] = useState([]);

  useEffect(() => {
    const fetchHistoryData = async () => {
      const token = localStorage.getItem("jwtToken");

      try {
        const response = await fetch("http://localhost:8000/community/write", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setHistorysData(data);
        } else {
          console.error("데이터를 가져오는 데 실패했습니다.");
        }
      } catch (error) {
        console.error("서버 오류:", error);
      }
    };

    fetchHistoryData();
  }, []);
    
    return (
    <S.Wrapper>
      <S.TopTitle>
        커뮤니티
      </S.TopTitle>
      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className='icon' />
      </S.IconWrapper>
    <S.SubWrapper>

    <S.TitleContainer>
      <S.Title>
        <p>글쓰기 내역 확인</p>
      </S.Title>
      <S.SubTitle>
        <ul>
          <li>작성 내역</li>
        </ul>
      </S.SubTitle>
      </S.TitleContainer>

      <S.TableWrapper>
        
        <table>
          <thead>
            <tr>
              <th>제목</th>
              <th>내용</th>
              <th>작성 날짜</th>
            </tr>
          </thead>
          <tbody>
            {historysData.map((history) => (
              <tr key={history._id}>
                <td>{history.title}</td>
                <td>
                <Link className="linkStyle" to={`/community/write/history/edit${history._id}`}>
                {/* <Link className="linkStyle" to={`/community/write/history/${history._id}`}> */}
                {/* <Link className="linkStyle" to={`/community/write/history/check`}> */}
                  {history.content}
                </Link>
                </td>
                <td>{new Date(history.createdAt).toLocaleString()}</td>
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

export default History;