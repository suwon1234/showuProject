// MD - 문의 내역 상세 페이지
import React, { useEffect, useState } from 'react';
import S from './styleInquiryDetail';
import { Link, useParams, useNavigate } from 'react-router-dom';

const MdInquiryDetail = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState('');
  const [inquiryDetail, setInquiryDetail] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // 상세 문의 내용 
  useEffect(() => {
    const getInquiryDetail = async () => {
      try {
        const response = await fetch(`http://localhost:8000/shop/md/inquiry/${id}`);
        const data = await response.json();

        if (response.ok) {
          setInquiryDetail(data.inquiry || {});
          setUpdatedContent(data.inquiry?.content || '');
        } else {
          console.error("문의 내용을 불러오는 데 실패했습니다.");
        }
      } catch (error) {
        console.error("상세 문의 내역 가져오기 오류:", error);
      }
    };

    if (id) {
      getInquiryDetail();
    }
  }, [id]);

  // 수정
  const handleEdit = () => {
    setIsEditing(true);
    setUpdatedContent(inquiryDetail.content || '');
  };

  // 수정 취소
  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedContent(inquiryDetail.content || '');
  };

  // 수정 내용 저장
  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8000/shop/md/inquiry/${inquiryDetail._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: updatedContent,
        }),
      });

      if (response.ok) {
        const updatedData = await response.json();
        setInquiryDetail(updatedData.inquiry); 
        setIsEditing(false); 
      } else {
        console.error("수정 내용을 저장하는 데 실패했습니다.");
      }
    } catch (error) {
      console.error("수정 저장 오류:", error);
    }
  };

  // 문의 삭제
  const handleDelete = async () => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");

    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8000/shop/md/inquiry/${inquiryDetail._id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          alert("문의가 삭제되었습니다!"); 
          navigate('/shop/md/inquiry/list'); 
        } else {
          console.error("삭제 실패");
        }
      } catch (error) {
        console.error("삭제 오류:", error);
      }
    }
  };

  if (!inquiryDetail) return <div>로딩 중...</div>;

  return (
    <S.Wrapper>
      <S.InquiryContainer>
        <S.Title>문의 내역</S.Title>
        <S.Table>
          <tbody>
            <tr>
              <S.Th>제목</S.Th>
              <S.Td>{inquiryDetail.title}</S.Td>
            </tr>
            <tr>
              <S.Th>상품명</S.Th>
              <S.Td>{inquiryDetail.mdName}</S.Td>
            </tr>
          </tbody>
        </S.Table>

        <S.Input>
          {isEditing ? (
            <S.InputContent type="text" placeholder="내용을 입력하세요." value={updatedContent}
              onChange={(e) => setUpdatedContent(e.target.value)}
            />
          ) : (
            <S.Content>{inquiryDetail.content}</S.Content>
          )}
        </S.Input>

        <S.ButtonContainer>
          <Link to="/shop/md/inquiry/list">
            <S.ListButton>목록</S.ListButton>
          </Link>
          {isEditing ? (
            <S.ButtonWrapper>
              <S.CancelButton onClick={handleCancel}>취소</S.CancelButton>
              <S.SaveButton onClick={handleSave}>확인</S.SaveButton>
            </S.ButtonWrapper>
          ) : (
            <S.ButtonWrapper>
              <S.DeleteButton onClick={handleDelete}>삭제</S.DeleteButton>
              <S.ModifyButton onClick={handleEdit}>수정</S.ModifyButton>
            </S.ButtonWrapper>
          )}
        </S.ButtonContainer>
      </S.InquiryContainer>
    </S.Wrapper>
  );
};

export default MdInquiryDetail;