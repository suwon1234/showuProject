import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const TeamMakingDate = () => {
    return (
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
                    <Link to={'/showu/team/teamMake/address'}>
                        <button type='button' className='backButton'>뒤로</button>
                    </Link>
                    <Link to={'/showu/team/teamMake/member'}>
                        <button type='button' className='nextButton'>다음</button>
                    </Link>
                </S.TeamMakingSubmibuttonWrapperTwo>  
            </S.TeamMakingDateWrapper>
    );
};

export default TeamMakingDate;