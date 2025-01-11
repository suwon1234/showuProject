import styled from 'styled-components';

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
    width: 900px;
    height: 90vh;

    display: flex;
    flex-wrap: wrap;
    row-gap: -20px;
    column-gap: 10px;
  `

  S.Wrapper = styled.div`
    width: 250px;
    height: 365px;

    margin: 0;
  `

  S.Image = styled.div`
    & img {
      width: 250px;
      height: 333px;
      border-radius: 8px;
      object-fit: cover;
    }

    position: relative;

    & .heart {
        position: absolute;
        top: 4.5%;
        right: 7%;
      }
  `

  S.Content = styled.div`
    & p:first-child {
      font-size: 17px;
      font-weight: 700;
      padding: 5px;
    }

    & p:nth-child(2),
    :nth-child(3){
      font-size: 14px;
      font-weight: 400;
      padding: 5px;
    }
  `

export default S;