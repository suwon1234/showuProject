import React from 'react';
import { useNavigate } from 'react-router-dom';
import Paging from '../../_component/Paging';
import Watch from './Watch';
import S from './WatchContainerStyle';

const WatchContainer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
          <S.Title className='title'>
            <p>VOD 정보</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li onClick={() => handleNavigate('/my-vod')}>나의 VOD</li>
                <li onClick={() => handleNavigate('/my-vod/subscriptions')}>구독한 리스트</li>
                <li onClick={() => handleNavigate('/my-vod/watching')}>시청중인 컨텐츠</li>
              </ul>
            </S.SubTitle>
          </S.Title>

          <Watch />

        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default WatchContainer;