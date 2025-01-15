import React, { useEffect, useState } from 'react';
import PostComponent from './_component/PostComponent';
import usePagination from '../../../../hooks/usePagination';
import { useSelector } from 'react-redux';

const PAGINATION = {
  pageRange: 6,
  btnRange: 3,
};

const Post = () => {
  const [ posts, setPosts ] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser ? currentUser._id : '';
  const jwtToken = localStorage.getItem("jwtToken");
  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: posts || [],
  });
  
  useEffect(() => {
    const getPosts = async () => {
      //userId, jwtToken 없을 경우 요청 중단
      if(!userId || !jwtToken) return; 

      try {
        await fetch(`http://localhost:8000/my/my-active/post`, {
          method: "GET",
          headers : {
            "Authorization": `Bearer ${jwtToken}`,
          }
        })
          .then((res) => res.json())
          .then((res) => {
            if(!res.getPostSuccess){
              console.log(res.message)
            }
            console.log(res.message)
            setPosts(res.foundPosts)
          })
      } catch (error) {
        console.log("getPostsError", error)
      }
    }

    getPosts()

  }, [userId, jwtToken])
  
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