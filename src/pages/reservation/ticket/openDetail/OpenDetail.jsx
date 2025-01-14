import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import S from "./style";
import { useNavigate } from "react-router-dom";

const OpenDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    console.log("Fetching event with id:", id); // id 출력
    const fetchEvent = async () => {
      const token = localStorage.getItem("jwtToken");
      try {
        const response = await fetch(
          `http://localhost:8000/reservation/ticketEvents/${id}`,
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
        console.log(fetchedData); // 데이터 출력
        setEvent(fetchedData);
      } catch (error) {
        console.error("티켓 이벤트를 가져오는 중 오류 발생:", error);
      }
    };

    fetchEvent();
  }, [id]);

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
