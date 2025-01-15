import React from 'react';
import S from './style';
import Pay from './Pay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const MyPay = () => {

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
          <S.Title className='title'>
            <p>결제 정보</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li>결제 내역</li>
              </ul>
            </S.SubTitle>
          </S.Title>

          <Pay />

        </S.Wapper>
      </S.Container>

      <S.ScrollTop onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} className="upicon" />
      </S.ScrollTop>

    </>
  );
};

export default MyPay;