import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import CreatedContainer from './created/CreatedContainer';


const MyClassCreateContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<CreatedContainer />} />
  );
};

export default MyClassCreateContainer;
