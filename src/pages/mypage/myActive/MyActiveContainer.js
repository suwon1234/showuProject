import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import MyActive from './MyActive';

const MyActiveContainer = () => {

  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyActive />}/>
  );
};

export default MyActiveContainer;