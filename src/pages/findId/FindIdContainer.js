import React, { useState } from 'react';
import S from './style';
import LoginHeader from '../login/_component/LoginHeader';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

const FindIdContainer = () => {
  const [ showPw, setShowPw ] = useState(false);

  const handleShowPw = () => {
    setShowPw(!showPw)
  }

  return (
    <S.Container>
      <LoginHeader />
      <S.Wapper>
        <S.title>showU ID 찾기</S.title>

          <form>
            <S.inputWapper>
              <S.idLabel>
                <S.input type="text" id='id' placeholder='아이디' autoComplete="off"/>
              </S.idLabel>
              <S.passwordLabel>
                <S.input 
                  type={showPw ? "test" : "password"} 
                  id='password' 
                  placeholder='비밀번호' 
                  autoComplete="off"
                />
                {
                  showPw ?
                  (
                  <FontAwesomeIcon 
                    icon={faLockOpen} 
                    onClick={() => handleShowPw()}
                    className='lockImage' 
                  />
                  )
                   : 
                  (
                  <FontAwesomeIcon 
                    icon={faLock}
                    onClick={() => handleShowPw()}
                    className='lockImage'
                  />
                  )
                }
              </S.passwordLabel>
            </S.inputWapper>
          </form>

          <S.LoginButton>아이디 찾기</S.LoginButton>
          <Link to={'/login'}>
          <S.LoginButton>로그인으로</S.LoginButton>
          </Link>

      </S.Wapper>
    </S.Container>
  );
};

export default FindIdContainer;