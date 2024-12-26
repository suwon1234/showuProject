import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

const S = {};

const flexStyle = css`
  display: flex;
  align-items: center;
  `

const flexStyle2 = css`
  ${flexStyle}
  flex-direction: column;
  `

  S.StateWrapper = styled.div`
    ${flexStyle2}
    background-color: #000;
    min-height: 100vh;
  `

  S.Title = styled.div`
    ${flexStyle}
    width: 100%;
    max-width: 1165px;
    height: 55px;
    border-radius: 50px;
    background-color: #ffd400;
    color: #000;
    margin: 50px auto 30px;
    justify-content: space-between;

      & h1 {
        font-size: 20px;
        font-weight: bold;
        margin-left: 20px;
        color: #000;
      }
  `
    S.Purchase = styled.div`
      ${flexStyle}
      width: 1165px;
      margin: 30px auto 10px;
      justify-content: flex-end;
    
      .icon1 {
        font-size: 20px;
        
        path {
          color: #fff;
        }
      }
      
      & p {
        margin-left: 5px;
        font-size: 17px;
        color: #fff;
      }
  `

  S.Table = styled.table`
    width: 1160px;
    height: 240px;
    border-collapse: collapse;
    margin-top: 20px;
  `

  S.TableHead = styled.th`
    border: 1px solid #ffd400;
    text-align: center;
    padding: 10px;
    background-color: rgba(255, 212, 0, 0.8);
    color: black;
    font-weight: bold;
    font-size: 17px;
    
  `

  S.Head = styled.th`
    border: 1px solid #fff;
    text-align: center;
    height: 80px;
    padding: 10px;
    background-color: #000;
    color: #fff;
    font-size: 17px;
  `

  S.Data = styled.td`
    border: 1px solid #fff;
    text-align: center;
    padding: 10px;
    background-color: #000;
    color: #fff;
  `

S.TableWrapper = styled.div`
  margin-top: 50px;
.search {
  margin-bottom: 10px;

}
`

S.Table = styled.table`
width: 1160px;
`

S.Head2 = styled.th`
border: 1px solid #ffd400;
text-align: center;
padding: 10px;
background-color: rgba(255, 212, 0, 0.8);
color: black;
font-weight: bold;
font-size: 17px;

`

S.Data = styled.td`
border: 1px solid #fff;
text-align: center;
background-color: #000;
color: #fff;
justify-content: center;
align-items: center;
padding: 10px;

& p {
  
}

.icon {
  font-size: 20px;
  cursor: pointer;
  
  path{
    &:hover {
      color: #ffd400;
    }
  }
}

`

S.Image = styled.img`
width: 50px;
height: 50px;

`

S.Button = styled.div`
margin-bottom: 150px;

& button {
margin-top: 30px;
width: 100px;
height: 55px;
font-weight: bold;
font-size: 17px;
color: #fff;
background-color: #444444;
border-radius: 50px;
border: none;
cursor: pointer;

&:hover {
  background-color: #ffd400;
  color: #000;
}
}
`

export default S;