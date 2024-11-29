import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import ReviewContainer from './review/ReviewContainer';


const MyActiveReviewContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<ReviewContainer />} />
  );
};

export default MyActiveReviewContainer;
