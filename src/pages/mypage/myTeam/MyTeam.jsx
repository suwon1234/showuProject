import React from 'react';
import S from './style';
import Paging from '../_component/Paging';

const MyTeam = () => {
  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
          <S.Title className='title'>
            <p>MY TEAM</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li>팀 매칭 내역</li>
              </ul>
            </S.SubTitle>
          </S.Title>


        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default MyTeam;