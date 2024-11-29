import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const CompleteIdContainer = () => {
  return (
    <S.Container>
      <S.YellowBar></S.YellowBar>
      <S.LoginHeader>
      <Link to={"/main"}>
          <span className='show'>Show</span>
          <span className='u'>U</span>
        </Link>
      </S.LoginHeader>
      <S.Wapper>
        <S.title>showU ID 찾기</S.title>

          <S.inputWapper>
            <S.idLabel>
              <S.input type="text" id='id' placeholder='아이디'/>
            </S.idLabel>
            <S.passwordLabel>
              <S.input type="password" id='password' placeholder='비밀번호'/>
            </S.passwordLabel>
              <S.LockImage src={process.env.PUBLIC_URL + "/images/login/lock.png"} alt="비밀번호 잠금" />
          </S.inputWapper>

          <S.LoginButton>아이디 찾기</S.LoginButton>

      </S.Wapper>
    </S.Container>
  );
};

export default CompleteIdContainer;