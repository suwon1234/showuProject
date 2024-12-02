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
      color: #333;
      background-color: #ffd400;
      text-align: left;
      font-weight: 700;

      padding: 10px;
      border-bottom: 0.5px solid #fff;
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
  font-size: 17px;
  background-color: #ffd400;
  font-weight: 700;
`

S.DetailTrTitle = styled.tr`
  & th {
    color: #333;
    padding: 10px;
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
    
    &:hover {
      color: #ffd400;
    }
  }

  & td:nth-of-type(4),
  td:last-of-type {
    color: #ffd400;
    text-align: center;
  }
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



export default S;