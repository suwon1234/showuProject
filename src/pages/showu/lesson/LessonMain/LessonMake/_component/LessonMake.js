import React from 'react';

const LessonMake = () => {
    return (
        <div>
            <div className='LessonMakeTopBg'></div>
            <img  className='LessonMakeThumbnail'/>
            <div className='LessonMakingFormWrapper'>
                <h1 className='LessonMakingTitle'>
                    ShowU 레슨 등록하기
                </h1>
                <form className='LessonMakingForm'>
                    <div className='LessonProfileWrapper'>
                        <h3 className='Title'>프로필 등록</h3>
                        <div className='ProfileRegistration'>
                            <img className='ProfileThumbnail' alt='프로필 썸네일'/>
                            <div className='ProfileInputWrapper'>
                                <input  type='text' placeholder='전문가 이름을 등록하세요'/>
                                <input  type='text' placeholder='레슨 이름을 등록 하세요'/>
                                <input  type='text' placeholder='연락 가능시간'/>
                            </div>   
                        </div>
                    </div>

                    <div className='CategoryRegistration'>
                        <h3 className='Title'>분야 등록</h3>
                        <div className='LessonCategoryWrapper'>
                            <input type='button' className='LessonCategory'><span>음악</span></input>
                            <input type='button' className='LessonCategory'><span>연기</span></input>
                            <input type='button' className='LessonCategory'><span>마술</span></input>
                        </div>
                    </div>

                    <div className='LocationRegistation'>
                        <h3 className='Title'>위치</h3>
                        <input type='text' className='LessonLocation' placeholder='주소를 입력해 주세요'/>
                        <input type='text' className='LessonLocation' placeholder='상세 주소를 입력해 주세요'/>
                    </div>

                    <div className='DetailsRegistration'>
                        <h3 className='Title'>레슨 상세설명</h3>
                        <textarea className='LessonDetails' placeholder='상세설명을 적어주세요'/>
                    </div>

                    <div className='LessonEtcRegistration'>
                        <h3 className='Title'>경력 / 이력 / 학력</h3>
                        <div className='EtcWrapper'>
                            <textarea className='EtcDetails' placeholder='경력 사항을 입력해 주세요'/>
                            <textarea className='EtcDetails' placeholder='이력 사항을 입력해 주세요'/>
                            <textarea className='EtcDetails' placeholder='학력 사항을 입력해 주세요'/>
                        </div>
                    </div>

                    <div className='PortfoilosRegistration'>
                        <h3 className='Title'>포트폴리오</h3>
                        <button className="PortfoilosRegistrationButton" >등록하기</button>
                        <div>
                            <img  className='PortfolioThumbnail'/>
                            <img  className='PortfolioThumbnail'/>
                        </div>
                    </div>

                    <div className='MediasRegistration'>
                        <h3 className='Title'>동영상</h3>
                        <button className="MediasRegistrationButton" >등록하기</button>
                        <div>
                            <img  className='MediasThumbnail'/>
                            <img  className='MediasThumbnail'/>
                        </div>
                    </div>

                    <div className='LessonNoticeRegistration'>
                        <h3 className='Title'>기타 공지사항</h3>
                        <textarea  placeholder='기타 공지사항을 적어주세요'/>
                    </div>

                    <button className='CancleButton'>취소하기</button>
                    <button type='submit' className='SubmitButton'>등록하기</button>
                </form>
                
            </div>
        </div>
    );
};

export default LessonMake;