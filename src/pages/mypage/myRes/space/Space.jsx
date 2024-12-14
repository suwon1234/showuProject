import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import S from './SpaceStyle';

const Space = () => {
  const [ spaces, setSpaces ] = useState([]);

  useEffect(() => {
    const getSpace = async () => {
      try {
        const response = await fetch(`http://localhost:4000/MyResSpace`);
        const datas = await response.json();
        setSpaces(datas);
      } catch (error) {
        console.log("SpaceError", error)
      }
    }

    getSpace()
      
  }, [])

  // console.log(spaces)

  return (
    <S.Container className='container'>
      { spaces && spaces.map((item, i) => (
        <S.Warpper key={i} className='warpper'>
          <S.Image className='image'>
            <img src={item.spaceImageUrl} alt="공간대여" />
          </S.Image>
          <S.Content className='content'>
            <S.Title className='title'>
              <p className='spaceName'>{item.space}</p>
              <div className='heartBox'>
                <FontAwesomeIcon icon={faHeart} className='heart'/>
                <p className='likeCount'>{item.like}</p>
              </div>
            </S.Title>
            <p className='type'>{item.type}</p>
            <p className='area'>{item.area}</p>
            <p className='price'>{item.price}</p>
          </S.Content>
        </S.Warpper>
      ))}
    </S.Container>
  );
};

export default Space;