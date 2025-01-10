import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import S from './styleEditCommentsMain';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';

const EditCommentsMain = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 댓글 데이터 가져오기
  // useEffect(() => {
  //   const fetchComments = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:8000/community/comments/${id}`);
  //       if (!response.ok) {
  //         const errorResponse = await response.json();
  //         throw new Error(errorResponse.message || "댓글 데이터를 가져오는 데 실패했습니다.");
  //       }
  //       const result = await response.json();
  //       setComments(result);
  //     } catch (error) {
  //       console.error("댓글 가져오기 오류:", error);
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchComments();
  // }, [id]);

  

  // 댓글 추가 (예시 추가)
  const handleAddComment = async (newComment) => {
    try {
      const response = await fetch(`http://localhost:8000/community/comments/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "댓글 추가에 실패했습니다.");
      }

      // 댓글 상태 업데이트
      setComments((prevComments) => [result.comment, ...prevComments]);
      alert("댓글이 추가되었습니다!");
    } catch (error) {
      console.error("댓글 추가 오류:", error);
      alert("댓글 추가 중 오류가 발생했습니다.");
    }
  };

  // 댓글 삭제
  const handleDelete = async (commentId) => {
    const complete = window.confirm("삭제하시겠습니까?");
    if (!complete) return;

    try {
      const response = await fetch(`http://localhost:8000/community/comments/${commentId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("댓글 삭제에 실패했습니다.");
      }

      // 삭제 후 댓글 목록 업데이트
      setComments((prevComments) => prevComments.filter((comment) => comment._id !== commentId));
      alert("댓글이 삭제되었습니다.");
    } catch (error) {
      console.error("댓글 삭제 오류:", error);
      alert("댓글 삭제 중 오류가 발생했습니다.");
    }
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류: {error}</p>;
  if (comments.length === 0) return <p>댓글이 없습니다.</p>;

  return (
    <S.Wrapper>
      <S.TopTitle>커뮤니티</S.TopTitle>
      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
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
                <th>내용</th>
                <th>작성 날짜</th>
                <th>수정/삭제</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr key={comment._id}>
                  <td>{comment.content}</td> {/* 댓글 내용 */}
                  <td>{new Date(comment.createdAt).toLocaleString()}</td> {/* 작성 날짜 */}
                  <td>
                    <button onClick={() => navigate(`/community/communityInfo/editComments/${comment._id}`)}>수정</button>
                    <button onClick={() => handleDelete(comment._id)}>삭제</button>
                  </td>
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
