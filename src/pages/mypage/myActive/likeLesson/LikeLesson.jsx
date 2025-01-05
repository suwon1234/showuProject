import React, { useEffect, useState } from 'react';
import LikeLessonComponent from './LikeLessonComponent';
import usePagination from '../../../../hooks/usePagination';

const PAGINATION = {
  pageRange: 6,
  btnRange: 3,
};

const LikeLesson = () => {
  const [ lesson, setLesson ] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");

  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: lesson || [],
  });

  useEffect(() => {
    const getLesson = async () => {
      try {
        const response = await fetch(`http://localhost:8000/my/like/lesson`, {
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
            setLesson(res.myLikeLesson)
            console.log(res.message)
          })
      } catch (error) {
        console.log("LikeLessonError" , error);
      }
    }

    getLesson()

  }, [])

  return (
    <>
      <LikeLessonComponent 
        page={page} setPage={setPage} 
        currentList={currentList} 
        totalPost={totalPost}
        PAGINATION={PAGINATION}
      />
    </>
  );
};

export default LikeLesson;