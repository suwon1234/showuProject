// 커뮤니티 글쓰기 내역 페이지 스타일

import styled  from "styled-components";
import { backgroundBlack } from "../../../global/common";

const S = {};

    S.Wrapper = styled.div`
        background-color: #444444; 
    `

    S.SubWrapper = styled.div` // 전체 배경 black
        ${backgroundBlack}  
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-left: 140px;
        margin-right: 140px;
    `;

    


export default S;