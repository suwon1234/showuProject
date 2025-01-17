import React, { forwardRef, useState } from 'react';
import DatePicker from "react-datepicker";
import { getYear, getMonth } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import S from '../calender/style';
import { ko } from "date-fns/locale";

const CalendarComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  // range 함수 추가
  const range = (start, end, step = 1) => {
    const result = [];
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
    return result;
  };

  const years = range(1990, getYear(new Date()) + 1);
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월", 
    "10월",
    "11월",
    "12월",

  ];

  return (
    <S.CustomBox >
        <DatePicker
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <S.CalenderWrapper>
              <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
              </button>
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
              </button>
            </S.CalenderWrapper>
          )}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<ExampleCustomInput className="example-custom-input "/>}
          locale={ko}
          dateFormat="yyyy-MM-dd"
          
        />
    </S.CustomBox>
  );
};

export default CalendarComponent;