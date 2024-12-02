import styled from 'styled-components';

const S = {};

  S.Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  `

  S.Warpper = styled.div`
    width: 400px;
    height: 300px;
    
  `

  S.Image = styled.div`

    & img {
      width: 400px;
      height: 250px;
      border-radius: 20px;
    }
    
  `
  S.Content = styled.div`
    margin: 10px 0 0 20px;

    & p:first-child {
      font-size: 17px;
      font-weight: 700;
    }

    & p:nth-child(2) {
      margin: 5px 0 10px 0;
      font-size: 15px;
      font-weight: 700;
      
    }

  `


  S.Title = styled.div`
    display: flex;
    gap: 90px;

    & .heartBox {
      display: flex;
      gap: 5px;
      align-items: center;

      & p {
        margin: 0;
      }


      & .heart {
        width: 15px;
        height: 15px;
      }

    }
  `

  

export default S;