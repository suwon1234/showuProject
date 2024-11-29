import React from 'react';
import Layout from '../../_component/Layout';
import MypageContainer from '../../MypageContainer';
import MyActiveProp from './MyActiveProp';

const LikePropContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyActiveProp />} />
  );
};

export default LikePropContainer;
