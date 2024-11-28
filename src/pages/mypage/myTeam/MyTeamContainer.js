import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import MyTeam from './MyTeam';

const MyTeamContainer = () => {
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyTeam />}
    />
  );
};

export default MyTeamContainer;