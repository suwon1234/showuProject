import React from 'react';
import MyGrade from '../MyGrade';
import Layout from '../../_component/Layout';
import MypageContainer from '../../MypageContainer';

const MyGradeUpdateContainer = () => {
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyGrade />}
    />
  );
};

export default MyGradeUpdateContainer;