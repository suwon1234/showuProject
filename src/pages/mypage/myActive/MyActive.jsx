import React from 'react';
import S from './style';
import Paging from '../_component/Paging';

const MyActive = () => {
  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
          <S.Title className='title'>
            <p>활동 정보</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li>팀 매칭</li>
                <li onClick={() => {}}>레슨</li>
                <li>공간ㆍ소품</li>
                <li>티켓</li>
                <li>MD</li>
                <li>경매</li>
              </ul>
            </S.SubTitle>
          </S.Title>

        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default MyActive;