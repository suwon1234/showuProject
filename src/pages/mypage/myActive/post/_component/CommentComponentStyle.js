import styled from 'styled-components';

const S = {};

  S.Container = styled.div`
    width: 900px;
    height: 100vh;
  `

  S.Wrapper = styled.div`
    width: 900px;
    height: 90px;
    border: 1px solid #444444;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 20px;

    &:hover {
      border: 1px solid #ffd400;
      cursor: pointer;
    }
  `

  S.Write = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    & img {
      width: 30px;
      height: 30px;
      border-radius: 50px;
    }

    & p {
      margin-top: 5px;
    }

    & p.wirter{
      font-size: 17px;
      font-weight: 700;
    }

    & p.date{
      font-size: 13px;
      font-weight: 400;
      color: #797979;
    }
  `

  S.Title = styled.div`
    display: flex;
    gap: 680px;
  `

  S.Content = styled.div`
    & p {
      margin-top: 10px;
      font-size: 14px;
    }
  `


  


export default S;