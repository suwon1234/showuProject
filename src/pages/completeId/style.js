import styled from 'styled-components'

const S = {};

  S.YellowBar = styled.div`
    background-color: ${({theme}) => theme.PALLETE.primary["main"]};
    height: 48px;
  `

  S.LoginHeader = styled.ul`
    height: 90px;
    display: flex;
    align-items: center;
    margin-left: 200px;

    & .show {
      font-weight: 900;
      font-size: 25px;
      color: #fff;
      margin-right: 5px;
    }
    
    & .u {
      font-weight: 900;
      font-size: 25px;
      color: ${({theme}) => theme.PALLETE.primary["main"]};
    }
  `

  S.Container = styled.div`
    background-color: #000;
  `

  S.Wapper = styled.div`
    width: 560px;
    height: 764.16px;
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

  `

export default S;