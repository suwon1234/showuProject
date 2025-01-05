import React, { useEffect, useState } from 'react';
import usePagination from '../../../../hooks/usePagination';
import SpaceComponent from './SpaceComponent';

const PAGINATION = {
  pageRange: 6,
  btnRange: 3,
};

const Space = () => {
  const [ spaces, setSpaces ] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");

  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: spaces || [],
  });

  useEffect(() => {
    const getSpace = async () => {
      try {
        const response = await fetch(`http://localhost:8000/my/reservation/space`, {
          method : "GET",
          headers : {
            "Authorization": `Bearer ${jwtToken}`
          }
        })
          .then((res) => res.json())
          .then((res) => {
            if(!res.spaecSuccess){
              console.log(res.message)
            }
            setSpaces(res.resSpaceList)
            console.log(res.message)
          })
      } catch (error) {
        console.log("SpaceError", error)
      }
    }

    getSpace()
      
  }, [])

  // console.log(spaces)

  return (
    <>
      <SpaceComponent 
        page={page} setPage={setPage} 
        currentList={currentList} 
        totalPost={totalPost}
        PAGINATION={PAGINATION}
      />
    </>
  );
};

export default Space;