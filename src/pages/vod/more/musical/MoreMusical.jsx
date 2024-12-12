import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const More = ({plays}) => {
  const [selectedCategory, setSelectedCategory] = useState("인기순");
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <div>
       <S.showuRecommendation>
        
       <S.topwrapper className='topwrapper'>
         <S.title className='title'>ShowU의 추천</S.title>
         <S.DropdownWrapper>
        <S.Dropdown onChange={handleCategoryChange} value={selectedCategory}>
          <option className='select'>인기순</option>
          <option className='select'>최신순</option>
        </S.Dropdown>
      </S.DropdownWrapper>
       </S.topwrapper>
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
    </div>
  );
};

export default More;