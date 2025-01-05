import React, { useEffect, useState } from 'react';
import MyVodComponent from './MyVodComponent.jsx';
import usePagination from '../../../hooks/usePagination.js';

const PAGINATION = {
  pageRange: 6,
  btnRange: 3,
};

const Vods = () => {
  const [ vod, setVod ] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");

  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: vod || [],
  });

  useEffect(() => {
    const getVod = async () => {

      try {
        const response = await fetch(`http://localhost:8000/my/vod`, {
          method : "GET",
          headers : {
            "Authorization": `Bearer ${jwtToken}`
          }
        })
          .then((res) => res.json())
          .then((res) => {
            if(!res.myVodSuccess){
              console.log(res.message)
            }
            setVod(res.myVodList)
            console.log(res.message)
          })
      }
      catch (error){
        console.log("VodError" ,error)
      }
    }
    
    getVod()

  }, [jwtToken])

  // console.log(vod);
  
  return (
    <>
      <MyVodComponent 
        page={page} setPage={setPage} 
        currentList={currentList} 
        totalPost={totalPost}
        PAGINATION={PAGINATION}
      />
    </>
  );
};

export default Vods;