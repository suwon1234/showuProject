// 커뮤니티 인포 정보, 좋아요, 댓글

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import S from "./commuInfoStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faEdit, faTrashAlt, faSave, faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

const CommunityInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const fetchCommunityInfo = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await fetch(`http://localhost:8000/community/${id}/details`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("데이터를 가져오는 데 실패했습니다.");
        const result = await response.json();
        setData(result.community); // 게시물 데이터 설정
        setComments(result.comments || []); // 댓글 데이터 설정
        setLikeCount(result.community.likeCount || 0);
        setIsLiked(result.community.isLiked || false);
        setLoading(false);
      } catch (error) {
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

    const token = localStorage.getItem("jwtToken");

    try {
      const response = await fetch(`http://localhost:8000/community/${id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: commentText }),
      });

      if (!response.ok) throw new Error("댓글 등록에 실패했습니다.");
      const newComment = await response.json();
      setComments((prevComments) => [newComment.comment, ...prevComments]);
      setCommentText("");
      alert("댓글이 등록되었습니다!");
    } catch (error) {
      alert("댓글 등록 중 오류가 발생했습니다.");
    }
  };

  // 댓글 수정 
  const handleCommentEdit = (comment) => {
    setEditingCommentId(comment._id);
    setEditingText(comment.content);
  };

  const handleCommentEditSubmit = async (commentId) => {
    if (!editingText.trim()) {
      alert("수정할 내용을 입력해주세요.");
      return;
    }
  
    const token = localStorage.getItem("jwtToken");
  
    try {
      const response = await fetch(`http://localhost:8000/community/comments/${commentId}`, { 
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: editingText }),
      });
  
      if (!response.ok) throw new Error("댓글 수정에 실패했습니다.");
  
      const updatedComment = await response.json();
  
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment._id === updatedComment._id ? updatedComment : comment
        )
      );
  
      setEditingCommentId(null);
      setEditingText("");
      alert("댓글이 수정되었습니다!");
    } catch (error) {
      alert("댓글 수정 중 오류가 발생했습니다.");
    }
  };
  

  // 댓글 삭제
  const handleCommentDelete = async (commentId) => {
    const token = localStorage.getItem("jwtToken");

    try {
      const response = await fetch(`http://localhost:8000/community/comments/${commentId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("댓글 삭제에 실패했습니다.");
      setComments((prevComments) =>
        prevComments.filter((comment) => comment._id !== commentId)
      );
      alert("댓글이 삭제되었습니다!");
    } catch (error) {
      alert("댓글 삭제 중 오류가 발생했습니다.");
    }
  };

  // 좋아요 
  const handleLikeButton = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      alert("로그인 후 좋아요를 누를 수 있습니다.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8000/community/${id}/likes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) throw new Error("좋아요 요청 실패");
  
      const result = await response.json();
  
      // 좋아요 카운트
      setIsLiked(result.isLiked);
      setLikeCount(result.likes);
  
      console.log("좋아요 상태:", result.isLiked);
      console.log("좋아요 수:", result.likes);
  
      alert(result.isLiked ? "좋아요가 반영되었습니다!" : "좋아요가 취소되었습니다!");
    } catch (error) {
      console.error("좋아요 처리 오류:", error);
      alert("좋아요 요청 중 오류가 발생했습니다.");
    }
  };
  

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>데이터가 없습니다.</p>;

  return (
    <S.Wrapper>
      <S.TopTitle2>커뮤니티</S.TopTitle2>
      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </S.IconWrapper>

      <S.SubWrapper>
        <S.TopTitle>{data.title}</S.TopTitle>
        <S.Line1 />

        <S.Img>
          <img src={data.imageUrl} alt={data.title} />
          <p>{data.description}</p>
          <p>{data.content}</p>
        </S.Img>

        <S.Group>
          <S.Button onClick={handleLikeButton} liked={isLiked}>
            {isLiked ? (
              <>
                <FontAwesomeIcon icon={faHeart} /> 좋아요 취소 {likeCount}
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faHeartBroken} />  좋아요 {likeCount}
              </>
            )}
          </S.Button>
        </S.Group>

        <S.CommentWrapper>
          <S.CommentInput>
            <textarea
              placeholder="댓글을 입력해주세요"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <S.Button onClick={handleCommentSubmit}>등록하기</S.Button>
          </S.CommentInput>

          <div>
            {comments.map((comment) => (
              <S.CommentItem key={comment._id}>
                {editingCommentId === comment._id ? (
                  <>
                    <textarea
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                    />
                    <S.Button onClick={() => handleCommentEditSubmit(comment._id)}>
                      저장
                    </S.Button>
                  </>
                ) : (
                  <>
                    <p>{comment.content}</p>
                    <S.Buttons>
                      <S.Button onClick={() => handleCommentEdit(comment)}>
                        수정
                      </S.Button>
                      <S.Button onClick={() => handleCommentDelete(comment._id)}>
                        삭제
                      </S.Button>
                    </S.Buttons>
                  </>
                )}
              </S.CommentItem>
            ))}
          </div>
        </S.CommentWrapper>
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default CommunityInfo;