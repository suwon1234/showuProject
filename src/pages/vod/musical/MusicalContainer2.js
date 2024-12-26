import React, { useEffect, useState } from 'react';
import Musical from './Musical';

const MusicalContainer2 = () => {
  
  const [plays, setPlays] = useState(null);
  
  useEffect(() => {
    const playlist = async () => {
      try {
        const response = await fetch('http://localhost:4000/play');
        const data = await response.json();
        setPlays(data);  
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    playlist();
  }, []);
  return (
    <div>
      <Musical plays={plays}/>
    </div>
  );
};

export default MusicalContainer2;