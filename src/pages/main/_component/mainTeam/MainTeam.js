import React, { useEffect, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

const MainTeam = () => {
  const [teams, setTeams] = useState([]);
  const [randomTeams, setRandomTeams] = useState([]);

  useEffect(() => {
    const getTeam = async () => {
      try {
        const response = await fetch(`http://localhost:8000/my/main/team`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const res = await response.json();
        if (!res.mainTeamSuccess) {
          console.log(res.message);
        } else {
          setTeams(res.teamList); 
        }
      } catch (error) {
        console.error("main getTeam error", error);
      }
    };

    getTeam();
  }, []); 

  // lessons 랜덤으로 4개 설정
  useEffect(() => {
    if (teams.length > 0) { 
      const getRandomItems = (arr, count) => {
        const result = new Set();
        while (result.size < count) {
          const randomIndex = Math.floor(Math.random() * arr.length);
          result.add(arr[randomIndex]);
        }
        return Array.from(result);
      };

      const randomItems = getRandomItems(teams, 4);
      setRandomTeams(randomItems);
    }
  }, [teams]); 

  // console.log("randomTeams", randomTeams)

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true, 
    })
  }, [])

  return (
    <S.Wrapper>
      <p>모집 중인 팀</p>
      <S.MoreLesson>
        <Link to={"/showu"} className='more'>더보기</Link>
        <span>&gt;</span>
      </S.MoreLesson>
      <S.LessonWrapper>
        {randomTeams.map((team, i) => (
          <S.LessonBox key={i} data-aos="fade-up">
            <ul>
              <S.UserInfo>
                <img src={team.teamThumbnail}></img>
                <div>
                  <li className='teamName'>{team.teamName}</li>
                  {/* <li className='category'>{team.category}</li> */}
                </div>
              </S.UserInfo>
              <S.Hr />
              <S.category>
                <li className='total'>{team.userName.role}</li>
                <li className='category'>{team.category}</li>
              </S.category>
              <S.LessonExplantion>
                <li className='lessonDetail'>{team.teamNotice}</li>
                <S.Career>
                  <FontAwesomeIcon icon={faThumbtack} />
                  <li className='lessonName'>{team.gender}</li>
                </S.Career>
              </S.LessonExplantion>
              <S.Period>
                <FontAwesomeIcon icon={faCalendarDays} />
                <li>{team.activityPeriod.start} - {team.activityPeriod.end}</li>
              </S.Period>
            </ul>
          </S.LessonBox>
        ))}
      </S.LessonWrapper>
    </S.Wrapper>
  );
};

export default MainTeam;
