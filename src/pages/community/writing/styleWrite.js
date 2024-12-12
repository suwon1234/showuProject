// 커뮤니티 글쓰기 페이지 스타일

import styled  from "styled-components";
import { backgroundBlack } from "../../../global/common";



const S = {};

    S.Wrapper = styled.div`
        background-color: #444444; 
    `

    S.box = styled.div`
        background-color: #ffd400;
        height: 40px;
        margin-bottom: 50px;
        color: #000;
        font-weight: bold;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    `

    S.SubWrapper = styled.div` // 전체 배경 black
        ${backgroundBlack}  
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-left: 140px;
        margin-right: 140px;
`;

S.IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
        height: 100%;
        padding-bottom: 50px;

        .icon{
            font-size: 20px;

        path {
            color : #ffd400;
        }
    }
    `

    S.border = styled.div`
        border: 1px solid ${({ theme }) => theme.PALLETE.gray["600"]};
        max-width: 900px;
        margin: 0 auto;
        padding: 10px 70px 20px 70px;
    `

    S.TopTitle = styled.div` // 상단 News title
        font-size: 30px;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        color: #ffd400;
        justify-content: center;
        display: flex;
        padding-top: 30px;
    `

    S.Titles = styled.div` // 페이지 메인 타이틀 All
        display: flex;
        margin: 20px;
        justify-content: space-between;
    
    `

    S.ButtonsAll = styled.div` // 상단 버튼들
    display: flex;
    
    padding: 10px 20px;

    div { // 버튼 간격
        display: flex;
        gap: 8px; 
    }

    button { // 버튼 스타일
        border-radius: 50px;
        padding: 10px 15px;
        margin-left: 5px;
        margin-right: 5px;
        background-color: black;
        color: ${({ theme }) => theme.PALLETE.white};
        border: 1px solid #ffd400;
        cursor: pointer;

        &:hover { // 버튼 호버
            background-color: #ffd400;
            color: #000;
        }
    }`

    S.TitleBig = styled.h1`
        font-size: ${({ theme }) => theme.FONT_SIZE.h4};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    `;

    S.TitleSmall = styled.div`
        font-size: ${({ theme }) => theme.FONT_SIZE.h6};
        color: white;
    `;

    S.call = styled.div`
        margin-top: 10px;
        display: flex;
        flex-direction: column;
    `;
  

    S.Input = styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 40px;
        

        label {
            font-size: 16px;
            margin-bottom: 5px;
        }

        input {
            width: 553px;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ffd400;
            border-radius: 4px;
            color: #fff;
            background-color: #000;
            
        }

        div {
            text-align: left;
            display: flex;
            flex-direction: column;
        }

        textArea {
            width: 100%; 
            height: 450px; 
            border: 1px solid #ffd400;
            border-radius: 5px;
            padding: 10px;
            font-size: 16px;
            color: #fff;
            background-color: #000; 
            resize: none; 
        }
    `;

    S.ReasonSelect = styled.div`
    select {
        width: 100%;
        padding: 10px;
        font-size: 14px;
        background-color: #000;
        color: #fff;
        border: 1px solid #ffd400;
        border-radius: 4px;
    }
    `;



    S.FileInput = styled.input`
        &:hover {
        background-color: #ffd400; 
        color: black; 
    }
    `

    S.buttonWrapper = styled.div`
        display: flex;
        justify-content: center;
        gap: 10px;

        button {          
            padding: 10px;
            font-size: ${({ theme }) => theme.FONT_SIZE.h6};
            font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
            color: ${({ theme }) => theme.PALLETE.white};
            background-color: ${({ theme }) => theme.PALLETE.gray["300"]};
            border: none;
            border-radius: 50px;
            cursor: pointer;

            &:hover {
            background-color: #ffd400; 
            color: black; 
        }
    }`



 export default S;