import styled, { css } from "styled-components";

const S = {};

const flexStyle = css`
  display: flex;
  align-items: center;
  `

const flexStyle2 = css`
  ${flexStyle}
  flex-direction: column;
  `

  S.ManagementWrapper = styled.div`
    ${flexStyle2}
    background-color: #000;
  `

  S.Title = styled.div`
    ${flexStyle}
    width: 100%;
    max-width: 1165px;
    height: 55px;
    border-radius: 50px;
    background-color: #ffd400;
    color: #000;
    margin: 50px auto 30px;
    justify-content: space-between;

      & h1 {
        font-size: 20px;
        font-weight: bold;
        margin-left: 20px;
        color: #000;
      }
  `

  S.SubTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #ffd400;
    width: 1140px;
    margin: 30px auto;
  `

  S.State = styled.table`
    width: 1160px;
    border-collapse: collapse;
    background-color: #000;
    font-size: 16px;

    & th {
      background-color: rgba(255, 212, 0, 0.8);
      color: #000;
      width: 10%;
      border: 0.5px solid #000;
      text-align: center;
      font-weight: bold;
      border: 0.5px solid #fff;
      padding: 10px;
    }

    & td {
      border: 0.5px solid #fff;
      padding: 10px;
      text-align: left;
    }
    
    & p {
      font-size: 20px;
      font-weight: bold;
      color: #ffd400;
      /* width: 1140px; */
      margin: 30px auto;
    }
  `

  S.Notice = styled.div`
    margin-top: 50px;
    width: 1160px;

    & p {
      font-size: 17px;
      margin-top: 20px;
    }
  `

  S.NoticeTitle = styled.div`
    display: flex;
    align-items: center;

    .notice {
      font-size: 17px;
      font-weight: bold;
      margin-top: 0;
    }
    
    .icon {
      font-size: 20px;
      padding-right: 5px;
    }
  `

  S.TableWrapper = styled.div`
    margin-top: 100px;

  & p {
      margin-bottom: 10px;

  }
  `

  S.Table = styled.table`
    width: 1160px;
  
  `

  S.Head = styled.th`
    border: 1px solid #ffd400;
    text-align: center;
    padding: 10px;
    background-color: rgba(255, 212, 0, 0.8);
    color: black;
    font-weight: bold;
    font-size: 17px;
  
  `

  S.Data = styled.td`
    border: 1px solid #fff;
    text-align: center;
    padding: 10px;
    background-color: #000;
    color: #fff;

    .icon {
      font-size: 30px;

    }
    &:hover {
      color: #ffd400;
    }
    
  `


export default S;