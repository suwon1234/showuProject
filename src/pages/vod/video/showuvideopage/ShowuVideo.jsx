import React, { useState, useEffect } from 'react';
import S from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ShowuVideo = () => {
  const jwtToken = localStorage.getItem("jwtToken");
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([])
  const [currentUser, setCurrentUser] = useState(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportCommentId, setReportCommentId] = useState(null);
  const [reportReason, setReportReason] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCommentFocused, setIsCommentFocused] = useState(false);
  const [focusedReplyId, setFocusedReplyId] = useState(false);
  const [showuvideoinfo, setShowuVideoInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showuvideolist, setShowuVideoList] = useState([]);
  const [uploaduser, setUploaduser] = useState(null);
  const [choice,setChoice]=useState(false);
  const navigate = useNavigate(); 
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [random,setRandom]=useState([]);
  

  

  useEffect(()=>{
    setRandom(showuvideolist
    .map((item) => ({ item, sort: Math.random() })) // 무작위 값 할당
    .sort((a, b) => a.sort - b.sort) // 무작위로 정렬
    .map(({ item }) => item) // 원본 데이터만 추출
    .slice(0, 4)) // 처음 4개 항목 선택
  },[showuvideolist])
  
  const videopicture =showuvideoinfo.thumbnail
  
  
  const { id } = useParams();

  useEffect(()=>{
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/vod/user`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${jwtToken}`
          },
        });
        if (!response.ok) {
          throw new Error("유저을 가져오는데 실패 했습니다");
        }
        const data = await response.json();
        setCurrentUser(data.userId)
        console.log(data.userId)
      } catch (error) {
        console.error("유저 정보 가져오기 오류:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  },[jwtToken]);

  //댓글 조회
  const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost:8000/vod/comment/video/${id}`);
      if (!response.ok) {
        throw new Error('댓글을 가져오는 데 실패했습니다.');
      }
      const data = await response.json();
      setComments(data.comments || []);
      console.log(data.comments);
    } catch (error) {
      console.error('댓글 가져오기 오류:', error);
    }
  };
  
  useEffect(() => {
    fetchComments();
  }, [id]);  


  useEffect(() => {
    const fetchuploaduser = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/vod/upload/${id}/name`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${jwtToken}`
          },
        });
        if (!response.ok) {
          throw new Error("업로더 이름을 가져오는데 실패 했습니다");
        }
        const data = await response.json();
        setUploaduser(data.uploadname);
        // console.log(uploaduser)
      } catch (error) {
        console.error("업로더 이름 정보 가져오기 오류:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchuploaduser();
  }, [id]);
  const [refresh, setRefresh] = useState(false);  // 리렌더링을 트리거할 상태 추가

  // 비디오 목록 가져오기
  useEffect(() => {
    const vodVideo = async () => {
      try {
        const response = await fetch("http://localhost:8000/vod/showuvideo");
        const data = await response.json();
        if (response.ok) {
          setShowuVideoList(data);
          console.log(data);
        } else {
          console.error('Error', data.message);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    vodVideo();
  }, [id]);  // `refresh` 값이 변경될 때마다 실행

  // 버튼 클릭 시 호출되는 함수
// 비디오 정보 가져오는 함수


const fetchVodInfo = async () => {
  setLoading(true);
  try {
    const response = await fetch(`http://localhost:8000/vod/showuinfo/${id}/showu`);
    if (!response.ok) {
      throw new Error("VOD 정보를 가져오는데 실패했습니다.");
    }
    const data = await response.json();
    setShowuVideoInfo(data);
    console.log(data);
  } catch (error) {
    setError(error.message);
    console.error("VOD 정보 가져오기 오류:", error);
  } finally {
    setLoading(false);
  }
};

// 버튼 클릭 시 호출되는 함수
const handleClick = (videoId) => {
  navigate(`/vod/my-ShowU/video/${videoId}`); 
  window.location.reload();  // 새로고침 // URL을 변경하여 해당 videoId로 이동
};

// useEffect는 id가 변경될 때마다 실행되도록 설정
useEffect(() => {
  if (id) {
    fetchVodInfo();
  }
}, [id]);  // id가 변경될 때마다 실행 // id가 변경될 때마다 실행

  const handleRegisterButton = async () => {
    if (!jwtToken) {
      alert("로그인이 필요합니다.");
      navigate("/login"); // 로그인 페이지로 리다이렉트
      return;
    }
  
    if (!comment) {
      alert("댓글을 입력해주세요.");
      return;
    }
  
    if (comment.trim()) {
      try {
        setLoading(true); // 로딩 상태를 true로 설정하여 추가 작업이 완료되기 전까지 리렌더링을 방지
        const response = await fetch(`http://localhost:8000/vod/add/${id}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwtToken}`, // 인증 토큰 추가
          },
          body: JSON.stringify({
            myComment: comment,
            myChoice: String(choice), // 사용자의 선택 값 (변수 설정 필요)
            myChoicemanImage: videopicture, // 사용자의 이미지 (변수 설정 필요)
          }),
        });
  
        if (!response.ok) {
          throw new Error('댓글 추가에 실패했습니다.');
        }
  
        const data = await response.json();
        const newComment = data.comment;
  
        // 댓글 상태 업데이트 및 입력 필드 초기화
        setComments((prevComments) => [...prevComments, newComment]);
        setComment('');
        setIsCommentFocused(false);
        alert("댓글이 추가되었습니다.");
        fetchComments();
      } catch (error) {
        console.error('댓글 추가 오류:', error);
      }
    }
  };

  const handleCommentDelete = async (id) => {
    if (!id) {
      console.error('댓글 ID가 없습니다.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:8000/vod/delete/comments/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${jwtToken}` },
      });

      if (!response.ok) throw new Error("댓글 삭제에 실패했습니다.");
      setComments((prevComments) =>
        prevComments.filter((comment) => comment._id !== id)
      );
      alert("댓글이 삭제되었습니다!");
    } catch (error) {
      alert("댓글 삭제 중 오류가 발생했습니다.");
    }
  };

  const handleEditComment = async (comment) => {
    // 기존 댓글 내용을 prompt로 받아오기
    const newText = comment.content && comment.content.trim() !== "" 
      ? comment.content 
      : prompt('수정할 댓글을 입력하세요', comment.myComment);
  
    if (!newText || newText.trim() === "") {
      alert("댓글 내용은 비어있을 수 없습니다.");
      return;
    }
  
    // 수정할 댓글 정보 설정
    setEditingCommentId(comment._id);
    setEditingText(newText);
    console.log(editingText);
  
    // 수정할 댓글 처리
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await fetch(`http://localhost:8000/vod/update/comments/${comment._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ myComment: newText }),
      });
  
      if (!response.ok) throw new Error("댓글 수정에 실패했습니다.");
  
      const updatedComment = await response.json();
  
      // 수정된 댓글로 상태 업데이트
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment._id === updatedComment._id ? updatedComment : comment
        )
      );
  
      // 상태가 업데이트되면 UI가 리렌더링됩니다
      setEditingCommentId(null);
      setEditingText("");
      window.location.reload()
      alert("댓글이 수정되었습니다!");
    } catch (error) {
      alert("댓글 수정 중 오류가 발생했습니다.");
    }
  };
  
  
  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && comment.trim()) {
      handleRegisterButton();
    }
  };

  const handleCancel = () => {
    setComment('');
    setIsCommentFocused(false);
  };
  const handleReportComment = (id) => {
    setReportCommentId(id);
    setShowReportModal(true);
  };

  const handleSubmitReport = () => {
    if (reportReason) {
      alert(`댓글 ID ${reportCommentId}가 신고되었습니다. 신고 이유: ${reportReason}`);
      setShowReportModal(false);
      setReportReason('');
      setReportCommentId(null);
    } else {
      alert('신고 사유를 선택해주세요.');
    }
  };

  const handleReply = (id, replyText) => {
    if (replyText.trim()) {
      const updatedComments = comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                { user: currentUser, text: replyText },
              ],
            }
          : comment
      );
      setComments(updatedComments);
      setFocusedReplyId(null);
    }
  };

  const handleSelectItem = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
    setReportReason([
      '성적인 콘텐츠',
      '폭력적 또는 혐오스러운 콘텐츠',
      '증오 또는 악의적인 콘텐츠',
      '괴롭힘 또는 폭력',
      '유해하거나 위험한 행위',
      '잘못된 정보',
      '아동 학대',
      '스팸 또는 혼동을 야기하는 콘텐츠',
    ][index]);
  };

  const closeModal = () => {
    setShowReportModal(false);
    setReportReason('');
    setReportCommentId(null);
  };

  const handleToggleOptions = (id) => {
    console.log(id)
    const updatedComments = comments.map((comment) =>
      comment._id === id ? { ...comment, showOptions: !comment.showOptions } : comment
    );
    setComments(updatedComments);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.comment-options') && !e.target.closest('.comment button')) {
        const updatedComments = comments.map((comment) => ({
          ...comment,
          showOptions: false,
        }));
        setComments(updatedComments);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [comments]);


  

  return (
    <div className="main">
      <S.app className="app">
        <S.header className="header">
          <S.logo className="logo">
            <p className="front">Show</p> <p className="back">U</p>
          </S.logo>
        </S.header>
  
        <S.mainContent className="main-content">
          <S.videoSection className="video-section">
            <S.videoPlaceholder className="video-placeholder">
              {showuvideoinfo.videoUrl ? (
                <video controls width="100%" height="100%">
                  <source src={`http://localhost:8000${showuvideoinfo.videoUrl}`} type="video/mp4" />
                  동영상을 재생할 수 없습니다.
                </video>
              ) : (
                'Main Video Placeholder'
              )}
            </S.videoPlaceholder>
            <div className="video-details">
              <S.videoTitle className="video-title">
                영상 제목: {showuvideoinfo.title || '제목 없음'}
              </S.videoTitle>
              <S.videoMeta className="video-meta">
                <S.profile className="profile"></S.profile>
                <p>{uploaduser}</p>
              </S.videoMeta>
            </div>
            <S.detail className="detail">
              <span>{showuvideoinfo.detail}</span>
              <S.more className="more">
                <p>자세히보기</p>
              </S.more>
            </S.detail>
  
            <S.commentsSection className="comments-section">
              <h3>댓글</h3>
              <S.commentInput
                className="comment-input"
                value={comment}
                onFocus={() => setIsCommentFocused(true)}
                onBlur={() => {
                  if (!comment.trim()) setIsCommentFocused(false);
                }}
                onChange={(e) => setComment(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="댓글을 입력하세요..."
              />
              {isCommentFocused && (
                <S.buttonstyle className="buttonstyle">
                  <button onClick={handleRegisterButton}>등록하기</button>
                  <button onClick={handleCancel}>취소</button>
                </S.buttonstyle>
              )}
  
  <S.commentsList className="comments-list">
  {comments.map((comment) => {
    // comment가 비어있거나 잘못된 경우 처리
    if (!comment || !comment.usersId) {
      return (
        <S.comment key={comment?.id || 'unknown'} className="comment">
          <div className="comment-content">
            <S.commentText className="comment-text">
              <strong>Unknown User</strong>: No comment available
            </S.commentText>
          </div>
        </S.comment>
      );
    }

    return (
      <S.comment key={comment.id} className="comment">
        <div className="comment-content">
          <S.commentText className="comment-text">
            <strong>
              {comment.usersId && comment.usersId.name ? comment.usersId.name : 'Unknown User'}
            </strong>
            : {comment.myComment || 'No comment text'}
          </S.commentText>

          <S.buttonstyle className="comment-buttons">
            <button onClick={() => handleToggleOptions(comment._id)} className="point">
              ⋮
            </button>

            {comment.showOptions && (
              <div className="comment-options">
                {comment.usersId && comment.usersId._id === currentUser ? (
                  <>
                    <button onClick={() => handleEditComment(comment)}>
                      수정
                    </button>
                    <button onClick={() => handleCommentDelete(comment._id)}>
                      삭제
                    </button>
                  </>
                ) : (
                  <button onClick={() => handleReportComment(comment._id)}>
                    신고
                  </button>
                )}
              </div>
            )}
          </S.buttonstyle>
        </div>
      </S.comment>
    );
  })}
</S.commentsList>

            </S.commentsSection>
          </S.videoSection>
  
          {/* 신고 모달 */}
          {showReportModal && (
            <S.ModalBackground onClick={closeModal}>
              <S.ModalContent onClick={(e) => e.stopPropagation()}>
                <S.reportbutton className="reportbutton">
                  <h2>신고</h2>
                  <button onClick={closeModal} className="close-btn">X</button>
                </S.reportbutton>
                <p>어떤 문제인가요?</p>
  
                <S.checklist className="checklist">
                  {[
                    '성적인 콘텐츠',
                    '폭력적 또는 혐오스러운 콘텐츠',
                    '증오 또는 악의적인 콘텐츠',
                    '괴롭힘 또는 폭력',
                    '유해하거나 위험한 행위',
                    '잘못된 정보',
                    '아동 학대',
                    '스팸 또는 혼동을 야기하는 콘텐츠',
                  ].map((label, index) => (
                    <div
                      key={index}
                      className={`checklist-item ${selectedItem === index ? 'selected' : ''}`}
                      onClick={() => handleSelectItem(index)}
                    >
                      <span className="empty-circle" />
                      <span>{label}</span>
                    </div>
                  ))}
                </S.checklist>
  
                <div className="finishbutton">
                  <button onClick={handleSubmitReport} className="finish">신고</button>
                  <button onClick={closeModal} className='finish'>취소</button>
                </div>
              </S.ModalContent>
            </S.ModalBackground>
          )}
  
            <S.sidebar className="sidebar">
             <h3>추천 영상</h3>
            <S.suggestedVideos className="suggested-videos">
               {random?.length > 0 ? (
               random.map((item, index) => (
              <S.videoPoster className="video-poster" key={index}>
              <Link to={`/vod/my-ShowU/video/${item._id}`} role="button" >
              <div className="poster-placeholder">
              {item.thumbnail ? (
                <img
                  src={`http://localhost:8000${item.thumbnail}`}
                  alt={`Poster ${index + 1}`}
                  style={{ width: '100%', height: '200px' }}
                  onClick={() => handleClick(item._id)}  
                />
              ) : (
                `Poster ${index + 1}`
              )}
            </div>
                   <p>{item.title || `Video Title ${index + 1}`}</p>
                  </Link>
                     </S.videoPoster>
                    ))
                   ) : (
               <div>추천 영상을 불러오는 중입니다...</div>
               )}
           </S.suggestedVideos>
          </S.sidebar>

        </S.mainContent>
      </S.app>
    </div>
  );
};

export default ShowuVideo;
