import styled from "styled-components";

const S = {};

  S.FilterWrapper = styled.div`
    width: 105px;
    height: 30px;


    margin-bottom: 10px;

    position: relative;
    cursor: pointer;
  `

  S.Filter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    padding: 5px 10px;
    border: 1px solid white;
    border-radius: 5px;

    width: 105px;
    height: 30px;

    position: absolute;
    left: 780px;
  `

  S.DropdownMenu = styled.div`
    position: absolute;
    top: 100%; 
    left: 780px;  
    width: 105px;
    height: auto;
    background-color: black;
    border-radius: 5px;
    font-size: 17px;
    z-index: 1000;
    overflow: hidden;
    margin-top: 10px; 

    & li {
      padding: 10px;
      cursor: pointer;
    }

    & li:hover {
      background-color: #ffd400;
      color: black;
    }
  `

export default S;