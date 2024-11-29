import React from 'react';
import Layout from '../../_component/Layout';
import MypageContainer from '../../MypageContainer';
import MyActiveMd from './MyActiveMd';

const LikeMdContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyActiveMd />} />
  );
};

export default LikeMdContainer;
