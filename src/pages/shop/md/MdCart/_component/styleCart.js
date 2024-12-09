// styleCart.js
import styled from "styled-components";

const S = {};

  S.CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    /* height: 100vh; */
    /* width: 100%; */
  `

  S.CartTitle = styled.div`
    display: flex;
    align-items: center;
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
    display: flex;
    align-items: center;
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
    display: flex;
    align-items: center;
    margin: 10px 0;
    width: 1165px;
    margin: 30px auto 10px;
  `

  S.CheckIcon1 = styled.div`
    color: ${(props) => (props.checked ? '#ffd400' : '#fff')}; 
    margin-right: 10px;
    font-size: 20px;
    cursor: pointer;

      &:hover {
        path {
          color: #ffd400;
        }
      }
  `

  S.BarWrapper = styled.div`
    display: flex; 
    justify-content: flex-end; 
    align-items: center; 
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 1165px;
  `

  S.ProductItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.5px solid #fff;
    padding: 20px 0;
    /* width: 100%; */
    width: 1165px;
    margin-top: 30px;
  `

  S.CheckIcon2 = styled.div`
    color: ${(props) => (props.checked ? '#ffd400' : '#fff')}; 
    margin-right: 50px;
    font-size: 20px;
    cursor: pointer;

      &:hover {
        path {
          color: #ffd400;
        }
      }
  `

  S.ProductImage = styled.img`
    width: 300px;
    height: 250px;
    margin-right: 50px;
    margin-bottom: 30px;
  `

  S.ProductInfo = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    width: 1165px;
    /* margin: 20px 0; */

    .icon3 {
      font-size: 20px;
    }
  `

  S.ProductName = styled.div`
    font-size: 18px; 
    color: #fff;
  `

  S.ProductPrice = styled.div`
    font-size: 20px; 
    color: #fff; 
    margin-right: 30px;
  `

  S.QuantityControl = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    
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
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  `
      

    

export default S;