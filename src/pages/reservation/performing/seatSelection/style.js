import { styled } from "styled-components";

// 전체 컨테이너
const S = {};

S.SeatSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000; /* ShowDetail과 비슷한 배경 색상 */
  color: #fff;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
`;

S.Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #ffd400;
  margin-top: 40px;
  margin-bottom: 40px;
`;

S.SelectedDateTimeInfo = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #ffd400;
  margin-bottom: 40px;
  text-align: center;
`;

S.ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
`;

S.SeatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
  background-color: #2a2a2a;
  padding: 20px;
  border-radius: 10px;
`;

S.Seat = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ selected, type }) =>
    selected ? "#ffd400" : type === "S" ? "#000" : "#000"};
  border: 1px solid ${({ type }) => (type === "S" ? "#ffd400" : "#bdbdbd")};
  border-radius: 5px;
  &:hover {
    background-color: #ffd400;
  }
`;

S.SelectedSeatInfo = styled.div`
  margin-left: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 350px;
  height: 200px;
  text-align: center;
  /* background-color: #f9f9f9; */
  p {
    margin: 10px 0;
    font-size: 16px;
  }
`;

S.BookingButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #ffd400;
  color: black;
  width: 250px;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin-top: 20px;
  margin-left: 30px;
  cursor: pointer;
`;

export default S;
