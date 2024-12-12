import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import S from './LikeMdStyle';

const LikeMd = () => {
  return (
    <S.Container className='Container'>
      <S.Wrapper className='Wrapper'>
        <S.Image className='Image'>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myMd/md.png"} alt="md 이미지" />
        </S.Image>
        <S.Content className='Content'>
          <p>베르사유의 장미 고블렛</p>
          <p>₩65,000</p>
          <FontAwesomeIcon icon={faHeart} className='heart'/>
        </S.Content>
      </S.Wrapper>
      <S.Wrapper className='Wrapper'>
        <S.Image className='Image'>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myMd/md.png"} alt="md 이미지" />
        </S.Image>
        <S.Content className='Content'>
          <p>베르사유의 장미 고블렛</p>
          <p>₩65,000</p>
          <FontAwesomeIcon icon={faHeart} className='heart'/>
        </S.Content>
      </S.Wrapper>
      <S.Wrapper className='Wrapper'>
        <S.Image className='Image'>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myMd/md.png"} alt="md 이미지" />
        </S.Image>
        <S.Content className='Content'>
          <p>베르사유의 장미 고블렛</p>
          <p>₩65,000</p>
          <FontAwesomeIcon icon={faHeart} className='heart'/>
        </S.Content>
      </S.Wrapper>
      <S.Wrapper className='Wrapper'>
        <S.Image className='Image'>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myMd/md.png"} alt="md 이미지" />
        </S.Image>
        <S.Content className='Content'>
          <p>베르사유의 장미 고블렛</p>
          <p>₩65,000</p>
          <FontAwesomeIcon icon={faHeart} className='heart'/>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default LikeMd;