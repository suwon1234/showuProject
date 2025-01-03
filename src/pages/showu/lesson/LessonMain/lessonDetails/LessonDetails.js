import React, { useState } from 'react';
import { faClock, faCreditCard, faUser, faUsers  } from'@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import S from './style';
import { Link, useParams } from 'react-router-dom';
import LessonReview from './LessonReview';

const lessonListData = [
    {
        id : 1,
        userId : 1,
        userName : "홍길동",
        lessonThumbnail : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832",
        lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", //레슨 이름 
        callTime : "오전12시 - 오전12시", // 응대 가능시간
        category : "연기", // 레슨 카테고리
        lessonAddress : {
            addressSi : "서울시",
            addressGuGun : "서초구",
            addressDongLi : "",
        },
        lessonAddressDetail : "서울시 서초구", // 상세 주소
        lessonDetail :`끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문  1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.`, // 레슨 상세설명
        history : { //경력
            personal : "총 경력 14년", //이력
            recode : 
                [
                    {
                        record1 :
                            {
                                recordIndex : 1,
                                recordHistoryTitle : "前) 씨앤씨스쿨 연기학원" ,
                                periodDetails : "2017년 7월 ~ 2017년 12월",
                                periodMonth : "6개월",
                                recordedSummary : "前) 씨앤씨스쿨 연기학원 : 매체 연기강사"
                            },
                        record2 :
                            {
                                recordIndex : 2,
                                recordHistoryTitle : "前) 평택 대학교 연극영화과 특강" ,
                                periodDetails : "2018년 1월 - 2018년 1월",
                                periodMonth : "1개월",
                                recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                            },
                        record3 :
                            {
                                recordIndex : 3,
                                recordHistoryTitle : "前) 기획사 제이티 코리아 엔터테인먼트" ,
                                periodDetails : "2015년 1월 - 2015년 12월",
                                periodMonth : "1년년",
                                recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
                            },    
                },
            ], //경력
            education : {
                educationTitle : "중앙대학교 첨단영상대학원",
                educationPeriod : "2022년 3월 ~ 현재",
                educationSubject : "영화 제작"
            } //학력
        },

        portfolios :  {
            index : 1, //고유번호
            portfolioTitle : "메채 연기레슨",

            portfolioURL : "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/moulinrouge-musical-poster.jpg?v=1678248215" // 포트폴리오 
        },
        media : 
            {
            index : 1,
            mediaURL : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832"
        },

        etcAnnouncement : "",
        count : {type : Number}, //조회수
        likeCount : {type : Number, default : 0}, //좋아요 수
        // createAt : {type : String, default : getCurrentTime},
        // updateAt : {type : String, default : getCurrentTime},

    }
]



console.log(lessonListData[0].portfolios.portfolioURL)

const LessonDetails = () => {
    const [lessonDatas, setLessonDatas] = useState(lessonListData);
    return (
    <>
        <S.LessonDetailsWrapper>
            <S.LessonDetailsTopBg ></S.LessonDetailsTopBg>
            <S.LessonDetailContentsWrapper>
                <S.LessonDetailsThunbnail src={lessonDatas[0].lessonThumbnail}/>
                <S.LessonName>
                    {/* 씬앤컷 SCENE & CUT : 설대봉 디렉터 */}
                    {lessonListData[0].lessonName}
                </S.LessonName>
                <S.LessonDetailsSummary>
                    <S.LessonClassAndLocation>
                        <span className='LessonClass'>
                            {lessonListData[0].category} 레슨
                        </span>
                        <span className='LessonLocation'>
                            {/* 서울시 서초구 */}
                            {lessonListData[0].lessonAddressDetail}
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
                        <FontAwesomeIcon icon={faUser} className='infoIcon'/>
                        <span>직원수 5명</span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faClock} className='infoIcon'/>
                        <span>
                            연락 가능시간: 오전12시 - 오전12시
                        </span>
                    </p>
                    <p>
                    <FontAwesomeIcon icon={faCreditCard} className='infoIcon'/>
                        <span>
                        카드 결제, 계좌이체, 현금결제 가능
                        </span>
                    </p>
                    


                </S.Infomation>
                <S.ServiceDetails>
                    <S.Title>서비스 상세설명</S.Title>
                    <S.Details>
                        {/* <p>
                            끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문 
                        </p>
                        <p>
                            1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.
                        </p> */}
                        {lessonListData[0].lessonDetail}
                        <S.MoreDetails>
                            상세설명 더보기<span>icon</span>
                        </S.MoreDetails>

                    </S.Details>
                </S.ServiceDetails>
                <S.PersonalHistory >
                    <S.Title>경력</S.Title>
                    <S.DayOfExperience>{lessonListData[0].history.personal}</S.DayOfExperience>

                    <S.PersonalHistoryTextWrapper>
                        <S.PersonalHistoryTitle>{lessonListData[0].history.recode[0].record1.recordHistoryTitle}</S.PersonalHistoryTitle>
                        <S.PersonalHistoryPeriod>
                            <span className='PSPeriodDetail'>{lessonListData[0].history.recode[0].record1.periodDetails}</span>
                            <span className='PSPeriodDetailMonth'>{lessonListData[0].history.recode[0].record1.periodMonth}</span>
                        </S.PersonalHistoryPeriod>
                        <S.PersonalHistorySummary>{lessonListData[0].history.recode[0].record1.recordedSummary}</S.PersonalHistorySummary>
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
                        <S.EducationDetailSpace>{lessonListData[0].history.education.educationTitle}</S.EducationDetailSpace>
                        <S.EducationDetailPeriod>{lessonListData[0].history.education.educationPeriod}</S.EducationDetailPeriod>
                        <S.EducationDetailSubjects>{lessonListData[0].history.education.educationSubject}</S.EducationDetailSubjects>
                    </S.EducationsDetailBox>
                </S.Education>
                <div className='InstructorPortfolio'>
                    <S.Title>포트폴리오</S.Title>
                    <S.PortfolioWrapper>
                        <S.Portfolio>
                            <img src={lessonListData[0].portfolios.portfolioURL}></img>
                            <S.PortfolioTitle>{lessonListData[0].portfolios.portfolioTitle}</S.PortfolioTitle>
                            {/* <S.LessonType>{lessonListData[0].category}</S.LessonType> */}
                        </S.Portfolio>
                        <S.Portfolio>
                            <S.PortfolioTitle>메채 연기레슨</S.PortfolioTitle>
                            {/* <S.LessonType>연기 레슨</S.LessonType> */}
                        </S.Portfolio>
                        <S.Portfolio>
                            <S.PortfolioTitle>메채 연기레슨</S.PortfolioTitle>
                            {/* <S.LessonType>연기 레슨</S.LessonType> */}
                        </S.Portfolio>
                        <S.Portfolio>
                            <S.PortfolioTitle>메채 연기레슨</S.PortfolioTitle>
                            {/* <S.LessonType>연기 레슨</S.LessonType> */}
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
                <LessonReview/>
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
                        요성을 알고 있습니다. 
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

                </div>
            </S.LessonDetailContentsWrapper>  

            <S.RightButtonWrapper>
                <S.RightTextWrapper>
                    <p className='lessonTitle'>{lessonListData[0].lessonName}</p>
                    <p className='lessonSummary'>원하는 내용을 상담해 보세요</p>
                </S.RightTextWrapper>
                <Link>
                    <button> 수정하기 </button>
                </Link>
            </S.RightButtonWrapper>

        </S.LessonDetailsWrapper>
    </>
    );
};

export default LessonDetails;