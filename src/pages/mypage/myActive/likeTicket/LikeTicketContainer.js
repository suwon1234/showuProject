import React from 'react';
import Layout from '../../_component/Layout';
import MypageContainer from '../../MypageContainer';
import MyActiveTicket from './MyActiveTicket';

const LikeTicketContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyActiveTicket />} />
  );
};

export default LikeTicketContainer;
