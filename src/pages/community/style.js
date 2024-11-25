// Community main style

import styled  from "styled-components";
import { backgroundBlack } from "../../global/common";

const S = {};
    S.Wrapper = styled.div` // 전체 배경 gray
        background-color: #444444;      
    `

    S.TopTitle = styled.div` // 상단 News title
        font-size: 30px;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        color: #ffd400;
        justify-content: center;
        display: flex;
        padding: 30px;
    `

    S.SubWrapper = styled.div` // 내용 black 배경
        ${backgroundBlack}
        margin-left: 140px;
        margin-right: 140px;
    `

    S.ButtonsAll = styled.div` // 상단 버튼들
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;

        div { // 버튼 간격
            display: flex;
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
        }
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
    S.ImageWrapper = styled.div` 
    width: 200px;
    height: 150px; 
    margin-right: 20px;
    flex-shrink: 0;
  
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* border-radius: 8px;  */
        }
    `;

    S.NewsList = styled.div`
        display: flex;
        flex-direction: column;
    `;

    S.NewsContent = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;

    S.NewsItem = styled.div`
        padding: 20px;
        border-bottom: 1px solid ${({ theme }) => theme.PALLETE.gray["200"]};
        display: flex;
        flex-direction: row;
        align-items: center;
        color: ${({ theme }) => theme.PALLETE.white};
    `;

    S.NewsTitle = styled.div`
        font-size: ${({ theme }) => theme.FONT_SIZE.h5};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    `;

    S.NewsDescription = styled.div`
        margin-top: 8px;
        margin-bottom: 8px;
        font-size: ${({ theme }) => theme.FONT_SIZE.h7};
        color: ${({ theme }) => theme.PALLETE.gray["300"]};
    `;

export default S;


