// 경매 팝업 - 배송 정보 스타일
import styled from "styled-components";

const S = {};

  S.PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(68, 68, 68, 0.7); /* 어두운 배경 */
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
    padding: 10px;
  `

  S.PopupContent = styled.div`
    padding: 20px 10px;
    font-size: 16px;

    h1 {
      margin: 40px 100px;
    }

    p {
      margin: 40px 100px;

    }
  `


  S.PopupButton = styled.button`
    background-color: #ffd400;
    color: #000;
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;

      &:hover {
        background-color: #ffd633;
      }
  `

  S.PopupButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
  `

export default S;