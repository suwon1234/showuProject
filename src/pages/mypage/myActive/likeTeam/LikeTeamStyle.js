import styled from "styled-components";

const S = {};

  S.Container = styled.div`
    width: 900px;
    height: 100%;
  `

  S.Wrapper = styled.div`
    width: 900px;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 15px;
  `

  S.OuterBox = styled.div`
    width: 395px;
    height: 186px;
    background-color: #fff;
    border-radius: 5px;
    border: 2px solid #fff;

    margin-right: 5px;

    &:hover {
      border: 2px solid #ffd400;
    }
  `

  S.Box = styled.div`
    display: flex;
    
    & img {
      width: 140px;
      height: 182px;
    }
  `

  S.RightContent = styled.div`
    display: flex;
    gap: 4px;
  `

  S.Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    justify-content: center;

    padding: 13px;

    & .state {
      font-size: 12px;
      font-weight: 700;
      color: #FF7262;
      border: 0.5px solid #FF7262;
      line-height: 1.7;
      text-align: center;

      width: 62px;
      height: 24px;
    }

    & .genre {
      font-size: 15px;
      font-weight: 700;
      color: #ffd400;
    }

    & .intro {
      font-size: 17px;
      font-weight: 700;
      color: #333;
    }

    & .name {
      font-size: 14px;
      font-weight: 400;
      color: #444444;
    }

    & .date {
      font-size: 14px;
      font-weight: 400;
      color: #444444;
    }
  `

export default S;