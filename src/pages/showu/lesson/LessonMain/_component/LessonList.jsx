import React from 'react';

const LessonList = () => {
    return (
            <li className='lessonList'>
                <h3 className='lessonName'>레슨이름</h3>
                <div className='lessonSummaryWraper'>
                    <p className='lessonLikeWrapper'>
                        <span className='lessonLike'>별</span>
                        <span className='lessonLikeScore'>5.0</span>
                        <span className='careerYear'>경력11년</span>
                    </p>
                    <p className='lessonSummary'>
                        현재 성북구에서 ‘쇼팽피아노음악교습소’를 운영하고 있습니다. 학원방문도 환영하며, 시간조율을 통해 개인레......
                    </p>
                </div>
                <div className='lessonThumbnailWrapper'>
                    <img className='lessonThumbnail' />
                </div>
            </li> 
    );
};

export default LessonList;