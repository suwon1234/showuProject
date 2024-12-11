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
    column-gap: 40px;
  `

  S.OuterBox = styled.div`
    width: 330px;
    height: 360px;

    border-radius: 16px;
    /* border: 0.5px solid #797979; */
    background-color: white;

    cursor: pointer;
  `

  S.Box = styled.div`
    width: 330px;
    height: 360px;
    padding: 15px 20px;

    position: relative;

    & img {
      width: 290px;
      height: 156px;
      border-radius: 20px;
    }
  `

  S.RightContent = styled.div`
    
  `

  S.Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    & p{
      color: black;
    }

    & p.genre {
      font-size: 16px;
      font-weight: 400;
      margin-top: 5px;
    }
    
    & p.intro {
      font-size: 17px;
      font-weight: 700;
    }

    & p.name {
      font-size: 16px;
      font-weight: 400;
    }

    & p.date {
      font-size: 16px;
      font-weight: 400;
      color: #797979;
    }
  `

  S.Button = styled.button`
    width: 290px;
    height: 55px;
    border-radius: 5px;
    border: none;

    background-color: #ffd400;
    color: black;
    font-size: 17px;

    position: absolute;
    bottom: 15px;
  `

export default S;