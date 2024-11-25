import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const JoinContainer = () => {
  return (
    <S.Container>
      <S.YellowBar></S.YellowBar>
      <S.LoginHeader>
        <li className='show'>Show</li>
        <li className='u'>U</li>
      </S.LoginHeader>
      <S.Wapper>
        <S.JoinBox>
          <S.title>showU 회원가입</S.title>
            <S.inputWapper>
              <S.idLabel>
                <S.input type="text" id='id' placeholder='아이디'/>
              </S.idLabel>
              <S.passwordLabel>
                <S.input type="password" id='password' placeholder='비밀번호'/>
              </S.passwordLabel>
                <S.LockImage src={process.env.PUBLIC_URL + "/images/login/lock.png"} alt="비밀번호 잠금" />
              <S.idLabel>
                <S.input type="password" id='passwordConfirm' placeholder='비밀번호 확인'/>
              </S.idLabel>
                <S.LockImage src={process.env.PUBLIC_URL + "/images/login/lock.png"} alt="비밀번호 잠금" />
              <S.idLabel>
                <S.input type="text" id='email' placeholder='이메일'/>
              </S.idLabel>
              <S.idLabel>
                <S.input type="text" id='phone' placeholder='전화번호'/>
              </S.idLabel>
            </S.inputWapper>
          
            <ul>
              <div>
                <img src={process.env.PUBLIC_URL + "/images/login/before-check.png"} alt="before-check" />
                <li>필수 및 선택 항목을 모두 포함하여 동의합니다.</li>
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/images/login/before-check.png"} alt="before-check" />
                <li>만 14세 이상입니다.</li>
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/images/login/before-check.png"} alt="before-check" />
                <li>[필수] 서비스 약관 동의</li>
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/images/login/before-check.png"} alt="before-check" />
                <li>[필수] 개인정보 수집 및 이용 동의</li>
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/images/login/before-check.png"} alt="before-check" />
                <li>[선택] 개인정보 수집 및 이용 동의</li>
              </div>
            </ul>
            <S.LoginButton>가입하기</S.LoginButton>
        </S.JoinBox>

      </S.Wapper>
    </S.Container>
  );
};

export default JoinContainer;