import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import PropsContainer from './props/PropsContainer';


const MyResPropsContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<PropsContainer />} />
  );
};

export default MyResPropsContainer;
