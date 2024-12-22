import styled from "styled-components"

const S = {};

  S.Checkbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    & input[type="checkbox"] {
      /* 기본 체크박스 숨기기 */
      appearance: none; 
      -webkit-appearance: none; 
      width: 20px;
      height: 20px;
      border: 2px solid gray;
      border-radius: 50%;
      background-color: transparent;
      cursor: pointer;
      transition: background-color 0.3s, border-color 0.3s;
      position: relative;
    }

    /* 체크 상태 스타일 */
    & input[type="checkbox"]:checked {
      background-color: #444444;
      border-color: #444444;
    } 

    /* 체크 표시 아이콘 추가 */
    & input[type="checkbox"]:checked::before {
      content: ''; 
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 4px;
      border: solid white;
      border-width: 0 0 2px 2px;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  `

  S.AgreeWapper = styled.ul`
    /* margin: 0 40px; */
  `

  S.AgreeBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    & .AllAgree {
      font-size: 16px;
      font-weight: 700;
    }

    & span {
      font-size: 15px;
      font-weight: 400;
      margin-left: 5px;
    }
  `

  S.CheckImg = styled.img`
    margin-right: 10px;
  `

export default S;