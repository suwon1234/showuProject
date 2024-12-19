import React, { useEffect, useState } from 'react';
import S from './LikeTeamStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const LikeMyTeam = () => {
  const [ teams, setTeams ] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      try {
        const response = await fetch(`http://localhost:4000/myTeam`);
        const datas = await response.json();
        setTeams(datas)
      }catch (error) {
        console.log("LikeMyTeamError", error)
      }
    }

    getTeams()
      
  }, [])

  return (
    <S.Container>
      <S.Wrapper>
        
        { teams && teams.map((item, i) => (
          <S.OuterBox key={i} >
          <S.Box>
            <img src={item.imageUrl} alt="팀매칭 이미지" />
            <FontAwesomeIcon icon={faHeart} className='heart'/>
            <div>
              <S.Right>
                <p className='genre'>{item.gerne}</p>
                <p className='intro'>{item.intro}</p>
                <p className='name'>{item.teamName}</p>
                <p className='date'>{item.period}</p>
              </S.Right>
            </div>
          </S.Box>
        </S.OuterBox>
        ))}

      </S.Wrapper>
    </S.Container>
  );
};

export default LikeMyTeam;