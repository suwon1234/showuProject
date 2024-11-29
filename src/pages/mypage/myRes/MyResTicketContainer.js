import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import TicketContainer from './ticket/TicketContainer';


const MyResTicketContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<TicketContainer />} />
  );
};

export default MyResTicketContainer;
