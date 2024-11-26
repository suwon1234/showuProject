import { styled } from "styled-components";
import { backgroundBlack, flexCenter, flexCenterRow } from "../../global/common";

const S = {};

// 전체 배경 색상
S.MainContainer = styled.div`
  ${backgroundBlack}
  ${flexCenterRow}
  width: 100%;
  /* position: relative; */
  min-height: 100%;
`;

// 티켓오픈 컨테이너
S.TicketOpen = styled.div`
  margin-top: 100px;
  width: 1200px;
  height: 500px;
  background-color: gray;
`

// 티켓오픈 타이틀
 S.FirstTitle = styled.div`
   font-size: ${({ theme }) => theme.FONT_SIZE.h3};
   font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
   color: #ffffff;
   justify-content: center;
   display: flex;
   margin-top : 20px;
   padding: 30px;
 `;



export default S;