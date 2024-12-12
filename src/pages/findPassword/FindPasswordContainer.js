import React from 'react';
import S from './style';
import LoginHeader from '../login/_component/LoginHeader';
import { Link } from 'react-router-dom';

const FindPasswordContainer = () => {
  return (
    <S.Container>
      <LoginHeader />
      <S.Wapper>
        <S.title>showU 비밀번호 변경</S.title>

          <form>
            <S.inputWapper>
              <S.idLabel>
                <S.input type="text" id='id' placeholder='아이디' autoComplete="off"/>
              </S.idLabel>
              <S.passwordLabel>
                <S.input type="password" id='password' placeholder='비밀번호' autoComplete="off"/>
              </S.passwordLabel>
                <S.LockImage src={process.env.PUBLIC_URL + "/images/login/lock.png"} alt="비밀번호 잠금" />
            </S.inputWapper>
          </form>

          <S.LoginButton>비밀번호 변경</S.LoginButton>
          <Link to={'/login'}>
          <S.LoginButton>로그인으로</S.LoginButton>
          </Link>

      </S.Wapper>
    </S.Container>
  );
};

export default FindPasswordContainer;