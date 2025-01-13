import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import S from './EmailButtonStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

const EmailButton = () => {
  const [ step, setStep ] = useState(1); 
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ verificationCode, setVerificationCode ] = useState('');
  const [ createdCode, setCreatedCode ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');
  const [ showPw, setShowPw ] = useState(false);
  const navigate = useNavigate();
  
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const handleShowPw = () => {
    setShowPw(!showPw)
  }

  const handleSendCode = () => {
    if (!email || !name) {
      alert('이름과 이메일을 입력해주세요.');
      return;
    }

    // 인증번호 생성
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setCreatedCode(code);

    emailjs.send(
      'service-showU',
      'template-showU',
      {
        to_name: name,
        to_email: email,
        code: code,
      },
      'kFcGXKs0UUkucev49'
    )
      .then(() => {
        alert('인증번호가 이메일로 전송되었습니다!');
        setStep(2);
      })
      .catch((error) => {
        console.error('이메일 전송 실패:', error);
        alert('이메일 전송 중 오류가 발생했습니다.');
      });
  };

  // 인증번호 확인
  const handleVerifyCode = () => {
    if (verificationCode === createdCode) {
      alert('인증이 성공하였습니다.');
      setStep(3); 
    } else {
      alert('인증번호가 일치하지 않습니다.');
    }
  };

  // 비밀번호 변경 패턴 확인
  const handleChangePassword = () => {
    if (!passwordRegex.test(newPassword)) {
      alert('비밀번호는 소문자, 숫자, 특수문자를 각 하나씩 포함해야합니다');
      return;
    }

    fetch(`http://localhost:8000/auth/api/change-password`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ 
        email : email,
        name : name,
        password: newPassword }),
    })
      .then((res) => {
        if (!res.ok) {
          alert(`비밀번호 변경 실패: ${res.message}`);
        } else {
          alert('비밀번호가 성공적으로 변경되었습니다!');
          navigate('/login') 
        }
      })
      .catch((error) => {
        console.error('비밀번호 변경 실패:', error);
        alert('비밀번호 변경 중 오류가 발생했습니다.');
      });
  };

  return (
    <S.Wrap>
      {step === 1 && (
        <>
          {/* <h2>이메일 인증</h2> */}
          <S.InputBox>
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.Button onClick={handleSendCode}>인증번호 요청</S.Button>
          </S.InputBox>
        </>
      )}

      {step === 2 && (
          // <h2>인증번호 확인</h2>
        <S.InputBox>
          <input
            type="text"
            placeholder="인증번호"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <S.Button onClick={handleVerifyCode}>인증하기</S.Button>
        </S.InputBox>
      )}

      {step === 3 && (
          // <h2>비밀번호 변경</h2>
        <S.InputBox>
          <input
            type={showPw ? "test" : "password"}
            placeholder="새 비밀번호"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <>
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
          </>
          <S.Button onClick={handleChangePassword}>비밀번호 변경</S.Button>
        </S.InputBox>
      )}
    </S.Wrap>
  );
};

export default EmailButton;
