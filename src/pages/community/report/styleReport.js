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

        textArea {
            width: 100%; 
            height: 450px; 
            border: 1px solid #ffd400;
            padding: 10px;
            font-size: 16px;
            color: #fff;
            background-color: #000; 
            resize: none; 
        }
    `;

    S.section = styled.div`
        display: flex;
        flex-direction: column;
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

    S.CheckIcon = styled.div`
        cursor: 'pointer';
        display: 'flex'; 
        align-Items: 'center';
        gap: 10px;
            .icon {
                margin-Right: '10px';
            }
    `

    S.CheckWrapper = styled.div`
        border: 1px solid ${({ theme }) => theme.PALLETE.gray["600"]};
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 10px;
        gap: 10px;

            p {
            margin: 0;
            }
    `

    S.buttonWrapper = styled.div`
        display: flex;
        justify-content: center;
        gap: 10px;
        padding-top: 20px;

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


    S.CheckboxWrapper = styled.div`
        display: flex;
        align-items: center;

        & span {
        margin-left: 5px;
        }
    `

    S.Checkbox = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        & input[type="checkbox"] {
          /* 기본 체크박스 숨기기 */
            appearance: none; 
            -webkit-appearance: none; 
            width: 20px;
            height: 20px;
            border: 2px solid gray;
            border-radius: 50%;
            background-color: transparent;
            cursor: pointer;
            transition: background-color 0.3s, border-color 0.3s;
            position: relative;
        }

        /* 체크 상태 스타일 */
        & input[type="checkbox"]:checked {
              background-color: #444444;
              border-color: #444444;
        } 

        /* 체크 표시 아이콘 추가 */
        & input[type="checkbox"]:checked::before {
            content: ''; 
            position: absolute;
            top: 50%;
            left: 50%;
            width: 8px;
            height: 4px;
            border: solid white;
            border-width: 0 0 2px 2px;
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        label{
            margin-left: 5px;
        }
        `

    

export default S;


   