import { styled } from "styled-components";

const S = {};
S.CustomBox = styled.div`
 .react-datepicker{
  height: 300px;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;

  background-color: #000;
 }

 .react-datepicker__header {
    height: 70px;
    background-color: #000;
    border-bottom: 1px solid #ececec;
  }
  .react-datepicker__month-container {
    background-color: #000;
    font-size: 18px;
  }
  .react-datepicker__month {
    margin-top: 50px;
  }


.react-datepicker__day-names {
 margin-top: 20px;
 margin-bottom: 30px;
}

.react-datepicker__day-name{
  color: #fff;
  margin-bottom: -20px;
}


.react-datepicker__day {
  /* border: 1px solid #fff; */
  background-color: #000;
  color: #fff;
}

`

S.CalenderWrapper = styled.div`
  width: 300px;
  display: flex;
  gap: 10px;
  justify-content: center;

  button {
    color: #fff;
    background-color: transparent;
    width: 30px;
  }

  select {
    margin-top: 15px;
    width: 200px;
    height: 30px;
    background-color: #000;
  }

`

export default S;