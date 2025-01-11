import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import usePagination from '../../../../hooks/usePagination';
import LikeMdComponent from './LikeMdComponent';

const PAGINATION = {
  pageRange: 4,
  btnRange: 3,
};

const LikeMd = () => {
  const [ mds, setMds ] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser ? currentUser._id : '';
  const jwtToken = localStorage.getItem("jwtToken");
  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: mds || [],
  });

  useEffect(() => {
    const getMds = async () => {
      if(!userId || !jwtToken) return;

      try {
        const response = await fetch(`http://localhost:8000/my/like/md`, {
          method : "GET",
          headers : {
            "Authorization": `Bearer ${jwtToken}`,
          }
        })
        const data = await response.json();
        if (!data.foundLikeMdSuccess) {
          console.error(data.message);
        } else {
          setMds(data.likedMd);
          console.log(data.message)
        }
      } catch (error) {
        console.log("LikeMdError", error)
      }
    }

    getMds()

  }, [userId, jwtToken])

  // console.log(mds)

  return (
    <>
      <LikeMdComponent 
        page={page} setPage={setPage} 
        currentList={currentList} 
        totalPost={totalPost}
        PAGINATION={PAGINATION}
      />
    </>
  );
};

export default LikeMd;