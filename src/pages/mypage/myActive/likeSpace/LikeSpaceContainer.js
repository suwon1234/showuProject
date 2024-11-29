import React from 'react';
import Layout from '../../_component/Layout';
import MypageContainer from '../../MypageContainer';
import MyActiveSpace from './MyActiveSpace';

const LikeSpaceContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyActiveSpace />} />
  );
};

export default LikeSpaceContainer;
