import styled from "styled-components";

const S = {};

  S.Footer = styled.div`
    background-color: #000;
  
    display: flex;
    justify-content: space-around;
    /* gap: 0px; */
    padding: 20px;

    & p {
      color: #797979;
    }

    & p.faq {
      cursor: pointer;
    }
  `

export default S;