import styled from "styled-components";

const S = {};

  S.Container = styled.div`
    width: 800px;
  `

  S.Wapper = styled.ul`
    width: 800px;
    display: grid;
    grid-template-columns: 1fr 50px 50px 1fr 1fr;
    margin-left: 150px;

    & li {
      color: #444444;

      &:hover{
        color: #ffd400;
      }
    }

    & li:nth-child(2) {
      color: #ffd400;
    }

  `

export default S;