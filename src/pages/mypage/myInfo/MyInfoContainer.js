import React from 'react';
import users from '../_component/users';
import { Link } from 'react-router-dom';


const MyInfoContainer = () => {
  const [ fristUser, ...otherUsers ] = users;

  return (
    <>
      <div>
        <ul>
          <li>마이페이지</li>
          <li>{fristUser.name}님, 안녕하세요!</li>
        </ul>
        <ul>
          <li>MY TEAM</li>
          <Link to={"/mypage/myTeam"}>
            <li>팀 매칭</li>
          </Link>
        </ul>
        <ul>
          <li>MY CLASS</li>
          <li>레슨</li>
        </ul>
        <ul>
          <li>예약 정보</li>
          <li>공간 대여 내역</li>
          <li>티켓 예매 내역</li>
        </ul>
        <ul>
          <li>VOD 정보</li>
          <li>나의 VOD</li>
          <li>구독한 리스트</li>
          <li>시청중인 컨텐츠</li>
        </ul>
        <ul>
          <li>활동 정보</li>
          <li>찜</li>
          <li>후기 관리</li>
          <li>작성한 글ㆍ댓글 관리</li>
          <li>제보 관리</li>
        </ul>
        <ul>
          <li>등급업 정보</li>
          <li>신청서 작성</li>
        </ul>
        <ul>
          <li>결제 정보</li>
          <li>결제 내역</li>
        </ul>
        <ul>
          <li>회원정보 관리</li>
        </ul>
      </div>
    </>
  );
};

export default MyInfoContainer;