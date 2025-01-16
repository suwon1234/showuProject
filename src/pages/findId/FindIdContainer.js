import React, { useState } from 'react';
import S from './style';
import LoginHeader from '../login/_component/LoginHeader';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const FindIdContainer = () => {
  const [ step, setStep ] = useState(1);
  const [ currentUser, setCurrentUser ] = useState(null);  // 찾은 아이디
  const [ hyphen, setHyphen ] = useState("");

  const { register, handleSubmit,
    formState : { isSubmitting, errors }
  } = useForm({ mode : "onSubmit"})


  return (
    <S.Container>
      <LoginHeader />
      <S.Wapper>
        <S.title>showU ID 찾기</S.title>

          <form
            onSubmit={handleSubmit( async (data) => {
              // console.log("data", data)

              const { name, phone } = data;

              await fetch(`http://localhost:8000/users/find-id`, {
                method : "POST",
                headers : {
                  "Content-Type": "application/json"
                },
                body : JSON.stringify({
                  name : name,
                  phone : phone 
                })
              })
              .then((res) => res.json())
              .then((res) => {              
                if (!res.findIdSuccess) {
                  alert(res.message);
                } else {
                  alert(res.message);
                  console.log(res.currentUser);
                  setCurrentUser(res.currentUser); 
                  setStep(2); 
                } 
              })
              .catch((error) => {
                console.error("아이디 찾기 실패:", error.message);
                alert(`아이디 찾기에 실패했습니다: ${error.message}`);
              });
            })}
          >

            {step === 1 && (
              <>
                <S.inputWapper>
                  <S.idLabel>
                    <S.input
                      type="text"
                      id='name'
                      placeholder='이름'
                      autoComplete="off"
                      {...register("name", {
                        required : '이름을 입력하세요'
                      })}
                    />
                  </S.idLabel>
                  <S.passwordLabel>
                    <S.input
                      type="text"
                      id='phone'
                      placeholder='전화 번호'
                      autoComplete="off"
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
                      value={hyphen}
                    />
                    {/* { errors?.password?.type === 'pattern' && (
                      <p>전화번호 형식이 올바르지 않습니다 010-0000-0000</p>
                    )} */}
                  </S.passwordLabel>
                </S.inputWapper>

                <S.LoginButton
                  disabled = {isSubmitting}
                >
                  아이디 찾기
                </S.LoginButton>
              </>  
            )}

            {step === 2 && (
              <S.FoundId>
                <p>아이디 찾기가 완료되었습니다</p>
                <p className='currentUser'>{currentUser}</p>
              </S.FoundId>
            )}
          </form>

          
          <Link to={'/login'}>
          <S.LoginButton>로그인으로</S.LoginButton>
          </Link>

      </S.Wapper>
    </S.Container>
  );
};

export default FindIdContainer;