import styled from 'styled-components'

const S = {};

  S.JoinBox = styled.div`
    width: 560px;
    height: 890px;
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
    margin: 0 0 30px 0;
  `
  S.passwordLabel = styled.label`
    display: block;
    position: relative;
    margin: 0 0 10px 0;
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
    background-color: #000;
    font-size: 15px;
    color: #fff;
    border: 0.5px solid #fff;
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

  S.AgreeWapper = styled.ul`
    margin: 0 40px;
  `

  S.AgreeBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    & .AllAgree {
      font-size: 16px;
      font-weight: 700;
    }

    & span {
      font-size: 15px;
      font-weight: 400;
      margin-left: 5px;
    }
  `

  S.CheckImg = styled.img`
    margin-right: 10px;
  `
  


export default S;