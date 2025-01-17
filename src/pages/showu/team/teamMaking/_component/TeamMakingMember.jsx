import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const TeamMakingMember = () => {
    return (
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
                    <Link to={'/showu/team/teamMake/date'}>
                        <button type='button' className='backButton'>뒤로</button>
                    </Link>
                    <Link to={'/showu/team/teamMake/skill'}>
                        <button type='button' className='nextButton'>다음</button>
                    </Link>
             </S.TeamMakingSubmibuttonWrapperTwo> 
            </S.TeamMakingMemberWrapper>
    );
};

export default TeamMakingMember;