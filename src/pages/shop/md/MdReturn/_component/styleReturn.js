import styled from "styled-components";

const S = {};

  S.ReturnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
  `

  S.ReturnTitle = styled.div`
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

  S.Info = styled.div`
    color: #ffd400;
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
  `

  S.ReturnProduct = styled.div`
    width: 1165px;
    margin: auto;

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

S.ReturnForm = styled.table`
width: 1165px;
border-collapse: collapse;
background-color: #000;
color: #fff;
font-size: 16px;
margin: 40px auto;

body {
  background-color: #000; 
  color: #fff;
  margin: 20px;

}

table {
  font-size: 18px;
  width: 100%;
  border-collapse: collapse;
  border-top: 2px solid #fff; 
  border-bottom : 2px solid #fff;
}

th, td {
  border-top: 2px solid #fff; 
  border-bottom: 2px solid #fff;
  padding: 10px;
  text-align: left;
  vertical-align: middle;
}

th {
  width: 20%;
  background-color: #000;
  color: #ffd400;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  border-right: 0.5px solid #fff;
}

td {
  width: 80%;
}

tr:nth-child(1) {
  height: 300px;
  border-left: none;
}

tr:nth-child(2) {
  height: 150px;
}

tr:nth-child(3) {
  height: 400px;
}

`

S.Dropdown = styled.div`
`

S.Input = styled.input`
  width: 890px;
  height: 150px;
  background-color: #000;
  border-radius: 5px;
  border-color: #fff;
  margin: 20px 20px;

`

S.Icon = styled.div`

`

const inputHover = `
  &:hover {
    border-color: #ffd400;
  }
`

S.InputName = styled.div`
    /* width: 1165px; */
    

  & input {
    width: 800px;
    height: 35px;
    background-color: #000;
    border: 0.5px solid #fff;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 15px;
    ${inputHover}
  }
  `

S.InputPhone = styled.div`
display: flex;
align-items: center;
justify-content: space-between; 
width: 800px;

.phone-input {
  width: 250px; 
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
    width: 800px;
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
S.OrderInfo = styled.div`
display: flex;
align-items: center;
margin: 30px 0;

& p {
  font-size: 20px;
  margin : 0 10px;
  width: 100px;
}
`
S.Estimated = styled.div`
  width: 1165px;
  margin: 0 auto 50px;
  border-bottom: 0.5px solid #fff;

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

export default S;