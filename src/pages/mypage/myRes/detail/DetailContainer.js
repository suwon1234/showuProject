import React from 'react';
import Paging from '../../_component/Paging';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';
import S from './DetailContainerStyle';

const CanceleContainer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
        <S.Title className='title'>
            <p className='activeTitle'>활동 정보</p>
            <p className='like'>제보 관리</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li>예매 정보</li>
              </ul>
            </S.SubTitle>
          </S.Title> 
          
          {/* 티켓 상세 */}
          <Detail />

        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default CanceleContainer;