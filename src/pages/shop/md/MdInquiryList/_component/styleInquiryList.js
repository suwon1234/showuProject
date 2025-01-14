// MD - 문의내역 페이지 스타일
import styled, { css } from "styled-components";

const S = {};

const flexStyle = css`
  display: flex;
  align-items: center;
`

  S.ListWrapper = styled.div`
    ${flexStyle}
    flex-direction: column;
    background-color: #000;
    min-height: 100vh;
  `

  S.ListTitle = styled.div`
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

  S.InquiryList = styled.div`
    ${flexStyle}
    width: 1165px;
    height: 45px;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
    padding: 0 20px;
    background-color: #000;
    color: #fff;
  `

  S.Head = styled.div`
    ${flexStyle}
    width: 1165px;
    height: 45px;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 20px;
    margin-top: 40px;
  `

  S.ListItem = styled.div`
    flex: 1;
    text-align: center;
  `

  S.HeadItem = styled.div`
    flex: 1;
    text-align: center;
    color: #000;
    font-weight: bold;
  `

  S.Left1 = styled.div`
    display: flex;
    flex: 1;
  `
  S.Left2 = styled.div`
    display: flex;
    flex: 1;
  `

  S.Center = styled.div`
    display: flex;
    flex: 4;
    text-align: center;
  `

  S.Right1 = styled.div`
    display: flex;
    flex: 2;
    text-align: right;
  `
  S.Right2 = styled.div`
    display: flex;
    flex: 2;
    text-align: right;
  `

  S.PrivateWrapper = styled.div`
    ${flexStyle}
    justify-content: center;
    padding-left: 50px;
    

    .icon {
      font-size: 18px;
      padding-right: 5px;

      path {
        color: #ffd400;
      }
    }
  `

  S.Private = styled.div`
    margin-left: 0;
    width: 150px;
  `

  S.Blank = styled.div`
    width: 168px;
  `
  const buttonStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 55px;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  `;

  S.BackButton = styled.button`
    ${buttonStyles}
    background-color: #797979;
    color: #fff;
    margin-top: 50px;
  `
export default S;