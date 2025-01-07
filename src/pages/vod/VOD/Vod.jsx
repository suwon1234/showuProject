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
  const [randomVideos, setRandomVideos] = useState([]);
  const [musicalvideos,setMusicalVideos]=useState([]);
  const [sortedVideos, setSortedVideos] = useState([]); 
  const [randomMusicalVideos, setRandomMusicalVideos] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  useEffect(() => {
    // 랜덤으로 4개의 비디오 선택
    if (videolist.length > 0) {
      const shuffled = [...videolist].sort(() => Math.random() - 0.5); 
      setRandomVideos(shuffled.slice(0, 4)); 
    }
  }, [videolist]);
  useEffect(()=>{
      const filteredVideos = videolist.filter((video) => video.genre === "뮤지컬");
      const shuffled = [...filteredVideos].sort(() => Math.random() - 0.5).slice(0, 4);
      setMusicalVideos(shuffled);
  },[videolist])
  useEffect(() => {
    const sorted = [...videolist]
      .sort((a, b) => {
        if (b.likes === a.likes) {
          return a.title.localeCompare(b.title, 'ko');
        }
        return b.likes - a.likes;
      })
      .slice(0, 4); 
    setSortedVideos(sorted); 
  }, [videolist]);

  useEffect(() => {
    if (videolist.length > 0) {
      // 뮤지컬 장르의 비디오만 필터링
      const musicalVideos = videolist.filter((video) => video.genre === "뮤지컬");
      // 랜덤으로 4개 선택
      const shuffled = [...musicalVideos].sort(() => Math.random() - 0.5).slice(0, 4);
      setRandomMusicalVideos(shuffled);
    }
  }, [videolist]);


  // 오른쪽 버튼 
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % randomMusicalVideos.length);
  };

  // 왼쪽 버튼 
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + randomMusicalVideos.length) % randomMusicalVideos.length);
  };

  return (
    <div>
      <S.slider className="slider">
        <div className="slide">
          <div className="live-badge">LIVE</div>
          {randomMusicalVideos.length > 0 && (
            <Link to={`/vod/play/${randomMusicalVideos[currentSlide]._id}`} >
              <img
                src={randomMusicalVideos[currentSlide].mainImage} 
                alt={`Video ${randomMusicalVideos[currentSlide].title}`}
                className="slide-image"
              />
            </Link>
          )}
        </div>
        <div className="slideindicator">
          <span className="swiper-pagination-current">{currentSlide + 1}</span> /
          <span className="swiper-pagination-total">{randomMusicalVideos.length}</span>
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
        {randomVideos.map((video) => (
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
        {sortedVideos.map((video) => (
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
      <S.categorybutton>
      <Link to={"/vod/musical"} > <button className='category' onClick={() => window.scrollTo(0, 0)} >Musical</button></Link>
      <Link to={"/vod/movie"} > <button className='category' onClick={() => window.scrollTo(0, 0)}>Movie</button></Link>
      <Link to={"/vod/music"} > <button className='category' onClick={() => window.scrollTo(0, 0)}>Music</button></Link>
      <Link to={"/vod/my-ShowU"} > <button className='category' onClick={() => window.scrollTo(0, 0)}>ShowU</button></Link> 
      </S.categorybutton>


      <S.showuRecommendation>
      <S.titlewrapper className='titlewrapper'>
          <div className='title'>뮤지컬</div>
          <a className="more" href='/vod/more/rec/musical'>더보기</a>
        </S.titlewrapper>
        <S.showuRecommendationPage className='showuRecommendationPage'>
        {musicalvideos.map((video) => (
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
    </div>
  );
};

export default Vod;
