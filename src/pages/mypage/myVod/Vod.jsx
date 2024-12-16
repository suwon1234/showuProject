import React, { useEffect, useState } from 'react';
import S from './VodStyle';

const Vod = () => {
  const [ vod, setVod ] = useState([]);

  useEffect(() => {
    const getVod = async () => {

      try {
        const response = await fetch(`http://localhost:4000/myVod`);
        const datas = await response.json();
        return datas;
      }
      catch (error){
        console.log("VodError" ,error)
      }
    }
    
    getVod()
      .then((data) => setVod(data))
      .catch(console.error)

  }, [])

  // console.log(vod);
  
  return (
    <S.Container className='Container'>
      { vod && vod.map((item, i) => (
        <S.Wrapper key={i} className='Wrapper'>
        <S.Image className='Image'>
          <img src={item.imageUrl} alt="vod 포스터" />
        </S.Image>
        <S.Content className='content'>
          <p>{item.title}</p>
          <p>{item.place}</p>
          <p>{item.date}</p>
        </S.Content>
      </S.Wrapper>
      ))
      }
    </S.Container>
  );
};

export default Vod;