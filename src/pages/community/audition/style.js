// Audition 스타일

import styled  from "styled-components";
import { backgroundBlack } from "../../../global/common";

const S = {};
    S.Wrapper = styled.div` // 전체 배경 gray
    background-color: #444444;      
    ` 
    S.SubWrapper = styled.div` // 내용 black 배경
    ${backgroundBlack}
    margin-left: 140px;
    margin-right: 140px;
`

    S.TopTitle = styled.div` // 상단 Audition title
        font-size: ${({ theme }) => theme.FONT_SIZE.h3};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        color: #ffd400;
        justify-content: center;
        display: flex;
        padding: 30px;
    `

    S.ButtonsAll = styled.div` // 상단 버튼들
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;

        div { // 버튼 간격
            display: flex;
            flex-direction: row;
            gap: 8px; 
        }

        button { // 버튼 스타일
            border-radius: 50px;
            padding: 10px 15px;
            background-color: black;
            color: ${({ theme }) => theme.PALLETE.white};
            border: 1px solid #ffd400;
            cursor: pointer;

            &:hover { // 버튼 호버
                background-color: #ffd400;
                color: ${({ theme }) => theme.PALLETE.black};
        }
    }`

    S.ImageWrapper = styled.div` 
        width: 300px;
        height: 500px; 
        margin-right: 20px;
        flex-shrink: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            /* border-radius: 8px;  */
        }
    `;

export default S;