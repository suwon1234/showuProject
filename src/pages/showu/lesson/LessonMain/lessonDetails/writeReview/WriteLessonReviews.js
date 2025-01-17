
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar, faStarHalfAlt, faStar as emptyStar } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';


const WriteLessonReviews = () => {
    const [rating, setRating] = useState(0); // 선택된 별점
    const maxStars = 5; // 최대 별 개수
  
    const handleSelect = (value) => {
      setRating(value); // 선택한 별점 업데이트
    };

    return (
        <S.ReviewWrapper>
           <S.ReviweTitle>레슨 후기 쓰기</S.ReviweTitle>

           <div style={{ maxWidth: '200px', margin: '20px auto', textAlign: 'center' }}>
                <h3>별점 주기</h3>
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '5px',
                    cursor: 'pointer',
                }}
                >
                    {Array.from({ length: maxStars }, (_, index) => index + 1).map((star) => (
                        <div
                            key={star}
                            onClick={() => handleSelect(star)} // 클릭하면 해당 별점으로 설정
                            style={{
                                color : '#ccc',
                                fontSize: '20px',
                                color: star <= rating ? '#FFD400' : '#ccc', // 선택된 별은 금색
                            }}
                        >
                        <FontAwesomeIcon icon={star <= rating ? filledStar : emptyStar}/>
                        </div>
                    ))}
                </div>

                {rating > 0 && (
                    <p style={{ marginTop: '20px', fontSize: '18px' }}>
                        선택한 별점: <strong>{rating}점</strong>
                    </p>
                )}
            </div>

           <S.ReviewNotice>
                <p>후기 등록</p>
                <textarea  placeholder='레슨 후기를 등록해 주세요'/>

           </S.ReviewNotice>
           < S.ButtonWrapper>
                <button className='submitButton'>후기 등록하기</button>
                <Link to={'/showu/lesson/details/:id'}>
                    <button className='backButton'>뒤로가기</button>
                </Link>
           </ S.ButtonWrapper>
        </S.ReviewWrapper>
    );
};

export default WriteLessonReviews