import React, { useEffect, useState } from 'react';
import Play from './Play'

const Playpage = () => {


  const [plays,setPlays]=useState([]);
  useEffect(()=>{
    const getPlays=async()=>{
      try{
        const response =await fetch("http://localhost:4000/play");
        const datas =await response.json();
        return datas;
      }catch(error){
        console.log(error)
      }
    }
    getPlays().then(setPlays).catch(console.error)
  },[])
  console.log(plays)
  return (
    <div>
      <p className='subTitle' >영상 개수 : 🙂 <span>{plays && plays.map(({data})=>data).length}</span></p>
      <ul>
      {plays && plays.map((play,i)=>(
        <Play play={play} key={i}/>
      ))}
      </ul>
    </div>
  );
};

export default Playpage;