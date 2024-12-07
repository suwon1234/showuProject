import styled from 'styled-components';

const S = {};

  S.Conatiner = styled.div`
    width: 900px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
  `

  S.Wrapper = styled.div`
    width: 400px;
    height: 144px;

    border-top: 0.3px solid #444444;
    border-bottom: 0.3px solid #444444;

    margin-top: 10px;

    position: relative;

    & p {
      font-size: 16px;
      font-weight: 700;
      margin-top: 10px;
    }

    & svg.heart {
      position: absolute;
      top: 15px;
      right: 15px;

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
      font-size: 13px;
      font-weight: 400;

      width: 62px;
      height: 14px;
      text-align: left;

      padding-top: 5px;
    }

    & td {
      font-size: 13px;
      font-weight: 400;
    }
  `

  
export default S;