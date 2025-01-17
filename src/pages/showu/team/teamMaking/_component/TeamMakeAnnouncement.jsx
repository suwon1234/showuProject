import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

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
            <Link to={'/showu/team/teamMake/skill'}>
                 <button type='button' className='backButton'>뒤로</button>
            </Link>
                  <button type='submit' className='nextButton'>다음</button>
             </S.TeamMakingSubmibuttonWrapperTwo> 
    </S.TeamMaKingAnnouncementWrapper>
    );
};

export default TeamMakeAnnouncement;