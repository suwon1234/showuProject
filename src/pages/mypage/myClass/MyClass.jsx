import React from 'react';
import Lesson from './Lesson';

const MyClass = () => {
  return (
    <div className='container'>
      <div className='wapper'>
        <p>MY CLASS</p>
        <div>
          <ul>
            <li>수강중인 레슨</li>
            <li>개설한 레슨</li>
            <li>상담 신청 내역</li>
          </ul>
        </div>
      </div>
      <Lesson />
    </div>
  );
};

export default MyClass;