import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import S from './style';


const Music = ({ plays }) => {
  const musicals = (plays || []).filter(item => item.genre === '뮤지컬');
  const [selectedCategory, setSelectedCategory] = useState("음악전체");

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
              <option value="음악전체" className="select">음악전체</option>
              <option value="오케스트라" className="select">오케스트라</option>
              <option value="국내음악" className="select">국내음악</option>
              <option value="해외음악" className="select">해외음악</option>
              <option value="랩 힙합" className="select">랩 힙합</option>
              <option value="영화 OST" className="select">영화 OST</option>
              <option value="만화 OST" className="select">만화 OST</option>
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

export default Music;
