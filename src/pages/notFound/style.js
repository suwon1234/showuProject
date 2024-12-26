import styled from "styled-components";

const S = {};

  S.Wrap = styled.div`
    display: flex;
    flex-direction: column;

    gap: 30px;

    margin: 100px 250px;
  `

  S.NotFoundBox = styled.div`
    display: flex;
    flex-direction: column;
  `

  S.NotFoundIcon = styled.div`

    & svg.house {
      width: 100px;
      height: 100px;

      margin-bottom: 20px;
    }

  `

  S.NotFoundMsg = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    & p:first-child{
      font-size: 40px;
      font-weight: 700;
    }

    & p:last-child{
      font-size: 20px;
      font-weight: 500;
      color: #797979;
    }
  `

  S.GoHome = styled.button`
    width: 100px;
    height: 30px;

    border: none;
    border-radius: 5px;
    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;

    & button {
      border: none;
      background-color: #fff;
      color: #000;
      font-size: 15px;
      font-weight: 700;
    }

    & svg.main {
      width: 20px;
      height: 20px;

      & path {
        color: #000;
      }

    }
    

  `


export default S;