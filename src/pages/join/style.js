import styled from 'styled-components'

const S = {};

  S.JoinBox = styled.div`
    width: 560px;
    height: 830px;
    margin: auto;
    padding: 40px 0;
    background-color: #252525;

    flex-direction: column;
  `

  S.Container = styled.div`
    background-color: #000;
    height: 150vh;
  `

  S.Wapper = styled.div`
    width: 560px;
    height: 630px;
    margin: auto;
    background-color: #252525;

    display: flex;
    
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
    margin: 0 0 20px 0;
    position: relative;

    & svg.lockImage {
      position: absolute;
      top: 17px;
      right: 20px;

      cursor: pointer;
    }
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

  S.LoginButton = styled.button`
    width: 480px;
    height: 55px;
    margin: 20px 40px 0 40px;

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
  S.JoinButton = styled.button`
    width: 480px;
    height: 55px;
    margin-top: 20px;
    /* margin: 20px 40px 0 40px; */

    background-color: ${(props) => props.state ? "#ffd400" : "#717171" };
    color: #fff;
    border: none;
    border-radius: 50px;
    font-size: 17px;
  `

export default S;