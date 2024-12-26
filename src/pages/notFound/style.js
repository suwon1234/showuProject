import styled from "styled-components";

const S = {};

  S.Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 30px;

    margin: 10px 30%;
  `

  S.NotFoundBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    position: relative;

    `

S.NotFoundIcon = styled.div`

    & svg.house {
      width: 100px;
      height: 100px;

    }

    & svg.xmark {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 40px;
      right: 50px;
    }
  `


export default S;