import React from 'react';
import S from './style';
import { faStar } from'@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const LessonReview = () => {
    return (
        <S.StudentReview>
            <S.Title id='lessonReviews'>리뷰</S.Title>
            <Link to={'/showu/lesson/details/writeReviews'}>
                <S.ReviewButton>리뷰 쓰기</S.ReviewButton>
            </Link>
            <S.ReviewScoreWrapper>
                <S.ReviewScore>5.0</S.ReviewScore>
                <S.ReviewScoreIconWrapper>
                    <S.ReviewScoreIcon >
                        <FontAwesomeIcon  icon={faStar} className='reviewStarIcon'/>
                        <FontAwesomeIcon  icon={faStar} className='reviewStarIcon'/>
                        <FontAwesomeIcon  icon={faStar} className='reviewStarIcon'/>
                        <FontAwesomeIcon  icon={faStar} className='reviewStarIcon'/>
                        <FontAwesomeIcon  icon={faStar} className='reviewStarIcon'/>
                    </S.ReviewScoreIcon>
                    <S.ReviewCount >90개 리뷰</S.ReviewCount>
                </S.ReviewScoreIconWrapper>
            </S.ReviewScoreWrapper>
            <S.ReviewWrapper>
                <S.ReviewerName>김**</S.ReviewerName>
                <S.LessonTypeAndScore>
                    <S.LessonType>
                        연기 레슨
                    </S.LessonType>
                    <S.LessonScoreWrapper>
                        <FontAwesomeIcon  icon={faStar} className='reviewStarIcon'/>
                        <S.LessonScore>
                            5.0
                        </S.LessonScore>
                    </S.LessonScoreWrapper>
                    <S.UpdateAndDeleteButtonWrapper>
                        <S.UpdateButton><span>수정</span></S.UpdateButton>
                        <S.DeleteButton><span>삭제</span></S.DeleteButton>
                    </S.UpdateAndDeleteButtonWrapper>
                </S.LessonTypeAndScore>
                <S.LessonReviewWrapper>
                    <S.LessonReview>                              
                        연기에 대해 하나도모르는 채로 가서 걱정했었는데 기초부터 차근차근 수업해주셔서 잘 배울 수 있었어요^^ 기
                        초적인 것이 어느정도 되고 디테일 한 부분까지 알려주셔서 좋있습니다 ㅎㅎ
                    </S.LessonReview>
                    <S.MoreReview className='active'>
                        더보기
                    </S.MoreReview>
                </S.LessonReviewWrapper>
                <S.ReviewWriteDate>2023. 10. 06</S.ReviewWriteDate>
            </S.ReviewWrapper>    
            <S.MoreDetails>
                    리뷰 더보기<span>icon</span>
            </S.MoreDetails>
    </S.StudentReview>
    );
};

export default LessonReview;