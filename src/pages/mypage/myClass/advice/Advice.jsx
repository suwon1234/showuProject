import React, { useEffect, useState } from 'react';
import usePagination from '../../../../hooks/usePagination';
import Advicecomponent from './Advicecomponent';

const PAGINATION = {
  pageRange: 8,
  btnRange: 3,
};

const Advice = () => {
  const [ advice, setAdvice ] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");

  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: advice || [],
  });

  useEffect(() => {
    const getAdvice = async () => {
      try {
        const response = await fetch('http://localhost:8000/my/showu/reservation', {
          method : "GET",
          headers : {
            "Authorization": `Bearer ${jwtToken}`
          }
        })
          .then((res) => res.json())
          .then((res) => {
            if(!res.LessonResevationSuccess){
              console.log(res.message)
            }
            setAdvice(res.myLessonReservationList)
            console.log(res.message)
          })
        
      } catch (error) {
        console.log("AdviceError", error)
      }
    }

    getAdvice()

  }, [])

  // console.log(advice)

  return (
      <>
        <Advicecomponent 
          page={page} setPage={setPage} 
          currentList={currentList} 
          totalPost={totalPost}
          PAGINATION={PAGINATION}
        />
      </>
  );
};

export default Advice;