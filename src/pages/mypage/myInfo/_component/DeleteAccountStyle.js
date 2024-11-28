import styled from "styled-components";

const S = {};

  S.Button = styled.button`
    background-color: #797979 !important;
    font-size: 17px;
    width: 150px;
    height: 55px;
    border-radius: 50px;
  `

  S.Model = styled.div`
    position: fixed;
    top: 7%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
    border-radius: 5px;
    padding: 20px;
    z-index: 1000;

    & p {
      color: white;
      font-size: 17px;
      margin-bottom: 20px;
    } 

    & button{
      margin: 0 10px;
      border: none;
    }

    & button:first-child {
      background-color: #797979 !important;
    }
  `

export default S;