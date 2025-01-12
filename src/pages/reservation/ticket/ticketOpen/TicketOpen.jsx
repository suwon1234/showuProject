import React, { useEffect, useState } from "react";
import S from "./style";
import { useNavigate } from "react-router";

const TicketOpen = () => {
  const navigate = useNavigate();
  const [ticketEvents, setTicketEvents] = useState([]);

  useEffect(() => {
    const fetchTicketEvents = async () => {
      const token = localStorage.getItem("jwtToken");
      try {
        const response = await fetch(
          "http://localhost:8000/reservation/ticketEvents",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("네트워크 응답이 실패했습니다.");
        }
        const fetchedData = await response.json();
        setTicketEvents(fetchedData); // 모든 티켓 이벤트를 보여줌
      } catch (error) {
        console.error("티켓 이벤트를 가져오는 중 오류 발생:", error);
        setTicketEvents([]);
      }
    };

    fetchTicketEvents();
  }, []);

  const handleImageClick = (id) => {
    console.log("Navigating to detail with id:", id); // id 출력
    navigate(`/reservation/ticket-open/openDetail/${id}`);
  };

  return (
    <S.MainContainer>
      <S.TicketOpen>
        <S.SectionTitle>티켓 오픈</S.SectionTitle>
        <S.TicketBoxContainer>
          {ticketEvents.map((event) => (
            <S.TicketBox
              key={event._id} // MongoDB의 ObjectId를 key로 사용
              onClick={() => handleImageClick(event._id)} // MongoDB의 ObjectId를 사용
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
