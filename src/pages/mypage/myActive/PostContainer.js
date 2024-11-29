import React, { useState } from 'react';
import Layout from '../_component/Layout';
import MypageContainer from '../MypageContainer';
import MyActiveTeam from './likeTeam/MyActiveTeam';
import Post from './list/Post';
import Comment from './list/Comment';


const PostContainer = () => {
  const [ activeContent, setActiveContent ] = useState('post');

  const renderContent = () => {
    
    switch (activeContent) {
      case 'post' :
        return <Post setActiveContent={setActiveContent} />;
      case 'comment' :
        return <Comment />;
      default:
        return <MyActiveTeam setActiveContent={setActiveContent} />
    }
  }

  return (
    <Layout 
      leftContent={<MypageContainer />}
      rightContent={renderContent()}/>
  );
};

export default PostContainer;