import styled from "styled-components";

const S = {};

  S.ShopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    min-height: 100vh;
  `

  S.ShopTitle = styled.div`
   display: flex;
   align-items: center;
    flex-direction: column;
    
  & .shop-title {
      font-weight: bold;
      font-size: 30px;
      text-align: center;
      margin-top : 50px;
      color: #ffd400; 
    }
    
  & .icon1 {
      margin-top: 5px;
      color: #ffd400;
      font-size: 20px;
    }

    path {
      color: #ffd400;
    }
  `
  S.Title = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    margin-top: 10px;
  `

  const buttonStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 40px;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  background-color: #000;
  border: 1px solid #ffd400;
  color: #ffd400;
  `;

  S.ShopButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1165px;
    margin: 30px auto;
    gap: 10px;
  `

  S.MdButton = styled.button`
    ${buttonStyles}
      &:hover{
        background-color: #ffd400;
        color: #000;
    }

  `

  S.AuctionButton = styled.button`
    ${buttonStyles}
      &:hover{
        background-color: #ffd400;
        color: #000;
      } 
  `

  S.MdWrapper = styled.div`
    margin-top: 30px;
    margin-left: 20px;

    & .md-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 50px;
      width: 1090px;
      margin: 0 auto;
    }
  `

  S.Md = styled.div`

    & img {
        width: 300px;
        height: 300px;
      }

    & .md-category {
        font-size: 15px;
        color: #ffd400;
        margin-top: 5px;
    }

    & .md-name {
        font-size: 16px;
        margin-top: 5px;
    }

    & .md-price {
        font-size: 18px;
        font-weight: bold;
        margin-top: 5px;
    }
  `

  S.ButtonWrapper = styled.div `
    display: flex;
    justify-content: center;
    margin: 100px auto;

    & button {
      width: 280px;
      height: 55px;
      border: none;
      border-radius: 50px;
      background-color: #fff;
      color: #000;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin: 0;
      position: relative;

      &:hover {
        background-color: #ffd400;
      }
    }

    & .icon2 {
      position: absolute;
      bottom: 20px;
      right: 40px;
    }

    path {
      color : #000;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  `

  S.AuctionWrapper = styled.div`
    margin-top: 30px;
    margin-left: 20px;
    
    & .auction-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 50px;
      width: 1090px;
      margin: 0 auto;
    }
  `

  S.ButtonWrapper = styled.div `
    display: flex;
    justify-content: center;
    margin: 50px auto;

  & button {
    width: 280px;
    height: 55px;
    border: none;
    border-radius: 50px;
    background-color: #fff;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 0;
    position: relative;

    &:hover {
      background-color: #ffd400;
    }
  }

    & .icon2 {
      position: absolute;
      bottom: 20px;
      right: 40px;
    }

    path {
      color : #000;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  `
  S.Closing = styled.div`

    & .closing-category {
        font-size: 15px;
        color: #ffd400;
        margin-top: 5px;
    }

    & .closing-name {
        font-size: 16px;
        margin-top: 5px;
    }

    & .image {
      width: 300px;
      height: 300px;
    }
  `

  S.Closing2 = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;

    & .closing-number {
        font-size: 16px;
    }

    & .closing-time {
        font-size: 16px;
    }

    .icon {
      font-size: 15px;
      color: #ffd400;
      padding: 0 5px;
    }
  `

export default S;