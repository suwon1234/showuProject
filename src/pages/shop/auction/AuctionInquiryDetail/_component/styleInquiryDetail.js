import styled, { css }  from "styled-components";

const S = {};

  S.Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #000;
    height: 100vh;
  `

  S.InquiryContainer = styled.div`
    color: #fff;
    width: 1140px;
    /* height: 600px; */
    height: 610px;
    border: 2px solid #ffd400;
  `

  S.Title = styled.h2`
    background-color: #ffd400;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 15px;
  `

  S.Table = styled.table`
    width: 1020px;
    border-collapse: collapse;
    margin: 40px auto;
  `

  S.Th = styled.th`
    border: 1px solid #fff;
    padding: 10px;
    text-align: center;
    border-left: none;
    width: 20%;
  `

  S.Td = styled.td`
    border: 1px solid #fff; 
    padding: 10px;
    text-align: left;
    border-right: none;
  `

  S.Input = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  `

  S.InputContent = styled.textarea`
    width: 1020px;
    height: 220px;
    background-color: #000;
    color: #fff;
    font-size: 15px;
    border: 0.5px solid #fff;
    padding: 10px;
    border-radius: 5px;
  `

  const buttonStyles = `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 55px;
    border-radius: 50px;
    border: none;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
  `;

  S.ButtonContainer = styled.div`
    display: flex;
    width: 1020px;
    margin: 30px auto;
    /* gap: 10px; */
  `

  S.ButtonWrapper = styled.div`
    display: flex;
    margin-left: auto;
    gap: 10px;
  `

  S.ListButton = styled.button`
    ${buttonStyles}
    background-color: #000;
    color: #ffd400;
    border: 2px solid #ffd400;
  `

  S.DeleteButton = styled.button`
    ${buttonStyles}
    background-color: #797979;
    color: #fff;
  `

  S.ModifyButton = styled.button`
    ${buttonStyles}
    background-color: #ffd400;
    color: #000;
  `
  S.CancelButton = styled.button`
    ${buttonStyles}
    background-color: #797979;
    color: #fff;
  `
  S.SaveButton = styled.button`
    ${buttonStyles}
    background-color: #ffd400;
    color: #000;
  `

  S.ListTable = styled.table`
    margin-top: 100px;
    width: 1140px;
    border-collapse: collapse;
  
  `

  S.Th2 = styled.th`
    border: 0.5px solid #fff;
    padding: 10px;
    text-align: center;
    border-left: none;
    width: 10%;
  `

  S.Td2 = styled.td`
    border: 0.5px solid #fff; 
    padding: 10px;
    text-align: left;
    border-right: none;

    .empty {
      color: rgba(255, 255, 255, 0.7);
      margin-left: 10px;
    }
  `



const flexStyle = css`
  display: flex;
  align-items: center;
`


S.InquiryList = styled.div`
${flexStyle}
justify-content: space-between;
/* padding: 0 20px; */
background-color: #000;
color: #fff;
`

S.ListItem = styled.div`
flex: 1;
text-align: center;
`

S.Left1 = styled.div`
display: flex;
flex: 1;
`

S.Left2 = styled.div`
display: flex;
flex: 1;
`

S.Center = styled.div`
display: flex;
flex: 4;
text-align: center;
`

S.Right1 = styled.div`
display: flex;
flex: 2;
text-align: right;
`

S.Right2 = styled.div`
display: flex;
flex: 2;
text-align: right;
`

S.PrivateWrapper = styled.div`
${flexStyle}
justify-content: center;
padding-left: 50px;

.icon {
  font-size: 18px;
  padding-right: 5px;

  path {
    color: #ffd400;
  }
}
`

S.Private = styled.div`
margin-left: 0;
width: 150px;
`

S.Blank = styled.div`
width: 168px;
`
S.Inquiry = styled.div`
margin: auto;
`

S.Content = styled.div`
    width: 1020px;
    height: 220px;
    background-color: #000;
    color: #fff;
    font-size: 15px;

    padding: 10px;
    border-radius: 5px;
`

export default S;