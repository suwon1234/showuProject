import React, { useEffect } from 'react';
import S from './style';
import Grade from './Grade';
import { useNavigate } from 'react-router';

const MyGrade = () => {
  const jwtToken = localStorage.getItem("jwtToken");
  const navigate = useNavigate();

  useEffect(() => {
    if(!jwtToken){
      navigate("/login", { replace : true })
    }
  }, [jwtToken, navigate])

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
          <S.Title className='title'>
            <p>등급업 정보</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li>신청서 작성</li>
              </ul>
            </S.SubTitle>
          </S.Title>

          <Grade />

        </S.Wapper>
      </S.Container>
    </>
  );
};

export default MyGrade;