// 커뮤니티 댓글 신고 페이지 스타일

import styled from "styled-components";
import { backgroundBlack } from "../../../global/common";

const S = {};

S.Wrapper = styled.div`
    background-color: #444444;
    padding: 20px;
`;

S.SubWrapper = styled.div`
    ${backgroundBlack}
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 140px;
    margin-right: 140px;
`;

S.TopTitle = styled.h1`
    font-size: 20px;
    display: flex;
    margin-left: 20px;
    margin-top: 50px;
`;

S.Line1 = styled.div`
    border-bottom: 2px solid #ffd400;
    margin-left: 20px;
    margin-right: 1000px;
`;

S.ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    margin-top: 20px;

    h2 {
        font-size: 18px;
        font-weight: bold;
        color: #ffd400;
    }
`;

S.CommentItem = styled.div`
    padding: 10px;
    background-color: #222;
    color: #fff;
    margin-bottom: 20px;
    border-radius: 4px;

    .user {
        font-size: 14px;
        font-weight: bold;
        color: #ffd400;

        span {
            margin-left: 8px;
            font-size: 12px;
            font-weight: bold;
            color: #ffd400;
        }
    }

    .content {
        margin-top: 5px;
        font-size: 14px;
    }

    .date {
        margin-top: 5px;
        font-size: 12px;
        font-weight: thin;
        color: #aaa;
    }
`;

S.ReasonSelect = styled.div`
    select {
        width: 100%;
        padding: 10px;
        font-size: 14px;
        background-color: #333;
        color: #fff;
        border: 1px solid #555;
        border-radius: 4px;
    }
`;

S.CommentInput = styled.div`
    textarea {
        width: 100%;
        height: 100px;
        padding: 10px;
        font-size: 14px;
        border: 1px solid #555;
        border-radius: 4px;
        resize: none;
        background-color: #333;
        color: #fff;
    }
`;

S.ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;

    button {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        background-color: ${({ theme }) => theme.PALLETE.gray["300"]};
        border: none;
        border-radius: 50px;
        padding: 12px 20px;
        cursor: pointer;

        &:hover {
            background-color: #ffd400;
            color: black;
        }
    }
`;

export default S;
