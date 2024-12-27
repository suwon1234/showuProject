import React, { useEffect, useState } from 'react';
import S from './WatchStyle';

const Watch = () => {
  const [ vod, setVod ] = useState([]);

  useEffect(() => {
    const getVod = async () => {

      try {
        const response = await fetch(`http://localhost:4000/myVod`);
        const datas = await response.json();
        return datas;
      }
      catch (error){
        console.log("WatchError", error)
        return []; // 오류 발생 시 빈 배열 반환
      }
    }
    
    getVod()
      .then((data) => setVod(data))
      .catch(console.error)

  }, [])

  // console.log(vod);
  // const subscriptions = Array.isArray(vod) ? vod.filter((item) => item.state.includes("찜")) : [];
  const watch = Array.isArray(vod) ? vod.filter((item) => item.state.includes("찜")) : [];

  return (
    <S.Container className='Container'>
      <p className='edit'>편집</p>

        <S.Wrapper className='Wrapper'>
          { watch && watch.map((item, i) => (
            <S.Item key={i} className='item'>
              <S.Image className='image'>
                <img src={item.imageUrl} alt='vod 이미지'></img>
              </S.Image>
              <S.Title className='title'>
                <p>{item.title}</p>
                <p>이용 일시ㆍ{item.date}</p>
              </S.Title>
            </S.Item>
          ))}
          </S.Wrapper>
      </S.Container>
  );
};

export default Watch;