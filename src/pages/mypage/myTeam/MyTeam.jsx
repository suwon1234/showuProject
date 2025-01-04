import React, { useEffect, useState } from 'react';
import S from './style';
import MyTeamDetail from './MyTeamDetail';
import FilterContainer from './_component/FilterContainer';
import usePagination from '../../../hooks/usePagination';
import { useNavigate, useParams } from 'react-router-dom';

const PAGINATION = {
  pageRange: 4,
  btnRange: 3,
};

const MyTeam = () => {
  const { page: pageFromUrl } = useParams();
  const [stateValue, setStateValue] = useState("매칭 완료");
  const [completedTeams, setCompletedTeams] = useState([]);
  const [waitingTeams, setWaitingTeams] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");
  const navigate = useNavigate();

  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: stateValue === "매칭 완료" ? completedTeams : waitingTeams, 
    initialPage: parseInt(pageFromUrl, 10) || 1
  });

  useEffect(() => {
    const getTeams = async () => {
      try {
        const response = await fetch(`http://localhost:8000/my/myTeam/matching?page=${page}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        const data = await response.json();
        if (data.teamMatchingSuccess) {
          setCompletedTeams(data.completedTeams);
          setWaitingTeams(data.waitingTeams);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.error("MyTeamDetailError", error);
      }
    };

    getTeams();
  }, [jwtToken, page]);

  // 페이지가 변경될 때 경로 업데이트
  // useEffect(() => {
  //   navigate(`/my-team/${page}`);
  // }, [page, navigate]);

  return (
    <S.Container className="container">
      <S.Wapper className="wapper">
        <S.Title className="title">
          <p>MY TEAM</p>
          <S.SubTitle className="subTitle">
            <ul>
              <li>팀 매칭 내역</li>
            </ul>
          </S.SubTitle>
        </S.Title>

        {/* 매칭 완료, 매칭 대기 필터링 */}
        <FilterContainer 
          setStateValue={setStateValue} 
          stateValue={stateValue}
          completedTeams={completedTeams} 
          waitingTeams={waitingTeams}
        />

        <MyTeamDetail
          page={page}
          setPage={setPage}
          currentList={currentList}
          totalPost={totalPost}
          PAGINATION={PAGINATION}
          stateValue={stateValue}
        />
      </S.Wapper>
    </S.Container>
  );
};

export default MyTeam;
