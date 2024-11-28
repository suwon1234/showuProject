import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import MyVod from './MyVod';

const MyVodContainer = () => {
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyVod />}
    />
  );
};

export default MyVodContainer;