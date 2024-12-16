import React from 'react';
import S from '../../style';

const LessonMake = () => {
    return (
        <S.LessonMakeWrapper>
            <S.LessonMakeTopBg></S.LessonMakeTopBg>
            <S.LessonMakeThumbnail/>
            <S.LessonMakingFormWrapper>
                <S.LessonMakingTitle>
                    ShowU 레슨 등록하기
                </S.LessonMakingTitle>
                <form className='LessonMakingForm'>
                    <div className='LessonProfileWrapper'>
                        <S.MakeTitle>프로필 등록</S.MakeTitle>
                        <S.ProfileRegistration>
                            <S.ProfileThumbnail alt='프로필 썸네일'/>
                            <S.ProfileInputWrapper>
                                <input  type='text'     placeholder='전문가 이름을 등록하세요'/>
                                <input  type='text' placeholder='레슨 이름을 등록 하세요'/>
                                <input  type='text' placeholder='연락 가능시간'/>
                            </S.ProfileInputWrapper>   
                        </S.ProfileRegistration>
                    </div>

                    <S.CategoryRegistration>
                        <S.MakeTitle>분야 등록</S.MakeTitle>
                        <S.LessonCategoryWrapper>
                            <S.LessonCategory>음악</S.LessonCategory>
                            <S.LessonCategory className='active'>연기</S.LessonCategory>
                            <S.LessonCategory>미술</S.LessonCategory> 
                        </S.LessonCategoryWrapper>
                    </S.CategoryRegistration>

                    <S.LocationRegistation>
                        <S.MakeTitle>위치</S.MakeTitle>
                        <S.LessonLocationWrapper>
                            <S.LessonLocation placeholder='주소를 입력해 주세요'/>
                            <S.LessonLocation placeholder='상세 주소를 입력해 주세요'/>
                        </S.LessonLocationWrapper>
                    </S.LocationRegistation>

                    <S.DetailsRegistration>
                        <S.MakeTitle>레슨 상세설명</S.MakeTitle>
                        <S.LessonDetails placeholder='상세설명을 적어주세요'/>
                    </S.DetailsRegistration>

                    <S.LessonEtcRegistration>
                        <S.MakeTitle>경력 / 이력 / 학력</S.MakeTitle>
                        <S.EtcWrapper>
                            <S.EtcDetails placeholder='경력 사항을 입력해 주세요'/>
                            <S.EtcDetails placeholder='이력 사항을 입력해 주세요'/>
                            <S.EtcDetails placeholder='학력 사항을 입력해 주세요'/>
                        </S.EtcWrapper>
                    </S.LessonEtcRegistration>

                    <S.PortfoilosRegistration>
                        <S.MakeTitle>포트폴리오</S.MakeTitle>
                        <S.PortfoilosRegistrationButton >등록하기</S.PortfoilosRegistrationButton>
                        <S.PortfolioThumbnailWrapper>
                            <S.PortfolioThumbnail/>
                            <S.PortfolioThumbnail/>
                        </S.PortfolioThumbnailWrapper>
                    </S.PortfoilosRegistration>

                    <S.MediasRegistration>
                        <S.MakeTitle>동영상</S.MakeTitle>
                        <S.MediasRegistrationButton>등록하기</S.MediasRegistrationButton>
                        <S.MediasThumbnailWrapper>
                            <S.MediasThumbnail/>
                            <S.MediasThumbnail/>
                        </S.MediasThumbnailWrapper>
                    </S.MediasRegistration>

                    <S.LessonNoticeRegistration>
                        <S.MakeTitle>기타 공지사항</S.MakeTitle>
                        <S.LessonNotice placeholder='기타 공지사항을 적어주세요'/>
                    </S.LessonNoticeRegistration>
                    <S.ButtonWrapper>
                        <S.CancleButton>취소하기</S.CancleButton>
                        <S.SubmitButton>등록 신청 하기</S.SubmitButton>

                    </S.ButtonWrapper>
                </form>
                
            </S.LessonMakingFormWrapper>
        </S.LessonMakeWrapper>
    );
};

export default LessonMake;