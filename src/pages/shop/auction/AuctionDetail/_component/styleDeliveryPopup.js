// 경매 팝업 - 배송 정보 스타일
import styled from "styled-components";

const S = {};

  S.PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(68, 68, 68, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `

  S.PopupContainer = styled.div`
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    width: 900px;
    height: 380px;
    border: 2px solid #ffd400;
  `

  S.PopupTitle = styled.h2`
    background-color: #ffd400;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 15px;
  `

  S.PopupTableWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  `

  S.PopupTable = styled.table`
    width: 750px;
    border: 1px solid #fff; 
    border-collapse: collapse; 
    background-color: black;
    margin-top: 30px;
  `

  S.PopupLabel = styled.td`
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 12px;
    border: 1px solid #fff;
    width: 20%; 
  `

  S.PopupValue = styled.td`
    color: white;
    text-align: left;
    padding: 12px;
    border: 1px solid #fff; 
    width: 80%; 
  `

  S.PopupButton = styled.button`
    background-color: #ffd400;
    color: #000;
    width: 90px;
    height: 55px;
    border-radius: 50px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;
    margin-top: 20px;

      &:hover {
        background-color: #ffd400;
      }
  `

  S.PopupButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `

export default S;