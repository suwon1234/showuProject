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
      width: 320px; 
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

  S.OrderInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;

    & p {
      font-size: 20px;
      margin-right: 20px;
      width: 100px;
    }
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
  cursor: pointer;

    &:hover {
  
      path{
        color: #ffd400;
      }
    }
`

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
export default S;