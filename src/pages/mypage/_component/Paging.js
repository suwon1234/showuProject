import React from 'react';
import S from './PagingStyle';

const Paging = ({ page, setPage, totalPost, btnRange, pageRange }) => {
  const currentSet = Math.ceil(page / btnRange); // 현재 버튼 세트 번호
  const startPage = (currentSet - 1) * btnRange + 1; // 현재 버튼의 시작 페이지 번호
  const totalPage = Math.ceil(totalPost / pageRange); // 총 페이지 수
  const endPage = Math.min(startPage + btnRange - 1, totalPage); // 현재 버튼의 끝 페이지 번호
  const totalSet = Math.ceil(totalPage / btnRange); // 전체 버튼 세트 수

  // 첫 번째, 마지막, 이전, 다음 버튼 처리
  const firstButton = currentSet > 1 && (
    <S.Button onClick={() => setPage(1)} $active={false} >
      &lt;&lt;
    </S.Button>
  );

  const lastButton = totalSet > currentSet && (
    <S.Button onClick={() => setPage(totalPage)} $active={false} >
      &gt;&gt;
    </S.Button>
  );

  const nextButton = totalSet > currentSet && (
    <S.Button onClick={() => setPage(endPage + 1)} $active={false} >
      &gt;
    </S.Button>
  );

  const prevButton = currentSet > 1 && (
    <S.Button onClick={() => setPage(startPage - 1)} $active={false} >
      &lt;
    </S.Button>
  );

  // 번호 버튼
  const numberButtons = Array(btnRange).fill(startPage)
    .map((_, i) => {
      if (startPage + i > totalPage) return;
      return (
        <S.Button
          key={i}
          onClick={() => setPage(startPage + i)}
          $active={page === startPage + i}
        >
          {startPage + i}
        </S.Button>
      );
    });

  return (
    <S.Nav>
      <div className='prev'>
        <div>{firstButton}</div>
        <div>{prevButton}</div>
      </div>
      <div className='number'>{numberButtons}</div>
      <div className='next'>
        <div>{nextButton}</div>
        <div>{lastButton}</div>
      </div>
    </S.Nav>
  );
};

export default Paging;
