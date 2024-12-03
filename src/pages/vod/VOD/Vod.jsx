import React, { useState,useEffect } from 'react';
import S from '../VOD/style';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Vod = ({plays}) => {

  const location=useLocation();
  useEffect(() => {
    // 경로가 변경될 때마다 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [location]);

 

  // 슬라이드 이미지 배열
  const images = [
    'https://via.placeholder.com/1240x508?text=Slide+1',
    'https://via.placeholder.com/1240x508?text=Slide+2',
    'https://via.placeholder.com/1240x508?text=Slide+3',
    'https://via.placeholder.com/1240x508?text=Slide+4',
  ];

  const totalSlides = images.length; 
  const [currentSlide, setCurrentSlide] = useState(1); 

  // 오른쪽 버튼 
  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1)); 
  };

  // 왼쪽 버튼 
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides)); // 첫 번째 슬라이드면 마지막으로 돌아감
  };

  return (
    <div>
      <S.slider className="slider">
        <div className="slide">
          <div className="live-badge">LIVE</div>
          <img
            src={images[currentSlide - 1]} // 현재 슬라이드에 해당하는 이미지 URL
            alt={`slide-${currentSlide}`}
            className="slide-image"
          />
        </div>
        <div className="slideindicator">
          <span className="swiper-pagination-current">{currentSlide}</span> /
          <span className="swiper-pagination-total">{totalSlides}</span>
        </div>
        <button className="arrowrightarrow" onClick={handleNext}>
          〉
        </button>
        <button className="arrowleftarrow" onClick={handlePrev}>
          〈
        </button>

        <div className="swiper"></div>
      </S.slider>

      <S.showuRecommendation>
        <div className='title'>ShowU의 추천</div>
        <a className="more" href='/vod/more'>더보기</a>
        <S.showuRecommendationPage className='showuRecommendationPage'>
        {plays && plays.map((play) => (
            <S.Card key={play.id}>
              <Link to={`/vod/play?programid=${play.id}`} role='button' onClick={() => window.scrollTo(0, 0)} >
               
                  {play.mainImage && (
                    <img src={play.mainImage} alt={`Video ${play.id}`} />
                  )}
             
              </Link>
            </S.Card>
        ))}
        </S.showuRecommendationPage>

      </S.showuRecommendation>
      <S.showuRecommendation>
        <div className='title'>실시간 인기 컨텐츠</div>
        <a className="more" href='/vod/more'>더보기</a>
        <S.showuRecommendationPage className='showuRecommendationPage'>
        {plays && plays.map((play) => (
            <S.Card key={play.id}>
              {/* 클릭 시 /vod/play 경로로 이동 */}
              <Link to={`/vod/play?programid=${play.id}`} >
                <a  role="button" >
                  {play.mainImage && (
                    <img src={play.mainImage} alt={`Video ${play.id}`} />
                  )}
                </a>
              </Link>
            </S.Card>
        ))}
        </S.showuRecommendationPage>

      </S.showuRecommendation>
      <S.categorybutton>
      <Link to={"/vod/Musical"} > <button className='category'>Musical</button></Link>
      <Link to={"/vod/Movie"} > <button className='category'>Movie</button></Link>
      <Link to={"/vod/Music"} > <button className='category'>Music</button></Link>
      <Link to={"/vod/ShowU"} > <button className='category'>ShowU</button></Link> 
      </S.categorybutton>


      <S.showuRecommendation>
        <div className='title'>ShowU의 추천</div>
        <a className="more" href='/vod/more'>더보기</a>
        <S.showuRecommendationPage className='showuRecommendationPage'>
        {plays && plays.map((play) => (
            <S.Card key={play.id}>
              {/* 클릭 시 /vod/play 경로로 이동 */}
              <Link to={`/vod/play?programid=${play.id}`} >
                <a  role="button" >
                  {play.mainImage && (
                    <img src={play.mainImage} alt={`Video ${play.id}`} />
                  )}
                </a>
              </Link>
            </S.Card>
        ))}
        </S.showuRecommendationPage>

      </S.showuRecommendation>
    </div>
  );
};

export default Vod;
