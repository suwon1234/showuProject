import styled from "styled-components";

const S = {};

  S.Container = styled.div`
    width: 900px;
    height: 150vh;
    overflow-y: auto;
  `

  S.Fieldset = styled.fieldset`
    width: 822px;
    height: auto;

    display: flex;
    flex-direction: column;

    & input {
      background-color: black;
      color: #fff;

      width: 648px;
      height: 40px;


      border: none;
    }

    & input::placeholder{
      color: #fff;
    }

    & textarea {
      background-color: black;
      color: white;
      border: none;

      width: 680px;
      height: 460px;

      margin: 10px 0 0 0;
    }

    & textarea::placeholder{
      color: #fff;
    }

    & select {
      background-color: black;

      border: none;

      width: 690px;
      height: 40px;

      & option {
        background-color: black;
      }

      & option:hover {
        background-color: #ffd400;
      }
    }
  `

  S.Label = styled.label`
    width: 820px;
    height: 47px;

    border: 0.5px solid #444444;

    display: flex;
    align-items: center;
    gap: 30px;

    margin-bottom: 20px;

    & p {
      font-size: 15px;
      margin-left: 10px;
    }
  `

  S.LabelTextAarea = styled.label`
    width: 820px;
    height: 498px;

    border: 0.5px solid #444444;

    display: flex;
    gap: 46px;
    
    margin-bottom: 20px;

    & p {
      font-size: 15px;
      margin: 10px 0 0 10px;
    }
  `

  S.LabelSelect = styled.label`
    width: 820px;
    height: 47px;

    border: 0.5px solid #444444;

    display: flex;
    align-items: center;
    gap: 70px;

    margin-bottom: 20px;

    & p {
      font-size: 15px;
      margin-left: 10px;
    }
  `
  S.LabelSelectField = styled.label`
    width: 820px;
    height: 47px;

    border: 0.5px solid #444444;

    display: flex;
    align-items: center;
    gap: 45px;

    margin-bottom: 20px;

    & p {
      font-size: 15px;
      margin-left: 10px;
    }
  `
  S.LabelSelectTotal = styled.label`
    width: 820px;
    height: 47px;

    border: 0.5px solid #444444;

    display: flex;
    align-items: center;
    gap: 30px;

    margin-bottom: 20px;

    & p {
      font-size: 15px;
      margin-left: 10px;
    }
  `
  S.LabelSelectcareer = styled.label`
    width: 820px;
    height: 47px;

    border: 0.5px solid #444444;

    display: flex;
    align-items: center;
    gap: 46px;

    margin-bottom: 20px;

    & p {
      font-size: 15px;
      margin-left: 10px;
    }
  `

  S.Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `


  S.Portfolio = styled.div`

    & label::after {
      content: '+자료첨부';
      cursor: pointer;
      font-size: 15px;
        }

    & input {
      display: none;
    }
    
  `

    S.Button = styled.button`
      width: 145px;
      height: 55px;
    
      border-radius: 50px;
      background-color: #ffd400;
    
      margin: 15px auto 0 auto;

      color: black;
      font-size: 17px;
      font-weight: 800;
    `

    S.hr = styled.hr`
      width: 820px;

      margin-bottom: 20px;
      margin-top: 0;
      border: 0.5px solid #444444;
    `

export default S;