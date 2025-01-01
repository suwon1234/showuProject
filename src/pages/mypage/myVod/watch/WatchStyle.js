import styled from 'styled-components';

const S = {};

  S.Container = styled.div`
    width: 900px;
    height: 100vh;

    & p.edit {
      text-align: right;
      color: #ffd400;
      cursor: pointer;
    }
  `

  S.Wrapper = styled.div`
    width: 100%;
    height: 200px;

    display: flex;
    flex-wrap: wrap;

    column-gap: 50px;
    row-gap: 40px;
  `

  S.Item = styled.div`
    display: flex;
    align-items: center;
  `

  S.Image = styled.div`
    display: flex;

    & img {
      width: 240px;
      height: 200px;
      object-fit: cover;
    }
  `

  S.Title = styled.div`
    & p {
      margin-left: 10px;
    }
  `

export default S;