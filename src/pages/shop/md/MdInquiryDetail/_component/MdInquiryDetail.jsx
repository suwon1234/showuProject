// 경매 - 문의 내역 상세 페이지
import React, { useEffect, useState } from 'react';
import S from './styleInquiryDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import useInput from '../../../_component/useInput';

const MdInquiryDetail = () => {
  const [inquiryList, setInquiryList] = useState([]);
  const [currentInquiry, setCurrentInquiry] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useInput('');

  const { id } = useParams();


  // 이전글, 다음글
  useEffect(() => {
    const getInquiryList = async () => {
      try {
        const response = await fetch('http://localhost:4000/inquiry');
        const datas = await response.json();
        setInquiryList(datas);
      } catch (error) {
        console.error("InquiryListErorr", error);
      }
    };

    getInquiryList();
  }, []);

  // 상세글
  useEffect(() => {
    if (id) {
      const getInquiryDetail = async () => {
        try {
          const response = await fetch(`http://localhost:4000/inquiry/${id}`);
          const datas = await response.json();
          setCurrentInquiry(datas);
          setUpdatedContent(datas.content || '');  
        } catch (error) {
          console.error("InquiryDetailError", error);
        }
      };
  
      getInquiryDetail();
    }

  }, [id, setUpdatedContent]);

  // 수정 버튼 => 기존 내용 나옴
  const handleEdit = () => {
    setIsEditing(true);
    setUpdatedContent(currentInquiry?.content || '');  
  };

  // 수정 취소 => 기존 내용 되돌리기
  const handleCancel = () => {
    setIsEditing(false);  // 편집 취소
    setUpdatedContent(currentInquiry?.content || '');  
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:4000/inquiry/${currentInquiry.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...currentInquiry,
          content: updatedContent,
        }),
      });

      if (response.ok) {
        setIsEditing(false);
        setCurrentInquiry((prev) => ({
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

  const getPreviousInquiry = () => {
    const currentIndex = inquiryList.findIndex((item) => item.id === parseInt(id));
    return currentIndex > 0 ? inquiryList[currentIndex - 1] : null;
  };

  const getNextInquiry = () => {
    const currentIndex = inquiryList.findIndex((item) => item.id === parseInt(id));
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
              <S.Td></S.Td>
            </tr>
            <tr>
              <S.Th>상품명</S.Th>
              <S.Td></S.Td>
            </tr>
            <tr>
              <S.Th>작성자</S.Th>
              <S.Td></S.Td>
            </tr>
          </tbody>
        </S.Table>

        <S.Input>
          {isEditing ? (
            <S.InputContent type="text" placeholder="내용을 입력하세요."
              value={updatedContent || ''}  // undefined가 되지 않도록 기본값 설정
              onChange={(e) => setUpdatedContent(e.target.value)}
            />
          ) : (
            <S.Content>{currentInquiry?.content || '내용'}</S.Content>
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
            <S.ListButton>목록</S.ListButton>
            <S.ButtonWrapper>
              <S.DeleteButton>삭제</S.DeleteButton>
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
                <S.InquiryList key={previousInquiry.id}>
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
                    <S.ListItem>{previousInquiry.date}</S.ListItem>
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
                <S.InquiryList key={nextInquiry.id}>
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
                    <S.ListItem>{nextInquiry.date}</S.ListItem>
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
