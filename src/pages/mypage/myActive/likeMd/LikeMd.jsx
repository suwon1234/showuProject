import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import S from './LikeMdStyle';
import { useSelector } from 'react-redux';

const LikeMd = () => {
  const [ mds, setMds ] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser ? currentUser._id : '';
  const jwtToken = localStorage.getItem("jwtToken");

  useEffect(() => {
    const getMds = async () => {
      if(!userId || !jwtToken) return;

      try {
        const response = await fetch(`http://localhost:8000/my/like/md`, {
          method : "GET",
          headers : {
            "Authorization": `Bearer ${jwtToken}`,
          }
        })
        const data = await response.json();
        if (!data.foundLikeMdSuccess) {
          console.error(data.message);
        } else {
          setMds(data.likedMd);
          console.log(data.message)
        }
      } catch (error) {
        console.log("LikeMdError", error)
      }
    }

    getMds()

  }, [userId, jwtToken])

  console.log(mds)

  return (
    <S.Container className='Container'>

      { mds && mds.map((item, i) => (
        <S.Wrapper key={i} className='Wrapper'>
          <S.Image className='Image'>
            <img src={item.image} alt='md 이미지' />
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