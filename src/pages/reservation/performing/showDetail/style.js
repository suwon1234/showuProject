import { styled } from "styled-components";
import { flexCenterColumn } from "../../../../global/common";

const S = {};

// 전체 컨테이너
S.Container = styled.div`
  ${flexCenterColumn}
  padding: 20px;
  width: 100%;
`;

S.DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-top: 70px;
  margin-bottom: 20px;
`;

S.Image = styled.img`
  width: 40%;
  height: auto;
  border-radius: 5px;
  margin-right: 20px;
`;

S.InfoContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

S.Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #ffd400;
  margin-bottom: 10px;
`;

S.SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #ffd400;
  margin-top: 20px;
  margin-bottom: 10px;
`;

S.DetailTitle = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #ffd400;
`;

S.DetailText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  color: #fff;
  margin-bottom: 5px;
`;

S.HorizontalLine = styled.hr`
  border: none;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
`;

S.InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

S.InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

S.DiscountList = styled.ul`
  li {
    font-size: ${({ theme }) => theme.FONT_SIZE.body};
    color: #fff;
    margin-bottom: 5px;
  }
`;

S.DateTimeInfoContainer = styled.div`
  display: flex;
  width: 1200px;
  height: 20px;
  flex-direction: column;
  max-width: 1200px;
`

S.DateTimeInfo = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: red;
`;

S.DateTimeContainer = styled.div`
  display: flex;
  flex-direction: row; /* 가로 정렬 */
  align-items: center;
  width: 1200px;
  height: 480px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #ffd400;
`;

S.StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

S.StepContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 20px;
`;

S.StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #ffd400;
  margin-bottom: 10px;
`;

S.MonthNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
`;

S.NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ffd400;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

S.MonthTitle = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

S.CalendarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  background-color: #2a2a2a;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
`;

S.CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

S.CalendarHeader = styled.div`
  text-align: center;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
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
    background-color: ${({ selected }) => (selected ? "#ffd400" : "#ffd400")};
  }
`;

S.VerticalLine = styled.div`
  width: 1px;
  height: 480px;
  background-color: #ffd400;
  margin: 0 20px;
`;

S.TimeSlot = styled.div`
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: ${({ selected }) => (selected ? "#000" : "#000")};
  border: 1px solid ${({ selected }) => (selected ? "white" : "transparent")}; /* 선택된 경우에도 흰색 보더 유지 */
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
  }
`;

S.SeatsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

S.SeatText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  color: #ffd400;
  margin: 10px;
`;

S.ReserveButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* 가장 오른쪽에 정렬 */
  width: 1200px; /* 1200px 너비 */
  margin-top: 20px;
`;

S.ReserveButtonWithHeart = styled.button`
  text-align: center;
  width: 280px;
  height: 45px;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  background-color: #ffd400;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  transition: 0.3s ease;
  &:hover {
    background-color: #ffaf00;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// 출연진 섹션 스타일 
S.CastContainer = styled.div` 
width: 1200px;
margin-top: 20px;
/* display: flex; */
`;

S.CastTitle = styled.h2` 
font-size: ${({ theme }) => theme.FONT_SIZE.h4}; 
font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold}; 
margin-top: 20px;
margin-bottom: 10px;
color: #ffd400;
`;

S.CastList = styled.div` 
display: flex;
justify-content: center;
`;

S.CastItem = styled.div`
  margin: 30px 60px;
  text-align: center;
`;

S.CastImage = styled.img` 
width: 100px;
height: 150px;
object-fit: cover;
border-radius: 10px;
margin-bottom: 5px;

`;

S.CastName = styled.p` 
font-size: ${({ theme }) => theme.FONT_SIZE.body}; 
color: ${({ theme }) => theme.PALLETE.text}; 
`;

// 탭 섹션 스타일 
S.Tabs = styled.div` 
display: flex;
margin-top: 20px;
background-color: #ffd400;
`;

S.Tab = styled.button`
  width: 240px;
  padding: 10px 20px;
  color: black;
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  border: ${({ active }) => (active ? "1px solid black" : "none")};
  border-bottom: none;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#ffd400" : "transparent")};
  transition: 0.3s ease;

  &:hover {
    background-color: #ffaf00;
  }
`;

S.TabContentContainer = styled.div` 
  margin-top: 20px;
  padding: 20px;
  border:  none;
  border-top: none; 
`;

S.TabContent = styled.div` 
font-size: ${({ theme }) => theme.FONT_SIZE.body}; 
color: ${({ theme }) => theme.PALLETE.text};
width: 1200px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
`;

// 공연시간 정보 섹션 스타일
S.TimeInfoContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;

S.TimeInfoTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #ffd400;
  margin-bottom: 10px;
`;

S.TimeInfo = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  color: ${({ theme }) => theme.PALLETE.text};
  margin-bottom: 5px;
`;

S.TimeInfoContent = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  color: ${({ theme }) => theme.PALLETE.text};
  margin-bottom: 5px;
`;

S.Notice = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  color: ${({ theme }) => theme.PALLETE.warning};
  margin-top: 10px;
`;

S.NoticeContainer = styled.div`
  margin-top: 20px;
  width: 1200px;
  display: flex;
  flex-direction: column;
`;

S.NoticeTitle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #ffd400;
  margin-bottom: 10px;
`;

S.NoticeContent = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  color: ${({ theme }) => theme.PALLETE.text};
  margin-bottom: 20px;
`;

S.CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 1200px;
  margin-bottom: 20px;
`;

S.CommentInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

S.CharacterCount = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  color: ${({ theme }) => theme.PALLETE.text};
`;

S.CommentInput = styled.textarea`
  width: 1200px;
  height: 200px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  border: 1px solid ${({ theme }) => theme.PALLETE.primary.main};
  border-radius: 5px;
  background-color: #000;
  padding: 10px;
  margin-bottom: 10px;
  resize: none; // 크기 조절 비활성화

  &::placeholder { font-size: ${({ theme }) =>theme.FONT_SIZE.body}; 
  color: #aaa; 
  text-align: left; // 텍스트 위치 조정 (left, right, center) 
  line-height: 1.5; // 줄 높이 조정     
  }
`;

S.CommentButton = styled.button` 
  display: flex;
  justify-content: end;
  padding: 10px 20px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  background-color: ${({ theme }) => theme.PALLETE.primary.main};
  color: #000;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.PALLETE.primary.dark};
  }
`;

S.CommentList = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
`;

S.CommentItem = styled.div`
  border: 1px solid ${({ theme }) => theme.PALLETE.primary.main};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 70px;
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  background-color: #000;
  color: ${({ theme }) => theme.PALLETE.text};
  word-wrap: break-word; // 텍스트가 컨테이너를 넘지 않도록 설정
`;

S.CommentDetails = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  color: #5a5a5a;
  margin-top: 5px;
  /* margin-bottom: 10px; */
`;

S.EditCommentInput = styled.textarea`
  width: 1100px;
  margin-right: 5px;
  padding: 5px;
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  margin-bottom: 20px;
  border: none;
  background-color: #000;
  resize: none; // 크기 조절 비활성화
`;

S.EditDeleteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
`;

S.FavoriteButton = styled.button`
  background-color: lightgray;
  color: ${(props) => (props.isFavorite ? "red" : "grey")};
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  cursor: pointer;
  margin-right: 10px;
`;

export default S;
