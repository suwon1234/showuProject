import React from 'react';
import S from '../style';
import Update from './Update';

const MyGradeUpdate = () => {
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
    </>
  );
};

export default MyGradeUpdate;