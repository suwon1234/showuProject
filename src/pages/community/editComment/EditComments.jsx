// 커뮤니티 댓글 수정 세부 페이지

import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './styleEditComments';

const EditComments = () => {

    const navigate = useNavigate();

    const handleEditButton = () => {
        const isConfirmed = window.confirm("수정이 완료되었습니다.");
        if (isConfirmed) {
            alert("수정/삭제 메인 화면으로 이동합니다.");
            navigate('/community/write/history/edit'); 
        }
    };

    const handleCanceledButton = () => {
        const isCanceled = window.confirm("수정을 취소하시겠습니까?");
        if (isCanceled) {
            alert("수정/삭제 메인 화면으로 이동합니다.");
            navigate('/community/write/history/edit'); 
        }
    };


    return (
       <S.Wrapper>
            <S.SubWrapper>
                <S.TopTitle>댓글 수정하기</S.TopTitle>
                <S.Line1 />
                <S.ContentWrapper>
                    <h2>수정 내용</h2>                   
               
                        <S.CommentInput1>
                            <textarea placeholder="제목" />
                        </S.CommentInput1>
       
                        <S.CommentInput2>
                            <textarea placeholder="내용" />
                        </S.CommentInput2>
               
                        <S.ButtonGroup>
                            <button onClick={handleCanceledButton}>수정 취소</button>
                            <button onClick={handleEditButton}>수정 완료</button>
                        </S.ButtonGroup>
               
                </S.ContentWrapper>
            </S.SubWrapper>
        </S.Wrapper>
                   );
               };

export default EditComments;