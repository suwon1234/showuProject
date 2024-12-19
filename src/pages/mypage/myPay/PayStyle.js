import styled from 'styled-components';

const S = {};

  S.Container = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center; 
    gap: 20px; 
    margin-top: 20px;
  `

S.Table = styled.table`
    margin-top: 40px;
    width: 800px;
    height: auto;
    
  `

  S.Thead = styled.thead`
    font-size: 16px;
    font-weight: 500;
  `

  S.Tr = styled.tr`
    & th {
      color: white;
      padding: 10px;
      text-align: center;
    }
  `

  S.Tbody = styled.tbody`
    & td {
      padding: 20px 10px 20px 10px;
    }
  `

  S.ContentTr = styled.tr`
    & tr, td {
      text-align: center;
    }

    &:hover {
      /* border-left: 2px solid #ffd400; */
      background-color: rgb(255, 212, 0, 0.1);
      cursor: pointer;
    }


    & td {
      padding: 20px 10px 20px 10px; 
    }


    & td:last-of-type {
      color: #ffd400;
    }
  `

  S.Image = styled.div`
    width: 220px;
    height: 190px;
    
    display: flex;

    position: relative;
    cursor: pointer;
    
    & img {
      width: 210px;
      height: 180px;
      padding: 10px;

      border: 0.5px solid #444444;
      margin: 0 10px;

      transition: transform 0.3s ease, z-index 0 0.3s ease;

      &:hover {
        transform: scale(1.1);
        z-index: 10;
      }
    }
  `
  


export default S;