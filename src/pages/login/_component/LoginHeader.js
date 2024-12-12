import React from 'react';
import S from './LoginHeaderStyle';
import { Link } from 'react-router-dom';

const LoginHeader = () => {
  return (
    <>
     <S.YellowBar></S.YellowBar>
      <S.LoginHeader>
      <Link to={"/main"}>
          <span className='show'>Show</span>
          <span className='u'>U</span>
        </Link>
      </S.LoginHeader> 
    </>
  );
};

export default LoginHeader;