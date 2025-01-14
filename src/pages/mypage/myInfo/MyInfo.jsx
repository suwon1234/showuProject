import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import DeleteAccount from './_component/DeleteAccount';
import { setProfilePicture } from '../../../modules/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

const MyInfo = () => {

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const jwtToken = localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [ showPw, setShowPw ] = useState(false);
  const [ showPwConfirm, setShowPwConfirm ] = useState(false);
  const [ hyphen, setHyphen ] = useState("");

  const { register, handleSubmit, getValues, setValue,
          formState : { isSubmitting, errors }
        } = useForm({ mode : "onChange" });

  const handleShowPw = () => {
    setShowPw(!showPw)
  }

  const handleShowPwConfirm = () => {
    setShowPwConfirm(!showPwConfirm)
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (currentUser?.phone) {
      const formatted = currentUser.phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
      setHyphen(formatted);
      setValue("phone", formatted);
    }
  }, [currentUser?.phone, setValue]);

  const handleNavigate = (path) => {
    navigate(path)
  }

  const pictureRef = useRef(null);
  const [picturePath, setPicturePath] = useState(null);

  useEffect(() => {
    if(!jwtToken){
      navigate("/login", { replace : true })
    }
  }, [jwtToken, navigate])

  useEffect(() => {
    if (currentUser.picture) {
      // currentUser.picture 앞 확인, http 추가
      const pictureUrl = currentUser.picture.startsWith('uploads/profiles')
        ? `http://localhost:8000/${currentUser.picture}`
        : currentUser.picture;
  
      setPicturePath(pictureUrl);
    } else {
      setPicturePath('http://localhost:8000/uploads/profiles/user.png'); // 기본 프로필 이미지
    }
  }, [currentUser.picture]);
  
  

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if(file){
      const fileURL = URL.createObjectURL(file)
      setPicturePath(fileURL)
    }
  }

  const savePicture = async () => {
    const formData = new FormData();
    formData.append("picture", pictureRef.current.files[0])

    const config = {
      method : "POST",
      headers : {
        Authorization : `Bearer ${jwtToken}`
      },
      body: formData
    }

    await fetch("http://localhost:8000/users/picture", config)
      .then((res) => res.json())
      .then((res) => {
        const newPicturePath = `http://localhost:8000${res.filePath}`;
        dispatch(setProfilePicture(newPicturePath))
        setPicturePath(newPicturePath)
        alert(res.message)
      })
      .catch(console.error)
  }



  // console.log("picturePath", picturePath)
  // console.log("currentUser.picture", currentUser.picture)
  

  return (
    <S.RightSection>
      <p className='infoTitle'>회원정보 관리</p>

      {/* 프로필 이미지 */}
      <S.Profile className='profile'>
        <img src={picturePath} alt='프로필 사진' name='picture' />
        <p>{currentUser.name}님</p>

        {/* 프로필 이미지 변경 버튼 */}
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

      </S.Profile>

      {/* 프로필 이미지 변경 완료 버튼 */}
      <S.ProfileImgChangeButton>
        <button onClick={savePicture} >프로필 변경</button>
      </S.ProfileImgChangeButton>

      {/* 회원정보 변경 */}
      <fieldset>
        <S.Form 
          onSubmit={handleSubmit( async (data) => {
            const { email , password, phone } = data;
            await fetch("http://localhost:8000/users/modify", {
              method : "PUT",
              headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
              },
              body : JSON.stringify({
                password : password,
                phone : phone
              })
            })
            .then((res) => res.json())
            .then((res) => {
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
            <S.Input 
              type={ showPw ? "text" : "password"} 
              name='password' 
              placeholder='변경할 비밀번호를 입력하세요'
              {...register("password", {
                required : true,
                pattern : {
                  value : passwordRegex
                }
              })}
            />
            {
              showPw ? 
                (<FontAwesomeIcon 
                  icon={faLockOpen} 
                  onClick={() => handleShowPw()} 
                  className='lockImage' 
                />) : 
                (<FontAwesomeIcon 
                  icon={faLock} 
                  onClick={() => handleShowPw()} 
                  className='lockImage' 
                />)
            }
          </label>
          
          {errors?.password?.type === 'required' && (
            <S.ConfirmMessage>비밀번호를 입력해주세요</S.ConfirmMessage>
          )}
          {errors?.password?.type === 'pattern' && (
            <S.ConfirmMessage>소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상</S.ConfirmMessage>
          )}

          <label>
            <span>새 비밀번호 확인</span>
            <S.Input 
              type={ showPwConfirm ? "text" : "password"} 
              name='passwordConfirm' 
              placeholder='소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상'
              {...register("passwordConfirm", {
                required : true,
                validate : {
                  matchPassword : (value) => {
                    const { password } = getValues();
                    return password === value;
                  }
                }
              })}
            />
            {
              showPwConfirm ? 
                (<FontAwesomeIcon 
                  icon={faLockOpen} 
                  onClick={() => handleShowPwConfirm()} 
                  className='lockImage' 
                />) : 
                (<FontAwesomeIcon 
                  icon={faLock} 
                  onClick={() => handleShowPwConfirm()} 
                  className='lockImage' 
                />)
            }
          </label>

          {errors.passwordConfirm && (
            <S.ConfirmMessage>비밀번호를 확인해주세요</S.ConfirmMessage>
          )}

          <S.Label>
            <span>전화 번호</span>
            <S.Input 
              type="text" 
              name="phone" 
              placeholder="전화번호를 입력하세요"
              {...register("phone", {
                onChange: (e) => {
                  const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 남김
                  if (value.length <= 11) {
                    const formatted = value.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
                    setHyphen(formatted); 
                    setValue("phone", formatted);
                  }
                },
              })} 
              value={hyphen} 
            />
          </S.Label>

          <S.ButtonBox className='buttonBox'>
            <S.ChangeButton 
              type="submit" 
              disabled={isSubmitting}
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

      <S.ScrollTop onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} className="upicon" />
      </S.ScrollTop>

    </S.RightSection>
  );
};

export default MyInfo;
