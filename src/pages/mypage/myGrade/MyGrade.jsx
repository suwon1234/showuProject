import React from 'react';
import S from './style';
import Paging from '../_component/Paging';

const MyGrade = () => {
  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
          <S.Title className='title'>
            <p>등급업 정보</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li>신청서 작성</li>
              </ul>
            </S.SubTitle>
          </S.Title>


        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default MyGrade;