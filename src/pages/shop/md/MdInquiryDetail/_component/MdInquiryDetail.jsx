import React, { useEffect, useState } from 'react';
import S from './styleInquiryDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams, useNavigate } from 'react-router-dom';
import useInput from '../../../_component/useInput';

const MdInquiryDetail = () => {
  const [inquiryList, setInquiryList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useInput(''); 
  const [inquiryDetail, setInquiryDetail] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate(); 

  // 이전글, 다음글 불러오기
  useEffect(() => {
    const getInquiryList = async () => {
      try {
        const response = await fetch('http://localhost:8000/shop/md/inquiry');
        const datas = await response.json();
        setInquiryList(datas.inquiryList);
      } catch (error) {
        console.error("InquiryListError", error);
      }
    };

    getInquiryList();
  }, []);

  // 상세글
  useEffect(() => {
    const getInquiryDetail = async () => {
      try {
        const response = await fetch(`http://localhost:8000/shop/md/inquiry/${id}`);
        const datas = await response.json();
        setInquiryDetail(datas.inquiry);
      } catch (error) {
        console.error("상세 문의 내역 가져오기 오류", error);
      }
    };

    if (id) {
      getInquiryDetail();
    }
  }, [id]);

  // 상세글 로딩중
  if (!inquiryDetail) return <div>로딩 중...</div>;

  // 수정 버튼 클릭 시 수정 여부 확인
  const handleEdit = () => {
    const isConfirmed = window.confirm("수정하시겠습니까?");
    if (isConfirmed) {
      setIsEditing(true);
      setUpdatedContent(inquiryDetail.content || '');  // 상세글 로딩 => setUpdatedContent
    }
  };

  // 수정 취소 => 기존 내용 되돌리기
  const handleCancel = () => {
    setIsEditing(false);  // 편집 취소
    setUpdatedContent(inquiryDetail.content || '');  // 기존 내용으로 되돌리기
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8000/shop/md/inquiry/${inquiryDetail._id}`, {
      // const response = await fetch(`http://localhost:8000/shop/md/inquiry/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...inquiryDetail,
          content: updatedContent,
        }),
      });

      if (response.ok) {
        setIsEditing(false);
        setInquiryDetail((prev) => ({
          ...prev,
          content: updatedContent,
        }));
      } else {
        console.error("Failed to save inquiry...");
      }
    } catch (error) {
      console.error("SavingError", error);
    }
  };

  const handleDelete = async () => {
    const isConfirmed = window.confirm('정말로 삭제하시겠습니까?');
    if (isConfirmed) {
      try {
        const response = await fetch(`http://localhost:8000/shop/md/inquiry/${inquiryDetail._id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          navigate('/shop/md/inquiry/list'); // 삭제 => 목록 페이지 이동
        } else {
          console.error('Failed to delete inquiry');
        }
      } catch (error) {
        console.error('Deleting error', error);
      }
    }
  };

  const getPreviousInquiry = () => {
    const currentIndex = inquiryList.findIndex((item) => item._id === inquiryDetail._id);
    return currentIndex > 0 ? inquiryList[currentIndex - 1] : null;
  };

  const getNextInquiry = () => {
    const currentIndex = inquiryList.findIndex((item) => item._id === inquiryDetail._id);
    return currentIndex < inquiryList.length - 1 ? inquiryList[currentIndex + 1] : null;
  };

  const previousInquiry = getPreviousInquiry();
  const nextInquiry = getNextInquiry();

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
            {/* <tr>
              <S.Th>작성자</S.Th>
              <S.Td>{inquiryDetail.writer}</S.Td>
            </tr> */}
          </tbody>
        </S.Table>

        <S.Input>
          {isEditing ? (
            <S.InputContent 
              type="text" 
              placeholder="내용을 입력하세요." 
              value={updatedContent}  // updatedContent 없으면 => 초기화
              onChange={(e) => setUpdatedContent(e.target.value)}  // 내용 변경 =>  업데이트트
            />
          ) : (
            <S.Content>{inquiryDetail?.content || '내용'}</S.Content>
          )}
        </S.Input>

        {isEditing ? (
          <S.ButtonContainer>
            <S.ButtonWrapper>
              <S.CancelButton onClick={handleCancel}>취소</S.CancelButton>
              <S.SaveButton onClick={handleSave}>확인</S.SaveButton>
            </S.ButtonWrapper>
          </S.ButtonContainer>
        ) : (
          <S.ButtonContainer>
            <Link to={'/shop/md/inquiry/list'}>
              <S.ListButton>목록</S.ListButton>
            </Link>
            <S.ButtonWrapper>
              <S.DeleteButton onClick={handleDelete}>삭제</S.DeleteButton>
              <S.ModifyButton onClick={handleEdit}>수정</S.ModifyButton>
            </S.ButtonWrapper>
          </S.ButtonContainer>
        )}
      </S.InquiryContainer>

      <S.ListTable>
        <tbody>
          <tr>
            <S.Th2>이전글</S.Th2>
            <S.Td2>
              {previousInquiry ? (
                <S.InquiryList key={previousInquiry._id}>
                  <S.Left2>
                    <S.ListItem>{previousInquiry.type}</S.ListItem>
                  </S.Left2>
                  <S.PrivateWrapper>
                    <FontAwesomeIcon className="icon" icon={faLock} />
                    <S.Private>비공개 질문입니다.</S.Private>
                  </S.PrivateWrapper>
                  <S.Center>
                    <S.ListItem>{previousInquiry.title}</S.ListItem>
                  </S.Center>
                  <S.Right1>
                    <S.ListItem>{previousInquiry.writer}</S.ListItem>
                  </S.Right1>
                  <S.Right2>
                    <S.ListItem>{previousInquiry.createdAt}</S.ListItem>
                  </S.Right2>
                </S.InquiryList>
              ) : (
                <span className="empty">이전글 없음</span>
              )}
            </S.Td2>
          </tr>
          <tr>
            <S.Th2>다음글</S.Th2>
            <S.Td2>
              {nextInquiry ? (
                <S.InquiryList key={nextInquiry._id}>
                  <S.Left2>
                    <S.ListItem>{nextInquiry.type}</S.ListItem>
                  </S.Left2>
                  <S.PrivateWrapper>
                    <FontAwesomeIcon className="icon" icon={faLock} />
                    <S.Private>비공개 질문입니다.</S.Private>
                  </S.PrivateWrapper>
                  <S.Center>
                    <S.ListItem>{nextInquiry.title}</S.ListItem>
                  </S.Center>
                  <S.Right1>
                    <S.ListItem>{nextInquiry.writer}</S.ListItem>
                  </S.Right1>
                  <S.Right2>
                    <S.ListItem>{nextInquiry.createdAt}</S.ListItem>
                  </S.Right2>
                </S.InquiryList>
              ) : (
                <span className="empty">다음글 없음</span>
              )}
            </S.Td2>
          </tr>
        </tbody>
      </S.ListTable>
    </S.Wrapper>
  );
};

export default MdInquiryDetail;
