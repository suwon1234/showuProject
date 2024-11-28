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
          <Link to={"/mypage/myTeam"}>
            <li>MY TEAM</li>
          </Link>
            <li>팀 매칭</li>
            <hr />
        </S.Ul>
        <S.Ul>
          <Link to={"/mypage/myClass"}>
            <li>MY CLASS</li>
          </Link>
            <li>레슨</li>
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
          <Link to={"/mypage/myVod"}>
            <li>VOD 정보</li>
          </Link>
            <li>나의 VOD</li>
            <li>구독한 리스트</li>
            <li>시청중인 컨텐츠</li>
            <hr />
        </S.Ul>
        <S.Ul>
          <Link to={"/mypage/myActive"}>
            <li>활동 정보</li>
          </Link>
            <li>찜</li>
            <li>후기 관리</li>
            <li>작성한 글ㆍ댓글 관리</li>
            <li>제보 관리</li>
            <hr />
        </S.Ul>
        <S.Ul>
          <Link to={"/mypage/myGrade"}>
            <li>등급업 정보</li>
          </Link>
            <li>신청서 작성</li>
            <hr />
        </S.Ul>
        <S.Ul>
          <Link to={"/mypage/myPay"}>
            <li>결제 정보</li>
          </Link>
            <li>결제 내역</li>
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