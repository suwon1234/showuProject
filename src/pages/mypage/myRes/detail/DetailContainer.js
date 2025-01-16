import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './DetailContainerStyle';
import Detail from './Detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const CanceleContainer = () => {
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
                <li>예매 정보</li>
              </ul>
            </S.SubTitle>
          </S.Title> 
          
          {/* 티켓 상세 */}
          <Detail />

        </S.Wapper>
      </S.Container>

      <S.ScrollTop onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} className="upicon" />
      </S.ScrollTop>

    </>
  );
};

export default CanceleContainer;