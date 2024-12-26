import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ShowuVideo from './ShowuVideo';

const ShowuVideoConatiner = () => {
  const [plays, setPlays] = useState(null);
  useEffect(() => {
    const fetchPlays = async () => {
      try {
        const response = await fetch('http://localhost:4000/play');
        const data = await response.json();
        setPlays(data);  
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchPlays();
  }, []);

  const [play, setPlay] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const programId = queryParams.get('programid');
  
  useEffect(() => {
    const getPlays = async () => {
      try {
        const response = await fetch(`http://localhost:4000/play/${programId}`);
        const datas = await response.json();
        setPlay(datas);
      } catch (error) {
        console.log(error);
      }
    };
    getPlays();
  }, [programId]);
  return (
    <div>
      <ShowuVideo play={play} plays={plays}/>
    </div>
  );
};

export default ShowuVideoConatiner;