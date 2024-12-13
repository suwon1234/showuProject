import styled from 'styled-components';

const S = {};

  S.Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    row-gap: 100px;
    column-gap: 10px;
  `

  S.Warpper = styled.div`
    width: 290px;
    height: 290px;
    
  `

  S.Image = styled.div`
    position: relative;

    & img {
      width: 290px;
      height: 290px;
      border-radius: 10px;
    }
  `


  S.Content = styled.div`
    margin: 5px;

    & p:first-child {
      font-size: 17px;
      font-weight: 700;
    }

    & p:nth-child(2) {
      margin: 10px 0;
      font-size: 15px;
      font-weight: 700;
      
    }

  `


  S.Title = styled.div`
    width: 293px;
    display: flex;
    gap: 80px;
    justify-content: space-between;

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

// 반납 완료 시 이미지 배경 비활성화
  S.Overlay = styled.div`
    background-color: rgb(0, 0, 0, 0.5);
    width: 290px;
    height: 290px;
    border-radius: 10px;

    position: absolute;
    top: 0;

    & p{
      font-size: 30px;
      font-weight: 800;
      text-align: center;
      line-height: 8;
    }

  `

  

export default S;