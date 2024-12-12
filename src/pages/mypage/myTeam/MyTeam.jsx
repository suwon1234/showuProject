import React, { useState } from 'react';
import S from './style';
import Paging from '../_component/Paging';
import MyTeamDetail from './MyTeamDetail';
import FilterContainer from './_component/FilterContainer';
const MyTeam = () => {
  const [ stateValue, setStateValue ] = useState("매칭 완료");

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

          <FilterContainer setStateValue={setStateValue} stateValue={stateValue} />

          <MyTeamDetail stateValue={stateValue} />

        </S.Wapper>
      </S.Container>

      {/* <Paging /> */}
    </>
  );
};

export default MyTeam;