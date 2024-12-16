import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import S from './LikeMdStyle';

const LikeMd = () => {
  const [ mds, setMds ] = useState([]);

  useEffect(() => {
    const getMds = async () => {
      try {
        const response = await fetch(`http://localhost:4000/md`);
        const datas = await response.json();
        setMds(datas)
      } catch (error) {
        console.log("LikeMdError", error)
      }
    }

    getMds()

  }, [])

  // console.log(mds)

  return (
    <S.Container className='Container'>

      { mds && mds.map((item, i) => (
        <S.Wrapper key={i} className='Wrapper'>
          <S.Image className='Image'>
            <img src={item.mdImgUrl} alt='md 이미지' />
          </S.Image>
          <S.Content className='Content'>
            <p>{item.mdName}</p>
            <p>{item.price}</p>
            <FontAwesomeIcon icon={faHeart} className='heart'/>
          </S.Content>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default LikeMd;