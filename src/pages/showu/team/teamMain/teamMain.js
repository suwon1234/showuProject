import React from 'react';
import TeamList from './_component/TeamList';
import S from '../style';

const TeamMain = () => {
    return (
        <S.TeamMainWrapper>
            <S.TeamMainTitle>팀 매칭하기</S.TeamMainTitle>
            <S.TeamCategoryWrapper>
                <S.TeamCategorys>
                    <select className='teamLocation'>
                        <option>
                            지역
                        </option>
                    </select>
                    <select className='teamField'>
                        <option>
                            분야
                        </option>
                    </select>
                    <select className='teamGender'>
                        <option>
                            성별
                        </option>
                    </select>
                    <select className='teamAge'>
                        <option>
                            나이
                        </option>
                    </select>
                    <select className='teamMeetDate'>
                        <option>
                            요일
                        </option>
                    </select>
                    <select className='teamMeetTime'>
                        <option>
                            시간대
                        </option>
                    </select>
                </S.TeamCategorys>
                <S.TeamMakeButton>
                    팀 만들기
                </S.TeamMakeButton>
            </S.TeamCategoryWrapper>
            <S.TeamListWrapper>
                <TeamList />
            </S.TeamListWrapper>
        </S.TeamMainWrapper>
    );
};

export default TeamMain;