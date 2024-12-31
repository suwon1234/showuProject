import React, { useState,useEffect } from 'react';
import S from '../VOD/style';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Vod = () => {

  const location=useLocation();
  useEffect(() => {
    // 경로가 변경될 때마다 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [location]);

  const [videolist,setVideoList]=useState([]);
  useEffect(()=>{
    const vodVideo=async()=>{
      try{
        const response = await fetch("http://localhost:8000/vod")
        const data = await response.json();
        console.log(data)
        if(response.ok){
          setVideoList(data);
        }else{
          console.error('Error',data.message);
        }
      }catch (error){
        console.error('Error',error)
      }

    };
    vodVideo();
  },[])

 

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
        <S.titlewrapper className='titlewrapper'>
          <div className='title'>ShowU의 추천</div>
          <a className="more" href='/vod/more/rec'>더보기</a>
        </S.titlewrapper>
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
      <S.showuRecommendation>
      <S.titlewrapper className='titlewrapper'>
          <div className='title'>실시간 인기 컨텐츠</div>
          <a className="more" href='/vod/more/rec/pop'>더보기</a>
        </S.titlewrapper>
        <S.showuRecommendationPage className='showuRecommendationPage'>
        {videolist && videolist.map((list) => (
            <S.Card key={list._id}>

              <Link to={`/vod/play?programid=${list.id}`} >
                <a  role="button" >
                  {list.mainImage && (
                    <img src={list.mainImage} alt={`Video ${list.id}`} />
                  )}
                </a>
              </Link>
            </S.Card>
        ))}
        </S.showuRecommendationPage>

      </S.showuRecommendation>
      <S.categorybutton>
      <Link to={"/vod/musical"} > <button className='category'>Musical</button></Link>
      <Link to={"/vod/movie"} > <button className='category'>Movie</button></Link>
      <Link to={"/vod/music"} > <button className='category'>Music</button></Link>
      <Link to={"/vod/my-ShowU"} > <button className='category'>ShowU</button></Link> 
      </S.categorybutton>


      <S.showuRecommendation>
      <S.titlewrapper className='titlewrapper'>
          <div className='title'>뮤지컬</div>
          <a className="more" href='/vod/more/rec/musical'>더보기</a>
        </S.titlewrapper>
        <S.showuRecommendationPage className='showuRecommendationPage'>
        {videolist && videolist.map((list) => (
            <S.Card key={list._id}>

              <Link to={`/vod/play?programid=${list.id}`} >
                <a  role="button" >
                  {list.mainImage && (
                    <img src={list.mainImage} alt={`Video ${list.id}`} />
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
