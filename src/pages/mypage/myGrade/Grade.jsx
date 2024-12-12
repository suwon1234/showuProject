import React from 'react';
import S from './GradeStyle';
import Dropdown from './_component/Dropdown';

const Grade = () => {
  return (
    <S.Container className='Container'>
      <S.Fieldset>
        <S.Form>

          <S.Label htmlFor="name">
            <p>전문가 성함</p>
            <input type="text" name='name' id='name' placeholder='이름을 입력하세요' required/>
          </S.Label>

            <S.LabelTextAarea htmlFor="intro">
              <p>자기소개</p>
              <textarea name="intro" id="intro" cols="30" rows="10" placeholder='자기소개를 입력하세요' required></textarea>
            </S.LabelTextAarea>

            {/* 지역, 전문 분야, 총 경력기간 */}
            <Dropdown />

          <S.LabelSelectcareer htmlFor="career">
            <p>경력사항</p>
            <input type="text" name='career' id='career' placeholder='회사명ㆍ부서'/>
          </S.LabelSelectcareer>

          <S.Portfolio className='portfolio'>
            <S.Label htmlFor="file">
              <p>포트폴리오</p>
              <input type="file" id='file' className='file'/>
            </S.Label>
          </S.Portfolio>

          <S.Button>작성 완료</S.Button>
        </S.Form>
      </S.Fieldset>
    </S.Container>
  );
};

export default Grade;