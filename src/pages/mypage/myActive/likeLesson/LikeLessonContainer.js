import React from 'react';
import Layout from '../../_component/Layout';
import MypageContainer from '../../MypageContainer';
import MyActiveLesson from './MyActiveLesson';

const LikeLessonContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<MyActiveLesson />} />
  );
};

export default LikeLessonContainer;
