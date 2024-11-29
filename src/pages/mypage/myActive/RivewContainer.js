import React from 'react';
import Paging from '../../_component/Paging';
import S from './MyActiveTeamStyle';
import Rivew from './list/Rivew';

const RivewContainer = () => {

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
        <S.Title className='title'>
            <p className='activeTitle'>활동 정보</p>
            <p className='like'>후기 관리</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li>작성한 후기</li>
              </ul>
            </S.SubTitle>
          </S.Title> 
          
          {/* 후기 목록 */}
          <Rivew />

        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default RivewContainer;