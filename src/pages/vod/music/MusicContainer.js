import React, { useEffect, useState } from 'react';
import Music from './Music';

const MusicContainer = () => {
  const [plays, setPlays] = useState(null);
  
  useEffect(() => {
    const musiclist = async () => {
      try {
        const response = await fetch('http://localhost:4000/play');
        const data = await response.json();
        setPlays(data);  
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    musiclist();
  }, []);
  return (
    <div>
      <Music plays={plays}/>
    </div>
  );
};

export default MusicContainer;
