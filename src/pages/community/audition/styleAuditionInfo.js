// 오디션 세부 페이지 스타일

import styled  from "styled-components"
import { backgroundBlack } from "../../../global/common";

    const S = {};

    S.Wrapper = styled.div`
        background-color: #444444; 
    `;

    S.SubWrapper = styled.div`
        ${backgroundBlack}
        margin-left: 140px;
        margin-right: 140px;
    `;

    S.imageWrapper = styled.div`
        display: flex;
        justify-content: center;
        padding: 30px;
        img{           
            width: 40%;
            height: 100%;
            object-fit: cover;
        }
      
    `;

export default S;