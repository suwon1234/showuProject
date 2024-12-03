import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import S from './SpaceStyle';

const Space = () => {
  return (
    <S.Container className='container'>
      <S.Warpper className='warpper'>
        <S.Image className='image'>
          <img src={process.env.PUBLIC_URL + "/images/Mypage/myRes/space.png"} alt="공간대여" />
        </S.Image>
        <S.Content className='content'>
          <S.Title className='title'>
            <p>지스페이스홀(G-SPACEHALL)</p>
            <div className='heartBox'>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
              <p>66</p>
            </div>
          </S.Title>
          <p>공연홀</p>
          <p>서울 마포구</p>
          <p>660,000원~ /8시간</p>
        </S.Content>
      </S.Warpper>
      <S.Warpper className='warpper'>
        <S.Image className='image'>
          <img src={process.env.PUBLIC_URL + "/images/Mypage/myRes/space.png"} alt="공간대여" />
        </S.Image>
        <S.Content className='content'>
          <S.Title className='title'>
            <p>지스페이스홀(G-SPACEHALL)</p>
            <div className='heartBox'>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
              <p>66</p>
            </div>
          </S.Title>
          <p>공연홀</p>
          <p>서울 마포구</p>
          <p>660,000원~ /8시간</p>
        </S.Content>
      </S.Warpper>
      <S.Warpper className='warpper'>
        <S.Image className='image'>
          <img src={process.env.PUBLIC_URL + "/images/Mypage/myRes/space.png"} alt="공간대여" />
        </S.Image>
        <S.Content className='content'>
          <S.Title className='title'>
            <p>지스페이스홀(G-SPACEHALL)</p>
            <div className='heartBox'>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
              <p>66</p>
            </div>
          </S.Title>
          <p>공연홀</p>
          <p>서울 마포구</p>
          <p>660,000원~ /8시간</p>
        </S.Content>
      </S.Warpper>
      <S.Warpper className='warpper'>
        <S.Image className='image'>
          <img src={process.env.PUBLIC_URL + "/images/Mypage/myRes/space.png"} alt="공간대여" />
        </S.Image>
        <S.Content className='content'>
          <S.Title className='title'>
            <p>지스페이스홀(G-SPACEHALL)</p>
            <div className='heartBox'>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
              <p>66</p>
            </div>
          </S.Title>
          <p>공연홀</p>
          <p>서울 마포구</p>
          <p>660,000원~ /8시간</p>
        </S.Content>
      </S.Warpper>

    </S.Container>
  );
};

export default Space;