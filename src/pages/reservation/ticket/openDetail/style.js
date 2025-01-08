import styled from "styled-components";

const S = {};

// 전체 컨테이너
S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

// 상세 컨테이너
S.DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-top: 70px;
  margin-bottom: 20px;
`;

// 이미지 스타일
S.Image = styled.img`
  width: 40%;
  height: auto;
  border-radius: 5px;
  margin-right: 40px;
`;

// 정보 컨테이너
S.InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 650px;
  align-items: center;
  border: 1px solid #ffd400;
  border-radius: 5px;
`;

// 타이틀 스타일
S.Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #ffd400;
  margin-bottom: 10px;
  margin-top: 40px;
`;

// 정보 행 스타일
S.InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

// 정보 열 스타일
S.InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

// 상세 텍스트 스타일
S.DetailText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.body};
  color: #fff;
  padding: 40px;
  margin-bottom: 5px;
`;

// 상세 타이틀 스타일
S.DetailTitle = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.body};
  color: #ffd400;
`;

// D-day 스타일
S.DDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 200px;
  border: 1px solid #ffd400;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px;
`;

S.DDay = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: red;
  margin-bottom: 5px;
`;

S.DDayDescription = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  color: #ffd400;
`;

S.DDayDate = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  color: #5a5a5a;
`;

S.BackButton = styled.button`
  width: 200px;
  height: 50px;
  text-align: center;
  background-color: #ffd400;
  border: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  cursor: pointer;
  color: #000;
  margin-top: 10px;
  transition: 0.3s ease;
  &:hover {
    background-color: #ffaf00;
  }
`;

export default S;
