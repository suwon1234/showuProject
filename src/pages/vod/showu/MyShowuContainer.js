import React, { useEffect, useState } from 'react';
import ShowuInsert from './ShowuInsert';

const MyShowuContainer = () => {
  const [plays, setplays] = useState(null); // 수정: 구조 분해 할당

  useEffect(() => {
    const videoplays = async () => {
      try {
        const response = await fetch('http://localhost:4000/play');
        const datas = await response.json();
        setplays(datas); 
      } catch (error) {
        console.error('Error', error);
      }
    };

    videoplays(); 
  }, []); 
  console.log(plays)

  return (
    <div>
      <ShowuInsert plays={plays} />
    </div>
  );
};

export default MyShowuContainer;
