import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const TeamMakingSkill = () => {
    return (
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
                <button type='button'>프로</button>
            </S.TeamSkillWrapper>
        </S.TeamMakingSkill>
        <S.TeamMakingSubmibuttonWrapperTwo>
            <Link to={'/showu/team/teamMake/member'}>
                 <button type='button' className='backButton'>뒤로</button>
            </Link>
             <Link to={'/showu/team/teamMake/announce'}>
                  <button type='button' className='nextButton'>다음</button>
               </Link>
             </S.TeamMakingSubmibuttonWrapperTwo> 
    </S.TeamMakingSkillWrapper>
    );
};

export default TeamMakingSkill;