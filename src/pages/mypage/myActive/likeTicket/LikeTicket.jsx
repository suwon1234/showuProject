import React, { useEffect, useState } from 'react';
import S from './LikeTicketStyle';
import { useNavigate } from 'react-router-dom';
import usePagination from '../../../../hooks/usePagination';
import LikeTicketComponent from './LikeTicketComponent';

const PAGINATION = {
  pageRange: 6,
  btnRange: 3,
};

const LikeTicket = () => {
  const [ ticket, setTicket ] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  }

  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: ticket || [],
  });


  useEffect(() => {
    const getTicket = async () => {
     try {
      const response = await fetch(`http://localhost:8000/my/like/ticket`, {
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
          setTicket(res.likeTicket)
          console.log(res.message)
        })
     } catch (error) {
      console.log("LikeTicketError", error)
     }
    }

    getTicket()

  }, [])

  return (
    <>
      <LikeTicketComponent 
        page={page} setPage={setPage} 
        currentList={currentList} 
        totalPost={totalPost}
        PAGINATION={PAGINATION}
        handleNavigate={handleNavigate}
      />
    </>
  );
};

export default LikeTicket;