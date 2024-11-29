import React from 'react';
import Layout from '../../_component/Layout';
import MypageContainer from '../../MypageContainer';
import MyActiveAction from './MyActiveAction';

const LikeAuctionContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyActiveAction />} />
  );
};

export default LikeAuctionContainer;
