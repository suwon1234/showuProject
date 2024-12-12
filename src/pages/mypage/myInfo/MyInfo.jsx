import React, { useState } from 'react';
import users from '../_component/users';
import S from './style';
import DeleteAccount from './_component/DeleteAccount';
import { useNavigate } from 'react-router-dom';


const MyInfo = () => {
  const [ fristUser, ...otherUsers ] = users;
  const [ profileImage, setProfileImage ] = useState(
    process.env.PUBLIC_URL + "/images/myPage/user.png"
  )

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
      <S.RightSection>
        <p className='infoTitle'>회원정보 관리</p>

        {/* 프로필 이미지 */}
        <S.Profile className='profile'>
          <img src={profileImage} alt='프로필 사진'/>
          <p>{fristUser.name}님</p>

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
        <div>
          <S.UserChangeWapper className='userChangeWapper'>
              <li>
                <span>아이디</span>
                <S.Input type="text" name='id' placeholder='영문 소문자, 숫자 포함 6~12자리'/>
                <div></div>
                <S.Button type='button'>아이디 변경</S.Button>
              </li>
              <li>
                <span>새 비밀번호</span>
                <S.Input type="password" name='password' placeholder='영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리'/>
              </li>
              <li>
                <span>새 비밀번호 확인</span>
                <S.Input type="password" name='password' placeholder='영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리'/>
                <div></div>
                <S.Button type='button'>비밀번호 변경</S.Button>
              </li>
              <li>
                <span>이메일</span>
                <S.Input type="text" name='email' placeholder='showU@example.com'/>
                <div></div>
                <S.Button type='button'>이메일 변경</S.Button>
              </li>
              <li>
                <span>전화 번호</span>
                <S.Input type="text" name='phoneNumber' placeholder='010-1234-5678'/>
                <div></div>
                <S.Button type='button'>전화번호 변경</S.Button>
              </li>
          </S.UserChangeWapper>
        </div>

        {/* 회원탈퇴, 변경완료 버튼 */}
        <S.DelteButton className='deleteButton'>
          <DeleteAccount />
          <S.ChangeButton onClick={() => {
            alert("변경이 완료되었습니다")
          }}>변경 완료</S.ChangeButton>
        </S.DelteButton>

      </S.RightSection>
  );
};

export default MyInfo;