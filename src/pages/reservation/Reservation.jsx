import React, { useEffect, useState } from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const navigate = useNavigate();
  const [ticketEvents, setTicketEvents] = useState([]);
  const [performingShows, setPerformingShows] = useState([]);

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
        setTicketEvents(fetchedData.slice(0, 6)); // 티켓 오픈 6개만 보여줌
      } catch (error) {
        console.error("티켓 이벤트를 가져오는 중 오류 발생:", error);
        setTicketEvents([]);
      }
    };

    const fetchPerformingShows = async () => {
      const token = localStorage.getItem("jwtToken");
      try {
        const response = await fetch(
          "http://localhost:8000/reservation/performingShows",
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
        setPerformingShows(fetchedData.slice(0, 5)); // 현재 공연 중 5개만 보여줌
      } catch (error) {
        console.error("공연 데이터를 가져오는 중 오류 발생:", error);
        setPerformingShows([]);
      }
    };

    fetchTicketEvents();
    fetchPerformingShows();
  }, []);

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
        <S.ViewAllButton onClick={() => navigate("/reservation/Ticket-open")}>
          오픈 예정 티켓 전체보기
        </S.ViewAllButton>
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
        <S.ViewAllButton
          onClick={() => navigate("/reservation/Performing-show")}
        >
          상영 중인 공연 전체보기
        </S.ViewAllButton>
      </S.CurrentlyPerforming>
    </S.MainContainer>
  );
};

export default Reservation;
