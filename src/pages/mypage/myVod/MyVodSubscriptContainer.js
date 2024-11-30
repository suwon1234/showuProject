import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import SubscriptContainer from './subscript/SubscriptContainer';

const MyVodSubscriptContainer = () => {
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<SubscriptContainer />}
    />
  );
};

export default MyVodSubscriptContainer;