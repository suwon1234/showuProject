import styled from "styled-components";

const S = {};

  S.YellowBar = styled.div`
    background-color: ${({theme}) => theme.PALLETE.primary["main"]};
    height: 48px;
  `

  S.LoginHeader = styled.ul`
    height: 90px;
    display: flex;
    align-items: center;
    margin-left: 200px;

    & .show {
      font-weight: 900;
      font-size: 25px;
      color: #fff;
      margin-right: 5px;
    }

    & .u {
      font-weight: 900;
      font-size: 25px;
      color: ${({theme}) => theme.PALLETE.primary["main"]};
    }
  `

export default S;