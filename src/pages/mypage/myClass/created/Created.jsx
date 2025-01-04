import React, { useEffect, useState } from 'react';
import CreatedComponent from './CreatedComponent';
import usePagination from '../../../../hooks/usePagination';

const PAGINATION = {
  pageRange: 8,
  btnRange: 3,
};


const Created = () => {
  const [ lesson, setLesson ] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");

  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: lesson || [],
  });

  useEffect(() => {
    const getLesson = async () => {
      try {
        const response = await fetch(`http://localhost:8000/my/showu/lesson`, {
          method : "GET",
          headers : {
            "Authorization": `Bearer ${jwtToken}`,
          }
        })
          .then((res) => res.json())
          .then((res) => {
            if(!res.lessonSuccess){
              console.log(res.message)
            }
            // console.log(res.message)
            console.log(res.myLesson)
            setLesson(res.myLesson || [])
          })
      } catch (error) {
        console.log("LessonError" , error);
      }
    }

    getLesson()

  }, [jwtToken])

  if (lesson.length === 0) {
    return <div>Loading...</div>;  // lesson 데이터가 없으면 로딩 화면을 보여줌
  }

  // console.log("totalPost", totalPost)


  // console.log(lesson)

  return (
    <>
      <CreatedComponent
        page={page} setPage={setPage} 
        currentList={currentList} 
        totalPost={totalPost}
        PAGINATION={PAGINATION}
      />
    </>
  );
};

export default Created;