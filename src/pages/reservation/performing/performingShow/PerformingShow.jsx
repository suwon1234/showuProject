import React from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";

const PerformingShow = () => {
  const navigate = useNavigate();

  const performingShows = [
    {
      id: 1,
      name: "뮤지컬 <시라노>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.15 - 2025.1.5",
      duration: "120분",
      grade: "13세 이상",
      price: {
        R: "77,000원",
        S: "55,000원",
      },
      discounts: [
        "PAYCO VIP 회원 할인 10% 할인",
        "5차 조기예매 할인 25% 할인",
        "마티네 공연 할인 30% 할인",
        "재관람(1인1매, 본인 기준으로 티켓소지시) 25% 할인",
        "S석 청소년할인(본인, 생년월일 증명서류 지참) 30% 할인",
      ],
      img: "https://ticketimage.interpark.com/Play/image/large/24/24014885_p.gif",
    },
    {
      id: 2,
      name: "뮤지컬 <스윙 데이즈_암호명 A>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.8 - 11.3",
      duration: "150분",
      grade: "전체 관람가",
      price: {
        R: "88,000원",
        S: "66,000원",
      },
      discounts: ["조기예매 할인 20% 할인", "청소년 할인 30% 할인"],
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013619_p.gif&w=384&q=75",
    },
    {
      id: 3,
      name: "뮤지컬 <광화문 연가>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.29 - 2025.1.19",
      duration: "130분",
      grade: "12세 이상",
      price: {
        R: "99,000원",
        S: "77,000원",
      },
      discounts: ["조기예매 할인 15% 할인", "재관람 할인 20% 할인"],
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24011935_p.gif&w=384&q=75",
    },
    {
      id: 4,
      name: "뮤지컬 <베르테르>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.8 - 12.29",
      duration: "140분",
      grade: "15세 이상",
      price: {
        R: "110,000원",
        S: "88,000원",
      },
      discounts: ["학생 할인 30% 할인", "조기예매 할인 10% 할인"],
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24017198_p.gif&w=384&q=75",
    },
    {
      id: 5,
      name: "뮤지컬 <지킬앤하이드>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.17 - 11.9",
      duration: "155분",
      grade: "17세 이상",
      price: {
        R: "121,000원",
        S: "99,000원",
      },
      discounts: ["1차 조기예매 할인 30% 할인", "N차 관람 할인 20% 할인"],
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013928_p.gif&w=384&q=75",
    },
  ];

  const handleImageClick = (id) => {
    navigate(`/reservation/Performing-show/showdetail/${id}`);
  };

  return (
    <S.MainContainer>
      <S.SectionTitle>상연중</S.SectionTitle>
      <S.PerformingBoxContainer>
        {performingShows.map((show) => (
          <S.PerformingBox key={show.id}>
            <S.PerformingImage
              src={show.img}
              alt={show.name}
              onClick={() => handleImageClick(show.id)}
              style={{ cursor: "pointer" }}
            />
            <h3>{show.name}</h3>
            <p>{show.venue}</p>
            <p>{show.dates}</p>
          </S.PerformingBox>
        ))}
      </S.PerformingBoxContainer>
    </S.MainContainer>
  );
};

export default PerformingShow;
