import React from 'react';
import S from './style';

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
    );
};

export default TeamMakingProfile;