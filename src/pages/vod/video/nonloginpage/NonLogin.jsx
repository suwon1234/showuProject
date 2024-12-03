import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// 컴포넌트 정의
const VideoDetail = ({play}) => {
  const {id,title,thumbnail,time,genre,year,videoUrl,mainImage}=play;
  const location=useLocation();
  return (
    <S.VideoDetailArea mainImage={mainImage}>
      <S.location >
        <S.LogoBox >{title}</S.LogoBox>
        <S.MetadataList>
        </S.MetadataList>
        <S.CommentList>
          <p>{`${year}•${time}•${genre}`}</p>
        </S.CommentList>
        <S.EssentialBox>
        </S.EssentialBox>
          <S.PlayerNoticeBox><Link to={`/vod/play/start?programid=${play.id}`}><button className='button'>로그인</button></Link><button>😁</button></S.PlayerNoticeBox>
          <p>{thumbnail}</p>
      </S.location>
    </S.VideoDetailArea>
  );
};

export default VideoDetail;
