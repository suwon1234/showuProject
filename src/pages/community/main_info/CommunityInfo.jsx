import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import S from "./commuInfoStyle";

const CommunityInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  console.log("useParams id:", id);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null); // 사용자 정보

  // 데이터 가져오기
  useEffect(() => {
    const fetchCommunityInfo = async () => {
      try {
        const token = localStorage.getItem("token");  // JWT 토큰 가져오기
        const response = await fetch(`http://localhost:8000/community/communityInfo/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,  // JWT 토큰을 Authorization 헤더에 추가
          },
        });
        if (!response.ok) {
          throw new Error("데이터를 가져오는 데 실패했습니다.");
        }
        const result = await response.json();
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



  // 댓글 데이터 가져오기
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:8000/community/info/${id}/comments`);
        if (!response.ok) {
          throw new Error("댓글 데이터를 가져오는 데 실패했습니다.");
        }
        const result = await response.json();
        setComments(result);
      } catch (error) {
        console.error("댓글 가져오기 오류:", error);
      }
    };

    fetchComments();
  }, [id]);



  // 댓글 등록
  const handleCommentSubmit = async () => {
  if (!commentText) {
    alert("댓글을 입력해주세요.");
    return;
  }

  const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기

  try {
    const response = await fetch(`http://localhost:8000/community/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // JWT 토큰을 Authorization 헤더에 추가
      },
      body: JSON.stringify({
        postId: id,
        content: commentText,
      }),
    });

    if (!response.ok) {
      throw new Error("댓글 등록에 실패했습니다.");
    }

    const newComment = await response.json();
    console.log("등록된 댓글:", newComment);

    // 댓글 목록에 새 댓글 추가
    setComments((prevComments) => [newComment.comment, ...prevComments]);
    setCommentText("");
    alert("댓글이 등록되었습니다!");
  } catch (error) {
    console.error("댓글 등록 오류:", error);
    alert("댓글 등록 중 오류가 발생했습니다.");
  }
};



  // 좋아요
  const handleLikeButton = async () => {
    const token = localStorage.getItem("token"); // JWT 토큰 가져오기
    if (!token) {
      alert("로그인 상태에서만 좋아요를 누를 수 있습니다.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/community/info/${id}/likes`, {
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
      setLikeCount(result.likes);
      alert(result.message);
    } catch (error) {
      console.error('좋아요 요청 오류:', error);
      alert('좋아요 요청 중 오류 발생');
    }
  };

  // 신고하기 페이지 이동
  const handleNotifyButton = () => {
    const confirmMove = window.confirm("신고하기 페이지로 이동하시겠습니까?");
    if (confirmMove) {
      navigate(`/community/communityInfo/Notify`);
    }
  };

  // 커뮤니티 홈으로
  const handleBackToList = () => {
    navigate("/community"); 
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류: {error}</p>;
  if (!data) return <p>데이터가 없습니다.</p>;

  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.TopTitle>{data.title}</S.TopTitle>
        <S.Line1 />

        <S.Img>
          <img src={data.imageUrl} alt={data.title} />
          <p>{data.description}</p>
          <p>{data.content}</p>
        </S.Img>

        <S.ButtonGroup>
          <button onClick={handleLikeButton}>좋아요 {likeCount}</button>
          <button onClick={handleNotifyButton}>신고하기</button>
        </S.ButtonGroup>

        <S.CommentWrapper>
          <S.CommentInput>
            <h1>댓글</h1>
            <textarea
              placeholder="너의 의견을 자유롭게 적어줘"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <div>
              <button onClick={handleCommentSubmit}>등록하기</button>
            </div>
          </S.CommentInput>

          <div>
            {comments.map((comment, i) => (
              <div key={i}>
                <div>
                  <p className="user">{comment.user} </p>
                  <p className="content">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </S.CommentWrapper>

        <S.ButtonGroup>
          <button onClick={handleBackToList}>커뮤니티 홈으로 돌아가기</button>
        </S.ButtonGroup>
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default CommunityInfo;
