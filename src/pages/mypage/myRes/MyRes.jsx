import React from 'react';
import S from './style';
import Paging from '../_component/Paging';
import { useNavigate } from 'react-router-dom';

const MyRes = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/mypage/myPay')
  }

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
          <S.Title className='title'>
            <p>공간ㆍ소품 대여 내역</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li onClick={handleNavigate}>공간 대여</li>
                <li>소품 대여</li>
                <li>취소 내역</li>
              </ul>
            </S.SubTitle>
          </S.Title>


        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default MyRes;