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
    height: 60vh;

    display: flex;
    flex-wrap: wrap;
    column-gap: 50px;

    margin-top: 60px;
  `

  S.Wrapper = styled.div`
    width: 400px;
    height: 140px;

    margin-bottom: 50px;

    cursor: pointer;
  `

  S.Wrap = styled.div`
    & img {
      width: 180px;
      height: 140px;
      border-radius: 20px;
      object-fit: cover;
    }

    display: flex;
  `

  S.Right = styled.div`
    padding: 10px 5px 10px 20px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    & p.title {
      font-size: 16px;
      font-weight: 700;
    }

    & p.content {
      font-size: 15px;
      font-weight: 400;
      margin-bottom: 29px;
    }

  `

  S.Writer = styled.div`
    display: flex;
    gap: 8px;

    & p.writer {
      font-size: 15px;
      color: #797979;
    }

    & p.read {
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
    }

    & p.date {
      font-size: 15px;
      color: #797979;
    }
  `

export default S;
