import React from 'react';
import Paging from '../../_component/Paging';
import { useNavigate } from 'react-router-dom';
import Cancele from './Cancele';
import S from './CanceleContainerStyle';

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
                <li onClick={() => handleNavigate('/my-res/ticket')}>예매 확인</li>
                <li onClick={() => handleNavigate('/my-res/ticket/cancele')}>예매 취소</li>
              </ul>
            </S.SubTitle>
          </S.Title> 
          
          {/* 티켓 취소 목록 */}
          <Cancele />

        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default CanceleContainer;