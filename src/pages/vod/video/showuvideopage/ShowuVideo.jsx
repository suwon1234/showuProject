import React, { useState, useEffect } from 'react';
import S from './style';

const ShowuVideo = ({ play, videoList }) => {
  const { id, title, videoUrl, thumbnail } = play;

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, user: '사용자1', text: '멋진 영상이네요!', replies: [], showOptions: false },
    { id: 2, user: '사용자2', text: '정말 재밌어요!', replies: [], showOptions: false },
  ]);
  const [currentUser, setCurrentUser] = useState('사용자1');
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportCommentId, setReportCommentId] = useState(null);
  const [reportReason, setReportReason] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCommentFocused, setIsCommentFocused] = useState(false);
  const [focusedReplyId, setFocusedReplyId] = useState(false);

  const handleRegisterButton = () => {
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        user: currentUser,
        text: comment,
        replies: [],
        showOptions: false,
      };
      setComments([...comments, newComment]);
      setComment('');
      setIsCommentFocused(false);
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

  const handleEditComment = (id, newText) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, text: newText } : comment
    );
    setComments(updatedComments);
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
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
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, showOptions: !comment.showOptions } : comment
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
              {videoUrl || 'Main Video Placeholder'}
            </S.videoPlaceholder>
            <div className="video-details">
              <S.videoTitle className="video-title">
                영상 제목: {title || '제목 없음'}
              </S.videoTitle>
              <S.videoMeta className="video-meta">
                <S.profile className="profile"></S.profile>
                <S.subscribeButton className="subscribe-button">관심</S.subscribeButton>
              </S.videoMeta>
            </div>
            <S.detail className="detail">
              <span>{thumbnail}</span>
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
                {comments.map((comment) => (
                  <S.comment key={comment.id} className="comment">
                    <S.commentText className="comment-text">
                      <strong>{comment.user}:</strong> {comment.text}
                    </S.commentText>

                    <S.buttonstyle className="comment-buttons">
                      <button onClick={() => handleToggleOptions(comment.id)} className="point">
                        ⋮
                      </button>

                      {comment.showOptions && (
                        <div className="comment-options">
                          {comment.user === currentUser ? (
                            <>
                              <button
                                onClick={() =>
                                  handleEditComment(
                                    comment.id,
                                    prompt('수정할 댓글을 입력하세요', comment.text)
                                  )
                                }
                              >
                                수정
                              </button>
                              <button onClick={() => handleDeleteComment(comment.id)}>
                                삭제
                              </button>
                            </>
                          ) : (
                            <button onClick={() => handleReportComment(comment.id)}>
                              신고
                            </button>
                          )}
                        </div>
                      )}
                    </S.buttonstyle>

                    <S.commentInput
                      className="reply-input"
                      placeholder="답글을 입력하세요..."
                      onFocus={() => setFocusedReplyId(comment.id)}
                      onBlur={(e) => {
                        if (!e.target.value.trim()) setFocusedReplyId(null);
                      }}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleReply(comment.id, e.target.value);
                          e.target.value = '';
                        }
                      }}
                    />

                    <S.replies>
                      {comment.replies.map((reply, index) => (
                        <S.comment key={index} className="reply">
                          <S.commentText className="comment-text">
                            <strong className="comment">{reply.user}:</strong> {reply.text}
                          </S.commentText>
                        </S.comment>
                      ))}
                    </S.replies>
                  </S.comment>
                ))}
              </S.commentsList>
            </S.commentsSection>
          </S.videoSection>

          <S.sidebar className="sidebar">
            <h3>추천 영상</h3>
            <S.suggestedVideos className="suggested-videos">
              {videoList?.length > 0 ? (
                videoList.map((item, index) => (
                  <S.videoPoster className="video-poster" key={index}>
                    <div className="poster-placeholder">
                      {item.mainImage || `Poster ${index + 1}`}
                    </div>
                    <p>{item.title || `Video Title ${index + 1}`}</p>
                  </S.videoPoster>
                ))
              ) : (
                <div>추천 영상을 불러오는 중입니다...</div>
              )}
            </S.suggestedVideos>
          </S.sidebar>
        </S.mainContent>
      </S.app>

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
            </div>
          </S.ModalContent>
        </S.ModalBackground>
      )}
    </div>
  );
};

export default ShowuVideo;
