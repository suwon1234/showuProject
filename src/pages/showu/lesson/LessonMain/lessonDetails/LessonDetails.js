import React from 'react';
import { faStar } from'@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import S from './style';

const LessonDetails = () => {
    return (
    <>
        <S.LessonDetailsWrapper>
            <S.LessonDetailsTopBg></S.LessonDetailsTopBg>
            <S.LessonDetailContentsWrapper>
                <S.LessonDetailsThunbnail/>
                <S.LessonName>
                    씬앤컷 SCENE & CUT : 설대봉 디렉터
                </S.LessonName>
                <S.LessonDetailsSummary>
                    <S.LessonClassAndLocation>
                        <span className='LessonClass'>
                            연기 레슨
                        </span>
                        <span className='LessonLocation'>
                            서울시 서초구
                        </span>
                    </S.LessonClassAndLocation>
                    <S.LessonSummary>
                        기획사 오디션전문 / 연기 교육 상위 1%
                    </S.LessonSummary>
                </S.LessonDetailsSummary>
                <S.LessonDetailsLink>
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
                        <span className='LessonReviews'>리뷰 90</span>
                    </a>
                    <a className='LessonDetails'>
                        <span className='LessonQnA'>질문 답변</span>
                    </a>
                </S.LessonDetailsLink>

                <S.Infomation>
                    <S.Title>정보</S.Title>

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
                </S.Infomation>
                <S.ServiceDetails>
                    <S.Title>서비스 상세설명</S.Title>
                    <S.Details>
                        <p>
                            끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문 
                        </p>
                        <p>
                            1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.
                        </p>
                        <S.MoreDetails>
                            상세설명 더보기<span>icon</span>
                        </S.MoreDetails>

                    </S.Details>
                </S.ServiceDetails>
                <S.PersonalHistory >
                    <S.Title>경력</S.Title>
                    <S.DayOfExperience>총 경력 14년</S.DayOfExperience>

                    <S.PersonalHistoryTextWrapper>
                        <S.PersonalHistoryTitle>前) 씨앤씨스쿨 연기학원</S.PersonalHistoryTitle>
                        <S.PersonalHistoryPeriod>
                            <span className='PSPeriodDetail'>2017년 7월 ~ 2017년 12월</span>
                            <span className='PSPeriodDetailMonth'>6개월</span>
                        </S.PersonalHistoryPeriod>
                        <S.PersonalHistorySummary>前) 씨앤씨스쿨 연기학원 : 매체 연기강사</S.PersonalHistorySummary>
                    </S.PersonalHistoryTextWrapper>

                    <S.PersonalHistoryTextWrapper>
                        <S.PersonalHistoryTitle>前) 평택 대학교 연극영화과 특강</S.PersonalHistoryTitle>
                        <S.PersonalHistoryPeriod>
                            <span className='PSPeriodDetail'>2018년 1월 - 2018년 1월</span>
                            <span className='PSPeriodDetailMonth'>1개월</span>
                        </S.PersonalHistoryPeriod>
                        <S.PersonalHistorySummary>前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강</S.PersonalHistorySummary>
                    </S.PersonalHistoryTextWrapper>

                    <S.PersonalHistoryTextWrapper>
                        <S.PersonalHistoryTitle>前) 기획사 제이티 코리아 엔터테인먼트</S.PersonalHistoryTitle>
                        <S.PersonalHistoryPeriod>
                            <span className='PSPeriodDetail'>2015년 1월 - 2015년 12월</span>
                            <span className='PSPeriodDetailMonth'>1년</span>
                        </S.PersonalHistoryPeriod>
                        <S.PersonalHistorySummary>前) 기획사 제이티코리아 엔터테인먼트 : 신인개발부</S.PersonalHistorySummary>
                    </S.PersonalHistoryTextWrapper>

                    <S.MoreDetails>
                            경력 더보기<span>icon</span>
                    </S.MoreDetails>
                </S.PersonalHistory>
                <S.Education>
                    <S.Title>학력</S.Title>
                    <S.EducationsDetailBox>
                        <S.EducationDetailSpace>중앙대학교 첨단영상대학원</S.EducationDetailSpace>
                        <S.EducationDetailPeriod>2022년 3월 ~ 현재</S.EducationDetailPeriod>
                        <S.EducationDetailSubjects>영화 제작</S.EducationDetailSubjects>
                    </S.EducationsDetailBox>
                </S.Education>
                <div className='InstructorPortfolio'>
                    <S.Title>포트폴리오</S.Title>
                    <S.PortfolioWrapper>
                        <S.Portfolio>
                            <S.PortfolioTitle>메채 연기레슨</S.PortfolioTitle>
                            <S.LessonType>연기 레슨</S.LessonType>
                        </S.Portfolio>
                        <S.Portfolio>
                            <S.PortfolioTitle>메채 연기레슨</S.PortfolioTitle>
                            <S.LessonType>연기 레슨</S.LessonType>
                        </S.Portfolio>
                        <S.Portfolio>
                            <S.PortfolioTitle>메채 연기레슨</S.PortfolioTitle>
                            <S.LessonType>연기 레슨</S.LessonType>
                        </S.Portfolio>
                        <S.Portfolio>
                            <S.PortfolioTitle>메채 연기레슨</S.PortfolioTitle>
                            <S.LessonType>연기 레슨</S.LessonType>
                        </S.Portfolio>
                    </S.PortfolioWrapper>
                </div> 

                <div className='InstructorMedia'>
                    <S.Title>사진 및 동영상</S.Title>
                    <S.MediaWrapper>
                        <S.Media><span>IMG</span></S.Media>
                        <S.Media><span>IMG</span></S.Media>
                        <S.Media><span>IMG</span></S.Media>
                        <S.Media><span>IMG</span></S.Media>
                        <S.Media><span>IMG</span></S.Media>
                        <S.Media><span>IMG</span></S.Media>
                        <S.Media><span>IMG</span></S.Media>
                    </S.MediaWrapper>
                </div>
                <S.StudentReview>
                    <S.Title>리뷰</S.Title>
                    <S.ReviewButton>리뷰 쓰기</S.ReviewButton>
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
                <div className='LessonQNAWrapper'>
                    <S.Title>질문/답변</S.Title>
                    <S.LessonQNA className='active'>
                        <S.LessonQuestion>
                            Q. 서비스가 시작되기 전 어떤 절차고 진행하나요?
                        </S.LessonQuestion>
                        <S.LessonAnswer>
                        수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물
                        <br></br>
                        저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 
                        대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중
                        요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다.
                            <span>접기</span>
                        </S.LessonAnswer>
                    </S.LessonQNA>
                    <S.LessonQNA>
                        <S.LessonQuestion>
                            Q. 어떤 서비스를 전문적으로 제공하나요?
                        </S.LessonQuestion>
                        <S.LessonAnswer>
                        연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 
                        감독 및 제작자 섭외 후 피드백 → 영화제 제출
                        <br></br>
                        저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 
                        대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중
                        요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다.
                            <span>더보기</span>
                        </S.LessonAnswer>
                    </S.LessonQNA>
                        zzz

                </div>
            </S.LessonDetailContentsWrapper>  

        </S.LessonDetailsWrapper>
    </>
    );
};

export default LessonDetails;