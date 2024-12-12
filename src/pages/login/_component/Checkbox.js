import React from 'react';
import S from '../_component/CheckboxStyle';

const Checkbox = () => {
  return (
    <>
      <S.Checkbox>
        <input type="checkbox" id='check' />
        <label htmlFor="check"></label>
      </S.Checkbox>
    </>
  );
};

export default Checkbox;