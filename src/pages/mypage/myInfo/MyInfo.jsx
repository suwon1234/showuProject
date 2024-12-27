import React, { useEffect } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const MyInfo = () => {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const jwtToken = localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user)

  const { register, handleSubmit, getValues,
          formState : { isSubmitting, errors }
        } = useForm({ mode : "onChange" });

  const handleNavigate = (path) => {
    navigate(path)
  }

  useEffect(() => {
    if(!jwtToken){
      navigate("/login", { replace : true })
    }
  }, [jwtToken])

  
  return (
      <S.RightSection>
        <p className='infoTitle'>회원정보 관리</p>

        {/* 프로필 이미지 */}
        <S.Profile className='profile'>
          <img src={process.env.PUBLIC_URL + "/images/myPage/user.png"} alt='프로필 사진'/>
          <p>{currentUser.name}님</p>

        {/* 프로필 사진 변경 버튼 */}
          <div className='buttonWapper'>
            <S.fileInputButton className='fileInput' >
              <label>
                <input type='file' />
              </label>
            </S.fileInputButton>
          </div>

          {/* 등급업 정보 수정 버튼 */}
          <S.UpdateButton onClick={() => handleNavigate('/mypage/up-grade/update')}>
            <button>등급업 수정</button>
          </S.UpdateButton>
        </S.Profile>

        {/* 회원정보 변경 */}
        <fieldset>
          <S.Form 
            onSubmit={handleSubmit( async (data) => {
              // console.log(data);

              const { email , password, phone } = data;
              await fetch("http://localhost:8000/users/modify", {
                method : "PUT",
                headers : {
                  "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                  email : email,
                  password : password,
                  phone : phone
                })
              })
              .then((res) => res.json())
              .then((res) => {
                console.log(res)
              })

            })}       
          >
              <label>
                <span>아이디</span>
                <S.Input 
                  type="text" name='id'
                  value={currentUser.email || ''}
                  {...register("email")}
                />
                <div></div>
                {errors?.email?.type === 'required' && (
                  <S.ConfirmMessage>이메일을 입력해주세요</S.ConfirmMessage>
                )}
                {errors?.email?.type === 'pattern' && (
                  <S.ConfirmMessage>이메일 양식에 맞게 입력해주세요</S.ConfirmMessage>
                )}
              </label>
              <label>
                <span>새 비밀번호</span>
                <S.Input type="password" name='password' placeholder='변경할 비밀번호를 입력하세요'
                  {...register("password", {
                    required : true,
                    pattern : {
                      value : passwordRegex
                    }
                  })}
                />
                <div></div>
                {errors?.password?.type === 'required' && (
                  <S.ConfirmMessage>비밀번호를 입력해주세요</S.ConfirmMessage>
                )}
                {errors?.password?.type === 'pattern' && (
                  <S.ConfirmMessage>소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상</S.ConfirmMessage>
                )}
              </label>
              <label>
                <span>새 비밀번호 확인</span>
                <S.Input type="password" name='password' placeholder='소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상'
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
                <div></div>
                {errors.passwordConfirm && (
                  <S.ConfirmMessage>비밀번호를 확인해주세요</S.ConfirmMessage>
                )}
              </label>
              
              <label>
                <span>전화 번호</span>
                <S.Input 
                  type="text" name='phoneNumber' 
                  // placeholder={currentUser.phone}
                  {...register("phone")} 
                />
                <div></div>
              </label>

              {/* 회원탈퇴, 변경완료 버튼 */}
              <S.DelteButton className='deleteButton'>

                <S.Button 
                  onClick={() => { window.confirm("탈퇴하시겠습니까?") }}
                >
                  회원 탈퇴
                </S.Button>

                <S.ChangeButton type="submit" 
                  disabled={isSubmitting} 
                >
                  변경 완료
                </S.ChangeButton>

              </S.DelteButton>
          </S.Form>
        </fieldset>


      </S.RightSection>
  );
};

export default MyInfo;