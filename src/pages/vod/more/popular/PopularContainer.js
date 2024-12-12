import React, { useEffect, useState } from 'react';
import Popular from '../popular/Popular'

const PopularContainer = () => {
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
      <Popular plays={plays}/>
    </div>
  );
};

export default PopularContainer;