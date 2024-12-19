// 커뮤니티 댓글 수정 메인 페이지 스타일

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

    S.TopTitle = styled.div` 
        font-size: 30px;
        font-weight: bold;
        color: #ffd400;
        justify-content: center;
        display: flex;
        padding-top: 30px;
    `

    S.IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
        height: 100%;

        .icon{
            font-size: 20px;
            padding-bottom: 50px;

            path {
                color : #ffd400;
        }
    }
    `

    S.TitleContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 20px; 
    `;

    S.Title = styled.div`
        margin-top: 50px;

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
            margin-left: 100px;
        }
        }
    `;

    

    S.TableWrapper = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 300px;
        margin-top: 30px;
        

        table {
            width: 1000px;
            margin-bottom: 500px;

            thead {
                background-color: #ffd400;

            th {
                padding: 15px;
                text-align: left;
                font-size: 18px;
                color: #000;
                font-weight: bold;
            }
        }

            tbody {         

            tr {
                border-bottom: 1px solid #444;
            }

            td {
                padding: 10px;
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;

                .linkStyle {
                    &:hover {
                        color: #ffd400;
                        }
                    }
                }
            }
        }
    `;

    S.PageNumber = styled.div`
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 10px;
        margin-bottom: 50px;

        span {
            cursor: pointer;
            color : #444;  

            &:hover {
                color: #ffd400;; 
                }
        }

        p {
            cursor: pointer;
            color : #ffd400;  
        }
    `


S.buttonWrapper = styled.div`
        display: flex;     
        gap: 2px;

        button {
            display: flex;
            padding: 0px;
            font-size: 18px;
            font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
            color: #fff;
            background-color: #000;
            border: 1px solid #ffd400;
            height: 30px;
            justify-content: center;
            align-items: center;
            border-radius: 50px;
            cursor: pointer;

            &:hover {
                background-color: #ffd400;
                color: #000 !important;
            }
        }
    `

export default S;