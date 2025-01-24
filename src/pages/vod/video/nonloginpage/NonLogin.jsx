import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const VideoDetail = () => {
  const [activePage, setActivePage] = useState('rec');
  const [showLoginAlert, setShowLoginAlert] = useState(false); // 로그인 알림 상태
  const handlePageChange = (page) => setActivePage(page);
  const jwtToken = localStorage.getItem("jwtToken");
  const [likesicon,setLikesIcon]=useState(false);
  const [likes,setLikes]=useState(0);
  const navigate = useNavigate();

  const [videolist, setVideoList] = useState([]);
  const [vodinfo, setVodInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleMoreClick = () => {
    handlePageChange('det'); 
  };
  const { id } = useParams();
  console.log("useParams id:", id);

  const handLikeClick = async () => {
  
    if (!jwtToken) {
      alert("로그인 상태에서만 좋아요를 누를 수 있습니다.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8000/vod/info/${id}/likes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("좋아요 요청 실패");
      }

      const data = await response.json();
      setLikes(data.likes);
      setLikesIcon(!likesicon); // 하트 색상 반전
    } catch (error) {
      console.error("좋아요 요청 오류:", error);
      alert("좋아요 요청 중 오류 발생");
    }
  };
  

  useEffect(() => {
    const fetchVideoList = async () => {
      try {
        const response = await fetch("http://localhost:8000/vod");
        const data = await response.json();
        if (response.ok) {
          setVideoList(data);
        } else {
          console.error('Error:', data.message);
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };
    fetchVideoList();
  }, []);
  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const response = await fetch(`http://localhost:8000/vod/info/${id}/like/status`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(jwtToken && { Authorization: `Bearer ${jwtToken}` }),
          },
        });

        if (!response.ok) {
          throw new Error("좋아요 상태 확인 실패");
        }

        const data = await response.json();
        setLikesIcon(data); // 좋아요 상태 설정
        console.log(data)
      } catch (error) {
        console.error("좋아요 상태 확인 오류:", error);
      }
    };

    fetchLikeStatus();
  }, [id, jwtToken]);
  
  useEffect(() => {
    const fetchVodInfo = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/vod/info/${id}`);
        if (!response.ok) {
          throw new Error("VOD 정보를 가져오는데 실패했습니다.");
        }
        const data = await response.json();
        setVodInfo(data);
      } catch (error) {
        setError(error.message);
        console.error("VOD 정보 가져오기 오류:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVodInfo();
  }, [id]);

  if (loading) {
    return <p>로딩 중입니다...</p>;
  }

  if (error) {
    return <p>오류가 발생했습니다: {error}</p>;
  }

  if (!vodinfo) {
    return <p>데이터가 없습니다.</p>;
  }

  const handleLoginAlert = () => {
    alert("로그인이 필요한 페이지입니다")
    navigate("/login");
  };

  return (
    <S.VideoDetailArea>
      <div className="image">
        {vodinfo.mainImage ? (
          <img src={vodinfo.mainImage} alt={vodinfo.title} />
        ) : (
          <p>이미지가 없습니다.</p>
        )}
      </div>
      <div className="content-area">
        <S.LogoBox>{vodinfo.title}</S.LogoBox>
        <S.MetadataList>
          <p>{`${vodinfo.year} • ${vodinfo.time} • ${vodinfo.genre}`}</p>
        </S.MetadataList>
        <S.buttonstyle>
  {!jwtToken ? (
    <>
      <button className="button" onClick={handleLoginAlert}>로그인</button>
    </>
  ) : (
    <Link to={`/vod/play/start?programid=${vodinfo._id}`}>
      <button className="button">재생</button>
    </Link>
  )}
  <S.hert className='hert'>
    <FontAwesomeIcon icon={faHeart} className={`icon ${likesicon ? 'filled' : 'outlined'}`} onClick={handLikeClick} />
    <p>관심</p>
  </S.hert>
</S.buttonstyle>
        {showLoginAlert && <p style={{ color: 'red' }}>로그인이 필요합니다!</p>}
        <S.moreclick className='moreclick'>
          <span>{vodinfo.description}</span>
          <button onClick={handleMoreClick} role='button' className="more-btn">더보기</button>
        </S.moreclick>
      </div>
      <S.bottom className="bottom">
        <S.Wapper className="wrapper">
          <S.page>
            <ul className='pages'>
              <li className={activePage === 'rec' ? 'active' : ''} onClick={() => handlePageChange('rec')}>
                추천
              </li>
              <li className={activePage === 'det' ? 'active' : ''} onClick={() => handlePageChange('det')}>
                상세정보
              </li>
            </ul>
            <S.pages className='pages'>
            {activePage === 'rec' && (
    <S.showuRecommendation>
      <S.showuRecommendationPage className='showuRecommendationPage'>
        {videolist && videolist
          .sort(() => Math.random() - 0.5)  // 배열을 무작위로 섞음
          .slice(0, 5)  // 첫 5개 항목만 선택
          .map((video) => (
            <S.Card key={video._id}>
              <Link to={`/vod/play/${video._id}`} role="button" onClick={() => window.scrollTo(0, 0)}>
                {video.mainImage && (
                  <img src={video.mainImage} alt={`Video ${video.mainImage}`} />
                )}
              </Link>
            </S.Card>
                    ))}
                  </S.showuRecommendationPage>
                </S.showuRecommendation>
              )}
              {activePage === 'det' && (
                <div>
                  <S.MovieContainer className="movie-container">
                    <S.Poster className="poster">
                      <img src={vodinfo.mainImage} alt="포스터 이미지" />
                    </S.Poster>
                    <S.MovieDetails className="movie-details">
                      <S.Title className="title">{vodinfo.title}</S.Title>
                      <S.Subtitle className="subtitle">줄거리</S.Subtitle>
                      <S.Info className="info">
                        <p><span>개요</span> {vodinfo.year}</p>
                        <p><span>장르</span> {vodinfo.genre}</p>
                        <p><span>출연</span> {vodinfo.cast}</p>
                        <p><span>감독</span> {vodinfo.director}</p>
                        <p><span>등급</span> <img src="rating-icon.jpg" alt="15 등급" /></p>
                      </S.Info>
                      <S.Description className="description">
                        <p>{vodinfo.description}</p>
                      </S.Description>
                    </S.MovieDetails>
                  </S.MovieContainer>
                </div>
              )}
            </S.pages>
          </S.page>
        </S.Wapper>
      </S.bottom>
    </S.VideoDetailArea>
  );
};

export default VideoDetail;
