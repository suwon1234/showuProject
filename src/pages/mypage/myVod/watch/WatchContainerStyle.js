import styled from 'styled-components';

const S = {};

  S.Container = styled.div`
    width: 100%;
    height: 800px;
    margin: 130px 0;
  `

  S.Wapper = styled.div`
    width: 100%;
    height: 800px;
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

      & li:nth-child(3) {
        padding-bottom: 3px;
        border-bottom: 3px solid #ffd400;
        color: #fff;
      }
    }
  `

 





export default S;