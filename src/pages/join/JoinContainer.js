import React, { useEffect, useState } from 'react';
import S from './style';
import LoginHeader from '../login/_component/LoginHeader';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import Checkbox from '../login/_component/Checkbox';

const JoinContainer = () => {
  const [ buttonColor, setButtonColor ] = useState(false);
  const [ showPw, setShowPw ] = useState(false);
  const [ showPwConfirm, setShowPwConfirm ] = useState(false);
  const [ hyphen, setHyphen ] = useState("");
  
  const handleShowPw = () => {
    setShowPw(!showPw)
  }

  const handleShowPwConfirm = () => {
    setShowPwConfirm(!showPwConfirm)
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    getValues,
    formState : { isSubmitting, errors }
  } = useForm({ mode : "onChange"});


  return (
    <S.Container>

      <LoginHeader />

      <S.Wapper>
        <S.JoinBox>
          <S.title>showU 회원가입</S.title>

            <S.Form onSubmit={handleSubmit( async (data) => {
              console.log("data", data)

              if(!buttonColor){
                console.log("약관 동의하지 않음")
                alert("약관에 동의해야 회원가입이 가능합니다.");
              }

              const { email, password, phone, name } = data;

              await fetch(`http://localhost:8000/users/register`, {
                method : "POST",
                headers : {
                  "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                  email : email,
                  password : password,
                  phone : phone,
                  name : name
                })
              })
              .then((res) => res.json())
              .then((res) => {
                if(!res.registerSuccess){
                  return alert(res.message);
                }
                  alert(res.message);
                  navigate('/login'); 
                  console.log("회원가입 완료")
              })
              .catch((error) => {
                console.error("회원가입 중 오류 발생:", error);
                alert("회원가입 중 오류가 발생했습니다.");
              });
            })}>

              <S.idLabel>
                <S.input type="text" id='email' placeholder='이메일' autoComplete="off"
                  {...register("email", {
                    required : true,
                    pattern : {
                      value : emailRegex
                    }
                  })}
                />
                {errors?.email?.type === 'required' && (
                  <p>이메일을 입력해주세요</p>
                )}
                {errors?.email?.type === 'pattern' && (
                  <p>이메일 양식에 맞게 입력해주세요</p>
                )}
              </S.idLabel>

              <S.passwordLabel>
                <S.input 
                  type={ showPw ? "text" : "password"} 
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
                {errors?.password?.type === 'required' && (
                  <p>비밀번호를 입력하세요</p>
                )}
                {errors?.password?.type === 'pattern' && (
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
              
              <S.idLabel>
                <S.input 
                  type={ showPwConfirm ? "text" : "password"} 
                  id='passwordConfirm' 
                  placeholder='비밀번호 확인' 
                  autoComplete="off"
                  {...register("passwordConfirm", {
                    required : true,
                    validate : {
                      matchPassword : (value) => {
                        const { password } = getValues();
                        console.log(password === value, `password : ${password}, value : ${value}`)
                        return password === value;
                      }
                    }
                  })}
                />
                {errors?.passwordConfirm && (
                  <p>비밀번호를 확인해주세요</p>
                )}
                {
                  showPwConfirm ?
                  (
                  <FontAwesomeIcon 
                    icon={faLockOpen} 
                    onClick={() => handleShowPwConfirm()}
                    className='lockImage' 
                  />
                  )
                   : 
                  (
                  <FontAwesomeIcon 
                    icon={faLock}
                    onClick={() => handleShowPwConfirm()}
                    className='lockImage'
                  />
                  )
                }
              </S.idLabel>
              
              <S.idLabel>
                <S.input type="text" id='name' placeholder='이름'
                  {...register("name", {
                    required : true,
                  })}
                />
              </S.idLabel>

              <S.idLabel>
                <S.input
                  type="text"
                  id="phone"
                  placeholder="전화번호"
                  {...register("phone", {
                    required: "전화번호를 입력해주세요.",
                    onChange: (e) => {
                      const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 남김
                      if (value.length <= 11) {
                        const formatted = value.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
                        setHyphen(formatted);
                      }
                    },
                  })}
                  value={hyphen} // 하이픈 처리된 값 표시
                />
                {errors?.phone && <p>{errors.phone.message}</p>}
              </S.idLabel>


            <Checkbox setButtonColor={setButtonColor}/>
          
            
            <S.JoinButton
              {...(buttonColor ? { state: "true" } : {})}
              // disabled={!buttonColor || isSubmitting}
              onClick={(e) => {
                if(!buttonColor){
                  e.preventDefault();
                  console.log("약관동의안함")
                  alert("약관 동의해야 회원가입이 가능합니다")
                  return;
                }
              }}
            >
              회원가입
              </S.JoinButton>

            </S.Form>


            <Link to={'/login'}>
            <S.LoginButton>로그인으로</S.LoginButton>
            </Link>
        </S.JoinBox>

      </S.Wapper>
    </S.Container>
  );
};

export default JoinContainer;