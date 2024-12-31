import React, { useEffect, useState } from 'react';
import PostComponent from './_component/PostComponent';
import usePagination from '../../../../hooks/usePagination';

const PAGINATION = {
  pageRange: 6,
  btnRange: 5,
};

const Post = () => {
  const [ posts, setPosts ] = useState([]);
  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: posts,
  });
  
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`http://localhost:8000/community`);
        const datas = await response.json();
        // console.log(datas)
        setPosts(datas)
      } catch (error) {
        console.log(error)
      }
    }

    getPosts()

  }, [])
  
  // console.log(posts);

  return (
    <>
      <PostComponent 
        page={page} setPage={setPage} 
        currentList={currentList} 
        totalPost={totalPost}
        PAGINATION={PAGINATION}
      />
    </>
  );
};

export default Post;