import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHouseCircleXmark, faSquareXmark, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import S from './style';

const NotFoundContainer = () => {
  return (
    <S.Wrap>

      <S.NotFoundBox className='NotFoundBox'>
        <S.NotFoundIcon className='NotFoundicon'>
          <FontAwesomeIcon icon={faHouseCircleXmark} className='house'/>
        </S.NotFoundIcon>
        <p>페이지를 찾을 수 없습니다.</p>
      </S.NotFoundBox>

      <div className='GoHome'>
        <FontAwesomeIcon icon={faHouse} />
        <button>메인으로</button>
      </div>

    </S.Wrap>
  );
};

export default NotFoundContainer;