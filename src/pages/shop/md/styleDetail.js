import styled from 'styled-components'

const S = {};

  S.DetailWrapper = styled.div`
    background-color: #000;
  `

  S.Button1 = styled.button`
    background-color: #797979;
    border-radius: 50px;
    height: 55px;
    width: 250px;
    cursor: pointer;

    & p {
      font-size: 20px;
    }

    &:hover {
      background-color: #ffd400;
    }
  `
  S.Button2 = styled.button`
    background-color: #444444;
    border-radius: 50px;
    height: 55px;
    width: 250px;
    cursor: pointer;

    & p {
      font-size: 20px;
    }

    &:hover {
      background-color: #ffd400;
    }
  `
  S.Button3 = styled.button`
    background-color: #797979;
    border-radius: 50px;
    height: 55px;
    width: 505px;
    margin-top: 10px;
    cursor: pointer;

    & p {
      font-size: 20px;
    }

    &:hover {
      background-color: #ffd400;
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

  S.ButtonWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 200px;
    gap: 5px;
  `

  S.DetailContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
    padding-right: 50px;
  `

  S.Dropdown = styled.div`
    /* margin-bottom: 100px; */
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-size: 20px;

    & p {
      margin: 10px;
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

    S.MdInfo = styled.div`
      display: flex;
      flex-direction: column; 
      border-bottom: 0.5px solid white;
      margin-bottom : 100px;
      width: 505px;
      padding-bottom: 10px; 


      & p {
        margin: 0 !important;

    }

      & p:first-child {
        padding-bottom: 80px; 
        font-size: 15px;
        font-weight: bold;
        color: #ffd400;
    }

      & p:nth-child(2) {
        padding-bottom: 70px; 
        font-size: 18px;
    }

      & p:last-child {
        padding-bottom: 20px; 
        font-size: 20px;
        font-weight: bold;
    }

    `

export default S;
