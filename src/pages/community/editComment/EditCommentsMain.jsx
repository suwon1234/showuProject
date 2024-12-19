// 커뮤니티 댓글 수정 메인 페이지

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import S from './styleEditCommentsMain';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const EditCommentsMain = () => {

  const navigate = useNavigate();

  const handleEdit = () => {
    const complete =window.confirm("수정 페이지로 이동하시겠습니까?");
      if(complete){
        navigate('/community/communityInfo/editComments');
      }
  };

  const handleDelete = () => {
    const complete =window.confirm("삭제하시겠습니까?");
      if(complete){
        alert("삭제되었습니다.")
      }
  };

    const editData = [
        { id: 1, title: "홍길동", content: "첫 번째 댓글입니다...", date: "2024.12.01 18:30" },
        { id: 2, title: "홍길동", content: "두 번째 댓글입니다...", date: "2024.11.13 12:59" },
        { id: 3, title: "홍길동", content: "세 번째 댓글입니다...", date: "2024.10.29 20:01" },
        { id: 4, title: "홍길동", content: "네 번째 댓글입니다...", date: "2024.10.29 20:01" },
        { id: 5, title: "홍길동", content: "다섯 번째 댓글입니...", date: "2024.10.29 20:01" },
        { id: 6, title: "홍길동", content: "여섯 번째 댓글입니...", date: "2024.10.29 20:01" },
      ];


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
          <p>댓글 수정 / 삭제</p>
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
                <th>수정/삭제</th>
              </tr>
            </thead>
            <tbody>
              {editData.map((edit) => (
                <tr key={edit.id}>
                  <td>{edit.title}</td>
                  <td>
                  {/* <Link className="linkStyle" to={`/community/communityInfo/Comments/${edit.id}`}> */}
                  <Link className="linkStyle" to={`/community/communityInfo/Comments`}>
                    {edit.content}
                  </Link>
                  </td>
                  <td>{edit.date}</td>

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

export default EditCommentsMain;