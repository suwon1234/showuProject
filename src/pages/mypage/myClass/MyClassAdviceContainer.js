import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import AdviceContainer from './advice/AdviceContainer';


const MyClassAdviceContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<AdviceContainer />} />
  );
};

export default MyClassAdviceContainer;
