import React from 'react';
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
        </S.LessonDetailContentsWrapper>  
        ???  
        </S.LessonDetailsWrapper>
    </>
    );
};

export default LessonDetails;