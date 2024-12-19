import styled from 'styled-components';

const S = {};

  S.Container = styled.div`
    display: 100%;
    height: 100vh;
  `

  S.Wrapper = styled.div`
    width: 900px;
    
    border: 1px solid #444444;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 20px;

    & p.content {
      margin-top: 5px;
    }
  `

  S.Title = styled.div`
    display: flex;
    align-items: center;

    & img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    & p.productName {
      font-size: 17px;
      font-weight: 700;
    }

    & p.writer {
      font-size: 14px;
      font-weight: 400;
    }
  `

  S.RightBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    padding: 5px 0;
    margin-left: 20px;
  `

  S.Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    & p.date {
      font-size: 14px;
      color: #797979;
      margin-left: 5px;
    } 
  `

export default S;