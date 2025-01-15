  import React from 'react';
import TeamMakingDetails from './_component/TeamMakingDetails';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
  
  const TeamMaking = () => {
    return (
        <S.TeamMakingBg>
            <S.TeamMakingWrapper>
                <p>팀 만들기</p>
                <S.WrapperClosedButton>
                  <FontAwesomeIcon icon={faX} className='closeButtonIcon'/>
                </S.WrapperClosedButton>
                <TeamMakingDetails />
            </S.TeamMakingWrapper>    
        </S.TeamMakingBg>
    );
  };
  
  export default TeamMaking;