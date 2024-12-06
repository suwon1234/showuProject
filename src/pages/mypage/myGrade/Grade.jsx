import React from 'react';
import S from './GradeStyle';

const Grade = () => {
  return (
    <S.Container className='Container'>
      <S.Fieldset>
        <S.Form>
          <label for="name">
            <input type="text" name='name' placeholder='이름을 입력하세요' required/>
          </label>
          <textarea name="" id="" cols="30" rows="10" placeholder='자기소개를 입력하세요'></textarea>
          <select name="지역" id="" >
            <option value="">선택해주세요</option>
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="경북">경북</option>
            <option value="경남">경남</option>
            <option value="충북">충북</option>
            <option value="충남">충남</option>
            <option value="전북">전북</option>
            <option value="전남">전남</option>
            <option value="인천">인천</option>
            <option value="강원">강원</option>
            <option value="제주">제주</option>
          </select>
          <select name="전문분야" id="">
            <option value="">선택해주세요</option>
            <option value="연기">연기</option>
            <option value="마술">마술</option>
            <option value="음악">음악</option>
          </select>
          <select name="총 경력기간" id="">
            <option value="">선택해주세요</option>
            <option value="신입">신입</option>
            <option value="1년">1년</option>
            <option value="2년">2년</option>
            <option value="3년">3년</option>
            <option value="4년">4년</option>
            <option value="5년">5년</option>
            <option value="6년">6년</option>
            <option value="7년">7년</option>
            <option value="8년">8년</option>
            <option value="9년">9년</option>
            <option value="10년 이상">10년 이상</option>
          </select>
          <input type="text" name='경력사항' placeholder='회사명ㆍ지역ㆍ부서ㆍ근무지'/>
          <input type="file" />
          <S.Button>작성 완료</S.Button>
        </S.Form>
      </S.Fieldset>
    </S.Container>
  );
};

export default Grade;