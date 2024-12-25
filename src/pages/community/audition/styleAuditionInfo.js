// 오디션 세부 페이지 스타일

import styled  from "styled-components"
import { backgroundBlack } from "../../../global/common";

    const S = {};

    S.Wrapper = styled.div`
        background-color: #444444; 
    `;

    S.TopTitle = styled.div` 
        font-size: 30px;
        font-weight: bold;
        color: #ffd400;
        justify-content: center;
        display: flex;
        padding-top: 30px;
    `

    S.Titles = styled.div` 
        display: flex;
        margin: 20px;

    `  

    S.MainTitle = styled.div` 
        font-size: ${({ theme }) => theme.FONT_SIZE.h3};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        margin-top: 20px;
    `
    S.SubTitle = styled.div`
        font-size: ${({ theme }) => theme.FONT_SIZE.h7};
        margin-top: 34px;
        margin-left: 8px; 
    `

    S.Line2 = styled.div`
        border-bottom: 2px solid #ffd400;
        margin-left: 20px;
        margin-right: 800px;
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

    S.SubWrapper = styled.div`
        ${backgroundBlack}
        margin-left: 140px;
        margin-right: 140px;
    `;

    S.imageWrapper = styled.div`
        display: flex;
        justify-content: center;
        padding: 30px;
        margin-top: 40px;
        img{           
            width: 40%;
            height: 100%;
            object-fit: cover;
        }
      
    `;

export default S;