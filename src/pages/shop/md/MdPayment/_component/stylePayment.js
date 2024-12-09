import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const inputHover = `
  &:hover {
    border-color: #ffd400;
  }
`

const S = {};

  S.PaymentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    /* min-height: 100vh; */
  `

  S.PaymentTitle = styled.div`
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

  S.PaymentProduct = styled.div`
    width: 1165px;
    margin: auto;

  `

  S.Head = styled.div`
    width: 1165px;
    height: 45px;
    background-color: rgba(255, 212, 0, 0.8);
    margin : 40px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `

  S.HeadItem = styled.div`
    flex: 1;
    text-align: center;
    color: #000;
    font-weight: bold;
  `

  S.Left = styled.div`
    display: flex;
    flex: 6;
    /* text-align: left; */
    /* padding-right: 20px; */
    `

  S.Center = styled.div`
    display: flex;
    flex: 2;
    text-align: center;
    `

  S.Right = styled.div`
    display: flex;
    flex: 1;
    text-align: right;
  `


  S.PaymentList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 1165px;
    `

  S.PaymentItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.5px solid #fff;
    padding: 20px 0;
    /* width: 100%; */
    width: 1165px;
    margin-top: 30px;
    
    `

  S.ProductImage = styled.div`
    width: 300px;
    height: 250px;
    /* margin-right: 50px; */
    /* margin-bottom: 30px; */
    `

  S.InputName = styled.div`
    /* width: 1165px; */
    

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
      display: flex;
      align-items: center;
      justify-content: space-between; 
      width: 1165px;
      

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

  S.InputPhone = styled.div`
    display: flex;
    align-items: center;
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
  `;

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
      display: flex;
      align-items: center;
      padding-left: 10px;
      font-size: 15px;
  }
  
  `
  S.Info = styled.div`
    color: #ffd400;
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
  `

  S.OrderInfoWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  `

  S.OrderInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;

    & p {
      font-size: 20px;
      margin-right: 20px;
      width: 120px;
    }
  `

  S.Price = styled.div`
    /* display: flex; */
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
    /* margin: 30px auto; */
  `
  S.Dropdown2 = styled.div`
    margin: 30px auto;
  `


  S.PayWrapper = styled.div`
    width: 1165px;
    margin: 0 auto;
    /* border-top: 0.5px solid #fff; */
    /* border-bottom: 0.5px solid #fff; */
    margin-bottom: 30px;
  `

  S.TotalAmount2 = styled.div`
    display: flex;
    align-items: center;
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
  `;

  S.BasicAddress = styled.div`
    display: flex;
    align-items: center;
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
display: flex;
justify-content: center;
align-items: center; 
margin: 50px auto 100px;
gap: 20px;
width: 1165px;
border-top: 0.5px solid #fff;
`


S.BackButton = styled.button`
${buttonStyles}
background-color: #797979;
color: #fff;
`;

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
`;

export default S;