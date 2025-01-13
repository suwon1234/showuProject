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

  S.ScrollTop = styled.div`
    position: fixed;
    bottom: 30px;
    right: 40px;
    width: 40px;
    height: 40px;
    background-color: black; 
    border-radius: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 100;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.3); 

    .upicon {
      font-size: 20px;
      color: #ffd400 !important; 
    }

    &:hover {
      background-color: #ffb800;
    }
  `


export default S;