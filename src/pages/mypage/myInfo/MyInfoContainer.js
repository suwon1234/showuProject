import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import MyInfo from './MyInfo';

const MyInfoContainer = () => {

  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyInfo />}/>
  );
};

export default MyInfoContainer;