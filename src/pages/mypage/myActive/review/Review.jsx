import React, { useEffect, useState } from 'react';
import S from './ReviewStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = () => {
  const [ reviews, setReviews ] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetch(`http://localhost:4000/review`);
        const datas = await response.json();
        setReviews(datas)
      } catch (error) {
        console.log("ReviewError", error)
      }
    }

    getReviews()

  }, [])

  // console.log(reviews)

  return (
    <S.Container className='Container'>
      { reviews && reviews.map((item, i) => (
        <S.Wrapper key={i} className='Wrapper'>
          <S.Title className='title'>
            <img src={item.profileImageUrl} alt="프로필 이미지" />
            <S.RightBox className='rightBox'>
              <p className='productName'>{item.productName}</p>
              <p className='writer'>{item.writer}</p>
            <S.Rating className='rating'>
              <FontAwesomeIcon className='star' icon={faStar} />
              <FontAwesomeIcon className='star' icon={faStar} />
              <FontAwesomeIcon className='star' icon={faStar} />
              <FontAwesomeIcon className='star' icon={faStar} />
              <FontAwesomeIcon className='star' icon={faStar} />
              <p className='date'>{item.date}</p>
            </S.Rating>
            </S.RightBox>
          </S.Title>
            <p className='content'>{item.content}</p>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default Review;