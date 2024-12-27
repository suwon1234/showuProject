import styled from 'styled-components'

const S = {};

  S.RightSection = styled.div`
    width: 800px;
    height: 150vh;

    & .infoTitle {
      font-size: 30px;
      margin: 120px 0 10px 0;
    }
  `

  S.Profile = styled.div`
    display: flex;
    align-items: center;
    gap : 40px;

    margin: 40px 0 50px 0;

    position: relative;

    & img {
          width: 148px;
          height: 148px ;
          border-radius: 50%;
        }

    & p {
      font-size: 23px;
    }

    & .change {
      position: absolute;
      top: 110px;
      left: 110px;

      & .fileInput {
        font-size: 30px;
        line-height: 1;
        text-align: center;

        width: 30px;
        height: 30px;
        border-radius: 50%;

        background-color: #ffd400;
      }
    }
  `

  S.fileInputButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 10px;
    
    position: relative;
    background-color: #ffd400;
    border: none;

    position: absolute;
    top: 100px;
    left: 115px;

    & label {
      display: inline-block;
      cursor: pointer;
    }
    
    & label::after {
      position: absolute;
      content: '+';
      font-size: 24px;
      top: -1px;
      left: 7px;
    }

    & input {
      display: none;      
    }
  `

  S.UpdateButton = styled.div`

    margin-top: 10px;
    margin-left: 300px;

    & button {
      border: none;
      width: 150px;
      height: 55px;
      border-radius: 50px;
      padding: 10px;
      text-align: center;
      line-height: 2.2;
      background-color: #ffd400;
      font-size: 17px;
      color: #000;
      cursor: pointer;
    }
  `
  
  S.Form = styled.form`
    display: flex;
    flex-direction: column;

    & label {
      display: grid;
      grid-template-columns: 400px 400px;
      align-items: center;
      border-top: 0.5px solid #444444;
      padding: 15px 0;

      & span{
        font-size: 17px;
        font-weight: 400;
      }
    }

    & li:nth-child(2) {
      justify-content: flex-start;
    }

    & svg.pen {
      cursor: pointer;
    }
  `

  S.Input = styled.input`
    width: 400px;
    height: 28px;
    margin-left: auto;

    background-color: #000;
    border-color: #ffd400;
    color: #fff;
    border: none;
    font-size: 17px;
    text-align: right;
    padding: 15px;

    &::placeholder{
      color: #fff;
      font-size: 17px;
      text-align: right;

    }

    
  `

  S.Button = styled.button`
    background-color: #ffd400;
    color: #000;
    font-size: 15px;
    font-weight: 500;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    height: 55px;

  `
  S.DelteButton = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    & button {
      border: none;
      width: 150px;
      height: 55px;
      border-radius: 50px;
      padding: 10px;
      text-align: center;
      line-height: 2.2;
      background-color: #797979;
      font-size: 17px;
      color: #000;
      cursor: pointer;

      &:hover{
        background-color: #ffd400 !important;
        color: #000;
      }
    }
  `

  S.ChangeButton = styled.button`
    width: 150px;
    height: 55px;
    border-radius: 50px;
    padding: 10px;
    text-align: center;
    line-height: 2.2;
    background-color: #ffd400;
    font-size: 17px;
    color: #000;
    cursor: pointer;
  `

  S.ConfirmMessage = styled.p`
  text-align: right;
    font-size: 13px;
    color: #797979;
  `

  S.Label = styled.label`
    border-bottom: 0.5px solid #444444;
  `


export default S;