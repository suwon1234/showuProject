import React from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const navigate = useNavigate();

  const ticketEvents = [
    {
      id: 1,
      name: "LOVE IN SEOUL",
      date: "오늘 12:00",
      type: "일반예매",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24014885_p.gif&w=384&q=75",
    },
    {
      id: 2,
      name: "찰리푸스 내한공연",
      date: "오늘 12:00",
      type: "추가 좌석 티켓오픈",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013619_p.gif&w=384&q=75",
    },
    {
      id: 3,
      name: "2024 성시경 연말 콘서트",
      date: "오늘 20:00",
      type: "일반예매",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24011935_p.gif&w=384&q=75",
    },
    {
      id: 4,
      name: "뮤지컬 <블랙한 편의점>",
      date: "10.29(화) 14:00",
      type: "일반예매",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24017198_p.gif&w=384&q=75",
    },
    {
      id: 5,
      name: "뮤지컬 지킬앤하이드",
      date: "10.29(화) 14:00",
      type: "일반예매",
      img: "https://tickets.interpark.com/_next/image?url=http%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24017385_p.gif&w=256&q=75",
    },
    {
      id: 6,
      name: "2024 필수 명당탐 - 홀리 필나잇!",
      date: "10.29(화) 20:00",
      type: "일반예매",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013928_p.gif&w=384&q=75",
    },
  ];

  const performingShows = [
    {
      id: 1,
      name: "뮤지컬 <시라노>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.15 - 2025.1.5",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24014885_p.gif&w=384&q=75",
    },
    {
      id: 2,
      name: "뮤지컬 <스윙 데이즈_암호명 A>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.8 - 11.3",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013619_p.gif&w=384&q=75",
    },
    {
      id: 3,
      name: "뮤지컬 <광화문 연가>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.29 - 2025.1.19",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24011935_p.gif&w=384&q=75",
    },
    {
      id: 4,
      name: "뮤지컬 <베르테르>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.8 - 12.29",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24017198_p.gif&w=384&q=75",
    },
    {
      id: 5,
      name: "뮤지컬 <지킬앤하이드>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.17 - 11.9",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013928_p.gif&w=384&q=75",
    },
  ];

  return (
    <S.MainContainer>
      <S.TicketOpen>
        <S.SectionTitle>티켓 오픈</S.SectionTitle>
        <S.TicketBoxContainer>
          {ticketEvents.map((event) => (
            <S.TicketBox key={event.id}>
              <S.TicketImage src={event.img} alt={event.name} />
              <h3>{event.name}</h3> <p>{event.date}</p> <p>{event.type}</p>
            </S.TicketBox>
          ))}
        </S.TicketBoxContainer>
        <S.ViewAllButton onClick={() => navigate("/reservation/Ticket-open")}>오픈 예정 티켓 전체보기</S.ViewAllButton>
      </S.TicketOpen>
      <S.CurrentlyPerforming>
        <S.SectionTitle>현재 공연 중</S.SectionTitle>
        <S.PerformingBoxContainer>
          {performingShows.map((show) => (
            <S.PerformingBox key={show.id}>
              <S.PerformingImage src={show.img} alt={show.name} />
              <h3>{show.name}</h3> <p>{show.venue}</p> <p>{show.dates}</p>
            </S.PerformingBox>
          ))}
        </S.PerformingBoxContainer>
        <S.ViewAllButton onClick={() => navigate("/reservation/Performing-show")}>
          상영 중인 공연 전체보기
        </S.ViewAllButton>
      </S.CurrentlyPerforming>
    </S.MainContainer>
  );
};

export default Reservation;
