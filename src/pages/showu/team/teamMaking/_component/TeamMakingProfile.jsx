import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const TeamMakingProfile = () => {
    return (
        
       <S.TeamMakingProfileWrapper>
            <S.MakingDetailsTitle>
                 <span>
                     프로필을
                 </span>
                 <span>
                     선택해 주세요
                 </span>   
             </S.MakingDetailsTitle>
             <label htmlFor='teamProfileImg'>
                <input type='file' id='teamProfileImg'/>
             </label>
             <S.TeamCategoryWrapper>
                 <button type='button'>음악</button>
                 <button type='button'>연기</button>
                 <button type='button'>마술</button>
             </S.TeamCategoryWrapper>
             <S.TeamMakingSubmibuttonWrapperTwo>
                <Link to={'/showu/team/teamMake/name'}>
                    <button type='button' className='backButton'>뒤로</button>
                </Link>
                <Link to={'/showu/team/teamMake/address'}>
                    <button type='button' className='nextButton'>다음</button>
                </Link>
             </S.TeamMakingSubmibuttonWrapperTwo> 
         </S.TeamMakingProfileWrapper>
    );
};

export default TeamMakingProfile;