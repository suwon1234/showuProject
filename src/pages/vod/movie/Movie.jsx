import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import S from './style';

const Movie = ({ plays }) => {
  const musicals = (plays || []).filter(item => item.genre === '영화');
  const [selectedCategory, setSelectedCategory] = useState("장르");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <S.showuRecommendation>
        <S.topwrapper className="topwrapper">
          <S.title className="title">Movie</S.title>
          <S.DropdownWrapper>
            <S.Dropdown onChange={handleCategoryChange} value={selectedCategory}>
              <option value="인기순" className="select">영화전체</option>
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
          {musicals.map(musical => (
            <S.Card key={musical.id}>
              <Link 
                to={`/vod/play?programid=${musical.id}`} 
                role="button" 
                onClick={() => window.scrollTo(0, 0)}
              >
                <img 
                  src={musical.mainImage} 
                  alt={`Video ${musical.title}`} 
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
