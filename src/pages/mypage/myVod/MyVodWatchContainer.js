import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import WatchContainer from './watch/WatchContainer';

const MyVodWatchContainer = () => {
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<WatchContainer />}
    />
  );
};

export default MyVodWatchContainer;