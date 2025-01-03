import React from 'react';
import TeamList from './_component/TeamList';
import S from '../style';
import SelectSido from './_component/SelectSido';
import { Link } from 'react-router-dom';

const TeamMain = () => {
    return (
        <S.TeamMainWrapper>
            <S.TeamMainTitle>팀 매칭하기</S.TeamMainTitle>
            <S.TeamCategoryWrapper>
                <S.TeamCategorys>
                    <SelectSido />
                    <select className='teamField'>
                        <option>
                            분야
                        </option>
                        <option>음악</option>
                        <option>연기</option>
                        <option>마술</option>
                    </select>
                    <select className='teamGender'>
                        <option>
                            성별
                        </option>
                        <option>남자</option>
                        <option>여자</option>
                        <option>남녀무관</option>
                    </select>
                    <select className='teamAge'>
                        <option>
                            나이
                        </option>
                        <option>10대</option>
                        <option>20대</option>
                        <option>30대</option>
                        <option>40대</option>
                        <option>50대</option>
                        <option>60대이상</option>
                    </select>
                    <select className='teamMeetDate'>
                        <option>
                            요일
                        </option>
                        <option>월</option>
                        <option>화</option>
                        <option>수</option>
                        <option>목</option>
                        <option>금</option>
                        <option>토</option>
                        <option>일</option>
                    </select>
                    <select className='teamMeetTime'>
                        <option>
                            시간대
                        </option>
                        <option>아침</option>
                        <option>낮</option>
                        <option>저녘</option>
                        <option>밤</option>
                    </select>
                </S.TeamCategorys>
                <Link to={"/showu/team/teamMake"}>
                    <S.TeamMakeButton>
                        팀 만들기
                    </S.TeamMakeButton>
                </Link>
            </S.TeamCategoryWrapper>
            <S.TeamListWrapper>
                <Link to={"/showu/team/teamDetails"}>
                    <TeamList />
                </Link>
            </S.TeamListWrapper>
        </S.TeamMainWrapper>
    );
};

export default TeamMain;