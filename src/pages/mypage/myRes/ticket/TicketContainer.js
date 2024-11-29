import React from 'react';
import Paging from '../../_component/Paging';
import Ticket from './Ticket';
import S from './TicketContainerStyle';
import { useNavigate } from 'react-router-dom';

const TicketContainer = () => {
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
                <li onClick={() => handleNavigate('/my-res/ticket')}>예매 확인</li>
                <li onClick={() => handleNavigate('/my-res/ticket/cancele')}>예매 취소</li>
              </ul>
            </S.SubTitle>
          </S.Title> 
          
          {/* 티켓 목록 */}
          <Ticket />

        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default TicketContainer;