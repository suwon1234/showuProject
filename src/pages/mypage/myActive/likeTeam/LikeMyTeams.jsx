import React, { useEffect, useState } from 'react';
import LikeTeamComponent from './LikeTeamComponent.jsx';
import usePagination from '../../../../hooks/usePagination.js';

const PAGINATION = {
  pageRange: 4,
  btnRange: 3,
};

const LikeMyTeams = () => {
  const [ teams, setTeams ] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");

  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: teams || [],
  });

  useEffect(() => {
    const getTeams = async () => {
      try {
        const response = await fetch(`http://localhost:8000/my/like/team`, {
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
            setTeams(res.myLikeTeam)
            console.log(res.message)
          })
        }catch (error) {
          console.log("LikeMyTeamError", error)
      }
    }

    getTeams()
      
  }, [])

  return (
    <>
      <LikeTeamComponent 
        page={page} setPage={setPage} 
        currentList={currentList} 
        totalPost={totalPost}
        PAGINATION={PAGINATION}
      />
    </>
  );
};

export default LikeMyTeams;