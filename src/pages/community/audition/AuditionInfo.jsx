// 오디션 세부 페이지

import React from 'react';
import S from './styleAuditionInfo';
import { useParams } from 'react-router-dom';

const auditionData = [
    {
      id: 1,
      image: 'https://emkmusical.com/wp-content/uploads/kboard_attached/1/202403/65e528de81bf69222228.jpg',
      title: "뮤지컬 팬텀 오디션 공고"
    },
    {
      id: 2,
      image: 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e',
      title: "연극 햄릿 오디션 공고"
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
      image: 'https://otr.co.kr/wp-content/uploads/mangboard/2024/06/21/F201233_lost_odi.jpg',
      title: ""
    },
    {
      id: 6,
      image: '',
      title: "물랑루즈 오디션 공고"
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
          <S.SubWrapper>
            
            <S.imageWrapper>
              <img src={audition.image} alt={audition.title} />
            </S.imageWrapper>

          </S.SubWrapper>
        </S.Wrapper>
    );
};

export default AuditionInfo;