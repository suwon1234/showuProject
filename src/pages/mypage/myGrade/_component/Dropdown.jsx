import React from 'react';
import S from '../GradeStyle';
import AreaContainer from './AreaContainer';
import FieldContainer from './FieldContainer';
import TotalContainer from './TotalContainer';

const Dropdown = ({ setValue, userInfo }) => {
  
  return (
    <>
      {/* 지역 */}
      <AreaContainer setValue={setValue} userInfo={userInfo} />

      {/* 전문분야 */}
      <FieldContainer setValue={setValue} userInfo={userInfo} />

        <S.hr />

      {/* 총 경력기간 */}
      <TotalContainer setValue={setValue} userInfo={userInfo} />
    </>
  );
};

export default Dropdown;