import React, { useEffect, useState } from 'react';
import S from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const VideoDetail = () => {
  const [activePage, setActivePage] = useState('rec');
  const [showLoginAlert, setShowLoginAlert] = useState(false); // 로그인 알림 상태
  const handlePageChange = (page) => setActivePage(page);
  const jwtToken = localStorage.getItem("jwtToken");
  const navigate = useNavigate();

  const [videolist, setVideoList] = useState([]);
  const [vodinfo, setVodInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  console.log("useParams id:", id);

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
    const fetchVodInfo = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/vod/info/${id}`);
        if (!response.ok) {
          throw new Error("데이터를 가져오는 데 실패했습니다.");
        }
        const result = await response.json();
        setVodInfo(result);
      } catch (err) {
        setError(err.message);
        console.error("데이터 가져오기 오류:", err);
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
            <button className="button" onClick={handleLoginAlert}>로그인</button>
          ) : (
            <Link to={`/vod/play/start?programid=${vodinfo._id}`}>
              <button className="button">재생</button>
            </Link>
          )}
          <S.hert className='hert'>
            <FontAwesomeIcon icon={faHeart} className='icon' />
            <p>관심</p>
          </S.hert>
        </S.buttonstyle>
        {showLoginAlert && <p style={{ color: 'red' }}>로그인이 필요합니다!</p>}
        <span>줄거리</span>
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
                    {videolist && videolist.map((video) => (
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
