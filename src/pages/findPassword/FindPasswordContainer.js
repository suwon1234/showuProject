import React, { useRef, useState } from 'react';
import S from './style';
import LoginHeader from '../login/_component/LoginHeader';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import EmailButton from './EmailButton';

const FindPasswordContainer = () => {

  const [ showPw, setShowPw ] = useState(false);

  const handleShowPw = () => {
    setShowPw(!showPw)
  }

  return (
    <S.Container>
      <LoginHeader />
      <S.Wapper>
        <S.title>showU 비밀번호 변경</S.title>

          <EmailButton />

          {/* <S.LoginButton>비밀번호 변경</S.LoginButton> */}
          <Link to={'/login'}>
          <S.LoginButton>로그인으로</S.LoginButton>
          </Link>

      </S.Wapper>
    </S.Container>
  );
};

export default FindPasswordContainer;