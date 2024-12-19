import React from 'react';
import S from './style';

const TeamMakingDetails = () => {
    return (
        <div className='TeamMakingDetailsWrapper'>
            <div className='TeamMakingNameWrapper'>
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
                <div className='TeamMakingCode'>
                    <span>팀 코드</span>
                    <input type='text' className='TeamCodeInpput'/>
                </div>
                <div className='TeamMakingNameGuide'>
                    <p>팀 URL은 팀 페이지 주소로 사용해 주세요</p>
                    <p>https://www.showU.com/teamName/</p>
                </div>

                <div className='TeamMakingSubmibuttonWrapper'>
                    <button type='button'>가입 신청하기</button>
                </div> 
            </div>

            <div className='TeamMakingProfileWrapper'>
                <h3 className='MakingDetailsTitle'>
                    <span>
                        프로필을
                    </span>
                    <span>
                        선택해 주세요
                    </span>   
                </h3>
                <input type='file'/>
                <div className='TeamCategoryWrapper'>
                    <button type='button'>음악</button>
                    <button type='button'>연기</button>
                    <button type='button'>마술</button>
                </div>
                <div className='TeamMakingSubmibuttonWrapper'>
                    <button type='button'>뒤로</button>
                    <button type='button'>다음</button>
                </div> 
            </div>

            <div className='TeamMakingDateWrapper'>
                <h3 className='MakingDetailsTitle'>
                    <span>
                        주로 언제 모이나요
                    </span>
                </h3>
                <p>정확하지 않아도 괜찮아요. 자주 모이는 시간과 요일을 알려주세요</p>

                <div className='TeamMakingDate'>
                    <span>활동 요일</span>
                    <div className='TeamDateWrapper'>
                        <button type='button'>월</button>
                        <button type='button'>화</button>
                        <button type='button'>수</button>
                        <button type='button'>목</button>
                        <button type='button'>금</button>
                        <button type='button'>토</button>
                        <button type='button'>일</button>
                    </div>
                </div>
                <div className='TeamMakingTime'>
                    <span>활동 시간대</span>
                    <div className='TeamTimeWrapper'>
                        <button type='button'>
                            <span>아침</span>
                            <p>12시 이전</p>
                        </button>
                        <button type='button'>
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
                    </div>
                </div>
                <div className='TeamMakingSubmibuttonWrapper'>
                    <button type='button'>뒤로</button>
                    <button type='button'>다음</button>
                </div> 
            </div>

            <div className='TeamMakingMemberWrapper'>
                <h3 className='MakingDetailsTitle'>
                    <span>
                        어떤 사람들이
                    </span>
                    <span>
                        모여 있나요?
                    </span>
                </h3>
                <p>정확하지 않아도 괜찮아요.</p>
                <div className='TeamMakingAge'> 
                    <span>주요 나이대</span>
                    <div className='TeamAgeWrapper'>
                        <button type='button'>10대</button>
                        <button type='button'>20대</button>
                        <button type='button'>30대</button>
                        <button type='button'>40대</button>
                        <button type='button'>50대</button>
                        <button type='button'>60대 이상상</button>
                    </div>
                </div>
                <div className='TeamMakingGender'>
                    <span>성별</span>
                    <div className='TeamGenderWrapper'>
                        <button type='button'>남자</button>
                        <button type='button'>여자</button>
                        <button type='button'>남녀무관</button>
                    </div>
                </div>
                <div className='TeamMakingSubmibuttonWrapper'>
                    <button type='button'>뒤로</button>
                    <button type='button'>다음</button>
                </div> 
            </div>

            <div className='TeamMakingSkillWrapper'>
                <h3 className='MakingDetailsTitle'>
                    <span>
                        팀 실력을
                    </span>
                    <span>
                        선택해 주세요
                    </span>
                </h3>
                <p>정확하지 않아도 괜찮아요.  나중에 수정할 수 있어요</p>
                <div className='TeamMakingSkill'>
                    <span>팀의 평균 실력</span>
                    <div className='TeamSkillWrapper'>
                        <button type='button'>스타터</button>
                        <button type='button'>비기너</button>
                        <button type='button'>아마추어</button>
                        <button type='button'>세미프로</button>
                        <button type='button'>프로 준비생</button>
                        <button type='button'>프로로</button>
                    </div>
                </div>
                <div className='TeamMakingSubmibuttonWrapper'>
                    <button type='button'>뒤로</button>
                    <button type='button'>다음</button>
                </div> 
            </div>

            <div className='TeamMaKingAnnouncementWrapper'>
                <h3 className='MakingDetailsTitle'>
                    <span>
                        팀 공지사항을
                    </span>
                    <span>
                        작성해 주세요
                    </span>
                </h3>
                <textarea></textarea>
                <div className='TeamMakingSubmibuttonWrapper'>
                    <button type='button'>뒤로</button>
                    <button type='button'>다음</button>
                </div> 
            </div>
        </div>
    );
};

export default TeamMakingDetails;