// 제보 내역 상세 페이지 스타일

import styled  from "styled-components";
import { backgroundBlack } from "../../../global/common";


const S = {};

    S.Wrapper = styled.div` // 전체 배경 gray
        background-color: #444444;      
        color: white;
        padding: 40px;
        display: flex;
        flex-direction: column;
    `;

    S.SubWrapper = styled.div` // 내용 black 배경
        ${backgroundBlack}
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-left: 140px;
        margin-right: 140px;
    `

    S.Title = styled.h1`
        font-size: 20px;
        font-weight: bold;
        margin-top: 30px;
        margin-bottom: 20px;
        text-align: left;
    `;

    S.Content = styled.p`
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 40px;
        text-align: left;
    `;

    S.Date = styled.p`
        font-size: 14px;
        color: gray;
    `;

    S.buttonWrapper = styled.div`
        display: flex;
        justify-content: center;
        gap: 10px;

        button {          
            padding: 10px;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            background-color: ${({ theme }) => theme.PALLETE.gray["300"]};
            border: none;
            border-radius: 50px;
            cursor: pointer;

            &:hover {
            background-color: #ffd400; 
            color: black; 
        }
    }`

    S.ErrorMessage = styled.div`
        font-size: 20px;
        font-weight: bold;
        margin-top: 200px;

        justify-content: center;
        text-align: center;
    `
    

export default S;


