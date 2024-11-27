import React from 'react';
import S from './style';

const Layout = ({ leftContent, rightContent }) => {
  return (
    <S.LayoutContainer>
      <S.leftContainer>{leftContent}</S.leftContainer>
      <S.RightContainer>{rightContent}</S.RightContainer>
    </S.LayoutContainer>
  );
};

export default Layout;