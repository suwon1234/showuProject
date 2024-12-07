import styled from "styled-components";

const S = {};

  S.Container = styled.div`
    width: 800px;
    height: 100%;

    
  `

  S.Wrapper = styled.div`
    width: 800px;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
  `

  S.OuterBox = styled.div`
    width: 395px;
    height: 186px;
    background-color: black;
    border-radius: 5px;
    border: 2px solid black;

    &:hover {
      border: 2px solid #ffd400;
    }
  `

  S.Box = styled.div`
    display: flex;
    
    & img {
      width: 140px;
      height: 182px;
      border-radius: 5px;
    }
  `

  S.RightContent = styled.div`
    display: flex;
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
      border-radius: 5px;
      line-height: 2;
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
      color: white;
    }

    & .name {
      font-size: 14px;
      font-weight: 400;
      color: white;
    }

    & .date {
      font-size: 14px;
      font-weight: 400;
      color: white;
    }
  `

export default S;