// styleMain.js
import styled from "styled-components";

const S = {};

  S.MainWrapper = styled.div`
    background-color: #000;
  `

  S.MdTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & .md-title {
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

  S.BestTitle = styled.div`

    & .best-title {
        font-size: 30px;
        font-weight: bold;
        color : #fff;
        margin-left: 350px; 
      }
  `

  S.BestWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top : 30px;
  `

  S.LeftIconWrapper = styled.div`
    font-size: 40px;
    cursor: pointer;

    & .left-icon {
      margin-left: 250px;
    }
  `

  S.RightIconWrapper = styled.div`
    font-size: 40px;
    cursor: pointer;

    & .right-icon {
      margin-right: 250px;
    }
  `

  S.BestListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  `

  S.Best = styled.div`

    & .best-name {
        font-size: 16px
    }

    & .best-price {
        font-size: 18px;
        font-weight: bold;
    }

    & .image {
      width: 300px;
      height: 300px;
    }
  `

  S.CategoryButton = styled.div` // 상단 버튼들
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    width: 100%;
    max-width: 1050px;
    margin: 50px auto 0;
    
    div { // 버튼 간격
      display: flex;
      gap: 8px; 
    }

    button { // 버튼 스타일
      border-radius: 30px;
      padding: 10px 15px;
      background-color: black;
      color: ${({ theme }) => theme.PALLETE.white};
      border: 1px solid #ffd400;
      cursor: pointer;
    
      &:hover { // 버튼 호버
        background-color: #ffd400;
        color: ${({ theme }) => theme.PALLETE.black};
      }
    }
  `

  S.MdWrapper = styled.div`
    margin-top: 30px;

    & .md-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 40px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }
    `

  S.Md = styled.image`
  
    & img {
        width: 300px;
        height: 300px;
      }

    & .md-name {
        font-size: 16px
    }

    & .md-price {
        font-size: 18px;
        font-weight: bold;
    }
  `

  S.ButtonWrapper = styled.div `
    display: flex;  
    align-items: center;
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
  
export default S;

