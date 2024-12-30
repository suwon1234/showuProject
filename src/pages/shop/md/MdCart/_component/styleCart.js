// MD - 장바구니 페이지 스타일
import styled, { css } from "styled-components";

const S = {};

const flexStyle = css`
  display: flex;
  align-items: center;
`

  S.CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
  `

  S.CartTitle = styled.div`
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

  S.Delete = styled.div`
    ${flexStyle}
    width: 1165px;
    margin: 5px auto;
    justify-content: flex-end;
    
    .icon1 {
      font-size: 16px;
      
      path {
        color: #ffd400;
      }
    }
    
    & p {
      margin-left: 5px;
      font-size: 14px;
      color: #ffd400;
    }
  `

  S.SelectAll = styled.div`
    ${flexStyle}
    margin: 10px 0;
    width: 1165px;
    margin: 30px auto 10px;
  `

  S.CheckIcon1 = styled.div`
   
    margin-right: 10px;
    font-size: 20px;
    cursor: pointer;

    path {
    color: ${({ checked }) => (checked ? '#ffd400' : '#fff')};
  }
  
  `

  S.BarWrapper = styled.div`
    ${flexStyle}
    justify-content: flex-end;  
    width: 1165px;
    height: 45px;
    background-color: rgba(255, 212, 0, 0.8);
    margin: 10px auto;
  `

  S.BarName = styled.div`
    width: 280px;
    color: #000;
    font-weight: bold;
  `

  S.BarQuantity = styled.div`
    width: 170px;
    color: #000;
    font-weight: bold;
  `

  S.BarPrice = styled.div`
    width: 180px;
    color: #000;
    font-weight: bold;
  `

  S.ProductList = styled.div`
    ${flexStyle}
    flex-direction: column;
    margin: 0 auto;
    width: 1165px;
  `

  S.ProductItem = styled.div`
    ${flexStyle}
    justify-content: center;
    border-bottom: 0.5px solid #fff;
    padding: 20px 0;
    width: 1165px;
    margin-top: 30px;
  `

  S.CheckIcon2 = styled.div`
    margin-right: 50px;
    font-size: 20px;
    cursor: pointer;
    /* transition: color 0.3s ease, transform 0.3s ease; */

    path {
      color: ${({ checked }) => (checked ? '#ffd400' : '#fff')};
    }

      &:hover path {
        color: #ffd400;
      }
  `

  S.ProductImage = styled.img`
    width: 300px;
    height: 250px;
    margin-right: 50px;
    margin-bottom: 30px;
  `

  S.ProductInfo = styled.div`
    ${flexStyle}
    justify-content: space-between; 
    width: 1165px;

    .icon3 {
      font-size: 20px;
      
      &:hover path {
        color: #ffd400;
      }
    }
  `

  S.ProductName = styled.div`
    font-size: 18px; 
    color: #fff;
    margin-left: 30px;
  `

  S.ProductPrice = styled.div`
    font-size: 20px; 
    color: #fff; 
  `

  S.QuantityControl = styled.div`
    ${flexStyle}
    margin-left: 20px;
    
    & span {
      margin: 0 10px;
    }
  `
  

  S.QuantityButton = styled.button`
    background-color: #000;
    border: 0.5px solid white;
    padding: 5px 10px;
    cursor: pointer;
  `

  S.Total = styled.div`
    ${flexStyle}
    justify-content: space-between;
    width: 1165px;
    margin: 20px auto;
    padding: 20px 0 100px;
    overflow: auto;
  `

  S.TotalAmount = styled.div`
    font-size: 20px;
  `
  S.Pay = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-left: auto;
    margin-right: 20px;
  `

  S.CheckoutButton = styled.button`
    background-color: #444444;
    width: 150px;
    height: 55px;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    border-radius: 50px;
    border: none;
    cursor: pointer;

    background-color: ${props => props.isAnyChecked ? '#ffd400' : '#444444'};
    color: ${props => props.isAnyChecked ? '#000' : '#fff'};
  `

export default S;