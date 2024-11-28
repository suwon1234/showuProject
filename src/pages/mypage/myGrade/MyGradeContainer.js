import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import MyGrade from './MyGrade';

const MyGradeContainer = () => {
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyGrade />}
    />
  );
};

export default MyGradeContainer;