import styled from "styled-components";

const S = {};

  S.Container = styled.div`
  `

  S.QueButton = styled.button`
    width: 900px;
    border: none;
    border-top: 1px solid #444444;
    background-color: #000;
    
    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    padding: 20px 10px 0 10px;

    position: relative;

    & p{
      color: #fff;
      text-align: left;
      font-size: 20px;
    }

  ` 

  S.Answer = styled.div`
    padding: 10px;

    & p{
      font-size: 18px;
      color: #797979;
    }
  `

  S.DownIcon = styled.div`

    & svg.down {
      position: absolute;
      top: 25px;
      right: 10px;
    }
  `

export default S;