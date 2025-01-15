import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './MyActiveTeamStyle';
import { Link } from 'react-router-dom';
import LikeMyTeams from './LikeMyTeams';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const MyActiveTeam = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
          <S.Title className='title'>
            <p className='activeTitle'>활동 정보</p>
            <p className='like'>찜</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li onClick={() => handleNavigate('/my-active/like/my-team')}>팀 매칭</li>
                <li onClick={() => handleNavigate('/my-active/like/my-class')}>레슨</li>
                <li onClick={() => handleNavigate('/my-active/like/space')}>공간</li>
                {/* <li onClick={() => handleNavigate('/my-active/like/prop')}>소품</li> */}
                <li onClick={() => handleNavigate('/my-active/like/tickets')}>티켓</li>
                <li onClick={() => handleNavigate('/my-active/like/md')}>MD</li>
                <li onClick={() => handleNavigate('/my-active/like/auction')}>경매</li>
              </ul>
            </S.SubTitle>
          </S.Title>

          {/* 팀매칭 찜 목록 */}
          <LikeMyTeams />

        </S.Wapper>
      </S.Container>

      <S.ScrollTop onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} className="upicon" />
      </S.ScrollTop>

    </>
  );
};

export default MyActiveTeam;
