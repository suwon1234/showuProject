// MD - 상세페이지 스타일
import styled, { css } from 'styled-components'

const S = {};

const flexStyle = css`
  display: flex;
  align-items: center;
`

  S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* height: 100vh; */

  `

  S.DetailContainer = styled.div`
    ${flexStyle}
    justify-content: center; 
    gap: 100px;
    width: 1140px;
    margin: 100px auto; 
  `

  S.ImageWrapper = styled.div`
    width: 500px; 
    height: 400px; 
    display: flex;
    justify-content: flex-start; 
    align-items: center;

    & img {
      width: 100%; 
      height: 100%; 
      object-fit: cover; // 비율 유지
    }
  `;

  S.DetailWrapper = styled.div`
    flex: 1; 
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    /* align-items: flex-end;  */
    max-width: 500px;
  `

  S.ImageWrapper = styled.div`
    width: 500px; 
    height: 400px; 
    display: flex;
    justify-content: flex-start; 
    align-items: center;

    & img {
      width: 100%; 
      height: 100%; 
      object-fit: cover; // 비율 유지
    }
  `

  S.MdTitle = styled.div`
    display: flex;
    flex-direction: column; 
    border-bottom: 0.5px solid white;
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
    gap: 5px;
    
    .button-wrapper1 {
      display: flex;
      gap: 10px;
    }
    
    .button {
      border-radius: 50px; 
      width: 250px;
      height: 55px;
      font-size: 20px;
      border-radius: 50px;
      border: none;
      cursor: pointer;
      font-weight: bold;
    }
    
    .cart {
      background-color: #797979;

      &:hover {
        background-color: #ffd400;

        p {
          color: #000;
        }
      }
    }

    .inquiry {
      background-color: #000;
      border: 1.5px solid #ffd400;
      /* width: 505px; */
      margin-top: 15px;
    }
  `

  S.BuyButton = styled.button`
    border-radius: 50px;
    width: 250px;
    height: 55px;
    font-size: 20px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    background-color: ${(props) => (props.isOptionSelected ? '#ffd400' : '#444444')};
    /* color: ${(props) => (props.isOptionSelected ? '#000' : '#fff')}; */

    &:hover {
      background-color: #ffd400;

      p {
        color: #000;
      }
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

  S.SelectedOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    & p {
      font-size: 18px;
      flex: 1; 
      text-align: left;
    }
/* 
    .icon {
      margin-left: 10px;
      cursor: pointer; 
    } */
  `

  S.IconWrapper = styled.div`
    display: flex;
    justify-content: flex-end; /* 오른쪽 정렬 */
    flex: 0.2;
    cursor: pointer;

    .icon {
      font-size: 20px;

      &:hover path {
        color: #ffd400;
      }
    }
  `

  S.QuantityControl = styled.div`
    ${flexStyle}
    justify-content: center;

    & span {
      margin: 0 15px;
    }
  `

  S.QuantityButton = styled.button`
    background-color: #000;
    border: 0.5px solid white;
    padding: 5px 10px;
    cursor: pointer;
  `

  S.OptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `

  S.Max = styled.div`
    display: flex;
    border : 0.5px solid #ffd400;
    width : 505px;
    padding: 10px;
    margin: 10px 0 30px;
    border-radius: 2px;

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
    margin: auto;

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
