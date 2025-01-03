import React from 'react';
import S from './style';

const TeamMakingDetails = () => {
    return (
        <div className='TeamMakingDetailsWrapper' >
            <S.TeamMakingNameWrapper>
                <S.MakingDetailsTitle>
                    <span>
                        팀 이름을
                    </span>
                    <span>
                        작성해 주세요
                    </span>   
                </S.MakingDetailsTitle>
                <S.TeamMakingName>
                    <S.DetailsTitle>팀 이름</S.DetailsTitle>
                    <S.TeamNameInput/>
                </S.TeamMakingName>
                <S.TeamMakingCode>
                    <S.DetailsTitle>팀 코드</S.DetailsTitle>
                    <S.TeamCodeInput/>
                </S.TeamMakingCode>
                <S.TeamMakingNameGuide>
                    <p>팀 URL은 팀 페이지 주소로 사용해 주세요</p>
                    <p>https://www.showU.com/teamName/</p>
                </S.TeamMakingNameGuide>

                <S.TeamMakingSubmibuttonWrapper>
                    <button type='button'>가입 신청하기</button>
                </S.TeamMakingSubmibuttonWrapper> 
            </S.TeamMakingNameWrapper>

            <S.TeamMakingProfileWrapper>
                <S.MakingDetailsTitle>
                    <span>
                        프로필을
                    </span>
                    <span>
                        선택해 주세요
                    </span>   
                </S.MakingDetailsTitle>
                <input type='file'/>
                <S.TeamCategoryWrapper>
                    <button type='button'>음악</button>
                    <button type='button'>연기</button>
                    <button type='button'>마술</button>
                </S.TeamCategoryWrapper>
                <S.TeamMakingSubmibuttonWrapperTwo>
                    <button type='button' className='backButton'>뒤로</button>
                    <button type='button' className='nextButton'>다음</button>
                </S.TeamMakingSubmibuttonWrapperTwo> 
            </S.TeamMakingProfileWrapper>

            <S.TeamMakingDateWrapper>
                <S.MakingDetailsTitle>
                    <span>
                        주로 언제 모이나요
                    </span>
                </S.MakingDetailsTitle>
                <p>정확하지 않아도 괜찮아요. 자주 모이는 시간과 요일을 알려주세요</p>

                <S.TeamMakingDate>
                    <span>활동 요일</span>
                    <S.TeamDateWrapper>
                        <button type='button'>월</button>
                        <button type='button' className='active'>화</button>
                        <button type='button'>수</button>
                        <button type='button'>목</button>
                        <button type='button'>금</button>
                        <button type='button'>토</button>
                        <button type='button'>일</button>
                    </S.TeamDateWrapper>
                </S.TeamMakingDate>
                <S.TeamMakingTime>
                    <span>활동 시간대</span>
                    <S.TeamTimeWrapper>
                        <button type='button'>
                            <span>아침</span>
                            <p>12시 이전</p>
                        </button>
                        <button type='button' className='active'>
                            <span>낮</span>
                            <p>12시-15시</p>
                        </button>
                        <button type='button'>
                            <span>오후</span>
                            <p>15시-20시</p>
                        </button>
                        <button type='button'>
                            <span>저녘</span>
                            <p>20시 이후</p>
                        </button>
                    </S.TeamTimeWrapper>
                </S.TeamMakingTime>
                <S.TeamMakingSubmibuttonWrapperTwo>
                    <button type='button' className='backButton'>뒤로</button>
                    <button type='button' className='nextButton'>다음</button>
                </S.TeamMakingSubmibuttonWrapperTwo> 
            </S.TeamMakingDateWrapper>

            <S.TeamMakingMemberWrapper>
                <S.MakingDetailsTitle>
                    <span>
                        어떤 사람들이
                    </span>
                    <span>
                        모여 있나요?
                    </span>
                </S.MakingDetailsTitle>
                <p>정확하지 않아도 괜찮아요.</p>
                <S.TeamMakingAge > 
                    <span>주요 나이대</span>
                    <S.TeamAgeWrapper>
                        <button type='button'>10대</button>
                        <button type='button' className='active'>20대</button>
                        <button type='button'>30대</button>
                        <button type='button'>40대</button>
                        <button type='button'>50대</button>
                        <button type='button'>60대 이상상</button>
                    </S.TeamAgeWrapper>
                </S.TeamMakingAge>
                <S.TeamMakingGender>
                    <span>성별</span>
                    <S.TeamGenderWrapper>
                        <button type='button'>남자</button>
                        <button type='button'>여자</button>
                        <button type='button' className='active'>남녀무관</button>
                    </S.TeamGenderWrapper>
                </S.TeamMakingGender>
                <S.TeamMakingSubmibuttonWrapperTwo>
                    <button type='button' className='backButton'>뒤로</button>
                    <button type='button' className='nextButton'>다음</button>
                </S.TeamMakingSubmibuttonWrapperTwo> 
            </S.TeamMakingMemberWrapper>

            <S.TeamMakingSkillWrapper>
                <S.MakingDetailsTitle>
                    <span>
                        팀 실력을
                    </span>
                    <span>
                        선택해 주세요
                    </span>
                </S.MakingDetailsTitle>
                <p>정확하지 않아도 괜찮아요.  나중에 수정할 수 있어요</p>
                <S.TeamMakingSkill>
                    <span>팀의 평균 실력</span>
                    <S.TeamSkillWrapper>
                        <button type='button'>스타터</button>
                        <button type='button'>비기너</button>
                        <button type='button' className='active'>아마추어</button>
                        <button type='button'>세미프로</button>
                        <button type='button'>프로 준비생</button>
                        <button type='button'>프로로</button>
                    </S.TeamSkillWrapper>
                </S.TeamMakingSkill>
                <S.TeamMakingSubmibuttonWrapperTwo>
                    <button type='button' className='backButton'>뒤로</button>
                    <button type='button' className='nextButton'>다음</button>
                </S.TeamMakingSubmibuttonWrapperTwo> 
            </S.TeamMakingSkillWrapper>

            <S.TeamMaKingAnnouncementWrapper>
                <S.MakingDetailsTitle>
                    <span>
                        팀 공지사항을
                    </span>
                    <span>
                        작성해 주세요
                    </span>
                </S.MakingDetailsTitle>
                <textarea></textarea>
                <S.TeamMakingSubmibuttonWrapperTwo>
                    <button type='button' className='backButton'>뒤로</button>
                    <button type='button' className='nextButton'>다음</button>
                </S.TeamMakingSubmibuttonWrapperTwo> 
            </S.TeamMaKingAnnouncementWrapper>
        </div>
    );
};

export default TeamMakingDetails;