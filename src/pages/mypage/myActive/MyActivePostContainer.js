import React from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import PostContainer from './post/PostContainer';


const MyActivePostContainer = () => {
  
  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={<PostContainer />} />
  );
};

export default MyActivePostContainer;
