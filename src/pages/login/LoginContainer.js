import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const LoginContainer = () => {
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

          <S.LoginButton>로그인하기</S.LoginButton>

          <S.JoinFind>
            <Link to={"/findId"}>
              <li>아이디 찾기</li>
            </Link>
            <Link to={"/findPassword"}>
              <li>비밀번호 변경</li>
            </Link>
            <Link to={"/join"}>
              <li className='lastLi'>회원가입</li>
            </Link>
          </S.JoinFind>

          <S.JoinSns>
            <p class='joinP'>또는 다른 서비스 계정으로 가입</p>
            <S.LoginSns>
              <li className='kakao'><img src={process.env.PUBLIC_URL + "/images/login/kakao.png"} alt="kakao" /></li>
              <li className='naver'><img src={process.env.PUBLIC_URL + "/images/login/naver.png"} alt="naver" /></li>
              <li className='google'><img src={process.env.PUBLIC_URL + "/images/login/google.png"} alt="google" /></li>
            </S.LoginSns>
          </S.JoinSns>

      </S.Wapper>
    </S.Container>
  );
};

export default LoginContainer;