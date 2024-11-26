// 오디션 메인 화면

import React from 'react';
import S from '../style';
import { Link } from 'react-router-dom';

const Audition = () => {
  return (
    <S.Wrapper>
        <S.TopTitle>
          Audition
        </S.TopTitle>
      <S.SubWrapper>
      <S.Titles>
          <S.MainTitle>Audition</S.MainTitle>
          <S.SubTitle>ShowU에서 전해드리는 다양한 오디션 소식</S.SubTitle>
        </S.Titles>    
  
        <S.ButtonsAll>
          <div>
            <button>전체</button>
            <button>공연</button>
            <button>뮤지컬</button>
            <button>영화</button>
            <button>연극</button>
            <button>밴드</button>
          </div>
        </S.ButtonsAll>

        <S.ImageWrapper>
          <img src='../images/audition/audition-musical-1.jpg'alt='뮤지컬 이미지 1'/>
          <img src='../images/audition/audition-musical-2.jpg'alt='뮤지컬 이미지 2'/>
          <img src='../images/audition/audition-theater-1.jpg'alt='연극 이미지 1'/>
          <img src='../images/audition/audition-musical-1.jpg'alt='뮤지컬 이미지 1'/>
          <img src='../images/audition/audition-musical-1.jpg'alt='뮤지컬 이미지 1'/>
          <img src='../images/audition/audition-musical-1.jpg'alt='뮤지컬 이미지 1'/>
          <img src='../images/audition/audition-musical-1.jpg'alt='뮤지컬 이미지 1'/>
          <img src='../images/audition/audition-musical-1.jpg'alt='뮤지컬 이미지 1'/>
          <img src='../images/audition/audition-musical-1.jpg'alt='뮤지컬 이미지 1'/>
        </S.ImageWrapper>
      </S.SubWrapper>     
    </S.Wrapper>
  );
};

export default Audition;
