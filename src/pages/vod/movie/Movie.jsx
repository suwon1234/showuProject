import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import S from './style';

const Movie = ({ plays }) => {
  const [selectedCategory, setSelectedCategory] = useState("영화전체");
  const [videolist, setVideoList] = useState([]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    const vodVideo = async () => {
      try {
        const response = await fetch("http://localhost:8000/vod");
        const data = await response.json();
        if (response.ok) {
          setVideoList(data);  // 전체 비디오 목록을 상태로 설정
        } else {
          console.error('Error', data.message);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    vodVideo();
  }, []);

  // 선택한 카테고리에 맞는 장르로 필터링
  const filteredVideos = videolist.filter((video) => {
    if (selectedCategory === "영화전체") return true;  // 모든 영화를 포함
    return video.genre === selectedCategory;  // 선택한 장르와 일치하는 영화만 포함
  });

  return (
    <div>
      <S.showuRecommendation>
        <S.topwrapper className="topwrapper">
          <S.title className="title">Movie</S.title>
          <S.DropdownWrapper>
            <S.Dropdown onChange={handleCategoryChange} value={selectedCategory}>
              <option value="영화전체" className="select">영화전체</option>
              <option value="코미디" className="select">코미디</option>
              <option value="다큐멘터리" className="select">다큐멘터리</option>
              <option value="액션" className="select">액션</option>
              <option value="가족" className="select">가족</option>
              <option value="공포" className="select">공포</option>
              <option value="단편" className="select">단편</option>
              <option value="드라마" className="select">드라마</option>
              <option value="모험" className="select">모험</option>
              <option value="로멘스" className="select">로멘스</option>
              <option value="서부" className="select">서부</option>
              <option value="스포츠" className="select">스포츠</option>
            </S.Dropdown>
          </S.DropdownWrapper>
        </S.topwrapper>

        <S.showuRecommendationPage className="showuRecommendationPage">
          {filteredVideos.map((video) => (
            <S.Card key={video.id}>
              <Link 
                to={`/vod/play/${video._id}`} 
                role="button" 
                onClick={() => window.scrollTo(0, 0)}
              >
                <img 
                  src={video.mainImage} 
                  alt={`Video ${video.title}`} 
                />
              </Link>
            </S.Card>
          ))}
        </S.showuRecommendationPage>
      </S.showuRecommendation>
    </div>
  );
};

export default Movie;
