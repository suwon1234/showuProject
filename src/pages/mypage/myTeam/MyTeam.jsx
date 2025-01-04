import React, { useEffect, useState } from 'react';
import S from './style';
import MyTeamDetail from './MyTeamDetail';
import FilterContainer from './_component/FilterContainer';
import usePagination from '../../../hooks/usePagination';
import { useNavigate, useLocation } from 'react-router-dom';

const PAGINATION = {
  pageRange: 4,
  btnRange: 3,
};

const MyTeam = () => {
  const location = useLocation(); 
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("jwtToken");

  // 쿼리 파라미터에서 page, stateValue 값 추출
  const queryParams = new URLSearchParams(location.search);
  const stateValueFromUrl = queryParams.get("stateValue") || "매칭 완료";  // 초기값 "매칭 완료"

  // 매칭 상태, 팀 매칭 목록
  const [stateValue, setStateValue] = useState(stateValueFromUrl);
  const [completedTeams, setCompletedTeams] = useState([]);
  const [waitingTeams, setWaitingTeams] = useState([]);
  
  // 페이지 네이션
  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: stateValue === "매칭 완료" ? completedTeams : waitingTeams,
  });

  // 페이지가 변경될 때마다 URL의 쿼리 파라미터를 업데이트
  useEffect(() => {
    navigate(`/my-team?page=${page}&stateValue=${stateValue}`, { replace: true });
  }, [page, stateValue, navigate]);

  useEffect(() => {
    const getTeams = async () => {
      try {
        const response = await fetch(`http://localhost:8000/my/myTeam/matching`, {
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
