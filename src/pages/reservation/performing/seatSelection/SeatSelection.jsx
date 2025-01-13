import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import format from "date-fns/format";
import S from "./style";

const SeatSelection = () => {
  const { state } = useLocation();
  const { selectedDate, selectedTime, showId, showName, price } = state; // showName과 price를 함께 받아옴
  const { currentUser } = useSelector((state) => state.user); // Redux에서 현재 유저 정보 가져옴
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);
  const seats = [];

  const navigate = useNavigate();

  // 좌석 배열 생성
  for (let i = 0; i < 100; i++) {
    const row = Math.floor(i / 10) + 1;
    const col = (i % 10) + 1;
    const seatType = row <= 3 ? "S" : "R";
    seats.push({
      row,
      col,
      type: seatType,
      price: seatType === "S" ? price.S : price.R, // show에서 받아온 가격 사용
    });
  }

useEffect(() => {
  const fetchReservedSeats = async () => {
    try {
      const formattedDate = encodeURIComponent(
        new Date(selectedDate).toISOString()
      ); // 날짜 형식 변환 후 URL 인코딩
      console.log(
        `Fetching reserved seats for showId=${showId}, date=${formattedDate}, time=${selectedTime}`
      ); // 콘솔 로그 추가
      const response = await fetch(
        `http://localhost:8000/reservation/reservedSeats?showId=${showId}&date=${formattedDate}&time=${selectedTime}`
      );
      if (!response.ok) {
        throw new Error("예약된 좌석을 가져오는 중 오류 발생");
      }
      const fetchedData = await response.json();
      console.log("Fetched Reserved Seats:", fetchedData); // 콘솔 로그 추가
      setReservedSeats(fetchedData);
    } catch (error) {
      console.error("예약된 좌석을 가져오는 중 오류 발생:", error);
    }
  };

  fetchReservedSeats();
}, [showId, selectedDate, selectedTime]);




  const handleSeatClick = (seat) => {
    const seatId = `${seat.row}-${seat.col}`;
    if (
      reservedSeats.some((reservedSeat) =>
        reservedSeat.seatNumbers.includes(seatId)
      )
    )
      return; // 예약된 좌석은 클릭 불가

    if (
      selectedSeats.some(
        (selectedSeat) =>
          selectedSeat.row === seat.row && selectedSeat.col === seat.col
      )
    ) {
      setSelectedSeats(
        selectedSeats.filter(
          (selectedSeat) =>
            selectedSeat.row !== seat.row || selectedSeat.col !== seat.col
        )
      );
    } else if (selectedSeats.length < 2) {
      // 2매 초과 불가
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBooking = async () => {
    const token = localStorage.getItem("jwtToken");
    try {
      const promises = selectedSeats.map((seat) =>
        fetch(`http://localhost:8000/reservation/reserve`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            showId,
            date: selectedDate,
            time: selectedTime,
            seatNumbers: [`${seat.row}-${seat.col}`],
          }), // 좌석 번호 배열로 변경
        })
      );
      await Promise.all(promises);
      alert("좌석 예약이 완료되었습니다!");
      navigate("/reservation/performing-show");
    } catch (error) {
      console.error("좌석 예약 중 오류 발생:", error);
      alert("좌석 예약 중 오류가 발생했습니다.");
    }
  };

  return (
    <S.SeatSelectionContainer>
      <S.Title>좌석 선택</S.Title>
      <S.SelectedDateTimeInfo>
        <p>공연 이름: {showName || "선택되지 않음"}</p>
        <br />
        <p>
          공연 일자:{" "}
          {selectedDate
            ? format(new Date(selectedDate), "yyyy-MM-dd")
            : "선택되지 않음"}
        </p>
        <br />
        <p>시간: {selectedTime || "선택되지 않음"}</p>
        <br />
        <p>
          가격: {price ? `R석: ${price.R} / S석: ${price.S}` : "가격 정보 없음"}
        </p>{" "}
        <br />
        <p style={{ color: "#ffd400" }}>1인당 최대 2매 예매 가능</p>
        {/* 가격 정보 표시 */}
      </S.SelectedDateTimeInfo>
      <S.ContentWrapper>
        <S.SeatGrid>
          {seats.map((seat, index) => {
            const seatId = `${seat.row}-${seat.col}`;
            const isReserved = reservedSeats.some((reservedSeat) =>
              reservedSeat.seatNumbers.includes(seatId)
            );
            const isCurrentUserReserved = reservedSeats.some(
              (reservedSeat) =>
                reservedSeat.seatNumbers.includes(seatId) &&
                reservedSeat.userId === currentUser?._id
            );

            return (
              <S.Seat
                key={index}
                onClick={() => handleSeatClick(seat)}
                selected={selectedSeats.some(
                  (selectedSeat) =>
                    selectedSeat.row === seat.row &&
                    selectedSeat.col === seat.col
                )}
                reserved={isReserved}
                disabled={isReserved && !isCurrentUserReserved} // 예약된 좌석은 비활성화
                type={seat.type}
                style={{
                  backgroundColor: isReserved ? "gray" : "",
                  cursor: isReserved ? "not-allowed" : "pointer",
                }} // 예약된 좌석 스타일
              >
                {seat.row}-{seat.col}
              </S.Seat>
            );
          })}
        </S.SeatGrid>

        {selectedSeats.length > 0 && (
          <S.SelectedSeatInfo>
            <p>
              선택된 좌석:{" "}
              {selectedSeats
                .map((seat) => `${seat.row}행 ${seat.col}열 (${seat.type}석)`)
                .join(", ")}
            </p>
            <p>
              가격:{" "}
              {selectedSeats
                .reduce(
                  (total, seat) =>
                    total + parseInt(seat.price.replace(/,/g, ""), 10),
                  0
                )
                .toLocaleString()}
              원
            </p>
            <S.BookingButton onClick={handleBooking}>결제하기</S.BookingButton>
          </S.SelectedSeatInfo>
        )}
      </S.ContentWrapper>
    </S.SeatSelectionContainer>
  );
};

export default SeatSelection;
