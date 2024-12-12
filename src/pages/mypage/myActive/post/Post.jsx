import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostComponent from './_component/PostComponent';

const Post = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <>
      <PostComponent />
    </>
  );
};

export default Post;