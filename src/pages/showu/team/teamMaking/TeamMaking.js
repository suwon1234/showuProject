  import React from 'react';
import TeamMakingDetails from './_component/TeamMakingDetails';
import S from './style';
  
  const TeamMaking = () => {
    return (
        <S.TeamMakingBg>
            <S.TeamMakingWrapper>
                <p>팀 만들기</p>
                <S.WrapperClosedButton>닫기</S.WrapperClosedButton>
                <TeamMakingDetails />
            </S.TeamMakingWrapper>    
        </S.TeamMakingBg>
    );
  };
  
  export default TeamMaking;