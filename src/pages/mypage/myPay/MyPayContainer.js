import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import MyPay from './MyPay';

const MyPayContainer = () => {
  return (
    <Layout 
      leftContent={<MypageContainer/>}
      rightContent={<MyPay />}
    />
  );
};

export default MyPayContainer;