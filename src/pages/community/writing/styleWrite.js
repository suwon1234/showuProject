// 커뮤니티 글쓰기 페이지 스타일

import styled  from "styled-components";
import { backgroundBlack } from "../../../global/common";

const S = {};

    S.Wrapper = styled.div` // 전체 배경 gray
        background-color: #444444;      
    `

    S.SubWrapper = styled.div`
        ${backgroundBlack}
        margin-left: 140px;
        margin-right: 140px;
    `