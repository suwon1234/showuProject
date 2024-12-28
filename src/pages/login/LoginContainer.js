import React, { useState } from 'react';
import S from './style';
import { Link, useNavigate } from 'react-router-dom';
import LoginHeader from './_component/LoginHeader';
import Check from './_component/Check';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

const LoginContainer = () => {

  const navigate = useNavigate();
  const [ showPw, setShowPw ] = useState(false);

  const handleShowPw = () => {
    setShowPw(!showPw)
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const { register, handleSubmit, getValues,
          formState : { isSubmitting, isSubmitted, errors }
        } = useForm({ mode : "onChange"})


  return (
    <S.Container>

      <LoginHeader />

      <S.Wapper>
        <S.title>showU ID 로그인</S.title>

          <S.Form onSubmit={handleSubmit( async (data) => {
            console.log(data)

            const { email, password } = data;
            await fetch(`http://localhost:8000/auth/local`, {
              method : "POST",
              headers : {
                'Content-Type' : 'application/json'
              },
              body : JSON.stringify({
                email : email,
                password : password
              })
            })
            .then((res) => res.json())
            .then((res) => {
              if(!res.ok){ alert(res.message) }
              localStorage.setItem("jwtToken", res.jwtToken);
              navigate('/main')
              console.log(res)
            })
          })}>
            <S.idLabel>
              <S.input 
                type="text" id='id' placeholder='아이디' autoComplete="off" required
                {...register("email", {
                  required : true,
                  pattern : {
                    value : emailRegex
                  }
                })}
              />
              {errors?.email?.type === 'required' && (
                <p>이메일을 입력해주세요.</p>
              )}
              {errors?.email?.type === 'pattern' && (
                <p>이메일 양식에 맞게 입력해주세요.</p>
              )}
            </S.idLabel>
            <S.passwordLabel>
              <S.input 
                type={showPw ? "test" : "password"} 
                id='password' 
                placeholder='비밀번호' 
                autoComplete="off"
                {...register("password", {
                  required : true,
                  pattern : {
                    value : passwordRegex
                  }
                })}
              />
              { errors?.password?.type === 'required' && (
                <p>비밀번호를 입력하세요</p>
              )}
              { errors?.password?.type === 'pattern' && (
                <p>소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상이어야 합니다</p>
              )}
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
          
          <S.CheckBoxWapper>
            <S.SaveId >
              <Check />
              <span>아이디 저장</span>
            </S.SaveId>
            <S.SaveId>
              <Check />
              <span>자동 로그인</span>
            </S.SaveId>
          </S.CheckBoxWapper>

          <S.LoginButton
            disabled = {isSubmitting}
          >
            로그인
          </S.LoginButton>
          
          </S.Form>

          <S.JoinFind>
            <Link to={"/find-id"}>
              <li>아이디 찾기</li>
            </Link>
            <Link to={"/reset-password"}>
              <li>비밀번호 변경</li>
            </Link>
            <Link to={"/join"}>
              <li className='lastLi'>회원가입</li>
            </Link>
          </S.JoinFind>

          <S.JoinSns>
            <p className='joinP'>또는 다른 서비스 계정으로 가입</p>
            <S.LoginSns>
              <li className='kakao'>
                <img src={process.env.PUBLIC_URL + "/images/login/kakao.png"} alt="kakao" />
              </li>
              <li className='naver'>
                <img src={process.env.PUBLIC_URL + "/images/login/naver.png"} alt="naver" />
              </li>
              <li className='google'>
                <img src={process.env.PUBLIC_URL + "/images/login/google.png"} alt="google" />
              </li>
            </S.LoginSns>
          </S.JoinSns>
      </S.Wapper>

    </S.Container>
  );
};

export default LoginContainer;