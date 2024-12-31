import styled from "styled-components";

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000; /* 배경 검은색 */
  color: #000;
  padding: 20px;
  margin-top: 40px;
  width: 100%;
  height: 100%;
  /* min-height: 100vh; */
`;

S.InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff; /* 내부 흰색 */
  width: 1200px; /* 내부 크기 1200px */
  height: 1100px;
  padding: 20px;
  border-radius: 10px;
`;

S.MainTitle = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: #000;
  width: 100%;
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

S.HorizontalLine = styled.hr`
  width: 100%;
  border: 2px solid #ffd400;
`;

S.DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

S.InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

S.SubTitle = styled.h4`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin-top: 10px;
  margin-bottom: 10px;
  color: #000;
`;

S.SubContent = styled.h5`
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin-top: 10px;
  margin-bottom: 10px;
  color: #000;
`;

S.Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  color: #000;
`;

S.CalendarTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  color: #000;
`;

S.Calendar = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 10px;
  background-color: #2a2a2a;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
`;

S.MonthNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

S.NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #ffd400;
  }
`;

S.MonthTitle = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

S.CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

S.CalendarHeader = styled.div`
  text-align: center;
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px;
`;

S.CalendarDay = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  color: ${({ selected }) => (selected ? "#000" : "#fff")};
  background-color: ${({ selected }) => (selected ? "#ffd400" : "transparent")};
  cursor: pointer;
  &:hover {
    background-color: ${({ selected }) => (selected ? "#ffd400" : "#f0f0f0")};
  }
`;

S.AllDayButton = styled.button`
  background-color: #ffd400;
  border: none;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #000;
    color: #ffd400;
  }
`;

S.TimeSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
`;

S.TimeButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  max-width: 600px;
  margin: 0 auto;
`;

S.TimeButton = styled.button`
  background-color: ${({ selected }) => (selected ? "#ffd400" : "#fff")};
  border: 1px solid #ffd400;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  height: 60px; /* 최소 너비 설정 */
  text-align: center; /* 텍스트 가운데 정렬 */
  margin-bottom: 10px; /* 아래 여백 추가 */
  &:hover {
    background-color: #ffd400;
  }
`;

S.PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
`;

S.Img = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

S.Name = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #000;
  margin-bottom: 10px;
`;

S.Location = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #000;
  margin-bottom: 10px;
`;

S.SelectedDates = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #000;
  margin-bottom: 10px;
`;

S.TotalPrice = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #000;
  margin-bottom: 10px;
`;

S.ReserveButton = styled.button`
  background-color: #ffd400;
  border: none;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #ffd400;
  }
`;

export { S };
