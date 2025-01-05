import styled from 'styled-components';

const S = {};

  S.Table = styled.table`
      margin-top: 40px;
      width: 800px;
      height: auto;
    `

  S.Tr = styled.tr`
    font-size: 15px;

    & th {
      color: white;
      background-color: black;
      text-align: left;
      font-weight: 700;

      padding: 10px;
      /* border-bottom: 1px solid #fff; */
    }

    & td {
      padding: 10px;
    }
  `

S.DetailTable = styled.table`
  margin-top: 40px;
  width: 800px;
  height: auto;
`

S.DetailThead = styled.thead`
  font-size: 16px;
  background-color: black;
  font-weight: 700;
`

S.DetailTrTitle = styled.tr`
  & th {
    color: white;
    padding: 10px;
    text-align: left;
  }
`

S.DetailTbody = styled.tbody`
  & td {
    padding: 20px 10px;
  }
`

S.DetailTr = styled.tr`
  & th {
    cursor: pointer;
    text-align: left;

    &.num {
      padding-left: 35px;
    }
  }

  /* & td:nth-of-type(4),
  td:last-of-type {
    color: #ffd400;
    text-align: left;
  } */
`

  S.Title = styled.p`
    width: 98px;

    margin: 20px 0;
    font-size: 17px;
    font-weight: 400;
    padding-bottom: 3px;
    border-bottom: 3px solid #ffd400;
    color: #fff;
  `

  S.Button = styled.button`
    width: 145px;
    height: 55px;
    background-color: #797979;
    color: #fff;
    font-size: 17px;
    padding: 10px;
    font-weight: 700;
    border-radius: 20px;

    &:hover{
      background-color: #ffd400;
      color: black;
    }
  `

  S.ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 20px;    
  `

export default S;