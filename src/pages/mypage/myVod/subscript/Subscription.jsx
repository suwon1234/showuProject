import React from 'react';
import S from './SubscriptionStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Subscription = () => {
  return (
    <div>
      <S.Container className='Container'>
      <S.Wrapper className='Wrapper'>
        <S.Image className='Image'>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myVod/subVod.png"} alt="vod 포스터" />
          <div className='heartBox'>
            <FontAwesomeIcon icon={faHeart} className='heart' />
          </div>
        </S.Image>
        <S.Content className='content'>
          <p>연극&lt;긴긴밤&gt;</p>
        </S.Content>
      </S.Wrapper>
      <S.Wrapper className='Wrapper'>
        <S.Image className='Image'>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myVod/subVod.png"} alt="vod 포스터" />
          <div className='heartBox'>
            <FontAwesomeIcon icon={faHeart} className='heart' />
          </div>
        </S.Image>
        <S.Content className='content'>
          <p>연극&lt;긴긴밤&gt;</p>
        </S.Content>
      </S.Wrapper>
      <S.Wrapper className='Wrapper'>
        <S.Image className='Image'>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myVod/subVod.png"} alt="vod 포스터" />
          <div className='heartBox'>
            <FontAwesomeIcon icon={faHeart} className='heart' />
          </div>
        </S.Image>
        <S.Content className='content'>
          <p>연극&lt;긴긴밤&gt;</p>
        </S.Content>
      </S.Wrapper>
      <S.Wrapper className='Wrapper'>
        <S.Image className='Image'>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myVod/subVod.png"} alt="vod 포스터" />
          <div className='heartBox'>
            <FontAwesomeIcon icon={faHeart} className='heart' />
          </div>
        </S.Image>
        <S.Content className='content'>
          <p>연극&lt;긴긴밤&gt;</p>
        </S.Content>
      </S.Wrapper>
      <S.Wrapper className='Wrapper'>
        <S.Image className='Image'>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myVod/subVod.png"} alt="vod 포스터" />
          <div className='heartBox'>
            <FontAwesomeIcon icon={faHeart} className='heart' />
          </div>
        </S.Image>
        <S.Content className='content'>
          <p>연극&lt;긴긴밤&gt;</p>
        </S.Content>
      </S.Wrapper>
      <S.Wrapper className='Wrapper'>
        <S.Image className='Image'>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myVod/subVod.png"} alt="vod 포스터" />
          <div className='heartBox'>
            <FontAwesomeIcon icon={faHeart} className='heart' />
          </div>
        </S.Image>
        <S.Content className='content'>
          <p>연극&lt;긴긴밤&gt;</p>
        </S.Content>
      </S.Wrapper>
    </S.Container>
    </div>
  );
};

export default Subscription;