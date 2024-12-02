import styled from "styled-components";

const S = {};

  S.ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    align-items: center;
  `

  S.ListTitle = styled.div`
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

  S.InquiryList = styled.div`
    width: 1165px;
    height: 45px;
    display: flex;
    align-items: center; 
    justify-content: space-between;
    border-bottom: 1px solid #fff;
    padding: 0 30px;
    background-color: #000;
    color: #fff;
  `

  S.Head = styled.div`
    width: 1165px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 20px;
    margin-top: 40px;
    
    & p {
      color: #000;
      font-weight: bold;
    }

  `

  S.Span = styled.div`
    

  `

export default S;