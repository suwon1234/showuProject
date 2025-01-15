import styled from 'styled-components';

const S = {};

  S.NoneItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  `

  S.LinkToPath = styled.p`
    cursor: pointer;
    border: 1px solid #ffd400;
    background-color: #ffd400;
    color: #000;
    padding: 10px;
    border-radius: 5px;
  `

  S.Table = styled.table`
    margin-top: 60px;
    width: 800px;
    height: auto;
    
  `

  S.Thead = styled.thead`
    font-size: 16px;
    background-color: black;
    font-weight: 700;
  `

  S.Tr = styled.tr`

    & th {
      color: white;
      padding: 10px;
      text-align: left;
    }

  `

  S.Tbody = styled.tbody`
    & td {
      padding: 20px 10px;
    }
  `

  S.RowTr = styled.tr`
    &:hover {
      border-left: 2px solid #ffd400;
      background-color: rgb(255, 212, 0, 0.1);
      cursor: pointer;
      }

    & td {
      padding: 20px 10px; 
    }

    & th {
      text-align: left;
      padding-left: 35px;
    }

  `


export default S;