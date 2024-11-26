import React from 'react';
import users from './_component/users';


const MypageContainer = () => {
  const [ fristUser, ...otherUsers ] = users;

  return (
    <div>
      <ul>
        <li>마이페이지</li>
        <li>{fristUser.name}</li>
      </ul>
    </div>
  );
};

export default MypageContainer;