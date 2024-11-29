import React from 'react';
import { useNavigate } from 'react-router-dom';
import LikeTicket from './LikeTicket';
import Paging from '../../_component/Paging';
import S from './MyActiveTicketStyle';

const MyActiveTicket = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
          <S.Title className='title'>
            <p className='activeTitle'>활동 정보</p>
            <p className='like'>찜</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li>팀 매칭</li>
                <li>레슨</li>
                <li>공간</li>
                <li>소품</li>
                <li>티켓</li>
                <li>MD</li>
                <li>경매</li>
              </ul>
            </S.SubTitle>
          </S.Title>
          
          {/* 티켓 찜 목록 */}
          <LikeTicket />

        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default MyActiveTicket;