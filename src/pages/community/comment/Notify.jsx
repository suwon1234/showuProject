// 커뮤니티 댓글 신고 페이지

import React from 'react';
import S from './styleNotify';
import { Navigate, useNavigate } from 'react-router-dom';

const Notify = () => {
    const navigate = useNavigate();

    const handleNotifyButton = () => {
        const isConfirmed = window.confirm("신고가 완료되었습니다.");
        if (isConfirmed) {
            alert("커뮤니티 홈 화면으로 이동합니다.");
            navigate('/community'); 
        }
    };

    const handleCanceledButton = () => {
        const isCanceled = window.confirm("신고를 취소하시겠습니까?");
        if (isCanceled) {
            alert("커뮤니티 홈 화면으로 이동합니다.");
            navigate('/community'); 
        }
    };
    

    return (
        <S.Wrapper>
            <S.SubWrapper>
                <S.TopTitle>신고하기</S.TopTitle>
                <S.Line1 />
                <S.ContentWrapper>
                    <h2>신고 사유</h2>
                    <S.ReasonSelect>
                        <select>
                            <option value="choose">선택</option>
                            <option value="spam">스팸</option>
                            <option value="abuse">폭력적 내용 / 욕설</option>
                            <option value="other">기타</option>
                        </select>
                    </S.ReasonSelect>

                    <S.CommentInput>
                        <textarea placeholder="신고 사유를 자세히 작성해주세요" />
                    </S.CommentInput>

                    <S.ButtonGroup>
                        <button onClick={handleCanceledButton}>취소</button>
                        <button onClick={handleNotifyButton}>신고 완료</button>
                    </S.ButtonGroup>

                </S.ContentWrapper>
            </S.SubWrapper>
        </S.Wrapper>
    );
};

export default Notify;
