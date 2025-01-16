// MD - 결제페이지 스타일
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const inputHover = `
  &:hover {
    border-color: #ffd400;
  }
`

const S = {};

const flexStyle = css`
  display: flex;
  align-items: center;
`

  S.PaymentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
  `

  S.PaymentTitle = styled.div`
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

  S.PaymentProduct = styled.div`
    width: 1165px;
    margin: auto;
  `

  S.Head = styled.div`
    ${flexStyle}
    width: 1165px;
    height: 45px;
    background-color: rgba(255, 212, 0, 0.8);
    margin : 0 auto;
    /* justify-content: space-between; */
  `

  S.HeadItem = styled.div`
    flex: 1;
    text-align: center;
    color: #000;
    font-weight: bold;
  `

  S.Left = styled.div`
    display: flex;
    flex: 3;
    /* text-align: left; */
    /* padding-left: 50px; */
  `

  S.Center = styled.div`
    display: flex;
    flex: 3;
    text-align: center;
  `

  S.Right = styled.div`
    display: flex;
    flex: 1;
    text-align: center;
  `


  S.PaymentList = styled.div`
    ${flexStyle}
    flex-direction: column;
    margin: 0 auto;
    width: 1165px;
  `

  S.PaymentItem = styled.div`
    ${flexStyle}
    justify-content: center;
    border-bottom: 0.5px solid #fff;
    padding: 20px 0;
    width: 1165px;
    /* margin-top: 30px; */

    .icon {
      &:hover path {
        color: #ffd400;

      }
    }
  `

  S.ProductImage = styled.img`
    width: 300px;
    height: 250px;
    margin: 20px 0;
  `

  S.ErrorText = styled.div`
    color: #ffd400;
    font-size: 13px;
    margin-top: 6px;

  `;

  S.EmailWrapper = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: space-between; 
    width: 1165px;
  `

  S.InputName = styled.div`
    
    & input {
      width: 1055px;
      height: 35px;
      background-color: #000;
      border: 0.5px solid #fff;
      border-radius: 5px;
      padding-left: 10px;
      font-size: 15px;
      ${inputHover}
    }
  `

  S.InputEmail = styled.div`
    // ${flexStyle}
    // justify-content: space-between; 
    // width: 1165px;
      
    .email-input{
      width: 500px; 
      height: 35px; 
      background-color: #000;
      border: 0.5px solid #fff;
      border-radius: 5px; 
      padding-left: 10px;
      font-size: 15px;
      ${inputHover}
    }

    & span {
      font-size: 18px;
      margin: 0 10px;
      color: #fff; 
    }
  `

  // S.PhoneWrapper = styled.div`
  //   flex-direction: column;
  //   display: flex;
  //   justify-content: space-between; 
  //   width: 1165px;
  // `

  S.InputPhone = styled.div`
    ${flexStyle}
    justify-content: space-between; 
    width: 1165px;

    .phone-input {
      width: 333px; 
      height: 35px; 
      text-align: center; 
      background-color: #000;
      border: 0.5px solid #fff;
      border-radius: 5px; 
      ${inputHover}
    }

    & span {
      font-size: 18px;
      margin: 0 10px;
      color: #fff; 
    }
  `

  S.PhoneWrapper = styled.div`
  `

  S.InputAddress = styled.div`
  display: flex;
  flex-direction: column;

    & input {
      width: 1055px;
      height: 35px;
      background-color: #000;
      border: 0.5px solid #fff;
      border-radius: 5px;
      padding-left: 10px;
      font-size: 15px;
      margin-top: 10px;
      ${inputHover}
    }
  `


  S.Code = styled.div`
    display: flex;
    width: 200px;
    height: 35px;
    background-color: #000;
    border: 0.5px solid #fff;
    border-radius: 5px;

    .code {
      ${flexStyle}
      padding-left: 10px;
      font-size: 15px;
    }
  `
  S.Info = styled.div`
    color: #ffd400;
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 20px;
  `

  S.OrderInfoWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  `

  S.OrderInfo = styled.div`
    ${flexStyle}
    margin-top: 30px;

    & p {
      font-size: 20px;
      margin-right: 20px;
      width: 120px;
    }
  `

  S.Price = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding-right: 5px;
  `

  S.InfoWrapper= styled.div`
    width: 1165px;
    margin: auto;
    border-bottom: 0.5px solid #fff;
  `

  S.TotalAmount = styled.div`
    width: 1165px;
    margin: 20px auto;
    font-size: 20px;
  `

  S.Dropdown1 = styled.div`
   
  `
  S.Dropdown2 = styled.div`
    margin: 30px auto;
  `

  S.PayWrapper = styled.div`
    width: 1165px;
    margin: 0 auto;
    margin-bottom: 30px;
  `

  S.TotalAmount2 = styled.div`
    ${flexStyle}
    color: #000;
    font-weight: bold;
    font-size: 20px;
    background-color: rgba(255, 212, 0, 0.8);
    width: 1165px;
    height: 90px;
    border-radius: 5px;
    padding: 10px;
    margin: 30px auto;
    justify-content: space-between;

    .total-amount {
      color: #000;
      font-weight: bold;
      padding-right: 5px;
    }
  `

  S.TotalWrapper = styled.div`
    width: 1165px;
    margin: 0px auto;
    border-top: 0.5px solid #fff;
  `

  S.MethodWrapper = styled.div`
    width: 1165px;
    margin: 0 auto;
    border-top: 0.5px solid #fff;
  `

  S.Icon = styled(FontAwesomeIcon)`
    padding-right: 5px;
    padding-left: 5px;
    color: ${(props) => (props.selected ? '#ffd400' : '#fff')};

      &:hover {
    
        path{
          color: #ffd400;
        }
      }
  `
  S.Icon2 = styled(FontAwesomeIcon)`
    width: 30px;
    height: 30px;
    margin: 0 10px;
    color: ${(props) => (props.selected ? '#ffd400' : '#fff')};
    cursor: pointer;

      &:hover {
    
        path{
          color: #ffd400;
        }
      }
  `

  S.Image = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 10px;
  `

  S.BasicAddress = styled.div`
    ${flexStyle}
    width: 1165px;
    margin: auto;
    margin-bottom: 30px;

  & p {
    font-size: 15px;
  }

  `

  S.Icon = styled(FontAwesomeIcon)`
    padding-right: 5px;
    padding-left: 5px;
    color: ${(props) => (props.selected ? '#ffd400' : '#fff')};

      &:hover {

        path{
          color: #ffd400;
        }
      }
  `

  const buttonStyles = `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 55px;
    border-radius: 50px;
    border: none;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
    margin-top: 50px;
  `;

  S.PaymentButton = styled.div`
    ${flexStyle}
    justify-content: center;
    margin: 50px auto 100px;
    gap: 20px;
    width: 1165px;
    border-top: 0.5px solid #fff;
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

    & p {
      color: #000;
      font-weight: bold;
      font-size: 17px;
      padding-right: 5px;
    }
  `

  S.PostcodePopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

S.CloseButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background: #ff4d4f;
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
`;

  export default S;