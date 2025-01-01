import styled from 'styled-components'

const S = {};

  S.Container = styled.div`
    background-color: #000;
    height: 150vh;
  `

  S.Wapper = styled.div`
    width: 560px;
    height: 600px;
    margin: auto;
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

  S.inputWapper = styled.div`
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

export default S;