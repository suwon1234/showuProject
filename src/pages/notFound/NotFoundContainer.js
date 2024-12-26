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
        <S.NotFoundMsg className='NotFoundMsg'>
          <p>페이지를 찾을 수 없습니다.</p>
          <p>찾고 있는 페이지가 존재하지 않거나 제거되었을 수 있습니다.</p>
        </S.NotFoundMsg>
      </S.NotFoundBox>

      <div className='GoHome'>
        <FontAwesomeIcon icon={faHouse} />
        <button>메인으로</button>
      </div>

    </S.Wrap>
  );
};

export default NotFoundContainer;