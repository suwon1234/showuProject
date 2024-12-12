import React from 'react';
import Layout from '../../_component/Layout';
import MypageContainer from '../../MypageContainer';
import Update from './Update';

const UpdateContainer = () => {
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<Update />}/>
  );
};

export default UpdateContainer;