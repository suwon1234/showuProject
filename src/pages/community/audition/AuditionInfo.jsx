// 오디션 세부 페이지

import React from 'react';
import S from './styleAuditionInfo';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const auditionData = [
    {
      id: 1,
      image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202403/65e528de81bf69222228.jpg',
      title: "뮤지컬 팬텀 오디션 공고"
    },
    {
      id: 2,
      image: 'https://www.contestkorea.com/admincenter/files/meet/202402221229383763310.jpg',
      title: "뮤지컬 루카스 오디션 공고"
    },
    {
      id: 3,
      image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202402/65c09cb78117d8301721.jpg',
      title: "뮤지컬 베르사유의 장미 오디션 공고"
    },
    {
      id: 4,
      image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202403/65e528802bf6a4836843.jpg',
      title: "뮤지컬 웃는남자 오디션"
    },
    {
      id: 5,
      image: 'https://www.contestkorea.com/admincenter/files/meet/202411282051036809763.jpg',
      title: "뮤지컬 로보카 폴리 오디션 공고"
    },
    {
      id: 6,
      image: 'https://www.contestkorea.com/admincenter/files/meet/202412042146563150340.jpg',
      title: "연극 너에게로 가는 길 오디션 공고"
    },
    {
      id: 7,
      image: 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/8/29/202408292237379944eaee5b7a0ebbfe828efe88f8eaed8e.jpg',
      title: "뮤지컬 빌리엘리어트 오디션 공고"
    },
    {
      id: 8,
      image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202411/6732e54aaeb154611022.jpeg',
      title: "뮤지컬 한복 입은 남자 오디션 공고"
    },
    {
      id: 9,
      image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202403/65e56cac780461780827.jpg',
      title: "뮤지컬 마타하리 오디션 공고"
    },
    {
      id: 10,
      image: 'https://www.sfac.or.kr/upload/daumeditor/4759535f-a0d9-444a-afde-de4a71a48a85.png',
      title: "연극 베를리너 오디션 공고"
    },
    {
      id: 11,
      image: '',
      title: "브로드웨이 42번가 오디션 공고"
    },
    {
      id: 12,
      image: 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e',
      title: "연극 햄릿 오디션 공고"
    },
    {
      id: 13,
      image: 'https://postfiles.pstatic.net/MjAyNDAyMTVfMTgz/MDAxNzA3OTgzNTI0MTAz.ftWF9f8NdmxzvKSL3I6h2LlOwSvS7mjIDpR2YPUC0RIg.sagHjKFR5HpI8qPu6KxwUgXtoRG01-OiMnIvki9wWvEg.PNG.immcompany/8.png?type=w3840',
      title: "뮤지컬 명성황후 아역 오디션 공고"
    },
    {
      id: 14,
      image: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDA5MjFfMTk4/MDAxNzI2ODc4ODQ1MjYy._jAEpW3QyRYVENYsAZDs0a15uQ1S7M5rwr7nEgBboOMg.5-X7T-D5GLR4NN0argXe_KueBnJbeVIoD44PTWTprWMg.JPEG/F209750_2025_%EC%97%B0%EA%B7%B9_%EB%8D%94%EC%85%80_%EC%98%A4%EB%94%94%EC%85%98_%EA%B3%B5%EA%B3%A0%EB%AC%B8.jpg?type=w1600',
      title: "연극 the cell 오디션 공고"
    },
    {
      id: 15,
      image: '',
      title: "물랑루즈 오디션 공고"
    },
    {
      id: 16,
      image: 'https://otr.co.kr/wp-content/uploads/mangboard/2024/06/21/F201233_lost_odi.jpg',
      title: ""
    },
    {
      id: 17,
      image: 'https://www.iseensee.com/event/letmein/241010_audition1.jpg',
      title: "연극 렛미인 오디션 공고"
    },
    {
      id: 18,
      image: 'https://www.contestkorea.com/admincenter/files/meet/202411211101245257434.jpg',
      title: "연극 분홍립스틱 오디션 공고"
    },

  ];

const AuditionInfo = () => {
    const { id } = useParams();
    let audition = null;

    for (const data of auditionData) {
        if (data.id === Number(id)) {
            audition = data;
        }
    }

    return (
        <S.Wrapper>

        <S.TopTitle>Audition</S.TopTitle>
          <S.IconWrapper>
            <FontAwesomeIcon icon={faChevronDown} className='icon' />
          </S.IconWrapper>

          <S.SubWrapper>

          <S.Titles>
            <S.MainTitle>Audition</S.MainTitle>
            <S.SubTitle>ShowU에서 전해드리는 다양한 오디션 소식</S.SubTitle>
          </S.Titles>  
            <S.Line2></S.Line2> 

            
            <S.imageWrapper>
              <img src={audition.image} alt={audition.title} />
            </S.imageWrapper>

          </S.SubWrapper>
        </S.Wrapper>
    );
};

export default AuditionInfo;