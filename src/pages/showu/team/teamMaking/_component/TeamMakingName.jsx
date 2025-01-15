import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import TeamMakingProfile from './TeamMakingProfile';

const nextStepButton = ()=> {
    return (
        <TeamMakingProfile />
    )
}

const TeamMakingName = () => {
    return (
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
                <S.DetailsTitle>
                    팀 이름
                </S.DetailsTitle>
                <S.TeamNameInput/>
            </S.TeamMakingName>
            <S.TeamMakingCode>
                <S.DetailsTitle>
                    팀 코드
                </S.DetailsTitle>
                <S.TeamCodeInput/>
            </S.TeamMakingCode>
            <S.TeamMakingNameGuide>
                <p>팀 URL은 팀 페이지 주소로 사용해 주세요</p>
                <p>https://www.showU.com/teamName/</p>
            </S.TeamMakingNameGuide>
            <S.TeamMakingSubmibuttonWrapper>
                <Link to='/showu/team/teamMake/profile'>
                    <button type='button'>가입 신청하기</button>
                </Link>
            </S.TeamMakingSubmibuttonWrapper> 
        </S.TeamMakingNameWrapper>
    );
};

export default TeamMakingName;