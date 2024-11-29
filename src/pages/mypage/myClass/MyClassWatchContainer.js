import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import WatchingContainer from './watching/WatchingContainer';


const MyClassWatchContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<WatchingContainer />} />
  );
};

export default MyClassWatchContainer;
