// 커뮤니티 글쓰기 내역 수정/삭제 메인 페이지


import React from 'react';
import S from './HistoryEditStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const HistoryEdit = () => {

  const navigate = useNavigate();

    const historyEditsData = [
        { id: 1, title: "타이틀1", content: "content 1", date: "2024.12.01 18:30" },
        { id: 2, title: "타이틀2", content: "content 2", date: "2024.11.13 12:59" },
        { id: 3, title: "타이틀3", content: "content 3", date: "2024.10.29 20:01" },
        { id: 4, title: "타이틀4", content: "content 4", date: "2024.10.29 20:01" },
        { id: 5, title: "타이틀5", content: "content 5", date: "2024.10.29 20:01" },
        { id: 6, title: "타이틀6", content: "content 6", date: "2024.10.29 20:01" },
      ];

      const handleEdit = () => {
        const complete =window.confirm("수정 페이지로 이동하시겠습니까?");
          if(complete){
            navigate('/community/write/history/edit/active');
          }
      };

      const handleDelete = () => {
        const complete =window.confirm("삭제하시겠습니까?");
          if(complete){
            alert("삭제되었습니다.")
          }
      };


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
        <p>글쓰기 수정/삭제</p>
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
              <th>수정 / 삭제</th>
            </tr>
          </thead>
          <tbody>
            {historyEditsData.map((history) => (
              <tr key={history.id}>
                <td>{history.title}</td>
                <td>               
                <Link className="linkStyle" to={`/community/write/history/check${history.id}`}>
                {/* <Link className="linkStyle" to={`/community/write/history/check`}> */}
                  {history.content}
                </Link>
                </td>
                <td>{history.date}</td>
                
                <S.buttonWrapper>
                <button onClick={handleEdit}><td>수정</td></button>
                <button onClick={handleDelete}><td>삭제</td></button>
                </S.buttonWrapper>
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

export default HistoryEdit;