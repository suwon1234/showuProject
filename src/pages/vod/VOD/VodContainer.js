import React, { useEffect, useState } from 'react';
import Vod from './Vod';
import { useLocation } from 'react-router-dom';

const VodContainer = () => {




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
  return (
    <div> 
      <Vod plays={plays}/>
    </div>
  );
};

export default VodContainer;