import styled from "styled-components";

const S = {};

  S.Container = styled.div`
    width: 900px;
    height: 100vh;
  `

  S.Fieldset = styled.fieldset`
    width: 822px;
    height: 100vh;

    display: flex;
    flex-direction: column;

    & input {
      background-color: black;
      color: #fff;

      width: 820px;
      height: 47px;

      margin-top: 10px;

      border: 0.5px solid #444444;
    }

    & textarea {
      background-color: black;
      color: white;
      border: 0.5px solid #444444;

      width: 820px;
      height: 498px;

      margin-top: 20px;
    }

    & select {
      background-color: black;

      border: 0.5px solid #444444;

      margin-top: 10px;

      width: 820px;
      height: 47px;

    }
  `

  S.Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `

  S.Button = styled.button`
    width: 145px;
    height: 55px;

    border-radius: 50px;
    background-color: #ffd400;

    margin: 10px auto 0 auto;
  `


export default S;