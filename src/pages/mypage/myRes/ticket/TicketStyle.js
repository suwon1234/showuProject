import styled from 'styled-components';

const S = {};

  S.Container = styled.div`
    width: 100%;
    height: 110%;

    margin-top: 60px;

    display: flex;
    flex-wrap: wrap;
    column-gap: 7%;
    row-gap: 80px;

  `

  S.Wrapper = styled.div`
    width: 400px;
    height: 200px;

    display: flex;

    cursor: pointer;

    /* border: 1px solid #444444; */
    border-radius: 5px;
    background-color: #fff;

    position: relative;
  `

  S.Img = styled.div`

    & img {
      width: 140px;
      height: 200px;

      border-radius: 5px;
    }

    & div.top{
      width: 25px;
      height: 12.5px;

      border-radius: 0 0 12.5px 12.5px;
      background-color: black;

      position: absolute;
      top: 0;
      right: 130px;
    }

    & div.bottom{
      width: 25px;
      height: 12.5px;

      border-radius: 12.5px 12.5px 0 0;
      background-color: black;

      position: absolute;
      bottom: 0;
      right: 130px;
    }
  `

  S.RightContent = styled.div`
    width: 400px;
    height: 200px;

    display: flex;
    flex-direction: column;

    position: relative;

    border-left: 3px dotted #444444;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: 1px dotted #444444;

    /* border-bottom: 1px solid #444444; */
    & p {
      font-size: 17px;
      margin: 10px 0 0 10px;

      color: black;
    }

    & p.date{
      font-size: 17px;
    }

    & p.ticketName{
      font-size: 18px;
      font-weight: 700;
    }

    & p.state {
      font-size: 17px;
      color: #ffd400;

      position: absolute;
      bottom: 10px;
      right: 20px;
    }
  `

export default S;