// 제보하기 스타일

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
        padding: 30px;
    `

    S.Titles = styled.div` // 페이지 메인 타이틀 All
        display: flex;
        margin: 20px;
    
    `

    S.MainTitle = styled.div` // 페이지 메인 타이틀
        font-size: ${({ theme }) => theme.FONT_SIZE.h3};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        margin-top: 10px;    
    `

    S.SubTitle = styled.div` // 페이지 서브 타이틀
        font-size: ${({ theme }) => theme.FONT_SIZE.h7};
        margin-top: 23px;
    margin-left: 8px;
    `


    S.TitleContainer = styled.div`
        display: flex;
        justify-content: center;
        text-align: center ; 
        margin-bottom: 40px;

        .textDiv {
            text-align: left;
            max-width: 800px;
        }
    `;

    S.TitleBig = styled.h1`
        font-size: ${({ theme }) => theme.FONT_SIZE.h4};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    `;

    S.TitleSmall = styled.div`
        font-size: ${({ theme }) => theme.FONT_SIZE.h6};
        color: white;
    `;
  

    S.Input = styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 40px;
        

        label {
            font-size: ${({ theme }) => theme.FONT_SIZE.h7};
            margin-bottom: 5px;
        }

        input {
            padding: 10px;
            font-size: ${({ theme }) => theme.FONT_SIZE.h7};
            border: 1px solid #ffd400;
            border-radius: 4px;
            color: #ffd400;
            background-color: #000;
            
        }

        div {
            text-align: left;
            display: flex;
            flex-direction: column;
        }

        .textArea{
            
        }
    `;

    S.section = styled.div`
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
  
        p {
            font-size: ${({ theme }) => theme.FONT_SIZE.h7};
            font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
        }
  
        div {
            margin-bottom: 10px;
            text-align: left;
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


   