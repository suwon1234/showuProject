import React from 'react';
import Paging from '../../_component/Paging';
import { useNavigate } from 'react-router-dom';
import S from './DetailContainerStyle';
import Detail from './Detail';

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
            <p className='activeTitle'>티켓 예매 내역</p>
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