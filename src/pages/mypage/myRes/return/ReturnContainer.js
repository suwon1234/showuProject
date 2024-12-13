import React, { useState } from 'react';
import Paging from '../../_component/Paging';
import { useNavigate } from 'react-router-dom';
import Return from './Return';
import S from './ReturnContainerStyle';
import FilterContainer from './_component/FilterContainer';

const ReturnContainer = () => {
  const [stateValue, setStateValue] = useState("남은 기간"); 

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
          <S.Title className='title'>
            <p className='activeTitle'>공간ㆍ소품 대여 내역</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li onClick={() => handleNavigate('/my-res/space')}>공간 대여</li>
                <li onClick={() => handleNavigate('/my-res/props')}>소품 대여</li>
                <li onClick={() => handleNavigate('/my-res/returns')}>반납 내역</li>
              </ul>
            </S.SubTitle>
          </S.Title>

          {/* 필터 컨테이너 */}
          <FilterContainer stateValue={stateValue} setStateValue={setStateValue} />

          {/* 리턴 목록 */}
          <Return stateValue={stateValue} />
        </S.Wapper>
      </S.Container>

      {/* <Paging /> */}
    </>
  );
};

export default ReturnContainer;
