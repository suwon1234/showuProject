import React from 'react';
import Paging from '../../_component/Paging';
import { useNavigate } from 'react-router-dom';
import S from './WatchingContainerStyle';
import Lesson from './Lesson';

const WatchingContainer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <>
      <S.Container>
        <S.Wapper>
        <S.Title>
            <p className='activeTitle'>MY CLASS</p>
            <S.SubTitle className='subTitle'>
              <ul>
              <li onClick={() => handleNavigate('/my-class/watching')}>수강중인 레슨</li>
                <li onClick={() => handleNavigate('/my-class/created')}>개설한 레슨</li>
                <li onClick={() => handleNavigate('/my-class/advice')}>상담 신청 내역</li>
              </ul>
            </S.SubTitle>
          </S.Title> 
          
          {/* 수강중인 레슨 */}
          <Lesson />

        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default WatchingContainer;