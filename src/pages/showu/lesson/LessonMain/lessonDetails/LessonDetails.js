import React from 'react';

const LessonDetails = () => {
    return (
        <div className='LessonDetailsWrapper'>
            <div className='LessonDetailsTopBg'></div>
            <img  className='LessonDetailsThunbnail'/>
            <h2 className='LessonName'>
                씬앤컷 SCENE & CUT : 설대봉 디렉터
            </h2>
            <div className='LessonDetailsSummary'>
                <p className='LessonClassAndLocation'>
                    <span className='LessonClass'>
                        연기 레슨
                    </span>
                    <span className='LessonLocation'>
                        서울시 서초구
                    </span>
                </p>
                <p className='LessonSummary'>
                    기획사 오디션전문/연기 교육 상위 1%
                </p>
            </div>
            <div className='LessonDetailsLink'>
                <a className='LessonDetails'>
                    <span className='LessonInfo'>정보</span>
                </a>
                <a className='LessonDetails'>
                    <span className='LessonPortfolio'>포트폴리오</span>
                </a>
                <a className='LessonDetails'>
                    <span className='LessonPhotoAndVideo'>사진/동영상</span>
                </a>
                <a className='LessonDetails'>
                    <span className='LessonReviews'>리뷰</span>
                    <span className='LessonReviewers'>90</span>
                </a>
                <a className='LessonDetails'>
                    <span className='LessonQnA'>질문 답변</span>
                </a>
            </div>
            <div className='Infomation'>
                <h3>정보</h3>

                <p>
                    <span>icon</span><span>직원수 5명</span>
                </p>
                <p>
                    <span>icon</span>
                    <span>
                        연락 가능시간: 오전12시 - 오전12시
                    </span>
                </p>
                <p>
                    <span>icon</span>
                    <span>
                       카드 결제, 계좌이체, 현금결제 가능
                    </span>
                </p>
            </div>
            <div className='ServiceDetails'>
                <h3>서비스 상세설명</h3>
                <div className='Details'>
                    <p>
                        끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문 
                    </p>
                    <p>
                        1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.
                    </p>
                    <span className='MoreDetails'>
                        상세설명 더보기
                    </span>
                </div>

            </div>
        </div>
    );
};

export default LessonDetails;