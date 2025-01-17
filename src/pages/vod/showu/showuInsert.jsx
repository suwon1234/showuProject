import React, { useState, useEffect, useRef } from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios'

const ShowuInsert = () => {
  const [showuvideolist, setShowuVideoList] = useState([]);
  const [showCreateOption, setShowCreateOption] = useState(false);
  const [showUploadVideoModal, setShowUploadVideoModal] = useState(false);
  const [showUploadVideoModal2, setShowUploadVideoModal2] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [videoCategory, setVideoCategory] = useState('카테고리');
  const [thumbnail, setThumbnail] = useState(null);
  const [selectedCircle, setSelectedCircle] = useState(null); // 공개 여부 상태 관리
  const [videoElement, setVideoElement] = useState('');
  const [videoElement2, setVideoElement2] = useState('');
  const jwtToken = localStorage.getItem("jwtToken");



  const handleSubtitleClick = () => {
    const newValue = videoElement ? 0 : 1;
    setVideoElement(newValue);
    alert(newValue === 1 ? "자막이 추가되었습니다!" : "자막이 제거되었습니다!");
  };
  
  const handleEndScreenClick = () => {
    const newValue = videoElement2 ? 0 : 1; 
    setVideoElement2(newValue);
    alert(newValue === 1 ? "최종 화면이 추가되었습니다!" : "최종 화면이 제거되었습니다!");
  };


  useEffect(() => {
    const vodVideo = async () => {
      try {
        const response = await fetch("http://localhost:8000/vod/showuvideo");
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setShowuVideoList(data);
        } else {
          console.error('Error', data.message);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    vodVideo();
  }, []);

  const containerRef = useRef(null);

  const handleCircleClick = (index) => {
    setSelectedCircle(index); // 공개 상태 선택
  };

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setShowCreateOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMainButtonClick = () => {
    setShowCreateOption((prev) => !prev);
  };

  const handleCreateButtonClick = () => {
    setShowCreateOption(false);
    setShowUploadVideoModal(true);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoExtensions = ['mp4', 'avi', 'mov', 'mkv', 'wmv'];
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (videoExtensions.includes(fileExtension)) {
        setUploadedFileName(file);
        setShowUploadVideoModal(false);
        setShowUploadVideoModal2(true);
        setActivePage(0);
      } else {
        alert('동영상 파일만 업로드할 수 있습니다.');
      }
    }
  };

  const closeModal = () => {
    setShowUploadVideoModal(false);
    setShowUploadVideoModal2(false);
    setActivePage(0);
    setUploadedFileName('');
    setVideoTitle('');
    setVideoDescription('');
    setVideoCategory('카테고리');
    setThumbnail(null);
    setSelectedCircle(null);
  };
 

  const goToNextPage = async () => {
    if (activePage === 0) {
      // 첫 번째 페이지에서 필수 입력값 확인
      if (!videoTitle.trim()) {
        alert("제목을 입력하세요.");
        return;
      }
      if (!videoDescription.trim()) {
        alert("상세정보를 입력하세요.");
        return;
      }
      if (!thumbnail) {
        alert("썸네일을 업로드하세요.");
        return;
      }
      if (videoCategory === "카테고리" || !videoCategory.trim()) {
        alert("카테고리를 선택하세요.");
        return;
      }
    }
  
    if (activePage === 3) {
      const confirmUpload = window.confirm('영상을 업로드 하겠습니까?');
      if (confirmUpload) {
        // 파일이 선택되지 않았다면 경고를 띄운다
        if (!uploadedFileName) {
          alert("파일을 선택하세요.");
          return;
        }
  
        // Create FormData to send video details and file
        const formData = new FormData();
        formData.append("title", videoTitle);
        formData.append("detail", videoDescription);
        formData.append("category", videoCategory);
        formData.append("thumbnail", thumbnail); // 썸네일
        formData.append("video", uploadedFileName); // 비디오 파일
        formData.append("videoelement", videoElement); // 비디오 관련 정보
        formData.append("videoelement2", videoElement2); // 추가 비디오 정보
        formData.append("review", '없음'); // 리뷰
        formData.append("openclose", selectedCircle === 0 ? '비공개' : '공개'); // 공개 여부 (0: 비공개, 1: 공개)
  
        // 업로드 요청
        try {
            const response=  await axios.post('http://localhost:8000/vod/video', formData, {
            headers: {
              'Authorization': `Bearer ${jwtToken}`, // 인증 토큰 추가
            },
          });
          const { videoPath, thumbnailPath, video } = response.data;
          console.log('업로드 성공:', response.data);
          console.log('썸네일 경로:', thumbnailPath);
          console.log('비디오 경로:', videoPath);

          alert("업로드 성공!");
          window.location.reload();
        
        } catch (error) {
          console.error('Error uploading video:', error);
          alert('업로드 중 오류가 발생했습니다.');
        }
  
        // Close the modal and reset the state
        closeModal();
      }
    } else if (activePage < 3) {
      setActivePage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (activePage > 0) {
      setActivePage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <S.showumain className="showumain" ref={containerRef}>
        <S.DropdownWrapper>
          <S.Dropdown>
            <option value="카테고리">카테고리</option>
          </S.Dropdown>
          <S.button onClick={handleMainButtonClick}>
            <FontAwesomeIcon icon={faVideo} style={{ color: 'black' }} />
          </S.button>

          {showCreateOption && (
            <S.createOption onClick={handleCreateButtonClick}>
              동영상 업로드
            </S.createOption>
          )}
        </S.DropdownWrapper>

        <S.Videolist>
          {showuvideolist && showuvideolist.length > 0 ? (
            showuvideolist.map((video) => (
              <S.Card>
                <Link to={`/vod/my-ShowU/video/${video._id}`} role="button">
                  {video.thumbnail ? (
                    <img src={`http://localhost:8000${video.thumbnail}`} alt={`Video ${video._id}`} />
                  ) : (
                    <div>이미지를 불러올 수 없습니다.</div>
                  )}
                </Link>
                <div className='videotitle'>{video.title}</div>
              </S.Card>
            ))
          ) : (
            <div>비디오 데이터를 불러오는 중입니다...</div>
          )}
        </S.Videolist>
      </S.showumain>

      {showUploadVideoModal && (
        <S.ModalBackground>
          <S.ModalContent>
            <S.CloseButton onClick={closeModal}>&times;</S.CloseButton>
            <h2>동영상 업로드</h2>
            <S.HorizontalLine />
            <p>
              동영상 파일을 선택하세요.
              <br />
              동영상을 게시하기 전에 비공개로 설정됩니다.
            </p>
            <S.StyledUploadButton htmlFor="file-upload">파일 선택</S.StyledUploadButton>
            <S.HiddenInput
             id="file-upload"
            
             type="file"
             accept="video/*"
             onChange={handleFileSelect}
            />
          </S.ModalContent>
        </S.ModalBackground>
      )}

      {showUploadVideoModal2 && (
        <S.ModalBackground>
          <S.ModalContent>
            <S.CloseButton onClick={closeModal}>&times;</S.CloseButton>
            <h2>동영상 업로드</h2>
            <S.HorizontalLine />
            <S.container>
              <S.Sequence className={activePage >= 0 ? 'active' : ''}>
                <p>세부정보</p>
                <div className="circle"></div>
              </S.Sequence>
              <S.Divider />
              <S.Sequence className={activePage >= 1 ? 'active' : ''}>
                <p>동영상 요소</p>
                <div className="circle"></div>
              </S.Sequence>
              <S.Divider2 />
              <S.Sequence className={activePage >= 2 ? 'active' : ''}>
                <p>검토</p>
                <div className="circle"></div>
              </S.Sequence>
              <S.Divider3 />
              <S.Sequence className={activePage >= 3 ? 'active' : ''}>
                <p>공개 상태</p>
                <div className="circle"></div>
              </S.Sequence>
            </S.container>

            {activePage === 0 && (
              <S.detailWrapper className='detailWrapper'>
                <S.InputWrapper>
                  <label>제목</label>
                  <textarea
                    type="text"
                    value={videoTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                    placeholder="제목을 입력하세요"
                  />
                </S.InputWrapper>

                <S.InputWrapper>
                  <label>설명</label>
                  <textarea
                    value={videoDescription}
                    onChange={(e) => setVideoDescription(e.target.value)}
                    placeholder="설명을 입력하세요"
                  />
                </S.InputWrapper>

                <S.InputWrapper>
                  <label>썸네일</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setThumbnail(e.target.files[0])}
                  />
                </S.InputWrapper>

                <S.InputWrapper className='category'>
                  <label>카테고리</label>
                  <select
                    value={videoCategory}
                    onChange={(e) => setVideoCategory(e.target.value)}
                  >
                    <option value="카테고리" className='string'>전체</option>
                    <option value="뮤지컬" className='string'>뮤지컬</option>
                    <option value="영화" className='string'>영화</option>
                    <option value="음악" className='string'>음악</option>
                    <option value="연기" className='string'>연기</option>
                  </select>
                </S.InputWrapper>
              </S.detailWrapper>
            )}

               {activePage === 1 && (
              <S.videaddowrapper className="videaddowrapper">
                <h1>동영상 요소</h1>
                <p>카드와 최종 화면을 사용하여 시청자에게 관련 동영상, 웹사이트, 클릭 유도 문구를 표시하세요.</p>

                <div className="subtitle">
                  <img src="/path-to-your-image.png" alt="icon" />
                   <div className="subtitleadd">
                    <span>자막 추가</span>
                    <p>동영상에 자막을 추가하여 더 많은 시청자에게 다가가세요</p>
                  </div>
                   <button
                    onClick={handleSubtitleClick}
                    style={{
                       backgroundColor: videoElement ? "gray" : "#FFD400",
                      color: videoElement ? "white" : "black",
                     }}
                   >
                     {videoElement ? "추가됨" : "추가"}
                  </button>
                 </div>

                <div className="addscreen">
                  <img src="/path-to-your-image.png" alt="icon" />
                  <div className="subtitleadd">
                    <span>최종 화면 추가</span>
                    <p>동영상이 끝날 때 관련 콘텐츠를 홍보합니다.</p>
                   </div>
                  <button
                    onClick={handleEndScreenClick}
                     style={{
                      backgroundColor: videoElement2 ? "gray" : "#FFD400",
                      color: videoElement2 ? "white" : "black",
                    }}
                  >
                    {videoElement2 ? "추가됨" : "추가"}
                   </button>
                </div>
               </S.videaddowrapper>
            )}
            {activePage === 2 && (
              <S.videaddowrapper className='videaddowrapper'>
                <h1>검토</h1>
                <p>ShowU에서 동영상에 공개 상태를 제한할 수 있는 문제가 있는지 검사합니다. 그러면 동영상을 게시하기 전에 문제를 해결할 수 있습니다</p>

                <div className='subtitle'>
                  <img src="/path-to-your-image.png" alt="icon" />
                  <div className='subtitleadd'>
                    <span>저작권</span>
                    <p>발견된 문제가 없습니다</p>
                  </div>
                </div>
              </S.videaddowrapper>
            )}

            {activePage === 3 && (
              <S.videaddowrapper className='videaddowrapper'>
                <h1>공개 상태</h1>
                <p>게시할 시기 동영상을 볼 수 있는 사람을 선택하세요</p>
                <div className='openvideo'>
                  <div className='open'>
                    <div
                      className="circle"
                      onClick={() => handleCircleClick(0)}
                      style={{ backgroundColor: selectedCircle === 0 ? '#FFD400' : 'gray' }}
                    ></div>
                    <span>비공개</span>
                    <p>나만 볼 수 있습니다.</p>
                    <div
                      className="circle"
                      onClick={() => handleCircleClick(1)}
                      style={{ backgroundColor: selectedCircle === 1 ? '#FFD400' : 'gray' }}
                    ></div>
                    <span>공개</span>
                    <p>누구나 내 동영상을 시청할 수 있습니다.</p>
                  </div>
                </div>
              </S.videaddowrapper>
            )}

            <S.buttonWrapper>
              <S.PreviousButton onClick={goToPreviousPage}>이전 단계로</S.PreviousButton>
              <S.NextButton onClick={goToNextPage}>다음 단계로</S.NextButton>
            </S.buttonWrapper>
          </S.ModalContent>
        </S.ModalBackground>
      )}
    </div>
  );
};

export default ShowuInsert;
