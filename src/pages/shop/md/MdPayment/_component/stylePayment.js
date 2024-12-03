import styled from 'styled-components'

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
  `

  S.Info = styled.div`
      color: #ffd400;
      font-size: 20px;
      font-weight: bold;
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

export default S;