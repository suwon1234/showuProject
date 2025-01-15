import React from 'react';
import S from './style';

const TeamMakeAnnouncement = () => {
    return (
        <S.TeamMaKingAnnouncementWrapper>
        <S.MakingDetailsTitle>
            <span>
                팀 공지사항을
            </span>
            <span>
                작성해 주세요
            </span>
        </S.MakingDetailsTitle>
        <textarea></textarea>
        <S.TeamMakingSubmibuttonWrapperTwo>
            <button type='button' className='backButton'>뒤로</button>
            <button type='button' className='nextButton'>만들기</button>
        </S.TeamMakingSubmibuttonWrapperTwo> 
    </S.TeamMaKingAnnouncementWrapper>
    );
};

export default TeamMakeAnnouncement;