import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
// VideoDetail 컴포넌트 정의
const VideoDetail = ({ play,plays }) => {
  const [activePage, setActivePage] = useState('rec'); // 'rec'을 기본 활성화 페이지로 설정
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const { id, title, thumbnail, time, genre, year, videoUrl, mainImage } = play;

  return (
      <S.VideoDetailArea>
    
        <div className="image">
          <img src={mainImage} alt={title} />
        </div>
        <div className="content-area">
          <S.LogoBox>{title}</S.LogoBox>
          <S.MetadataList>
            <p>{`${year} • ${time} • ${genre}`}</p>
          </S.MetadataList>
            <S.buttonstyle>
              <Link to={`/vod/play/start?programid=${id}`}>
                <button className="button">로그인</button>
              </Link>
              <S.hert className='hert'>
                <FontAwesomeIcon icon={faHeart} className='icon'/>
                <p>관심</p>
              </S.hert>
            </S.buttonstyle>
          <span>{thumbnail}</span>
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
  <div style={{ position: activePage === 'rec' ? 'relative' : 'absolute', visibility: activePage === 'rec' ? 'visible' : 'hidden' }}>
    <S.showuRecommendation>
      <S.showuRecommendationPage className='showuRecommendationPage'>
        {plays && plays.map((play) => (
          <S.Card key={play.id}>
            <Link to={`/vod/play?programid=${play.id}`} role='button' onClick={() => window.scrollTo(0, 0)}>
              {play.mainImage && (
                <img src={play.mainImage} alt={`Video ${play.id}`} />
              )}
            </Link>
          </S.Card>
        ))}
      </S.showuRecommendationPage>
    </S.showuRecommendation>
  </div>
)}
       {activePage === 'det' && <div>
            <S.MovieContainer class="movie-container">
        <S.Poster class="poster">
       <img src={mainImage} alt="포스터 이미지"/>
      </S.Poster>
  <S.MovieDetails class="movie-details">
    <S.Title class="title">{title}</S.Title>
    <S.Subtitle class="subtitle">{thumbnail}</S.Subtitle>
    <S.Info class="info">
      <p><span>개요</span> 나라, 연도</p>
      <p><span>장르</span> #태그</p>
      <p><span>출연</span> 대표배우</p>
      <p><span>감독</span> 감독이름</p>
      <p><span>등급</span> <img src="rating-icon.jpg" alt="15 등급"/></p>
    </S.Info>
    <S.Description class="description">
      <p>내용정보 감독이름</p>
    </S.Description>
  </S.MovieDetails>
</S.MovieContainer>
                
                </div>}
            </S.pages>
          </S.page>
          
        </S.Wapper>
      </S.bottom>
      </S.VideoDetailArea>
  );
};

export default VideoDetail;
