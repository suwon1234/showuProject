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
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;

    margin-top: 60px;
  `

  S.Warpper = styled.div`
    width: 400px;
    height: 360px;

    position: relative;
    
  `

  S.Image = styled.div`
    
    & img {
      width: 400px;
      height: 250px;
      border-radius: 10px;
    }
    
  `
  S.Content = styled.div`
    margin: 15px 5px 5px 5px;

    & p.spaceName {
      font-size: 15px;
      margin-bottom: 5px;
    }

    & p.likeCount {
      font-size: 15px;
    }

    & p.type,
    p.area,
    p.price {
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 5px;
    }
  `


  S.Title = styled.div`
    display: flex;
    gap: 170px;
    align-items: center;
    justify-content: space-between;

    & .heartBox {
      display: flex;
      gap: 5px;
      align-items: center;
    }

    & svg.heart{
      position: absolute;
      top: 15px;
      right: 15px;
    }
  `

export default S;