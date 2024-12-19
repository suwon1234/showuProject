import React, { useEffect, useState } from 'react';
import S from './MyTeamDetailStyle';
import { useNavigate } from 'react-router-dom';

const MyTeamDetail = ({ stateValue }) => {
  const [ teams, setTeams ] = useState([]);
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path)
  }
  useEffect(() => {
    const getTeams = async () => {
      try {
        const response = await fetch(`http://localhost:4000/myTeam`);
        const datas = await response.json();
        setTeams(datas)
      }catch (error) {
        console.log("MyTeamDetailError", error)
      }
    }

    getTeams()
      
  }, [])

  const filterTeam = teams.filter((iteam) => iteam.state === stateValue)

  return (
    <S.Container>
      <S.Wrapper>
        
        { filterTeam && filterTeam.map((item, i) => (
          <S.OuterBox key={i} onClick={() => handleNavigate('/my-team')}>
          <S.Box>
            <img src={item.imageUrl} alt="팀매칭 이미지" />
            <S.RightContent>
              <S.Right>
                <p className='genre'>{item.gerne}</p>
                <p className='intro'>{item.intro}</p>
                <p className='name'>{item.teamName}</p>
                <p className='date'>{item.period}</p>
              </S.Right>
            </S.RightContent>
            <S.Button type='button'>{item.state}</S.Button>
          </S.Box>
        </S.OuterBox>
        ))}

      </S.Wrapper>
    </S.Container>
  );
};

export default MyTeamDetail;