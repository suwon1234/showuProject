import styled from "styled-components";

const S = {};

  S.ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    align-items: center;
    width: 100%;
    min-height: 100vh;
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
    padding: 0 20px;
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
    /* text-align: left; */
    /* padding-right: 20px; */
  `
  S.Left2 = styled.div`
    display: flex;
    flex: 1;
    /* text-align: left; */
    /* padding-right: 20px; */
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
    display: flex;
    align-items: center;
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
export default S;