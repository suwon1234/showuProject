import React, { useEffect, useState } from 'react';
import usePagination from '../../../../hooks/usePagination';
import LikeSpaceComponent from './LikeSpaceComponent';

const PAGINATION = {
  pageRange: 4,
  btnRange: 3,
};

const LikeSpace = () => {
  const [ spaces, setSpaces ] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");
  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: spaces || [],
  });


  useEffect(() => {
    const getSpace = async () => {
      try {
        const response = await fetch(`http://localhost:8000/my/like/space`, {
          method : "GET",
          headers : {
            "Authorization": `Bearer ${jwtToken}`
          }
        })
        .then((res) => res.json())
        .then((res) => {
          if(!res.likeSpaceSuccess){
            console.error(res.message)
          }
          setSpaces(res.likeSpace)
          console.log(res.message)
        })
      } catch (error) {
        console.log("LikeSpaceError", error)
      }
    }

    getSpace()
      
  }, [])

  console.log(spaces)
  
  return (
    <>
      <LikeSpaceComponent 
        page={page} setPage={setPage} 
        currentList={currentList} 
        totalPost={totalPost}
        PAGINATION={PAGINATION}
      />
    </>
  );
};

export default LikeSpace;