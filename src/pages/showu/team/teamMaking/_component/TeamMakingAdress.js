import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
const TeamMakingAdress = () => {
    return (
        <S.TeamMakingNameWrapper>
        <S.MakingDetailsTitle>
           <span>
               활동지역을
           </span>
           <span>
               작성해 주세요
           </span>   
       </S.MakingDetailsTitle>
       <S.TeamMakingName>
           <S.DetailsTitle>
               활동지역 시도
           </S.DetailsTitle>
           <S.TeamNameInput placeholder="ex) 서울시"/>
       </S.TeamMakingName>
       <S.TeamMakingCode>
           <S.DetailsTitle>
               활동지역 구군
           </S.DetailsTitle>
           <S.TeamCodeInput placeholder="ex) 강남구"/>
       </S.TeamMakingCode>
        <S.TeamMakingSubmibuttonWrapperTwo>
            <Link to={'/showu/team/teamMake/profile'}>
                <button type='button' className='backButton'>뒤로</button>
            </Link>
            <Link to={'/showu/team/teamMake/date'}>
                <button type='button' className='nextButton'>다음</button>
            </Link>
        </S.TeamMakingSubmibuttonWrapperTwo> 
   </S.TeamMakingNameWrapper>
    );
};

export default TeamMakingAdress;