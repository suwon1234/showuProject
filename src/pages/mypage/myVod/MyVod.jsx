import React from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import Vods from './Vods';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const MyVod = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <S.Container className='container'>
        <S.Wapper className='wapper'>
          <S.Title className='title'>
            <p>VOD 정보</p>
            <S.SubTitle className='subTitle'>
              <ul>
                <li onClick={() => handleNavigate('/my-vod')}>나의 VOD</li>
                <li onClick={() => handleNavigate('/my-vod/subscriptions')}>구독한 리스트</li>
                {/* <li onClick={() => handleNavigate('/my-vod/watching')}>시청중인 컨텐츠</li> */}
              </ul>
            </S.SubTitle>
          </S.Title>

          <Vods />

        </S.Wapper>
      </S.Container>

      <S.ScrollTop onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} className="upicon" />
      </S.ScrollTop>

    </>
  );
};

export default MyVod;