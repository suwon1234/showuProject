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
            <Link to={"/mypage/myTeam"}>
              <li>팀 매칭</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>MY CLASS</li>
            <Link to={"/mypage/myClass"}>
              <li>레슨</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>예약 정보</li>
          <Link to={"/mypage/MyPay"}>
            <li>공간 대여 내역</li>
          </Link> 
            <Link to={"/mypage/myRes"}>
              <li>티켓 예매 내역</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>VOD 정보</li>
            <Link to={"/mypage/myVod"}>
              <li>나의 VOD</li>
            </Link>
            <Link to={"/mypage/myVod"}>
              <li>구독한 리스트</li>
            </Link>
            <Link to={"/mypage/myVod"}>
              <li>시청중인 컨텐츠</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>활동 정보</li>
            <Link to={"/mypage/myActive"}>
              <li>찜</li>
            </Link>
            <Link to={"/mypage/myActive"}>
              <li>후기 관리</li>
            </Link>
            <Link to={"/mypage/myActive"}>
              <li>작성한 글ㆍ댓글 관리</li>
            </Link>
            <Link to={"/mypage/myActive"}>
              <li>제보 관리</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>등급업 정보</li>
            <Link to={"/mypage/myGrade"}>
              <li>신청서 작성</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>결제 정보</li>
            <Link to={"/mypage/myPay"}>
              <li>결제 내역</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
          <Link to={"/mypage/myInfo"}>
            <li>회원정보 관리</li>
          </Link>
        </S.Ul>
      </S.LeftSection>
      
    </S.Container>
  );
};

export default MypageContainer;