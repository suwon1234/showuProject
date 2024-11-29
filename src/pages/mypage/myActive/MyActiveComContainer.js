import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import CommmentContainer from './post/CommmentContainer';


const MyActiveComContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<CommmentContainer />} />
  );
};

export default MyActiveComContainer;
