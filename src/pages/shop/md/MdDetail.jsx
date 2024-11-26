// MdDetail.js
import React from 'react'; 
import S from './styleDetail';
import Dropdown from './Dropdown' 

const MdDetail = () => {
  const options = ['옵션 1', '옵션 2', '옵션 3']; 

  return (
    <S.DetailContainer>
      <S.ImageWrapper>
        <img src="https://shop-phinf.pstatic.net/20240911_83/17260383426329TtFF_JPEG/6410700596837064_1032211939.jpg?type=m510"/>
      </S.ImageWrapper>

    <S.DetailWrapper>
      <S.MdInfo>
        <p>뮤지컬</p>
        <p>2024 베르사유의 장미 프로그램북 스페셜 에디션</p>
        <p>65,000원</p>
      </S.MdInfo>
    
      <S.Dropdown>
        <p>옵션 선택</p>
        <Dropdown options={options} /> 
      </S.Dropdown>
      
      <S.ButtonWrapper2>
        <S.ButtonWrapper>
          <S.Button1><p>카트 추가</p></S.Button1>
          <S.Button2><p>바로 구매</p></S.Button2>
        </S.ButtonWrapper>
        <S.Button3><p>문의하기</p></S.Button3>
      </S.ButtonWrapper2>
    </S.DetailWrapper>
    </S.DetailContainer>
  );
};

export default MdDetail;