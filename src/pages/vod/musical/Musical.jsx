import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import S from './style';

const Musical = ({ plays }) => {
  const musicals = (plays || []).filter(item => item.genre === '뮤지컬');
  const [selectedCategory, setSelectedCategory] = useState("인기순");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <S.showuRecommendation>
        <S.topwrapper className="topwrapper">
          <S.title className="title">Musical</S.title>
          <S.DropdownWrapper>
            <S.Dropdown onChange={handleCategoryChange} value={selectedCategory}>
              <option value="인기순" className="select">인기순</option>
              <option value="최신순" className="select">최신순</option>
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

export default Musical;
