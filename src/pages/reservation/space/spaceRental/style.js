import { styled } from "styled-components";

// 전체 컨테이너
const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
`;

S.Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #ffd400;
  margin-top: 30px;
  margin-bottom: 20px;
`;

S.SearchBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
  /* margin-right: 10px; */
  input {
    flex-grow: 1;
    padding: 10px;
    font-size: ${({ theme }) => theme.FONT_SIZE.body};
    color: black;
    /* border: 1px solid #ffd400; */
    border-radius: 5px;
  }
  button {
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.FONT_SIZE.body};
    background-color: #ffd400;
    margin-left: 10px;
    color: #000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

S.RentalList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  /* justify-content: center; */
`;

S.RentalItem = styled.div`
  background-color: #2a2a2a;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* text-align: center; */
  cursor: pointer;
`;

S.RentalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

S.RentalDetails = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

S.RentalName = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  color: #ffd400;
  margin-bottom: 10px;
`;

S.RentalLocation = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  color: #bdbdbd;
  margin-bottom: 10px;
`;

S.RentalPrice = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  color: #ffd400;
  margin-bottom: 10px;
`;

S.NewBadge = styled.span`
  width: 60px;
  display: inline-block;
  padding: 5px 10px;
  background-color: #ffd400;
  color: #000;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export default S;
