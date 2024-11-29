import React from 'react';
import Paging from '../_component/Paging';
import S from './MyActiveTeamStyle';
import LikeMyTeam from './like/LikeMyTeam';
import { useNavigate } from 'react-router-dom';

const MyActiveTeam = () => {
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
                <li onClick={handleNavigate}>레슨</li>
                <li>공간</li>
                <li>티켓</li>
                <li>MD</li>
                <li>경매</li>
              </ul>
            </S.SubTitle>
          </S.Title> 
          
          {/* 팀매칭 찜 목록 */}
          <LikeMyTeam />

        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default MyActiveTeam;