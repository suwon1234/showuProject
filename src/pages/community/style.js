// Community main style

import styled  from "styled-components";
import { backgroundBlack } from "../../global/common";

const S = {};

    S.TopTitle = styled.div` // 상단 News title
        font-size: 30px;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        color: #ffd400;
        justify-content: center;
        display: flex;
        padding: 30px;
    `

    S.Wrapper = styled.div` // 전체 배경 gray
        background-color: #444444;      
    `

    S.SubWrapper = styled.div`
        ${backgroundBlack}
        margin-left: 140px;
        margin-right: 140px;
    `

    S.Buttons = styled.div`
        padding-top: 80px;
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 40px;
        margin-bottom: 60px;

        button {
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
        }
    `;

    S.Info = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        justify-items: center;
        margin-top: 20px;
        padding-left: 250px;
        padding-right: 250px;
    `;

    S.Img = styled.div`
        width: 300px;
        height: 250px; 
        margin-bottom: 100px;
        flex-shrink: 0; 
        text-align: left;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        h3 {
            margin-top: 5px;
            font-size: 20px;
            color: #fff;
        }

        p {
            font-size: 15px;
            color: #fff;
        }
    `;



export default S;


