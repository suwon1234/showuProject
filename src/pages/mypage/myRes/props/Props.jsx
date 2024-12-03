import React from 'react';
import S from './PropsStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Props = () => {
  return (
    <div>
      <S.Container className='container'>
      <S.Warpper className='warpper'>
        <S.Image className='image'>
          <img src={process.env.PUBLIC_URL + "/images/Mypage/myRes/props.png"} alt="소품대여" />
        </S.Image>
        <S.Content className='content'>
          <S.Title className='title'>
            <p>레트로 캐리어 가죽 여행가방 촬영소품</p>
            <div className='heartBox'>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
              <p>66</p>
            </div>
          </S.Title>
          <p>25,000원</p>
        </S.Content>
      </S.Warpper>
      <S.Warpper className='warpper'>
        <S.Image className='image'>
          <img src={process.env.PUBLIC_URL + "/images/Mypage/myRes/props.png"} alt="소품대여" />
        </S.Image>
        <S.Content className='content'>
          <S.Title className='title'>
            <p>레트로 캐리어 가죽 여행가방 촬영소품</p>
            <div className='heartBox'>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
              <p>66</p>
            </div>
          </S.Title>
          <p>25,000원</p>
        </S.Content>
      </S.Warpper>
      <S.Warpper className='warpper'>
        <S.Image className='image'>
          <img src={process.env.PUBLIC_URL + "/images/Mypage/myRes/props.png"} alt="소품대여" />
        </S.Image>
        <S.Content className='content'>
          <S.Title className='title'>
            <p>레트로 캐리어 가죽 여행가방 촬영소품</p>
            <div className='heartBox'>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
              <p>66</p>
            </div>
          </S.Title>
          <p>25,000원</p>
        </S.Content>
      </S.Warpper>
      <S.Warpper className='warpper'>
        <S.Image className='image'>
          <img src={process.env.PUBLIC_URL + "/images/Mypage/myRes/props.png"} alt="소품대여" />
        </S.Image>
        <S.Content className='content'>
          <S.Title className='title'>
            <p>레트로 캐리어 가죽 여행가방 촬영소품</p>
            <div className='heartBox'>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
              <p>66</p>
            </div>
          </S.Title>
          <p>25,000원</p>
        </S.Content>
      </S.Warpper>

    </S.Container>
    </div>
  );
};

export default Props;