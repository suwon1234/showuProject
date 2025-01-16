// 경매 - 상세페이지 스타일
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

const S = {};

const flexStyle = css`
  display: flex;
  align-items: center;
`

  S.DetailWrapper = styled.div`
    background-color: #000;
    display: flex;
    flex-direction: column;
  `

  S.Title = styled.div`
    width: 1140px;
    border-bottom: 1px solid #fff;
    margin: 100px auto;

    & h1 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  `

  S.AuctionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;
    width: 1140px;
    margin: auto;

    align-items: flex-start;
  `

  S.Image = styled.img`
    width: 400px;
    height: 650px;
    flex: 1;
  `

  S.InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 50px 20px;

`
  S.InfoWrapper = styled.div`
    display: flex;
    margin: 20px;
    `


  S.Auction = styled.div`
      flex: 1;
      width: 500px;
      height: 700px;
      background-color: #ffd400;
      border-radius: 8px;
      display: flex;
      height: 650px;
    flex-direction: column;
    /* justify-content: space-between; */

  `

  S.Label = styled.div`
    font-size: 17px;
    font-weight: bold;
    color: #000;
    width: 100px;
    margin-right: 50px;
  `

  S.AuctionInfo = styled.div`
    color: #000;
    /* margin: 50px 30px; */
  `

  S.ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;


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
    
    .bid, .delivery {
      background-color: #ffd400;
      border: 1.5px solid #000;

      p {
        color: #000;
      }

      // &:hover {
      //   background-color: #797979;

      //   p {
      //     color: #000;
      //   }
      // }
    }

      
  `

  S.HeartIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .heart-icon {
      font-size: 20px;
      margin-right: 10px;


      path {
        color: ${(props) => (props.clicked ? 'red' : 'white')}; 
      }
    }
      
  `

  S.Info = styled.div`
    width: 1140px;
    margin: 100px auto 0;

    & p {
      color: #ffd400;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    & th, & td {
      border: 0.5px solid #fff;
      padding: 10px;
      text-align: left;
      text-align: center;
    }
    
    & th {
      background-color: #fff;
      color: #000;
      width: 180px;
      border: 0.5px solid #000;
    }

    & td {
      width: 960px;
    }
  `

  S.Content = styled.div`
    width: 1140px;
    margin: 50px auto;
  
    & p {

    }
  `

  S.ImageWrapper = styled.div`
    margin: 100px auto;
  `

  S.Image2 = styled.img`
    width: 400px;
    height: 500px;
  `

  S.Customized = styled.div`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  
    & p {
      font-size: 20px;
      font-weight: bold;
      color: #ffd400;
      margin-bottom: 20px;
    }

    .icon {
      font-size: 20px;
      align-items: center;

      path {
        color: #ffd400;
      }
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
    margin-top: 10px;
  `

  S.Closing = styled.div`

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
  S.InquiryList = styled.div`
    ${flexStyle}
    width: 1140px;
    height: 45px;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
    padding: 0 20px;
    background-color: #000;
    color: #fff;
  `

  S.Head = styled.div`
    ${flexStyle}
    width: 1140px;
    height: 45px;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 20px;
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
  S.Inquiry = styled.div`
    margin: auto;
  `

  S.ButtonWrapper = styled.div`
    width: 1140px;
    display: flex;
    justify-content: flex-end;
    margin: 20px auto;
  `

  S.InquiryButton = styled.div`
    width: 120px;
    height: 55px;
    background-color: #ffd400;
    border-radius: 50px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    & p {
      font-size: 17px;
      font-weight: bold;
      color: #000;
      margin-right: 5px;
    }

    .icon {
      font-size: 18px;

      path {
        color: #000;
      }
    }
  
  `

  S.Caution = styled.div`
    margin: 0 auto;
    width: 1140px;

    .caution {
      font-size: 19px;
      font-weight: bold;
    }

    & p {
      font-size: 19px;
      margin: 20px 0;
    }
  `

  S.SellerWrapper = styled.div`
    width: 1140px;
    margin: 80px auto;

    & p {
      font-size: 16px;
      margin: 20px 0;
    }

    .service {
      border-top: 1px dashed #fff;
      padding-top: 20px;
    }
  
  `
  S.Seller = styled.div`
    width: 1110px;
    height: 55px;
    background-color: #000;
    border: 1px solid #ffd400;
    border-radius: 5px;
    display: flex;
    align-items: center;

  & p {
    font-size: 19px;
    font-weight: bold;
    color: #ffd400;
    margin-left: 10px;
  }
  `

  S.Box = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 5px;
    background-color: #ffd400;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      font-size: 30px;

      path {
        color: #000;
      }
    }
  `
export default S;