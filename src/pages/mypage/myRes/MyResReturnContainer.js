import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import ReturnContainer from './return/ReturnContainer';


const MyResReturnContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<ReturnContainer />} />
  );
};

export default MyResReturnContainer;
