import React, { useEffect, useState } from 'react';
import usePagination from '../../../../hooks/usePagination';
import LikeAuctionComponent from './LikeAuctionComponent';

const PAGINATION = {
  pageRange: 4,
  btnRange: 3,
};

const LikeAction = () => {
  const [ auctions, setAuctions ] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");
  
  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: auctions || [],
  });

  useEffect(() => {
    const getAuctions = async () => {
      try {
        const response = await fetch(`http://localhost:8000/my/like/auction`, {
          method : "GET",
          headers : {
            "Authorization": `Bearer ${jwtToken}`,
          }
        })
        .then((res) => res.json())
        .then((res) => {
          if(!res.foundLikeAuctoinSuccess){
            console.error(res.message)
          }
          setAuctions(res.likedAuction)
          console.log(res.message)
        })
      } catch (error) {
        console.log("LikeAuctionError", error)
      }
    }

    getAuctions()

  }, [jwtToken])

  // console.log(auctions)

  return (
    <>
      <LikeAuctionComponent 
        page={page} setPage={setPage} 
        currentList={currentList} 
        totalPost={totalPost}
        PAGINATION={PAGINATION}
      />
    </>
  );
};

export default LikeAction;