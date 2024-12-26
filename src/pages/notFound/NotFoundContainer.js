import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPager, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

const NotFoundContainer = () => {
  return (
    <div>

      <div className='wrap'>
        <div className='NotFoundicon'>
          <FontAwesomeIcon icon={faPager} />
          <FontAwesomeIcon icon={faSquareXmark} />
        </div>
        <p>페이지를 찾을 수 없습니다.</p>
      </div>

      <div className='GoHome'>
        <FontAwesomeIcon icon={faHouse} />
        <button>메인으로</button>
      </div>

    </div>
  );
};

export default NotFoundContainer;