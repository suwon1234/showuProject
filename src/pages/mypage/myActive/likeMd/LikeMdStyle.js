import styled from 'styled-components';

const S = {};

  S.Container = styled.div`
    width: 900px;
    height: 90vh;

    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 30px;
  `

  S.Wrapper = styled.div`
    width: 373px;
    height: 360px;

    position: relative;
  `

  S.Image = styled.div`
    & img {
      width: 373px;
      height: 269px;
    }
  `

  S.Content = styled.div`

    /* & p:first-child {
      font-size: 12px;
      font-weight: 700;
      color: #ffd400;
      margin-top: 10px;
    } */

    & p:nth-child(1) {
      font-size: 17px;
      font-weight: 400;
      margin-top: 10px;
    }

    & p:nth-child(2) {
      font-size: 18px;
      font-weight: 700;
      margin-top: 10px;
    }

    & svg.heart {
      position: absolute;
      top: 15px;
      right: 15px;
      color: #ffd400;
    }
  `



export default S;