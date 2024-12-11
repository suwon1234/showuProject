import styled from 'styled-components';

const S = {};

  S.Container = styled.div`
    width: 900px;
    height: 100vh;
  `

  S.Wrapper = styled.div`
    width: 900px;
    height: 90px;
    border: 1px solid #444444;
    border-radius: 10px;
    padding: 20px;
  `

  S.Write = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    & img {
      width: 30px;
      height: 30px;
      border-radius: 50px;
    }

    & p.wirter{
      font-size: 17px;
      font-weight: 700;
    }

    & p.date{
      font-size: 16px;
      font-weight: 500;
    }
  `



  // S.Table = styled.table`
  //   margin-top: 40px;
  //   width: 800px;
  //   height: auto;
    
  // `

  // S.Thead = styled.thead`
  //   font-size: 16px;
  //   background-color: black;
  //   font-weight: 700;
  // `

  // S.Tr = styled.tr`
  //   & th {
  //     color: white;
  //     padding: 10px 0 10px 10px;
  //     text-align: left;
  //   }
  // `

  // S.Tbody = styled.tbody`
  //   & td {
  //     padding: 20px 10px 20px 10px;
  //   }
  // `

  // S.ContentTr = styled.tr`
  //   &:hover {
  //     border-left: 2px solid #ffd400;
  //     background-color: rgb(255, 212, 0, 0.1);
  //   }


  //   & td {
  //     padding: 20px 10px 20px 10px; 
  //   }


  //   & td:last-of-type {
  //     color: #ffd400;
  //   }
  // `


  


export default S;