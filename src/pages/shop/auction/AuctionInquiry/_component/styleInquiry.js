// MD - 문의페이지 스타일
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  S.InquiryWrapper = styled.div`
    ${flexStyle2}
    background-color: #000;
  `

  S.InquiryTitle = styled.div`
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

  S.Inquiry = styled.table`
    width: 1165px;
    border-collapse: collapse;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    margin-top: 40px;

    body {
      background-color: #000; 
      color: #fff;
      margin: 20px;
    
    }

    table {
      font-size: 18px;
      width: 100%;
      border-collapse: collapse;
      border-top: 2px solid #fff; 
      border-bottom : 2px solid #fff;
    }

    th, td {
      border-top: 2px solid #fff; 
      border-bottom: 2px solid #fff;
      padding: 10px;
      text-align: left;
      vertical-align: middle;
    }

    th {
      width: 20%;
      background-color: #000;
      color: #fff;
      text-align: center;
      border-right: 1px solid #fff;
    }

    td {
      width: 80%;
    }

    tr:nth-child(1),
    tr:nth-child(2),
    tr:nth-child(3),
    tr:nth-child(4),
    tr:nth-child(5) {
      height: 70px;
      border-left: none;
    }

    tr:nth-child(6) {
      height: 250px;
    }

    tr:nth-child(7) {
      height: 100px;
    }

    
    tr:nth-child(8) {
      height: 130px;
    }

  `
  S.TypeWrapper = styled.div`
    display: flex;
  `

  S.Type = styled.div`
    ${flexStyle}
    margin-right: 20px;
    cursor: pointer;
  `

  S.Icon = styled(FontAwesomeIcon)`
    padding-right: 5px;
    padding-left: 5px;

    path {
      color: ${({ selected }) => (selected ? '#ffd400' : '#fff')};
    }

      &:hover path{
          color: #ffd400;
      }
  `

  S.InputTitle = styled.input`
    width: 100%;
    height: 50px;
    background-color: #000;
    color: #fff;
    font-size: 15px;
    border: 0.5px solid #fff;
    padding: 10px;
    border-radius: 5px;
  `

  S.InputContent = styled.textarea`
    width: 100%;
    height: 220px;
    background-color: #000;
    color: #fff;
    font-size: 15px;
    border: 0.5px solid #fff;
    padding: 10px;
    border-radius: 5px;
  `

  const buttonStyles = `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 55px;
    border-radius: 50px;
    border: none;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
    `;

  S.InquiryButton = styled.div`
    ${flexStyle}
    justify-content: center;
    width: 1165px;
    margin: 50px auto 100px;
    gap: 10px;
  `

  S.BackButton = styled.button`
    ${buttonStyles}
    background-color: #797979;
    color: #fff;
  `

  S.NextButton = styled.button`
    ${buttonStyles}
    background-color: #ffd400;
    color: #000;
  `

export default S;
