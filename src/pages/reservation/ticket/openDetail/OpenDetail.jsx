import React from "react";
import { useParams } from "react-router-dom";
import S from "./style";
import { useNavigate } from "react-router-dom";

const OpenDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const ticketEvents = [
    {
      id: 1,
      name: "뮤지컬 <시라노>",
      type: "일반예매",
      date: "2025-01-30",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24014885_p.gif&w=384&q=75",
    },
    {
      id: 2,
      name: "뮤지컬 <스윙 데이즈_암호명 A>",
      type: "일반예매",
      date: "2025-11-03",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013619_p.gif&w=384&q=75",
    },
    {
      id: 3,
      name: "뮤지컬 <광화문 연가>",
      type: "일반예매",
      date: "2025-12-01",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24011935_p.gif&w=384&q=75",
    },
    {
      id: 4,
      name: "뮤지컬 <베르테르>",
      type: "일반예매",
      date: "2024-10-29",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24017198_p.gif&w=384&q=75",
    },
    {
      id: 5,
      name: "뮤지컬 <지킬앤하이드>",
      type: "일반예매",
      date: "2024-11-09",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013928_p.gif&w=384&q=75",
    },
  ];

  const event = ticketEvents.find((e) => e.id === parseInt(id));

  const calculateDDay = (date) => {
    const eventDate = new Date(date);
    const today = new Date();
    const timeDiff = eventDate - today;
    const dDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return dDay;
  };

  if (!event) {
    return <div>이벤트를 찾을 수 없습니다.</div>;
  }

  return (
    <S.Container>
      <S.DetailContainer>
        <S.Image src={event.img} alt={event.name} />
        <S.InfoContainer>
          <S.Title>{event.name}</S.Title>
          <S.InfoRow>
            <S.InfoColumn>
              <S.DetailText>
                <S.DetailTitle>유형:</S.DetailTitle> {event.type}
              </S.DetailText>
              <S.DetailText>
                <S.DetailTitle>티켓오픈:</S.DetailTitle> {event.date}
              </S.DetailText>
            </S.InfoColumn>
          </S.InfoRow>
          <S.DDayContainer>
            <S.DDayDescription>오픈까지</S.DDayDescription>
            <S.DDay>D-{calculateDDay(event.date)}</S.DDay>
            <S.DDayDate>{event.date}</S.DDayDate>
            <S.BackButton onClick={() => navigate(-1)}>뒤로가기</S.BackButton>
          </S.DDayContainer>
        </S.InfoContainer>
      </S.DetailContainer>
    </S.Container>
  );
};

export default OpenDetail;
