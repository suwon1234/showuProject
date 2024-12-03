import styled from 'styled-components';
import { flexCenter } from '../../global/common';

const S = {};

  S.Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
  `

  S.Left = styled.div`
    flex: 1;
    height: 1080px;
    background-color: #fff;

    display: flex;
    position: relative;
    cursor: pointer;
  `

  S.LeftLamp = styled.div`
    position: absolute;
    width: 8vw; 
    height: auto; 
    top: 0; 
    left: 50%; 
    transform: translateX(-50%);

    & .lamp {
      width: 100%;
      height: auto;
    }

    & .light {
      position: absolute;
      width: 30vw; 
      height: auto; 
      top: 98%;
      left: 45%;
      transform: translateX(-50%);
    }
  `

  S.leftChat = styled.div`
    ${flexCenter}
    gap: 55px;
    margin: 75vh auto;

    position: relative;

    & .guest {
      font-size: 25px;
      font-weight: 800;
      color: #333;
    }

    & .lt {
      font-size: 25px;
      color: #333;
    }

    & span {
      font-size: 12px;
      font-weight: 400;
      color: #333;

      position: absolute;
      right: -50px;
      top: 8px;
    }
  `

  S.GuestChat = styled.div`
    width: 250px;
    height: 43px;
    background-color: #ffd400;
    border: 0.5px solid #333;
    border-top-right-radius: 16px;
    border-start-start-radius: 16px;
    border-bottom-left-radius: 16px;

    & p {
      color: #333;
      text-align: center;
      line-height: 2.5;
      font-size: 16px;
      font-weight: 400;
    }
  `

  S.Right = styled.div`
    flex: 1;
    height: 1080px;

    display: flex;
    position: relative;
    cursor: pointer;
  `

  S.RightLamp = styled.div`
    position: absolute;
    width: 8vw; 
    height: auto; 
    top: 0; 
    left: 50%; 
    transform: translateX(-50%);

    & .lamp {
      width: 100%;
      height: auto; 
    }

    & .light {
      position: absolute;
      width: 30vw; 
      height: auto; 
      top: 97%;
      left: 45%;
      transform: translateX(-50%);
    }
  `

  S.RightChat = styled.div`
    ${flexCenter}
    gap: 55px;
    margin: 75vh auto;

    position: relative;

    & .member {
      font-size: 25px;
      font-weight: 800;
      color: #fff;
    }

    & .gt {
      font-size: 25px;
      color: #fff;
    }

    & span {
      font-size: 12px;
      font-weight: 400;
      color: #fff;

      position: absolute;
      top: 8px;
      left: -55px;
    }
  `

  S.MemberChat = styled.div`
    width: 250px;
    height: 43px;
    background-color: #fff;
    border-end-end-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 16px;

    & p {
      color: #333;
      text-align: center;
      line-height: 2.5;
      font-size: 16px;
      font-weight: 400;
    }
  `



export default S;