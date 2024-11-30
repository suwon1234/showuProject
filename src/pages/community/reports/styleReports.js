// 제보내역 스타일

import styled from "styled-components";
import { backgroundBlack } from "../../../global/common";

const S = {};

    S.Wrapper = styled.div`
        background-color: #444444;
         
    `

    S.SubWrapper = styled.div`
        ${backgroundBlack}  
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-left: 140px;
        margin-right: 140px;
    `;

    S.Title = styled.div`
        display: flex;
        
        align-items: center;
        margin-bottom: 20px;

        h1 {
            font-size: 24px;
            font-weight: bold;
        }

        div {
            font-size: 24px;
            cursor: pointer;
        }

        & p {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 93px;
    }
    `;

    S.SubTitle = styled.div`
        margin: 20px 0;

        & ul {
        display: flex;
        gap: 25px;

         & li {
            padding-bottom: 3px;
            border-bottom: 3px solid #ffd400;
            color: #fff;
        }
        }
    `;

    

    S.TableWrapper = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 400px;
        margin-top: 200px;

        table {
            width: 1000px;
            margin-bottom: 500px;

            thead {
                background-color: #ffd400;

            th {
                padding: 10px;
                text-align: left;
                font-size: 16px;
            }
        }

            tbody {
                background-color: #222;

            tr {
                border-bottom: 1px solid #444;

                &:hover {
                    background-color: #333;
                    color: #ffd400;
                }
            }

            td {
                padding: 10px;
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                }
            }
        }
    `;

S.Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  span {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #444;
    color: white;

    &:hover {
      background-color: #ffd400;
      color: black;
    }
  }
`;

export default S;
