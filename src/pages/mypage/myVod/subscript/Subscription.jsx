import React, { useEffect, useState } from 'react';
import SubsciptComponent from './SubsciptComponent';
import usePagination from '../../../../hooks/usePagination';
import { useSelector } from 'react-redux';

const PAGINATION = {
  pageRange: 6,
  btnRange: 3,
};

const Subscription = () => {
  const [vod, setVod] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser ? currentUser._id : '';
  const jwtToken = localStorage.getItem("jwtToken");
  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: vod || [],
  });

  useEffect(() => {
    const getVod = async () => {
      try {
        const response = await fetch(`http://localhost:8000/my/vod/subscript`, {
          method : "GET",
          headers : {
            "Authorization": `Bearer ${jwtToken}`,
          }
        })
        .then((res) => res.json())
        .then((res) => {
          if (!res.vodSubscriptSuccess) {
            console.log(res.message)
          }
          setVod(res.vodSubscript)
          console.log(res.message)
        })
      } catch (error) {
        console.log("SubscriptionError", error);
      }
    };

    getVod()
      
  }, []);

  console.log(currentList)

  return (
    <div>
      <SubsciptComponent 
        page={page} setPage={setPage} 
        currentList={currentList} 
        totalPost={totalPost}
        PAGINATION={PAGINATION}
      />
    </div>
  );
};

export default Subscription;
