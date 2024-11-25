import styled from "styled-components";
import { flexCenterColumn } from "../../../global/common";

const S = {};

  S.MainWrapper = styled.div`
    width: 100%;
    height: 100dvh;
    background-color: #000;
  `

  S.Md = styled.h1`
    color: "#ffd400";
    font-weight: bold;
    text-align: center;
  `

  S.Best = styled.h1`
    color : #fff;
    font-weight: bold;
  `

  S.BestWrapper = styled.div`
  /* align-items: center; */
    /* display: flex;
    flex-direction: row; */
  `

  S.BestImage = styled.image`

  & img {
    width: 100px;
    height: 100px;
  }
  `

  S.BestList = styled.div`
    display: flex;
    flex-direction: row;

  `

  S.Best = styled.div`
  `

  S.BestTitle = styled.p`
  `

  S.BestPrice = styled.p`
  
  `
export default S;