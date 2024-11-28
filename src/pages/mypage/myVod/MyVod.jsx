import React from 'react';
import S from './style';
import Paging from '../_component/Paging';

const MyVod = () => {
  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
          <S.Title className='title'>
            <p>VOD 정보</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li>나의 VOD</li>
                <li>구독한 리스트</li>
                <li>시청중인 컨텐츠</li>
              </ul>
            </S.SubTitle>
          </S.Title>


        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default MyVod;