import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePagination from '../../../../hooks/usePagination';
import TicketComponent from './TicketComponent';

const PAGINATION = {
  pageRange: 6,
  btnRange: 3,
};

const Ticket = () => {
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
      const response = await fetch(`http://localhost:8000/my/reservation/ticket`, {
        method : "GET",
        headers : {
          "Authorization": `Bearer ${jwtToken}`
        }
      })
        .then((res) => res.json())
        .then((res) => {
          if(!res.ticketsuccess){
            console.log(res.message)
          }
          setTicket(res.resTicketList)
          console.log(res.message)
        })
     } catch (error) {
      console.log("TicketError", error)
     }
    }

    getTicket()

  }, [])


  // console.log(ticket)

  return (
    <>
      <TicketComponent 
        page={page} setPage={setPage} 
        currentList={currentList} 
        totalPost={totalPost}
        PAGINATION={PAGINATION}
        handleNavigate={handleNavigate}
      />
    </>
  );
};

export default Ticket;