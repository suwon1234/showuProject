import React from 'react';

const MyClass = () => {
  return (
    <div className='container'>
      <div className='wapper'>
        <div className='title'>
          <p>MY CLASS</p>
          <div className='subTitle'>
            <ul>
              <li>수강중인 레슨</li>
              <li>개설한 레슨</li>
              <li>상담 신청 내역</li>
            </ul>
          </div>
        </div>
      </div>
      <Lesson />
    </div>
  );
};

export default MyClass;