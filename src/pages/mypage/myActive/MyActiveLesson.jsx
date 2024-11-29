import React from 'react';
import Paging from '../_component/Paging';
import { useNavigate } from 'react-router-dom';
import LikeLesson from './LikeLesson';
import S from './MyActiveLessonStyle';

const MyActiveLesson = () => {
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
                <li>공간ㆍ소품</li>
                <li>티켓</li>
                <li>MD</li>
                <li>경매</li>
              </ul>
            </S.SubTitle>
          </S.Title>
          
          {/* 레슨 찜 목록 */}
          <LikeLesson />

        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default MyActiveLesson;