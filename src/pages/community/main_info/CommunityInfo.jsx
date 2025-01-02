import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import S from "./commuInfoStyle";

const CommunityInfo = () => {
  const { id } = useParams(); // URL에서 ID 가져오기
  const navigate = useNavigate();

  const [data, setData] = useState(null); // 게시물 데이터
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 메시지
  const [likeCount, setLikeCount] = useState(0); // 좋아요 수
  const [commentText, setCommentText] = useState(""); // 댓글 텍스트
  const [comments, setComments] = useState([]); // 댓글 목록

  // 게시물 데이터 가져오기
  useEffect(() => {
    const fetchCommunityInfo = async () => {
      try {
        const token = localStorage.getItem("token"); // JWT 토큰 가져오기
        const response = await fetch(`http://localhost:8000/community/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`, // 헤더에 토큰 추가
          },
        });
        if (!response.ok) {
          throw new Error("데이터를 가져오는 데 실패했습니다.");
        }
        const result = await response.json(); // JSON 응답 파싱
        setData(result);
        setLikeCount(result.likeCount || 0);
        setComments(result.comments || []);
        setLoading(false);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
        setError(error.message);
        setLoading(false);
      }
    };
  
    fetchCommunityInfo();
  }, [id]);

  // 댓글 등록
  const handleCommentSubmit = async () => {
    if (!commentText) {
      alert("댓글을 입력해주세요.");
      return;
    }

    const token = localStorage.getItem("token"); // JWT 토큰 가져오기

    try {
      const response = await fetch(`http://localhost:8000/community/${id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // 헤더에 토큰 추가
        },
        body: JSON.stringify({ content: commentText }),
      });

      if (!response.ok) {
        throw new Error("댓글 등록에 실패했습니다.");
      }

      const newComment = await response.json();
      setComments((prevComments) => [newComment.comment, ...prevComments]); // 새 댓글 추가
      setCommentText(""); // 입력 필드 초기화
      alert("댓글이 등록되었습니다!");
    } catch (error) {
      console.error("댓글 등록 오류:", error);
      alert("댓글 등록 중 오류가 발생했습니다.");
    }
  };

  // 좋아요 버튼 클릭 핸들러
  const handleLikeButton = async () => {
    const token = localStorage.getItem("token"); // JWT 토큰 가져오기
    if (!token) {
      alert("로그인 상태에서만 좋아요를 누를 수 있습니다.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/community/${id}/likes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("좋아요 요청 실패");
      }

      const result = await response.json();
      setLikeCount(result.likes); // 좋아요 수 업데이트
      alert(result.message);
    } catch (error) {
      console.error("좋아요 요청 오류:", error);
      alert("좋아요 요청 중 오류 발생");
    }
  };

  // 커뮤니티 홈으로 돌아가기
  const handleBackToList = () => {
    navigate("/community");
  };

  // 로딩 중 화면
  if (loading) return <p>로딩 중...</p>;
  // 에러 화면
  if (error) return <p>{error}</p>;
  // 데이터가 없을 때 화면
  if (!data) return <p>데이터가 없습니다.</p>;

  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.TopTitle>{data.title}</S.TopTitle>
        <S.Line1 />

        {/* 게시물 정보 */}
        <S.Img>
          <img src={data.imageUrl} alt={data.title} />
          <p>{data.description}</p>
          <p>{data.content}</p>
        </S.Img>

        {/* 좋아요 버튼 */}
        <S.ButtonGroup>
          <button onClick={handleLikeButton}>좋아요 {likeCount}</button>
        </S.ButtonGroup>

        {/* 댓글 작성 및 표시 */}
        <S.CommentWrapper>
          <S.CommentInput>
            <textarea
              placeholder="댓글을 입력해주세요"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={handleCommentSubmit}>등록하기</button>
          </S.CommentInput>

          <div>
            {comments.map((comment, i) => (
              <div key={i}>
                <p>{comment.user}</p>
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        </S.CommentWrapper>

        {/* 커뮤니티 홈으로 이동 */}
        <S.ButtonGroup>
          <button onClick={handleBackToList}>커뮤니티 홈으로</button>
        </S.ButtonGroup>
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default CommunityInfo;
