import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import MyClass from './MyClass';

const MyClassContainer = () => {
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyClass />}
    />
  );
};

export default MyClassContainer;