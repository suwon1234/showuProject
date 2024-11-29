import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import ComContainer from './post/ComContainer';


const MyActiveComContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<ComContainer />} />
  );
};

export default MyActiveComContainer;
