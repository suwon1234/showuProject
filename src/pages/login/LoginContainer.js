import React, { useEffect, useState } from 'react';
import S from './style';
import { Link, useNavigate } from 'react-router-dom';
import LoginHeader from './_component/LoginHeader';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

const LoginContainer = () => {
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);
  const [loginID, setLoginID] = useState("");
  const [saveIDFlag, setSaveIDFlag] = useState(false);

  const LS_KEY_ID = "LS_KEY_ID";
  const LS_KEY_SAVE_ID_FLAG = "LS_KEY_SAVE_ID_FLAG";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    const idFlag = JSON.parse(localStorage.getItem(LS_KEY_SAVE_ID_FLAG));
    if (idFlag !== null) setSaveIDFlag(idFlag);

    const savedID = localStorage.getItem(LS_KEY_ID);
    if (idFlag && savedID) {
      setLoginID(savedID);
      setValue("email", savedID); // useForm과 동기화
    }
  }, [setValue]);

  const handleRememberId = () => {
    const newFlag = !saveIDFlag;
    setSaveIDFlag(newFlag);
    localStorage.setItem(LS_KEY_SAVE_ID_FLAG, JSON.stringify(newFlag));
    if (!newFlag) {
      localStorage.removeItem(LS_KEY_ID);
      setLoginID("");
    }
  };

  const handleShowPw = () => {
    setShowPw((prev) => !prev);
  };

  const onSubmit = async (data) => {
    const { email, password } = data;

    const response = await fetch("http://localhost:8000/auth/local", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();

    if (!result.loginSuccess) {
      alert(result.message);
      return;
    }

    localStorage.setItem("jwtToken", result.jwtToken);

    if (saveIDFlag) {
      localStorage.setItem(LS_KEY_ID, email);
    } else {
      localStorage.removeItem(LS_KEY_ID);
    }

    navigate("/main");
  };

  console.log("loginID", loginID)

  return (
    <S.Container>
      <LoginHeader />
      <S.Wapper>
        <S.title>showU ID 로그인</S.title>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.idLabel>
            <S.input
              type="text"
              placeholder="아이디"
              autoComplete="off"
              defaultValue={loginID}
              onChange={(e) => {
                const value = e.target.value;
                setLoginID(value); // 상태 업데이트
                setValue("email", value); // useForm과 동기화
              }}
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value: emailRegex,
                  message: "올바른 이메일 형식이 아닙니다.",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </S.idLabel>

          <S.passwordLabel>
            <S.input
              type={showPw ? "text" : "password"}
              placeholder="비밀번호"
              autoComplete="off"
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                pattern: {
                  value: passwordRegex,
                  message:
                    "소문자, 숫자, 특수문자를 포함한 8자리 이상이어야 합니다.",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <FontAwesomeIcon
              icon={showPw ? faLockOpen : faLock}
              onClick={handleShowPw}
              className="lockImage"
            />
          </S.passwordLabel>

          <S.CheckBoxWapper>
            <S.Checkbox>
              <input
                type="checkbox"
                id="check"
                checked={saveIDFlag}
                onChange={handleRememberId}
              />
              <label htmlFor="check">아이디 저장</label>
            </S.Checkbox>
          </S.CheckBoxWapper>

          <S.LoginButton>로그인</S.LoginButton>
        </S.Form>

        <S.JoinFind>
          <Link to="/find-id">
            <li>아이디 찾기</li>
          </Link>
          <Link to="/reset-password">
            <li>비밀번호 변경</li>
          </Link>
          <Link to="/join">
            <li className="lastLi">회원가입</li>
          </Link>
        </S.JoinFind>
      </S.Wapper>
    </S.Container>
  );
};

export default LoginContainer;
