import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import DetailContainer from './detail/DetailContainer';


const MyResDetailContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<DetailContainer />} />
  );
};

export default MyResDetailContainer;
