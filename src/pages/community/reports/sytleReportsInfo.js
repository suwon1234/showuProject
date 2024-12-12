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
        margin-top: 20px;
        margin-left: 140px;
        margin-right: 140px;
    `

    S.Title = styled.h1`
       font-size: 18px;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};;
        display: flex;
        margin-left: 20px;
        margin-top: 30px;
    `;

    S.Content = styled.p`
        font-size: 18px;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
        display: flex;
        margin-left: 20px;
        margin-top: 30px;
    `;

    S.Content2 = styled.p`
        font-size:20px;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        display: flex;
        margin-left: 20px;
        margin-top: 30px;
    `;

    S.Date = styled.p`
        font-size: 14px;
        color: gray;
    `;

    S.buttonWrapper = styled.div`
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;

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

    S.TopTitle = styled.div` // 상단 News title
        font-size: 30px;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
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

    S.Titles = styled.div` // 페이지 메인 타이틀 All
        display: flex;
        margin: 20px;

    `

    S.MainTitle = styled.div` // 페이지 메인 타이틀
        font-size: ${({ theme }) => theme.FONT_SIZE.h3};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        margin-top: 0px;
           
    `

    S.SubTitle = styled.div` // 페이지 서브 타이틀
        font-size: ${({ theme }) => theme.FONT_SIZE.h7};
        margin-top: 14px;
        margin-left: 8px;
    `

    S.Section = styled.div`
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;

        p {
            font-size: 16px;
            font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
        }

        div {
            margin-bottom: 10px;
            text-align: left;
        }
    `
     S.Line2 = styled.div`
        border-bottom: 2px solid #ffd400;
        margin-left: 20px;
        margin-right: 1000px;
        margin-top: 10px;
 `
    

export default S;


