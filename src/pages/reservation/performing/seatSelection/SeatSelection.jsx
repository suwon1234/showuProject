import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import format from "date-fns/format";
import S from "./style";

const SeatSelection = () => {
  const { state } = useLocation();
  const { selectedDate, selectedTime, showName } = state;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seats = [];

  // 좌석 배열 생성
  for (let i = 0; i < 100; i++) {
    const row = Math.floor(i / 10) + 1;
    const col = (i % 10) + 1;
    const seatType = row <= 3 ? "S" : "R";
    seats.push({
      row,
      col,
      type: seatType,
      price: seatType === "S" ? "155,000원" : "99,000원",
    });
  }

  const handleSeatClick = (seat) => {
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
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBooking = () => {
    alert("결제가 완료되었습니다!");
  };

  return (
    <S.SeatSelectionContainer>
      <S.Title>좌석 선택</S.Title>
      <S.SelectedDateTimeInfo>
        <p>공연 이름: {showName || "선택되지 않음"}</p>
        <br />
        <p>
          공연 일자: {selectedDate ? format(new Date(selectedDate), "yyyy-MM-dd") : "선택되지 않음"}
        </p>
        <br />
        <p>시간: {selectedTime || "선택되지 않음"}</p>
      </S.SelectedDateTimeInfo>
      <S.ContentWrapper>
        <S.SeatGrid>
          {seats.map((seat, index) => (
            <S.Seat
              key={index}
              onClick={() => handleSeatClick(seat)}
              selected={selectedSeats.some(
                (selectedSeat) =>
                  selectedSeat.row === seat.row && selectedSeat.col === seat.col
              )}
              type={seat.type}
            >
              {seat.row}-{seat.col}
            </S.Seat>
          ))}
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
