import React from 'react';
import MypageContainer from '../MypageContainer';
import MyRes from './MyRes';
import Layout from '../_component/Layout';

const MyResContainer = () => {
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyRes />}
    />
  );
};

export default MyResContainer;