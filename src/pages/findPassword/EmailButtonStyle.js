import styled from "styled-components";

const S = {};

  S.Wrap = styled.div`
    padding: 0 40px 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

  `

  S.InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    & input {
      width: 480px;
      height: 53px;
      padding: 16px;
      background-color: #2F2F2F;
      color: #888888;
      border: none;
      font-size: 15px;
      border-radius: 5px;
    }
  `

  S.Button = styled.div`
    width: 480px;
    height: 55px;

    background-color: #717171;
    color: #fff;
    border: none;
    border-radius: 50px;
    font-size: 17px;
    text-align: center;
    line-height: 3.5;

    &:hover {
      background-color: #ffd400;
      color: black;
    }
  `

export default S;