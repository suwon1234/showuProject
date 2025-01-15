import React from 'react';
import Ticket from './Ticket';
import S from './TicketContainerStyle';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const TicketContainer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
        <S.Title className='title'>
            <p className='activeTitle'>티켓 예매 내역</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li onClick={() => handleNavigate('/my-res/ticket')}>예매 확인</li>
                {/* <li onClick={() => handleNavigate('/my-res/ticket/cancele')}>예매 취소</li> */}
              </ul>
            </S.SubTitle>
          </S.Title> 
          
          {/* 티켓 목록 */}
          <Ticket />

        </S.Wapper>
      </S.Container>

      <S.ScrollTop onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} className="upicon" />
      </S.ScrollTop>
    </>
  );
};

export default TicketContainer;