import React from 'react';
import NonLogin from './NonLogin';
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NonLoginContainer = () => {
  const [plays,setPlays]=useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const programId = queryParams.get('programid');
  
  useEffect(()=>{
    const getPlays=async()=>{
      try{
        const response =await fetch(`http://localhost:4000/play/${programId}`);
        const datas =await response.json();
        return datas;
      }catch (error){
        console.log(error)
      }
    }
    getPlays().then(setPlays).catch(console.error);
  },[programId])
  console.log(plays)
  return (
    <div>
      <NonLogin play={plays}/> 
    </div>
  );
};

export default NonLoginContainer;