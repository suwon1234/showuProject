import React from 'react';
import S from './style';
import LoginHeader from '../login/_component/LoginHeader';
import Checkbox from '../login/_component/Checkbox';
import { Link } from 'react-router-dom';

const JoinContainer = () => {
  return (
    <S.Container>

      <LoginHeader />

      <S.Wapper>
        <S.JoinBox>
          <S.title>showU 회원가입</S.title>

            <S.Form>
              <S.idLabel>
                <S.input type="text" id='id' placeholder='아이디' />
              </S.idLabel>
              <S.passwordLabel>
                <S.input type="password" id='password' placeholder='비밀번호' autoComplete="off"/>
              </S.passwordLabel>
                <S.LockImage src={process.env.PUBLIC_URL + "/images/login/lock.png"} alt="비밀번호 잠금" />
              <S.idLabel>
                <S.input type="password" id='passwordConfirm' placeholder='비밀번호 확인' autoComplete="off"/>
              </S.idLabel>
                <S.LockImage src={process.env.PUBLIC_URL + "/images/login/lock.png"} alt="비밀번호 잠금" />
              <S.idLabel>
                <S.input type="text" id='email' placeholder='이메일'/>
              </S.idLabel>
              <S.idLabel>
                <S.input type="text" id='phone' placeholder='전화번호'/>
              </S.idLabel>
            </S.Form>
          
            <S.AgreeWapper>
              <S.AgreeBox>
                <Checkbox />
                <span className='AllAgree'>필수 및 선택 항목을 모두 포함하여 동의합니다.</span>
              </S.AgreeBox>
              <S.AgreeBox>
                <Checkbox />
                <span>만 14세 이상입니다.</span>
              </S.AgreeBox>
              <S.AgreeBox>
                <Checkbox />
                <span>[필수] 서비스 약관 동의</span>
              </S.AgreeBox>
              <S.AgreeBox>
                <Checkbox />
                <span>[필수] 개인정보 수집 및 이용 동의</span>
              </S.AgreeBox>
              <S.AgreeBox>
                <Checkbox />
                <span>[선택] 개인정보 수집 및 이용 동의</span>
              </S.AgreeBox>
            </S.AgreeWapper>
            <S.LoginButton>가입하기</S.LoginButton>
            <Link to={'/login'}>
            <S.LoginButton>로그인으로</S.LoginButton>
            </Link>
        </S.JoinBox>

      </S.Wapper>
    </S.Container>
  );
};

export default JoinContainer;