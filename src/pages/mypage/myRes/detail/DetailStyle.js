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

  S.Button = styled.button`
    width: 145px;
    height: 55px;
    background-color: #797979;
    margin: auto 40%;
    color: #fff;
    font-size: 17px;
    padding: 10px;
    font-weight: 700;
    border-radius: 20px;
  `

  S.Checkbox = styled.th`
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






export default S;