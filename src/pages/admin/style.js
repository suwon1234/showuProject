import styled from 'styled-components'

const S = {};

  S.Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
  `

  S.LeftSection = styled.div`
    width: 250px;
    height: 100%;
  `
  S.Title = styled.ul`

    & li:first-child {
      font-size: 25px;
      margin-bottom: 5px;
    }

    & li:nth-child(2){
      font-size: 16px;
    }
  `

  S.Ul = styled.ul`
    margin: 20px 0;

    & li {
      margin-bottom: 5px;
    }

    & li:nth-child(1) {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 15px;
    }

    & li:last-child() {
      font-size: 16px;
      font-weight: 500;
    }

    & hr {
      width: 230px;
      border: none;
      border-bottom: 0.5px solid #ffd400;
      text-align: center;
      margin-top: 25px;
    }
  `

export default S;