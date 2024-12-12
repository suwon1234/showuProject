import React from 'react';
import S from '../GradeStyle';
import AreaContainer from './AreaContainer';
import FieldContainer from './FieldContainer';
import TotalContainer from './TotalContainer';

const Dropdown = () => {
  return (
    <>
      {/* 지역 */}
      <AreaContainer />

      {/* 전문분야 */}
      <FieldContainer />

        <S.hr />

      {/* 총 경력기간 */}
      <TotalContainer />
    </>
  );
};

export default Dropdown;