import React, { useState } from 'react';
import S from './style';
import LoginHeader from '../login/_component/LoginHeader';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const FindIdContainer = () => {
  const { register, handleSubmit, getValues,
    formState : { isSubmitting, isSubmitted, errors }
  } = useForm({ mode : "onSubmit"})
  

  return (
    <S.Container>
      <LoginHeader />
      <S.Wapper>
        <S.title>showU ID 찾기</S.title>

          <form
            onSubmit={handleSubmit( async (data) => {
              console.log("data", data)

              const { name, phone } = data;

              await fetch(`http://localhost:8000/users/find-id`, {
                method : "POST",
                headers : {
                  "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                  name : name,
                  phone : phone
                })
              })
              .then((res) => res.json())
              .then((res) => {
                if(!res.findIdSuccess){ alert(res.message) }
              })
              .catch(console.error)
            })}
          >
            <S.inputWapper>
              <S.idLabel>
                <S.input type="text" id='name' placeholder='이름' autoComplete="off"
                  {...register("name", {
                    required : true
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
                    required : true
                  })}
                />
              </S.passwordLabel>
            </S.inputWapper>
          </form>

          <S.LoginButton
            disabled = {isSubmitting}
          >아이디 찾기</S.LoginButton>
          
          <Link to={'/login'}>
          <S.LoginButton>로그인으로</S.LoginButton>
          </Link>

      </S.Wapper>
    </S.Container>
  );
};

export default FindIdContainer;