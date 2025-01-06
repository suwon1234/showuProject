import styled from 'styled-components'
import { flexCenterRow } from '../../global/common';

const S = {};

  S.Container = styled.div`
    background-color: #000;
    height: 150vh;
  `

  S.Wapper = styled.div`
    width: 560px;
    height: 700px;
    margin: 0 auto;
    padding: 40px 0 40px 0;
    background-color: #252525;

    display: flex;
    flex-direction: column;
  `

  S.title = styled.p`
    font-size: 30px;
    text-align: center;
    margin: 30px 0 40px 0;
  `

  S.Form = styled.form`
    padding: 0 40px 0 40px;
    position: relative;
  `

  S.idLabel = styled.label`
    display: block;
    margin: 0 0 30px 0;
  `
  S.passwordLabel = styled.label`
    display: block;
    position: relative;
    margin: 0 0 10px 0;

    & svg.lockImage {
      position: absolute;
      top: 17px;
      right: 20px;

      cursor: pointer;
    }
  `

  S.LockImage = styled.img`
    position: absolute;
    top: 100px;
    left: 475px;

    cursor: pointer;
  `

  S.input = styled.input`
    width: 480px;
    height: 53px;
    padding: 16px;
    background-color: #2F2F2F;
    color: #888888;
    border: none;
    font-size: 15px;
    border-radius: 5px;
  `

  S.CheckBoxWapper = styled.div`
    display: flex;

    & img {
      margin: 0 5px 0 0;
      cursor: pointer;
    }

    & span {
      margin: 0 20px 0 0;
    }
  `

  S.LoginButton = styled.button`
    width: 480px;
    height: 55px;
    /* margin: 20px 40px 0 40px; */
    margin-top: 20px;

    background-color: #717171;
    color: #fff;
    border: none;
    border-radius: 50px;
    font-size: 17px;

    &:hover {
      background-color: #ffd400;
      color: black;
    }

  `

  S.JoinFind = styled.ul`
    ${flexCenterRow}

    & li {
      margin: 15px 5px 20px 0;
      padding: 0 10px 0 5px;

      border-right: 1px solid #fff;
      font-size: 13px;
      font-weight: 400;

      cursor: pointer;
    }

    & .lastLi{
      border: none;
    }
  ` 

  S.JoinSns = styled.div`
    margin: 0 40px 0 40px;

    & .joinP {
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      margin: 5px 0 30px 0;
    }
  `


  S.LoginSns = styled.div`
    ${flexCenterRow}
    
    & button {
      margin: 0 20px 0 0;
      background: none;
      border: none;
    }

  `

  S.SaveId = styled.div`
    display: flex;
    align-items: center;

    & span {
      margin-left: 5px;
    }
  `




  

export default S;