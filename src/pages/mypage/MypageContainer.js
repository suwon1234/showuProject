import React from 'react';
import users from './_component/users';
import S from './style';
import { Link } from 'react-router-dom';


const MypageContainer = () => {
  const [ fristUser, ...otherUsers ] = users;

  return (
    <S.Container className='Container'>
      <S.LeftSection className='Wapper'>
        <S.Title className='title'>
          <li>마이페이지</li>
          <li>{fristUser.name}님, 안녕하세요!</li>
        </S.Title>
        <S.Ul>
            <li>MY TEAM</li>
            <Link to={"/my-team"}>
              <li>팀 매칭</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>MY CLASS</li>
            <Link to={"/my-class/watching"}>
              <li>레슨</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>예약 정보</li>
          <Link to={"/my-res/space"}>
            <li>공간 대여 내역</li>
          </Link> 
            <Link to={"/my-res/ticket"}>
              <li>티켓 예매 내역</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>VOD 정보</li>
            <Link to={"/my-vod"}>
              <li>나의 VOD</li>
            </Link>
            <Link to={"/my-vod/subscriptions"}>
              <li>구독한 리스트</li>
            </Link>
            <Link to={"/my-vod/watching"}>
              <li>시청중인 컨텐츠</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>활동 정보</li>
            <Link to={"/my-active/like/my-team"}>
              <li>찜</li>
            </Link>
            <Link to={"/my-active/reviews"}>
              <li>후기 관리</li>
            </Link>
            <Link to={"/my-active/posts"}>
              <li>작성한 글ㆍ댓글 관리</li>
            </Link>
            <Link to={"/my-active/reports"}>
              <li>제보 관리</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>등급업 정보</li>
            <Link to={"/up-grade"}>
              <li>신청서 작성</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>결제 정보</li>
            <Link to={"/my-pay"}>
              <li>결제 내역</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
          <Link to={"/mypage"}>
            <li>회원정보 관리</li>
          </Link>
        </S.Ul>
      </S.LeftSection>
      
    </S.Container>
  );
};

export default MypageContainer;