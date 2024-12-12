import React, { useState, useEffect } from 'react';
import NonLogin from './NonLogin';
import { useLocation } from 'react-router-dom';
import S from './style';


const NonLoginContainer = () => {
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
    <S.container className='container'>
      <NonLogin play={play} plays={plays}/>
    </S.container>
  );
};

export default NonLoginContainer;
