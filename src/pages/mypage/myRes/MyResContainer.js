import React from 'react';
import MypageContainer from '../MypageContainer';
import Layout from '../_component/Layout';
import SpaceContainer from './space/SpaceContainer';

const MyResContainer = () => {
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<SpaceContainer />}
    />
  );
};

export default MyResContainer;