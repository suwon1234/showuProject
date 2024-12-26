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


export default S;