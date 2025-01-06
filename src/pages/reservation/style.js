import { styled } from "styled-components";
import { backgroundBlack, flexCenterColumn } from "../../global/common";

const S = {};

// 전체 배경 색상
S.MainContainer = styled.div`
  ${backgroundBlack}
  ${flexCenterColumn}
  width: 100%;
  min-height: 100%;
`;

// 섹션 타이틀
S.SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #ffffff;
  justify-content: center;
  display: flex;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 10px;
`;

// 티켓 오픈 컨테이너
S.TicketOpen = styled.div`
  margin-top: 40px;
  width: 1200px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// 티켓 박스 컨테이너
S.TicketBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

// 티켓 박스
S.TicketBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 250px;
  margin: 5px;
  margin-bottom: 150px;
  /* background-color: white; */
  border-radius: 5px;

  h3,
  p {
    margin: 5px 0;
    color: white;
  }

  h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  }

  p {
    font-size: ${({ theme }) => theme.FONT_SIZE.body};
  }
`;

// 현재 공연 중 컨테이너
S.CurrentlyPerforming = styled.div`
  margin-top: 50px;
  width: 1200px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// 공연 박스 컨테이너
S.PerformingBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

// 공연 박스
S.PerformingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 220px;
  margin: 10px;
  background-color: white;
  border-radius: 5px;

  h3,
  p {
    margin: 5px 0;
    color: white;
  }

  h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  }

  p {
    font-size: ${({ theme }) => theme.FONT_SIZE.body};
  }
`;

// 티켓 오픈 이미지 스타일
S.TicketImage = styled.img`
  width: 180px;
  height: 400px;
  border-radius: 5px;
`;

// 현재 공연 중 이미지 스타일
S.PerformingImage = styled.img`
  width: 180px;
  height: 400px;
  border-radius: 5px;
`;

// 전체 보기 버튼
S.ViewAllButton = styled.div`
  border-radius: 30px;
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
  margin-top: 10px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export default S;
