import styled from 'styled-components';

const S = {};

  S.Title = styled.p`
    font-size: 30px;
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 80px;
  `

  S.SubTitle = styled.div`
    
    & li {
      width: 130px;
      margin: 20px 0;
      font-size: 20px;
      font-weight: 600;

      border-bottom: 3px solid #ffd400;
      padding-bottom: 3px;
    }
  `

  S.Container = styled.div`
    background-color: #000;

    display: flex;
    justify-content: center;
  `

  S.Table = styled.table`
    width: 900px;
    height: auto;
    
  `

  S.Thead = styled.thead`
    font-size: 18px;
    background-color: black;
    font-weight: 700;
  `

  S.Tr = styled.tr`

    & th {
      color: white;
      padding: 10px 10px 10px 0;
      text-align: left;
      font-size: 18px;
    }

  `

  S.Tbody = styled.tbody`
    & td {
      text-align: left;
      /* padding: 20px 10px; */
      padding: 20px 10px 20px 0;
    }
  `

  S.RowTr = styled.tr`

    &:hover {
      /* border-left: 2px solid #ffd400;
      background-color: rgb(255, 212, 0, 0.1); */
      cursor: pointer;
      }

    & td {
      text-align: left;
      /* padding: 20px 10px;  */
      padding: 20px 10px 20px 0;
    }

    & th {
      text-align: left;
    }

  `

  S.RoleChangeButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    
    & button {
      border: none;
    }

    & button.exportButton {
      background-color: #000;
      border-radius: 5px;
      font-size: 16px;
      border: 1px solid #ffd400;
    }

    & button.rejectButton {
      background-color: #000;
      border-radius: 5px;
      font-size: 16px;
      border: 1px solid #797979;
    }

  `

  S.ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `

  S.ModalContent = styled.div`
    background-color: #000;
    /* padding: 20px; */
    border-radius: 20px;
    border: 1px solid #797979;
    width: 800px;
    height: 500px;
    position: relative;
  `

  S.ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    padding: 10px;

    h2 {
      margin: 0;
    }

    button {
      background: none;
      border: none;
      font-size: 1.2em;
      cursor: pointer;
    }
  `

  S.ModalBody = styled.div`
    margin-top: 10px;
    /* padding: 10px; */
    display: flex;
    flex-direction: column;
  `

  S.ModalContent = styled.div`
    width: 750px;
    margin: 5px 0;
    font-size: 16px;
    border: 1px solid #444444;
    padding: 10px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & div {
      width: 730px;
    }

    & div.ContentTitle {
      width: 100px;
    }

    & div.ContentWapperIntro {
      display: flex;
      height: 200px;
    }

    & div.ContentWarpper {
      display: flex;
    }

    & a {
      position: relative;
    }

    & span.downloadeButton {
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 5px;
      background-color: #797979;
      padding: 5px;
    }
  `

export default S;