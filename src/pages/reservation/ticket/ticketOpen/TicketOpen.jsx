import React from 'react';
import S from './style';
import { useNavigate } from 'react-router';

const TicketOpen = () => {
  
  const navigate = useNavigate();

  const ticketEvents = [
    {
      id: 1,
      name: "뮤지컬 <시라노>",
      type: "일반예매",
      date: "오늘 12:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24014885_p.gif&w=384&q=75",
    },
    {
      id: 2,
      name: "뮤지컬 <스윙 데이즈_암호명 A>",
      type: "일반예매",
      date: "오늘 12:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013619_p.gif&w=384&q=75",
    },
    {
      id: 3,
      name: "뮤지컬 <광화문 연가>",
      type: "일반예매",
      date: "오늘 19:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24011935_p.gif&w=384&q=75",
    },
    {
      id: 4,
      name: "뮤지컬 <베르테르>",
      type: "일반예매",
      date: "오늘 12:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24017198_p.gif&w=384&q=75",
    },
    {
      id: 5,
      name: "뮤지컬 <지킬앤하이드>",
      type: "일반예매",
      date: "오늘 13:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013928_p.gif&w=384&q=75",
    },
    {
      id: 6,
      name: "뮤지컬 <시라노>",
      type: "일반예매",
      date: "오늘 12:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24014885_p.gif&w=384&q=75",
    },
    {
      id: 7,
      name: "뮤지컬 <스윙 데이즈_암호명 A>",
      type: "일반예매",
      date: "오늘 12:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013619_p.gif&w=384&q=75",
    },
    {
      id: 8,
      name: "뮤지컬 <광화문 연가>",
      type: "일반예매",
      date: "오늘 12:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24011935_p.gif&w=384&q=75",
    },
    {
      id: 9,
      name: "뮤지컬 <베르테르>",
      type: "일반예매",
      date: "오늘 12:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24017198_p.gif&w=384&q=75",
    },
    {
      id: 10,
      name: "뮤지컬 <지킬앤하이드>",
      type: "일반예매",
      date: "오늘 12:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013928_p.gif&w=384&q=75",
    },
    {
      id: 11,
      name: "뮤지컬 <시라노>",
      type: "일반예매",
      date: "오늘 12:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24014885_p.gif&w=384&q=75",
    },
    {
      id: 12,
      name: "뮤지컬 <스윙 데이즈_암호명 A>",
      type: "일반예매",
      date: "오늘 12:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013619_p.gif&w=384&q=75",
    },
    {
      id: 13,
      name: "뮤지컬 <광화문 연가>",
      type: "일반예매",
      date: "오늘 12:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24011935_p.gif&w=384&q=75",
    },
    {
      id: 14,
      name: "뮤지컬 <베르테르>",
      type: "일반예매",
      date: "오늘 12:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24017198_p.gif&w=384&q=75",
    },
    {
      id: 15,
      name: "뮤지컬 <지킬앤하이드>",
      type: "일반예매",
      date: "오늘 12:00",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013928_p.gif&w=384&q=75",
    },
  ];

  const handleImageClick = (id) => {
    navigate(`/reservation/ticket-open/openDetail/${id}`);
  };
  return (
    <S.MainContainer>
      <S.TicketOpen>
        <S.SectionTitle>티켓 오픈</S.SectionTitle>
        <S.TicketBoxContainer>
          {ticketEvents.map((event) => (
            <S.TicketBox
              key={event.id}
              onClick={() => handleImageClick(event.id)}
            >
              <S.TicketImage
                src={event.img}
                alt={event.name}
                style={{ cursor: "pointer" }}
              />
              <h3>{event.name}</h3> <p>{event.date}</p> <p>{event.type}</p>
            </S.TicketBox>
          ))}
        </S.TicketBoxContainer>
      </S.TicketOpen>
    </S.MainContainer>
  );
};

export default TicketOpen;