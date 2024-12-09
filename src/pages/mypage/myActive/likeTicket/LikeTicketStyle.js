import styled from 'styled-components';

const S = {};

  S.Conatiner = styled.div`
    width: 900px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 20px;
  `

  S.Wrapper = styled.div`
    width: 360px;
    height: 188px;

    /* border-top: 0.3px solid #444444;
    border-bottom: 0.3px solid #444444; */
    border-radius: 5px;
    border: 0.3px solid #444444;

    padding: 20px;

    position: relative;

    & p {
      font-size: 18px;
      font-weight: 700;
    }

    & svg.heart {
      position: absolute;
      top: 15px;
      right: 30px;

      & :hover{
        color: #ffd400;
      }
    }
  `

  S.Table = styled.table`
    width: 400px;
    height: auto;
    margin-top: 10px;
  `

  S.Tr = styled.tr`
    font-size:  15px;

    & th {
      color: #fff;
      font-size: 17px;
      font-weight: 400;

      width: 62px;
      height: 14px;
      text-align: left;

      padding-top: 5px;
    }

    & td {
      font-size: 17px;
      font-weight: 400;
      padding-left: 20px;
    }
  `

  
export default S;