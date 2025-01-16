import styled from 'styled-components';

const S = {};

  S.Container = styled.div`
    width: 100%;
    height: 150vh;
    margin: 130px 0;
  `

  S.Wapper = styled.div`
    width: 100%;
    height: 150vh;
  `

  S.Title = styled.div`
    
    & p {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 93px;
    }
  `

  S.SubTitle = styled.div`
    margin: 20px 0;
    
    & ul {
      display: flex;
      gap: 25px;

      & li {
        font-size: 17px;
        font-weight: 400;
        color: #444444;
        cursor: pointer;

        &:hover{
          padding-bottom: 3px;
          border-bottom: 3px solid #ffd400;
          color: #fff;
        }
      }

      & li:first-child {
        padding-bottom: 3px;
        border-bottom: 3px solid #ffd400;
        color: #fff;
      }
    }
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