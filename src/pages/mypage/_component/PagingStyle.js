import styled from "styled-components";

const S = {};

  S.Button = styled.button`
    background-color: #000;
    border: none;
    margin: 0 20px;

    color: ${props => (props.$active ? '#ffd400' : 'white')};
  `  

  S.Nav = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
    
    & .prev{
      display: flex;
    }

    & .next{
      display: flex;
    }
  `

export default S;