import React from 'react';
import Paging from '../../_component/Paging';
import Props from './Props';
import S from './PropsContainerStyle';
import { useNavigate } from 'react-router-dom';

const PropsContainer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
        <S.Title className='title'>
            <p className='activeTitle'>공간ㆍ소품 대여 내역</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li onClick={() => handleNavigate('/my-res/space')}>공간 대여</li>
                <li onClick={() => handleNavigate('/my-res/props')}>소품 대여</li>
                <li onClick={() => handleNavigate('/my-res/returns')}>반납 내역</li>
              </ul>
            </S.SubTitle>
          </S.Title> 
          
          {/* 소품 목록 */}
          <Props />

        </S.Wapper>
      </S.Container>

      <Paging />
    </>
  );
};

export default PropsContainer;