import S from './style';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';



const MainChat = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
    });
  }, []);




  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderTitle  data-aos="fade-right">자신의 재능을 보여주세요</S.HeaderTitle>
        <S.HeaderDescription data-aos="fade-right">
          다양한 팀 참여의 기회 <br />
          다양한 인원과 참가 <br />
          여러 재능을 가진 사람들과의 교류
        </S.HeaderDescription>
      </S.Header>

      <S.ContentWrapper>
        <S.Card data-aos="fade-up" data-aos-delay="100">
          <S.CardIcon>
            <FontAwesomeIcon icon={faPen} className='icon' color='#000' />
          </S.CardIcon>
          <S.CardTitle>숨겨진 재능</S.CardTitle>
          <S.CardDescription>
            자신의 재능을 보여주세요
            <br />
            다양한 팀 참여를 위한 재능을 꺼내보세요
          </S.CardDescription>
        </S.Card>

        <S.Card data-aos="fade-up" data-aos-delay="200">
          <S.CardIcon>
            <FontAwesomeIcon icon={faUsers} className='icon'/>
          </S.CardIcon>
          <S.CardTitle>다양한 사람들</S.CardTitle>
          <S.CardDescription>
            다양한 재능을 가진 사람들과의 교류
            <br />
            음악가, 배우, 운동가 등 여러 사람들과 교류
          </S.CardDescription>
        </S.Card>

        <S.Card data-aos="fade-up" data-aos-delay="300">
          <S.CardIcon>
            <FontAwesomeIcon icon={faStar} className='icon'/>
          </S.CardIcon>
          <S.CardTitle>등급 시스템</S.CardTitle>
          <S.CardDescription>
            등급에 따른 다양한 혜택
            <br />
            최고 등급은 자신의 레슨 등록 가능
          </S.CardDescription>
        </S.Card>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default MainChat;
