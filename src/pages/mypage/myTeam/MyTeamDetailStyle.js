import styled from "styled-components";

const S = {};

  S.NoneItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  `

  S.LinkToPath = styled.p`
    cursor: pointer;
    border: 1px solid #ffd400;
    background-color: #ffd400;
    color: #000;
    padding: 10px;
    border-radius: 5px;
  `

  S.Container = styled.div`
    width: 800px;
    height: 100%;
  `

  S.Wrapper = styled.div`
    width: 800px;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    column-gap: 40px;
  `

  S.OuterBox = styled.div`
    width: 330px;
    height: 360px;

    border-radius: 16px;
    /* border: 0.5px solid #797979; */
    background-color: white;

    cursor: pointer;
  `

  S.Box = styled.div`
    width: 330px;
    height: 360px;
    padding: 15px 20px;

    position: relative;

    & img {
      width: 290px;
      height: 156px;
      border-radius: 20px;
      object-fit: cover;
    }
  `

  S.RightContent = styled.div`
    
  `

  S.Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    & p{
      color: black;
    }

    & p.genre {
      font-size: 16px;
      font-weight: 400;
      margin-top: 5px;
    }
    
    & p.intro {
      font-size: 17px;
      font-weight: 700;
    }

    & p.name {
      font-size: 16px;
      font-weight: 400;
    }

    & p.date {
      font-size: 16px;
      font-weight: 400;
      color: #797979;
    }
  `

  S.Button = styled.button`
    width: 290px;
    height: 55px;
    border-radius: 5px;
    border: none;

    background-color: #ffd400;
    color: black;
    font-size: 17px;

    position: absolute;
    bottom: 15px;
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