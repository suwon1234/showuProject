// News main style

import styled  from "styled-components";
import { backgroundBlack } from "../../../global/common";


const S = {};

    S.MainContents = styled.div`
        flex: 3;
    `
    S.Wrapper = styled.div` 
        background-color: #444444;      
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

    S.TopTitle = styled.div` 
        font-size: 30px;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        color: #ffd400;
        justify-content: center;
        display: flex;
        padding-top: 30px;
    `

    S.SubWrapper = styled.div` 
        ${backgroundBlack}
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-left: 140px;
        margin-right: 140px;
    `

    S.ButtonsAll = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;

        div { 
            display: flex;
            gap: 8px; 
        }

        button { 
            border-radius: 50px;
            padding: 10px 15px;
            background-color: black;
            color: #fff;
            border: 1px solid #ffd400;
            cursor: pointer;

            &:hover { 
                background-color: #ffd400;
                color: #000;
            }

        }
    `


        S.Titles = styled.div` 
            display: flex;
            margin: 20px;
        
        `
        S.MainTitle = styled.div` 
            font-size: ${({ theme }) => theme.FONT_SIZE.h3};
            font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
            margin-top: 0px;
        `
        S.SubTitle = styled.div` 
            font-size: ${({ theme }) => theme.FONT_SIZE.h7};
            margin-top: 14px;
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

        S.side = styled.div`
            width: 260px;
            position: fixed; 
            top: 500px; 
            right: 170px; 
            background-color: #222;
            border-radius: 8px;
            z-index: 100; 
        `;

        S.SideTitle = styled.h1`
            font-size: ${({ theme }) => theme.FONT_SIZE.h5};
            font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
            color: #000;
            background-color: #ffd400;
            justify-content: center;
            display: flex;
            margin-bottom: 20px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        `;

        S.SideItem = styled.div`
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            margin-left: 10px;

            img {
                width: 120px;
                height: 100px;
                object-fit: cover;
                margin-right: 12px;
            }

            span {
                font-size: ${({ theme }) => theme.FONT_SIZE.h7};
                color: ${({ theme }) => theme.PALLETE.white};
            }
        `;


    S.ScrollTop = styled.div`
        position: fixed;
        bottom: 30px;
        right: 40px;
        width: 40px;
        height: 40px;
        background-color: #ffd400;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 100;

        .upicon {
          font-size: 20px;

          path{
              color: #000 !important;
          }
        }
    
        &:hover {
          background-color: #ffb800;
        }


        `;

export default S;


