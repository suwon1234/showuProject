import React from 'react';
import S from './PagingStyle';

const Paging = () => {
  return (
    <S.Container className='Container'>
      <S.Wapper className='Wapper'>
        <li>&lt;</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>&gt;</li>
      </S.Wapper>
    </S.Container>
  );
};

export default Paging;