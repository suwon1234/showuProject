import React from 'react';
import Layout from '../../_component/Layout';
import MypageContainer from '../../MypageContainer';
import MyGradeUpdate from './MyGradeUpdate';

const MyGradeUpdateContainer = () => {
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyGradeUpdate />}
    />
  );
};

export default MyGradeUpdateContainer;