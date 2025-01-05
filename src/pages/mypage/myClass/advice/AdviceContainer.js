import React from 'react';
import { useNavigate } from 'react-router-dom';
import Advice from './Advice';
import S from './AdviceContainerStyle';

const AdviceContainer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
        <S.Title className='title'>
            <p className='activeTitle'>MY CLASS</p>
            <S.SubTitle className='subTitle'>
              <ul>
                {/* <li onClick={() => handleNavigate('/my-class/watching')}>수강중인 레슨</li> */}
                <li onClick={() => handleNavigate('/my-class/created')}>개설한 레슨</li>
                <li onClick={() => handleNavigate('/my-class/advice')}>상담 신청 내역</li>
              </ul>
            </S.SubTitle>
          </S.Title> 
          
          {/* 상담 신청 내역 */}
          <Advice />

        </S.Wapper>
      </S.Container>

    </>
  );
};

export default AdviceContainer;