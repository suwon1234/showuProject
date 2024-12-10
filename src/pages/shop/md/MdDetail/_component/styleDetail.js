import styled, { css } from 'styled-components'

const S = {};

const flexStyle = css`
  display: flex;
  align-items: center;
`

  S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  `
  S.DetailContainer = styled.div`
    ${flexStyle}
    justify-content: flex-end;
    margin-top: 150px;
    gap: 130px;
    margin-left: auto; 
    margin-right: auto; 
  `

  S.DetailWrapper = styled.div`
    background-color: #000;
  `

  S.MdTitle = styled.div`
    display: flex;
    flex-direction: column; 
    border-bottom: 0.5px solid white;
    margin-top: -200px;
    width: 505px;
    
    & p:first-child {
      padding-bottom: 30px; 
      font-size: 15px;
      font-weight: bold;
      color: #ffd400;
    }
      
    & p:nth-child(2) {
      padding-bottom: 40px; 
      font-size: 18px;
    }
      
    & p:last-child {
      padding-bottom: 30px; 
      font-size: 20px;
      font-weight: bold;
    }
  `
  
  S.ButtonWrapper = styled.div`
    display: flex;
    width: 505px;
    height: 55px;
    gap: 5px;
  `

  S.ButtonWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 200px;
    gap: 5px;
    
    .button-wrapper1 {
      display: flex;
      gap: 5px;
    }
    
    .button {
      border-radius: 50px; 
      width: 250px;
      height: 55px;
      font-size: 20px;
      border-radius: 50px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #ffd400;
        color: #000
      }
    }
    
    .cart {
      background-color: #797979;
    }
    
    .buy {
      background-color: #444444;
    }

    .inquiry {
      background-color: #797979;
      width: 505px;
      margin-top: 15px;
    }
  `

  S.Dropdown = styled.div`
    ${flexStyle}
    width: 505px;
    margin-bottom: 30px;
    font-size: 18px;
    padding-top: 30px;

    & p {
      margin-right: 10px;
      margin-top: 10px;
    }
  `

  S.ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    margin : 0 0 200px 200px;

    & img {
      width: 500px;
      height: 400px;
    }
  `

  S.Max = styled.div`
    display: flex;
    border : 0.5px solid #ffd400;
    width : 505px;
    padding: 10px;
    margin: 10px 0 30px;

    & p {
      font-size: 14px;
      color : #ffd400;
      margin-left: 10px;
    }

    path {
      color : #ffd400;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  `

  S.MdInfo = styled.div`
    width: 1140px;
    border-top: 0.5px solid white;
    margin: -120px auto 0;

    & .description, & .notice, & .return {
      margin-top: 50px;
      font-size: 19px;
      font-weight: bold;
      color: #ffd400;
      margin-bottom: 20px;
    }
  `
    
  S.ImageWrapper2 = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  

    & img {
      width: 500px;
      height: 800px;
    }
  `

  S.ButtonWrapper3 = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 100px;
    
    & button {
      width: 280px;
      height: 55px;
      border: none;
      border-radius: 50px;
      background-color: #fff;
      color: #000;
      font-size: 20px;
      font-weight: bold;
      padding-right: 30px;
      position: relative;
      
      &:hover {
        background-color: #ffd400;
      }
    }

    & .icon2 {
      position: absolute;
      bottom: 20px;
      right: 70px;
    }

    path {
      color : #000;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  `

  S.Notice = styled.table`
    width: 1070px;
    border-collapse: collapse;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    margin-bottom: 70px;
    
    & th, & td {
      border: 0.5px solid #fff;
      padding: 10px;
      text-align: left;
    }
    
    & th {
      background-color: #fff;
      color: #000;
      width: 180px;
      border: 0.5px solid #000;
    }
  `

  S.Return = styled.div`

    & .return2 {
      font-size: 19px;
      font-weight: bold;
      margin-top: 40px;
    }

    & .content {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  `

  S.Content = styled.div`
  
    & p {
      margin-top: 20px;
    }
  `

export default S;
