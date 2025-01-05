import React from 'react';
import S from './ReportContainerStyle';
import Report from './Report';

const ReportContainer = () => {

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
        <S.Title className='title'>
            <p className='activeTitle'>활동 정보</p>
            <p className='like'>제보 관리</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li>작성한 제보</li>
              </ul>
            </S.SubTitle>
          </S.Title> 
          
          {/* 제보 목록 */}
          <Report />

        </S.Wapper>
      </S.Container>

    </>
  );
};

export default ReportContainer;