import React from 'react';
import { useNavigate } from 'react-router-dom';
import LikeMyTeam from './LikeMyTeam';
import Paging from '../../_component/Paging';
import S from './MyActiveTeamStyle';

const MyActiveTeam = ({ setActiveContent }) => {
  const navigate = useNavigate();

  const handleNavigate = (content) => {
    setActiveContent(content)
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
                <li onClick={handleNavigate('team')}>팀 매칭</li>
                <li onClick={handleNavigate('lesson')}>레슨</li>
                <li onClick={handleNavigate('space')}>공간</li>
                <li onClick={handleNavigate('prop')}>소품</li>
                <li onClick={handleNavigate('ticket')}>티켓</li>
                <li onClick={handleNavigate('md')}>MD</li>
                <li onClick={handleNavigate('action')}>경매</li>
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