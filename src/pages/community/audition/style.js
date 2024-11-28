// Audition 스타일

import styled  from "styled-components";

    const S = {};
    S.Wrapper = styled.div` // 전체 배경 gray
    background-color: #444444;      
    ` 
    S.SubWrapper = styled.div` // 내용 black 배경
    background-color: #000;
    margin-left: 140px;
    margin-right: 140px;
`

    S.TopTitle = styled.div` // 상단 Audition title
        font-size: 30px;
        font-weight: bold;
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
        font-size: 30px;
        font-weight: bold;
        margin-top: 10px;
    `
    S.SubTitle = styled.div` // 페이지 서브 타이틀
        font-size: 20px;
        margin-top: 23px;
        margin-left: 8px;
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
            color: #fff;
            border: 1px solid #ffd400;
            cursor: pointer;

            &:hover { // 버튼 호버
                background-color: #ffd400;
                color: #000;
        }
    }`

    S.ImageWrapper = styled.div` 
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        justify-items: center;
        margin-top: 20px;
        padding-left: 200px;
        padding-right: 200px;
    `;

    S.Images= styled.div` 
        position: relative;
        overflow: hidden;
        width: 250px;
        height: 300px; 
        object-fit: cover;

        border-radius: 10px;
        cursor: pointer;
  
        img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
  
            &:hover img {
                transform: scale(1.1); 
            }
    `;

    S.Info= styled.div` // 호버 정보 표시
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6); // 어두운 배경
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
  
        h3 {
            margin: 0;
            font-size: 20px;
        }
  
        p {
            font-size: 15px;
            text-align: center;
             margin-top: 10px;
        }
  
            &:hover {
                opacity: 1; // 호버 시 정보 표시
            }
    `;

export default S;