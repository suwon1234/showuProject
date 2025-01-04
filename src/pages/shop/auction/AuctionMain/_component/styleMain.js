// 경매 - 메인페이지 스타일
import styled, { css } from "styled-components";

const S = {};

const flexStyle = css`
  display: flex;
  align-items: center;
`

  S.MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    align-items: center;
  `

  S.MdTitle = styled.div`
    ${flexStyle}
    flex-direction: column;
    
    & .auction-title {
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

  S.ClosingWrapper = styled.div`
    margin: 0 auto;
  `
  S.ClosingTitle = styled.div`

    & .closing-title {
        font-size: 30px;
        font-weight: bold;
        color : #fff;
      }
  `

  S.ClosingItems = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto; 
    align-items: center;
    margin-top: 30px;
    column-gap: 20px; 
  `

  S.LeftIconWrapper = styled.div`
    font-size: 40px;
    cursor: pointer;
    justify-self: end;
    margin-right: 10px;
  `

  S.RightIconWrapper = styled.div`
    font-size: 40px;
    cursor: pointer;
    justify-self: start;
    margin-left: 10px;
  `

  S.ClosingListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-gap: 50px;
    justify-items: center;
    width: 1090px; 
  `

  S.Closing = styled.div`
    margin: 0 auto;

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
      border-radius: 5px;
    }

    .image-wrapper {
      position: relative; 
    }
  `

  S.HeartIconWrapper = styled.div`
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;

    path {
      color: ${({ isHearted }) => (isHearted ? "red" : "#fff")};
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

  // S.CategoryButton = styled.div` // 상단 버튼들
  //   display: flex;
  //   justify-content: space-between;
  //   padding: 10px 20px;
  //   width: 1140px;
  //   margin: 50px auto 0;
    
  //   div { // 버튼 간격
  //     display: flex;
  //     gap: 8px; 
  //     margin-left: 20px;
  //   }

  //   button { // 버튼 스타일
  //     border-radius: 30px;
  //     padding: 10px 15px;
  //     background-color: black;
  //     color: ${({ theme }) => theme.PALLETE.white};
  //     border: 1.5px solid #ffd400;
  //     cursor: pointer;
    
  //     &:hover { // 버튼 호버
  //       background-color: #ffd400;
  //       color: ${({ theme }) => theme.PALLETE.black};
  //     }
  //   }
  // `

  S.CategoryButtonWrapper = styled.div`
    display: flex;
    gap: 10px;  // 버튼 간격 추가
    width: 1100px;
    margin: 60px auto 0;
    padding: 10px 20px;
`

  S.CategoryButton = styled.button`
    border-radius: 30px;
    padding: 10px 15px;
    background-color: ${({ isActive }) => (isActive ? "#ffd400" : "black")};  // isActive일 때 배경색 변경
    color: ${({ isActive, theme }) => (isActive ? theme.PALLETE.black : theme.PALLETE.white)};
    border: 1.5px solid #ffd400;
    cursor: pointer;

      &:hover {
        background-color: #ffd400;
        color: ${({ theme }) => theme.PALLETE.black};
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

    S.Auction = styled.div`
    margin: 0 auto;

      & img {
        width: 300px;
        height: 300px;
        border-radius: 5px;
      }

      & .auction-category {
          font-size: 15px;
          color: #ffd400;
          margin-top: 5px;
      }

      & .auction-name {
          font-size: 16px;
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
  

export default S;