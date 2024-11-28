import styled from 'styled-components'

const S = {};

  S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  `
  S.DetailContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 150px;
    gap: 130px;
    margin-left: auto; 
    margin-right: auto; 
  `

  S.DetailWrapper = styled.div`
    background-color: #000;
  `

  S.MdTitle = styled.div`
    display: flex;
    flex-direction: column; 
    border-bottom: 0.5px solid white;
    margin-top: -200px;
    /* margin-bottom : 100px; */
    width: 505px;
    /* padding-bottom: 10px;  */
    
    /* & p {
      margin: 0 !important;
    } */
    
    & p:first-child {
        padding-bottom: 30px; 
        font-size: 15px;
        font-weight: bold;
        color: #ffd400;
    }
      
    & p:nth-child(2) {
        padding-bottom: 40px; 
        font-size: 18px;
    }
      
    & p:last-child {
        padding-bottom: 30px; 
        font-size: 20px;
        font-weight: bold;
      }
  `
  
  S.ButtonWrapper = styled.div`
    display: flex;
    width: 505px;
    height: 55px;
    gap: 5px;
    /* display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 5px; */
  `

  // S.Button1 = styled.button`
  //   background-color: #797979;
  //   border-radius: 50px;
  //   height: 55px;
  //   width: 250px;
  //   cursor: pointer;

  //   & p {
  //     font-size: 20px;
  //   }

  //   &:hover {
  //     background-color: #ffd400;
  //   }
  // `

  // S.Button2 = styled.button`
  //   background-color: #444444;
  //   border-radius: 50px;
  //   height: 55px;
  //   width: 250px;
  //   cursor: pointer;

  //   & p {
  //     font-size: 20px;
  //   }

  //   &:hover {
  //     background-color: #ffd400;
  //   }
  // `

  // S.Button3 = styled.button`
  //   background-color: #797979;
  //   border-radius: 50px;
  //   height: 55px;
  //   width: 505px;
  //   margin-top: 15px;
  //   cursor: pointer;

  //   & p {
  //     font-size: 20px;
  //   }

  //   &:hover {
  //     background-color: #ffd400;
  //   }
  // `

  S.ButtonWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 200px;
    gap: 5px;
    
    .button-wrapper1 {
      display: flex;
      width: 505px; 
      height: 55px;
      gap: 5px;
    }
    
    .button {
      border-radius: 50px; 
      height: 55px;
      cursor: pointer;
      
      &:hover {
        background-color: #ffd400;
      }
    }
    
    .cart {
      background-color: #797979;
      width: 250px;
      border-radius: 50px;
      font-size: 20px;
      border: none;
    }
    
    .buy {
      background-color: #444444;
      width: 250px;
      border-radius: 50px;
      font-size: 20px;
      border: none;
    }

    .inquiry {
      background-color: #797979;
      width: 505px;
      height: 55px;
      margin-top: 15px;
      border-radius: 50px;
      font-size: 20px;
      border: none;
    }
  `

  S.Dropdown = styled.div`
    display: flex;
    align-items: center;
    width: 505px;
    margin-bottom: 30px;
    font-size: 18px;
    padding-top: 30px;

    & p {
      margin-right: 10px;
      margin-top: 10px;
    }
  `

  S.ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    margin : 0 0 200px 200px;
  

    & img {
      width: 500px;
      height: 400px;
    }
  `

  S.Max = styled.div`
    display: flex;
    border : 0.5px solid #ffd400;
    width : 505px;
    padding: 10px;
    margin: 10px 0 30px;

    & p {
      font-size: 14px;
      color : #ffd400;
      margin-left: 10px;
    }

    path {
      color : #ffd400;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  `

  S.MdInfo = styled.div`
    width: 1140px;
    border-top: 0.5px solid white;
    /* align-items: center; */
    margin: -120px auto 0;

    & .description {
      margin-top: 40px;
      font-size: 19px;
      font-weight: bold;
      color: #ffd400;
    }

    & .notice {
      margin-top: 40px;
      font-size: 19px;
      font-weight: bold;
      color: #ffd400;
    }

    & .return{
      margin-top: 40px;
      font-size: 19px;
      font-weight: bold;
      color: #ffd400;
    }
  `
    

    S.ImageWrapper2 = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  

    & img {
      width: 500px;
      height: 800px;
    }
  `

  S.ButtonWrapper3 = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 100px;

    & button {
      display: flex;
      align-items: center;
      color: #000;
      font-size: 20px;
      width: 250px;
      background-color: #fff;
      height: 55px;
      border-radius: 50px;
      border: none;
      text-align: center;
      padding-left: 55px;
      position: relative;
      
      &:hover {
        background-color: #ffd400;
      }
    }

    & .icon2 {
      position: absolute;
      right: 55px;
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
