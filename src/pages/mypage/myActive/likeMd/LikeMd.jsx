import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const LikeMd = () => {
  return (
    <div className='Container'>
      <div className='Wrapper'>
        <div className='Image'>
          <img src={process.env.PUBLIC_URL + "/images/mypage/myMd/md.png"} alt="md 이미지" />
        </div>
        <div className='Content'>
          <p>예약판매</p>
          <p>베르사유의 장미 고블렛</p>
          <p>₩65,000</p>
          <FontAwesomeIcon icon={faHeart} className='heart'/>
        </div>
      </div>
    </div>
  );
};

export default LikeMd;