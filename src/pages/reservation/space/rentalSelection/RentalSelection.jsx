import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  getDay,
  addMonths,
  isSameDay,
  isBefore,
  setHours,
  setMinutes,
  addHours,
  isSameHour,
  differenceInCalendarDays,
} from "date-fns";
import { S } from "./style"; // 스타일 파일 임포트

const RentalSelection = () => {
  const location = useLocation();
  const {
    name,
    location: rentalLocation,
    pricePerHour,
    pricePerDay,
    img,
  } = location.state; // 전달된 정보 가져오기

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showPrices, setShowPrices] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleDateChange = (date) => {
    if (isBefore(date, addDays(new Date(), 1))) return; // 오늘 이후 날짜부터 선택 가능

    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
      setTotalPrice(pricePerDay);
    } else if (isBefore(date, selectedStartDate)) {
      setSelectedStartDate(date);
    } else {
      setSelectedEndDate(date);
      setShowPrices(true);
      setSelectedTimes([]); // 날짜 변경 시 선택된 시간 초기화
      if (differenceInCalendarDays(date, selectedStartDate) > 0) {
        setTotalPrice(
          (differenceInCalendarDays(date, selectedStartDate) + 1) * pricePerDay
        );
      } else {
        setTotalPrice(pricePerDay);
      }
    }
  };

  const previousMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleTimeClick = (time) => {
    let updatedTimes;
    if (selectedTimes.some((t) => isSameHour(t, time))) {
      updatedTimes = selectedTimes.filter((t) => !isSameHour(t, time)); // 동일한 시간 선택 시 해제
    } else {
      updatedTimes = [...selectedTimes, time]; // 시간 추가
    }
    setSelectedTimes(updatedTimes);

    if (updatedTimes.length === 0) {
      setTotalPrice(0);
    } else if (updatedTimes.length === 15) {
      // 모든 시간 버튼이 선택되었을 때 종일권 가격 설정
      setTotalPrice(pricePerDay);
    } else {
      setTotalPrice(updatedTimes.length * pricePerHour);
    }
  };

  const handleAllDayClick = () => {
    if (selectedTimes.length === 15) {
      setSelectedTimes([]);
      setTotalPrice(0);
    } else {
      const allDayTimes = [];
      for (let i = 8; i <= 22; i++) {
        const time = setHours(setMinutes(new Date(selectedStartDate), 0), i);
        allDayTimes.push(time);
      }
      setSelectedTimes(allDayTimes);
      setTotalPrice(pricePerDay); // 종일권 가격 설정
    }
  };

  const renderCalendar = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    const dateArray = [];
    let currentDate = start;

    while (currentDate <= end) {
      dateArray.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }

    const daysInWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const firstDayOfMonth = getDay(start);
    const tomorrow = setHours(setMinutes(addDays(new Date(), 1), 0), 0); // 내일의 시간, 분, 초를 0으로 설정

    return (
      <S.CalendarGrid>
        {daysInWeek.map((day) => (
          <S.CalendarHeader key={day}>{day}</S.CalendarHeader>
        ))}
        {Array(firstDayOfMonth)
          .fill(null)
          .map((_, index) => (
            <S.CalendarDay key={`empty-${index}`} />
          ))}
        {dateArray.map((date) => (
          <S.CalendarDay
            key={date}
            onClick={() => handleDateChange(date)}
            selected={
              isSameDay(date, selectedStartDate) ||
              isSameDay(date, selectedEndDate) ||
              (selectedStartDate &&
                selectedEndDate &&
                isBefore(selectedStartDate, date) &&
                isBefore(date, selectedEndDate))
            }
            disabled={isBefore(date, tomorrow)} // 내일 이전 날짜 선택 방지
          >
            {format(date, "d")}
          </S.CalendarDay>
        ))}
      </S.CalendarGrid>
    );
  };

  const renderTimeButtons = () => {
    if (selectedStartDate && selectedEndDate) return null; // 날짜 범위 선택 시 시간 버튼 숨김

    const tomorrow = setHours(setMinutes(addDays(new Date(), 1), 0), 0); // 내일의 시간, 분, 초를 0으로 설정
    if (
      !selectedStartDate ||
      !showPrices ||
      isBefore(selectedStartDate, tomorrow)
    )
      return null;

    const timeButtons = [];
    const price = Number(pricePerHour); // pricePerHour를 숫자로 변환

    for (let i = 8; i <= 22; i++) {
      const time = setHours(setMinutes(new Date(selectedStartDate), 0), i);
      timeButtons.push(
        <S.TimeButton
          key={i}
          onClick={() => handleTimeClick(time)}
          selected={selectedTimes.some((t) => isSameHour(t, time))}
        >
          {`${format(time, "HH:mm")} ~ ${format(addHours(time, 1), "HH:mm")}`}
          <br />
          {`${price.toLocaleString()}원`}
        </S.TimeButton>
      );
    }
    return timeButtons;
  };

  const renderSelectedDates = () => {
    if (selectedStartDate && selectedEndDate) {
      // 날짜 범위 선택 시 기간 표시
      return `${format(selectedStartDate, "yyyy년 MM월 dd일")} ~ ${format(
        selectedEndDate,
        "yyyy년 MM월 dd일"
      )}`;
    } else if (selectedStartDate && selectedTimes.length > 0) {
      // 선택한 시간 표시
      const selectedDate = format(selectedStartDate, "yyyy년 MM월 dd일");
      const selectedHours = selectedTimes
        .map((time) => format(time, "HH:mm"))
        .join(", ");
      return `${selectedDate} (${selectedHours})`;
    } else {
      return "선택된 날짜가 없습니다.";
    }
  };

  return (
    <S.Container>
      <S.InnerContainer>
        <S.MainTitle>예약접수</S.MainTitle>
        <S.HorizontalLine />
        <S.DetailContainer>
          <S.InfoWrapper>
            <S.SubTitle>
              희망일정
              <S.SubContent>
                세팅과 철수 시간을 포함한 희망 사용기간을 선택해 주세요.
              </S.SubContent>
            </S.SubTitle>
            <S.MonthNavigation>
              <S.NavButton onClick={previousMonth}>{"<"}</S.NavButton>
              <S.MonthTitle>{format(currentMonth, "yyyy년 MM월")}</S.MonthTitle>
              <S.NavButton onClick={nextMonth}>{">"}</S.NavButton>
            </S.MonthNavigation>
            <S.Calendar>{renderCalendar()}</S.Calendar>
            {selectedStartDate && (
              <S.AllDayButton onClick={handleAllDayClick}>
                종일권
              </S.AllDayButton>
            )}
            <S.TimeSelectionWrapper>
              <S.TimeButtonsContainer>
                {renderTimeButtons()}
              </S.TimeButtonsContainer>
            </S.TimeSelectionWrapper>
          </S.InfoWrapper>
          <S.PriceInfo>
            <S.Img src={img} alt={name} />
            <S.Name>{name}</S.Name>
            <S.Location>{rentalLocation}</S.Location>
            <S.SelectedDates>{renderSelectedDates()}</S.SelectedDates>
            <S.TotalPrice>
              {selectedStartDate && selectedEndDate
                ? `${totalPrice.toLocaleString()}원 (${
                    differenceInCalendarDays(
                      selectedEndDate,
                      selectedStartDate
                    ) + 1
                  }일)`
                : `${totalPrice.toLocaleString()}원 (${
                    selectedTimes.length
                  }시간)`}
            </S.TotalPrice>
            <S.ReserveButton>예약하기</S.ReserveButton>
          </S.PriceInfo>
        </S.DetailContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default RentalSelection;
