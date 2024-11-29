import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import MyActiveTeam from './likeTeam/MyActiveTeam';


const MyActiveContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyActiveTeam />} />
  );
};

export default MyActiveContainer;
