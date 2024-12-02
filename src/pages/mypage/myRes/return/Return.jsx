import React from 'react';
import S from './RetrunStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Return = () => {
  return (
    <div>
      <S.Container>
      <S.Warpper>
        <S.Image>
          <img src={process.env.PUBLIC_URL + "/images/Mypage/myRes/props.png"} alt="소품대여" />
        </S.Image>
        <S.Content>
          <S.Title>
            <p>레트로 캐리어 가죽 여행가방 촬영소품</p>
            <div className='heartBox'>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
              <p>66</p>
            </div>
          </S.Title>
          <p>25,000원</p>
          <p>4일 남음</p>
        </S.Content>
      </S.Warpper>
      <S.Warpper>
        <S.Image>
          <img src={process.env.PUBLIC_URL + "/images/Mypage/myRes/props.png"} alt="소품대여" />
        </S.Image>
        <S.Content>
          <S.Title>
            <p>레트로 캐리어 가죽 여행가방 촬영소품</p>
            <div className='heartBox'>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
              <p>66</p>
            </div>
          </S.Title>
          <p>25,000원</p>
          <p>6일 남음</p>
        </S.Content>
      </S.Warpper>
      <S.Warpper>
        <S.GrayImg>
          <img className='grayImg' src={process.env.PUBLIC_URL + "/images/Mypage/myRes/props.png"} alt="소품대여" />
          <p>반납 완료</p>
        </S.GrayImg>
        <S.Content>
          <S.Title>
            <p>레트로 캐리어 가죽 여행가방 촬영소품</p>
            <div className='heartBox'>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
              <p>66</p>
            </div>
          </S.Title>
          <p>25,000원</p>
        </S.Content>
      </S.Warpper>
      <S.Warpper>
        <S.GrayImg>
          <img className='grayImg' src={process.env.PUBLIC_URL + "/images/Mypage/myRes/props.png"} alt="소품대여" />
          <p>반납 완료</p>
        </S.GrayImg>
        <S.Content>
          <S.Title>
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

export default Return;