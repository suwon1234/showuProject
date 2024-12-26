import React from 'react';
import S from './style';

const TeamList = () => {
    return (
        <S.TeamList>
            <S.TeamListWrapper>
                <S.TeamTitleWrapper>
                    <h3 className='teamTitle'>연기연습</h3>
                    <span className='teamLocation'>분당</span>
                </S.TeamTitleWrapper>
                <S.TeamLocationWrapper>
                    <span className='teamLocationSiDo'>경기도 성남시</span>
                    <S.DivideDot></S.DivideDot>
                    <span className='teamLicationAddress'>주소</span>
                </S.TeamLocationWrapper>
                <S.TeamSummaryWrapper> 
                    <span className='teamGender'>남자</span>
                    <S.DivideDot></S.DivideDot>
                    <span className='teamField'>연기</span>
                    <S.DivideDot></S.DivideDot>
                    <span className='teamAge'>20대</span>
                    <S.DivideDot></S.DivideDot>
                    <span className='teamMeetDate'>토요일 오후</span>
                    <S.DivideDot></S.DivideDot>
                    <span className='teamCategory'>취미연습</span>
                </S.TeamSummaryWrapper>
                <S.TeamEtc>
                    <span className='teamViews'>조회 9,534</span>
                    <S.DivideDot></S.DivideDot>
                    <span className='teamSubscription'>신청 34</span>
                </S.TeamEtc>

            </S.TeamListWrapper>
            <S.TeamThumbnailWrapper>
                <img className='teamThumbnail'/>
            </S.TeamThumbnailWrapper>
        </S.TeamList>
    );
};

export default TeamList;