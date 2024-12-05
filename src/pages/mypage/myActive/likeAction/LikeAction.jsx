import React from 'react';
import S from './LikeAuctionStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const LikeAction = () => {
  return (
    <div>
      <S.Container>
      <S.Wrapper>
        <S.Image>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myMd/md.png"} alt="md 이미지" />
        </S.Image>
        <S.Content>
          <p className='title'>베르사유의 장미 고블렛</p>
          <S.AuctionBox>
            <S.AuctionWrapper>
              <p className='auction'>입찰 57회</p>
              <img src={process.env.PUBLIC_URL + "/images/mypage/myMd/alram.png"} alt="" />
              <p className='time'>2일 21시간</p>
            </S.AuctionWrapper>
          </S.AuctionBox>
          <FontAwesomeIcon icon={faHeart} className='heart'/>
        </S.Content>
      </S.Wrapper>
      <S.Wrapper>
        <S.Image>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myMd/md.png"} alt="md 이미지" />
        </S.Image>
        <S.Content>
          <p className='title'>베르사유의 장미 고블렛</p>
          <S.AuctionBox>
          <S.AuctionWrapper>
              <p className='auction'>입찰 57회</p>
              <img src={process.env.PUBLIC_URL + "/images/mypage/myMd/alram.png"} alt="" />
              <p className='time'>2일 21시간</p>
            </S.AuctionWrapper>
          </S.AuctionBox>
          <FontAwesomeIcon icon={faHeart} className='heart'/>
        </S.Content>
      </S.Wrapper>
      <S.Wrapper>
        <S.Image>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myMd/md.png"} alt="md 이미지" />
        </S.Image>
        <S.Content>
          <p className='title'>베르사유의 장미 고블렛</p>
          <S.AuctionBox>
          <S.AuctionWrapper>
              <p className='auction'>입찰 57회</p>
              <img src={process.env.PUBLIC_URL + "/images/mypage/myMd/alram.png"} alt="" />
              <p className='time'>2일 21시간</p>
            </S.AuctionWrapper>
          </S.AuctionBox>
          <FontAwesomeIcon icon={faHeart} className='heart'/>
        </S.Content>
      </S.Wrapper>
      <S.Wrapper>
        <S.Image>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myMd/md.png"} alt="md 이미지" />
        </S.Image>
        <S.Content>
          <p className='title'>베르사유의 장미 고블렛</p>
          <S.AuctionBox>
          <S.AuctionWrapper>
              <p className='auction'>입찰 57회</p>
              <img src={process.env.PUBLIC_URL + "/images/mypage/myMd/alram.png"} alt="" />
              <p className='time'>2일 21시간</p>
            </S.AuctionWrapper>
          </S.AuctionBox>
          <FontAwesomeIcon icon={faHeart} className='heart'/>
        </S.Content>
      </S.Wrapper>
    </S.Container>
    </div>
  );
};

export default LikeAction;