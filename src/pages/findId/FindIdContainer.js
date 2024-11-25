import React from 'react';
import S from './style';

const FindIdContainer = () => {
  return (
    <S.Container>
      <S.YellowBar></S.YellowBar>
      <S.LoginHeader>
        <li className='show'>Show</li>
        <li className='u'>U</li>
      </S.LoginHeader>
      <S.Wapper>
        <S.title>showU ID 로그인</S.title>

          <S.inputWapper>
            <S.idLabel>
              <S.input type="text" id='id' placeholder='아이디'/>
            </S.idLabel>
            <S.passwordLabel>
              <S.input type="password" id='password' placeholder='비밀번호'/>
            </S.passwordLabel>
              <S.LockImage src={process.env.PUBLIC_URL + "/images/login/lock.png"} alt="비밀번호 잠금" />
          </S.inputWapper>

          <S.CheckBoxWapper>
            <img src={process.env.PUBLIC_URL + "/images/login/before-check.png"} alt="before-check" />
            <span>아이디 저장</span>
            <img src={process.env.PUBLIC_URL + "/images/login/before-check.png"} alt="before-check" />
            <span>자동 로그인</span>
          </S.CheckBoxWapper>

          <S.LoginButton>아이디 찾기</S.LoginButton>

      </S.Wapper>
    </S.Container>
  );
};

export default FindIdContainer;