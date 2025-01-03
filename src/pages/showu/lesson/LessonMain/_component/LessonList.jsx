import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from'@fortawesome/free-solid-svg-icons';
import S from './style';
import { Link } from 'react-router-dom';

const LessonList = () => {
    return (
        <Link to={'/showu/lesson/details'}>
                <S.LessonList>
                    <S.LessonWrapper>
                        <div>
                            <S.LessonName>쇼팽 피아노</S.LessonName>
                            <div className='lessonContent'>
                                <S.LessonLikeWrapper>
                                <FontAwesomeIcon  icon={faStar} className='lessonStarIcon'/>
                                <div className='lessonLikeWrapper'>
                                        <span className='lessonLikeScore'>5.0</span>
                                        <span className ='lessonLikeUser'>(5)</span>
                                </div>
                                <div className='centerDot'></div>
                                    <span className='careerYear'>경력11년</span>
                                </S.LessonLikeWrapper>
                                <S.LessonSummary>
                                    현재 성북구에서 ‘쇼팽피아노음악교습소’를 운영하고 있습니다. 학원방문도 환영하며, 시간조율을 통해 개인레......
                                </S.LessonSummary>
                            </div>
                        </div>
                        <S.LessonThumbnailWrapper>
                            <img className='lessonThumbnail' />
                        </S.LessonThumbnailWrapper>
                    </S.LessonWrapper>
                </S.LessonList> 
            <S.LessonList>
                <S.LessonWrapper>
                    <div>
                        <S.LessonName>쇼팽 피아노</S.LessonName>
                        <div className='lessonContent'>
                            <S.LessonLikeWrapper>
                            <FontAwesomeIcon  icon={faStar} className='lessonStarIcon'/>
                            <div className='lessonLikeWrapper'>
                                    <span className='lessonLikeScore'>5.0</span>
                                    <span className ='lessonLikeUser'>(5)</span>
                            </div>
                            <div className='centerDot'></div>
                                <span className='careerYear'>경력11년</span>
                            </S.LessonLikeWrapper>
                            <S.LessonSummary>
                                현재 성북구에서 ‘쇼팽피아노음악교습소’를 운영하고 있습니다. 학원방문도 환영하며, 시간조율을 통해 개인레......
                            </S.LessonSummary>
                        </div>
                    </div>
                    <S.LessonThumbnailWrapper>
                        <img className='lessonThumbnail' />
                    </S.LessonThumbnailWrapper>
                </S.LessonWrapper>
            </S.LessonList> 
            <S.LessonList>
                <S.LessonWrapper>
                    <div>
                        <S.LessonName>쇼팽 피아노</S.LessonName>
                        <div className='lessonContent'>
                            <S.LessonLikeWrapper>
                            <FontAwesomeIcon  icon={faStar} className='lessonStarIcon'/>
                            <div className='lessonLikeWrapper'>
                                    <span className='lessonLikeScore'>5.0</span>
                                    <span className ='lessonLikeUser'>(5)</span>
                            </div>
                            <div className='centerDot'></div>
                                <span className='careerYear'>경력11년</span>
                            </S.LessonLikeWrapper>
                            <S.LessonSummary>
                                현재 성북구에서 ‘쇼팽피아노음악교습소’를 운영하고 있습니다. 학원방문도 환영하며, 시간조율을 통해 개인레......
                            </S.LessonSummary>
                        </div>
                    </div>
                    <S.LessonThumbnailWrapper>
                        <img className='lessonThumbnail' />
                    </S.LessonThumbnailWrapper>
                </S.LessonWrapper>
            </S.LessonList> 
            
        </Link>
    );
};

export default LessonList;