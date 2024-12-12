// MD - 반품정보 페이지 스타일일
import styled, { css } from "styled-components";

const S = {};

const flexStyle = css`
  display: flex;
  align-items: center;
`

  S.RefundInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
  `

  S.RefundInfo = styled.div`
    ${flexStyle}
    flex-direction: column;
    margin-top: 70px;

    .icon {
      width: 100px;
      height: 100px;

      path {
        color: #ffd400;
      }
    }

    & p {
      font-size: 25px;
      font-weight: bold;
      color: #ffd400;
      margin-top: 40px;
    }
  `

  S.InfoWrapper = styled.div`
    ${flexStyle}
    margin-top: 50px;
  `

  S.Info = styled.div`
    color: #ffd400;
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
  `

  S.OrderNumber = styled.div`
    font-size: 16px;
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
    margin : 20px auto;
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
  `

  S.ProductImage = styled.img`
    width: 300px;
    height: 250px;
    margin: 30px;
  `

  S.Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  padding: 20px;
  width: 1165px;
`

  S.CustomerWrapper = styled.div`
    /* flex: 2; */
    margin-left: 50px;
  `

  S.CustomerInfo = styled.div`
    border-bottom: 0.5px solid #fff;
    padding-bottom: 20px;
    font-size: 25px;
    font-weight: bold;
    width: 400px;
  `

  S.PaymentWrapper = styled.div`
    /* flex: 1; */
    margin-right: 50px;
  `

  S.PaymentInfo = styled.div`
    border-bottom: 0.5px solid #fff;
    padding-bottom: 20px;
    font-size: 25px;
    font-weight: bold;
    width: 400px;
  ` 

  S.Info2 = styled.div`
    font-size: 18px;
    margin-top: 30px;
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
  `

export default S;