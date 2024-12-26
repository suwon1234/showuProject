import styled from "styled-components";

const S = {};

  S.YellowBar = styled.div`
    background-color: ${({theme}) => theme.PALLETE.primary["main"]};
    height: 48px;
  `

  S.LoginHeader = styled.ul`
    height: 90px;
    display: flex;
    margin-left: 261px;
    line-height: 3.1;

    & .show {
      font-weight: 900;
      font-size: 24px;
      color: #fff;
      margin-right: 5px;
    }

    & .u {
      font-weight: 900;
      font-size: 24px;
      color: ${({theme}) => theme.PALLETE.primary["main"]};
    }
  `

export default S;