import styled from "styled-components";

const S = {};

  S.Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 20px; */
  `

  S.Title = styled.div`
    & p{
      font-size: 40px;
      font-weight: 700;
    }

    margin: 50px 0;
  `
   S.Ul = styled.ul`
    width: 900px;
  `

export default S;