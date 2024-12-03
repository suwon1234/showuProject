import React from 'react';
import S from './style';
import Paging from '../_component/Paging';
import Pay from './Pay';

const MyPay = () => {
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

      <Paging />
    </>
  );
};

export default MyPay;