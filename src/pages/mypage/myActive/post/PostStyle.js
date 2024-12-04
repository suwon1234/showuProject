import styled from 'styled-components';

const S = {};

  S.Container = styled.div`
    width: 900px;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    column-gap: 5%;
    row-gap: 30px;
  `

  S.Wrapper = styled.div`
    width: 360px;
    height: 320px;
  `

  S.Image = styled.div`
    width: 360px;
    height: 280px;

    & img {
      border-radius: 4px;
    }
  `

  S.Title = styled.div`

    & p:first-child {
      font-size: 17px;
      font-weight: 700;
      margin-top: 8px;
    }

    & p:last-child {
      font-size: 15px;
      font-weight: 400;
    }
  `

export default S;