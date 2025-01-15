import React from 'react';
import S from '../style';
import Update from './Update';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const MyGradeUpdate = () => {

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
          <S.Title className='title'>
            <p>등급업 정보</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li>신청서 수정</li>
              </ul>
            </S.SubTitle>
          </S.Title>

          <Update />

        </S.Wapper>
      </S.Container>

      <S.ScrollTop onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} className="upicon" />
      </S.ScrollTop>
    </>
  );
};

export default MyGradeUpdate;