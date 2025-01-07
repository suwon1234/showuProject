import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import DeleteAccount from './_component/DeleteAccount';
import { setProfilePicture } from '../../../modules/user';

const MyInfo = () => {

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

  const pictureRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [picturePath, setPicturePath] = useState(null);

  console.log("picturePath", picturePath)

  useEffect(() => {
    if(!jwtToken){
      navigate("/login", { replace : true })
    }
  }, [jwtToken, navigate])

  // currentUser.picture가 없으면 기본 이미지로 설정
  useEffect(() => {
    if (currentUser.picture) {
      setPicturePath(`http://localhost:8000/${currentUser.picture}`);
    } else {
      setPicturePath('http://localhost:8000/uploads/profiles/user.png'); // 기본 프로필 이미지
    }
  }, [currentUser.picture]);

  const handleFileChange = (e) => {
    // console.log(e.target.files[0])
    const file = e.target.files[0]
    if(file){
      // 미리보기 경로 업로드
      const fileURL = URL.createObjectURL(file)
      setPicturePath(fileURL)
    }
  }

  const savePicture = async () => {
    const formData = new FormData();
    formData.append("picture", pictureRef.current.files[0])
    // console.log("formData", formData)
    // console.log("files", pictureRef.current.files[0])

    const config = {
      method : "POST",
      headers : {
        Authorization : `Bearer ${jwtToken}`
      },
      body: formData //multipart/formData를 body에 보낸다
    }

    await fetch("http://localhost:8000/users/picture", config)
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res) // 어떤 데이터가 들어왔는지 확인

        const newPicturePath = `http://localhost:8000${res.filePath}`;
        // const newPicturePath = res.filePath;
        dispatch(setProfilePicture(newPicturePath)) // 리덕스 상태 업데이트
        setPicturePath(newPicturePath)

        // console.log("dispatch", dispatch(setProfilePicture(`http://localhost:8000${newPicturePath}`)))
      })
      .catch(console.error)
  }

  useEffect(() => {
    if (currentUser.picture) {
      // currentUser.picture : uploads/profiles/cat(5).jpg
      const newPicturePath = currentUser.picture.startsWith('http') 
      ? currentUser.picture 
      : `http://localhost:8000/${currentUser.picture}`;
    setPicturePath(newPicturePath);
    }
  }, [currentUser.picture]);  // currentUser.picture가 바뀔 때마다 실행

  console.log("currentUser", currentUser.picture)

  return (
      <S.RightSection>
        <p className='infoTitle'>회원정보 관리</p>

        {/* 프로필 이미지 */}
        <S.Profile className='profile'>
          <img src={picturePath} alt='프로필 사진' name='picture' />
          <p>{currentUser.name}님</p>

          {/* 프로필 사진 변경 버튼 */}
          <div className='buttonWapper'>
            <S.fileInputButton className='fileInput' >
              <label>
                <input 
                  ref={pictureRef}
                  type='file' name='picture' 
                  onChange={handleFileChange} />
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
                  "Content-Type" : "application/json",
                  'Authorization': `Bearer ${jwtToken}`
                },
                body : JSON.stringify({
                  password : password,
                  phone : phone
                })
              })
              .then((res) => res.json())
              .then((res) => {
                console.log(res.message)
                alert(res.message)
              })
            })}       
          >
              <S.IdLabel>
                <span>아이디</span>
                <span className='currentEmail'>{currentUser.email}</span>
              </S.IdLabel>

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
              
              <S.Label>
                <span>전화 번호</span>
                <S.Input 
                  type="text" name='phoneNumber' 
                  placeholder={currentUser.phone}
                  {...register("phone", {
                    required : true
                  })} 
                />
                <div></div>
              </S.Label>

              <S.ButtonBox className='buttonBox'>
                <S.ChangeButton 
                  type="submit" 
                  disabled={isSubmitting}
                  onClick={savePicture} 
                >
                  변경 완료
                </S.ChangeButton>
              </S.ButtonBox>
          </S.Form>

            {/* 회원탈퇴 */}
            <S.DeleteButton className='deleteButton'>
              <DeleteAccount />
            </S.DeleteButton>

        </fieldset>



      </S.RightSection>
  );
};

export default MyInfo;