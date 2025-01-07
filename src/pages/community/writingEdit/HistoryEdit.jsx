import React, { useState, useEffect } from 'react';
import S from './HistoryEditStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const HistoryEdit = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const fetchPosts = async () => {
      
      const token = localStorage.getItem('jwtToken');

      if (!token) {
        alert('로그인이 필요합니다.');
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:8000/community/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPosts(data); // 서버에서 가져온 데이터로 상태 업데이트
        } else {
          alert('데이터를 가져오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error('서버 오류:', error);
        alert('서버 오류가 발생했습니다.');
      }
    };

    fetchPosts();
  }, [navigate]);

  const handleEdit = (postId) => {
    const complete = window.confirm('수정 페이지로 이동하시겠습니까?');
    if (complete) {
      navigate(`/community/write/history/edit/${postId}`);
    }
  };

  const handleDelete = async (postId) => {
    const complete = window.confirm('삭제하시겠습니까?');
    if (complete) {
      const token = localStorage.getItem('jwtToken');

      if (!token) {
        alert('로그인이 필요합니다.');
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`http://localhost:8000/community/delete/${postId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          alert('삭제되었습니다.');
          setPosts(posts.filter((post) => post._id !== postId)); // 상태 업데이트
        } else {
          alert('삭제에 실패했습니다.');
        }
      } catch (error) {
        console.error('서버 오류:', error);
        alert('서버 오류가 발생했습니다.');
      }
    }
  };

  return (
    <S.Wrapper>
      <S.TopTitle>커뮤니티</S.TopTitle>
      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
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
              {posts.map((post) => (
                <tr key={post._id}>
                  <td>{post.title}</td>
                  <td>
                    <Link className="linkStyle" to={`/community/write/history/check/${post._id}`}>
                      {post.content}
                    </Link>
                  </td>
                  <td>{new Date(post.createdAt).toLocaleString()}</td>
                  <S.buttonWrapper>
                    <button onClick={() => handleEdit(post._id)}>수정</button>
                    <button onClick={() => handleDelete(post._id)}>삭제</button>
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
