import React, { useEffect, useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const MyInfo = () => {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  const [ user, setUser ] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(`http://localhost:4000/user/1`)
        const datas = await response.json()
        return datas;
      } catch (error) {
        console.error("MyInfoError", error)
      }
    }

    getUsers()
      .then(setUser)
      .catch(console.error)

  }, [])

  // console.log(user)
  
  return (
      <S.RightSection>
        <p className='infoTitle'>회원정보 관리</p>

        {/* 프로필 이미지 */}
        <S.Profile className='profile'>
          <img src={process.env.PUBLIC_URL + "/images/myPage/user.png"} alt='프로필 사진'/>
          <p>{user &&user.name}님</p>

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
          <S.UserChangeWapper className='userChangeWapper'>
              <label>
                <span>아이디</span>
                <S.Input type="text" name='id' value={user && user.email} readOnly />
                <div></div>
                <FontAwesomeIcon icon={faPen} className='pen'/>
                {/* <S.Button type='button'>아이디 변경</S.Button> */}
              </label>
              <label>
                <span>새 비밀번호</span>
                <S.Input type="password" name='password' placeholder='변경할 비밀번호를 입력하세요'/>
              </label>
              <label>
                <span>새 비밀번호 확인</span>
                <S.Input type="password" name='password' placeholder='영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리'/>
                <div></div>
                <FontAwesomeIcon icon={faPen} className='pen'/>
                {/* <S.Button type='button'>비밀번호 변경</S.Button> */}
              </label>
              {/* <li>
                <span>이메일</span>
                <S.Input type="text" name='email' placeholder='showU@example.com'/>
                <div></div>
                <S.Button type='button'>이메일 변경</S.Button>
              </li> */}
              <label>
                <span>전화 번호</span>
                <S.Input type="text" name='phoneNumber' value={user && user.phone} readOnly />
                <div></div>
                <FontAwesomeIcon icon={faPen} className='pen'/>
                {/* <S.Button type='button'>전화번호 변경</S.Button> */}
              </label>
          </S.UserChangeWapper>
        </fieldset>

        {/* 회원탈퇴, 변경완료 버튼 */}
        <S.DelteButton className='deleteButton'>

          <S.Button onClick={() => {
            window.confirm("탈퇴하시겠습니까?")
          }}>회원 탈퇴</S.Button>

          <S.ChangeButton onClick={() => {
            alert("변경이 완료되었습니다")
          }}>변경 완료</S.ChangeButton>
        </S.DelteButton>

      </S.RightSection>
  );
};

export default MyInfo;