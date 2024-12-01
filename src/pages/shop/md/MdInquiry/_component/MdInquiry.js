// MD 문의페이지
import React, { useState } from 'react';
import S from './styleInquiry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const MdInquiry = () => {
  const [selectedType, setSelectedType] = useState(null); 
  const [selectedForm, setSelectedForm] = useState(null);
  const [isAgreed, setIsAgreed] = useState(false); 
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 

  const handleSubmit = () => {
    if (!selectedType) {
      alert("문의 유형을 선택하세요.");
      return;
    }
    if (!selectedForm) {
      alert("문의 형식을 선택하세요.");
      return;
    }
    if (!isAgreed) {
      alert("개인정보 수집, 이용에 동의해야 합니다.");
      return;
    }
    if (!title) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!content) {
      alert("내용을 입력하세요.");
      return;
    }
    alert("등록이 완료되었습니다!");
  };

  return (
    <S.InquiryWrapper>
      <S.InquiryTitle>
        <h1>문의하기</h1>
      </S.InquiryTitle>
      
      <S.Inquiry>
        <table class="inquiry-table">
          <tr>
            <th>상품명</th>
            <td colspan="2">2024 베르사유의 장미 프로그램북 스페셜 에디션</td>
          </tr>
          <tr>
            <th>문의 유형</th>
            <td colspan="2">
              <S.TypeWrapper>
                {["상품, 배송, 기타"].map((type) => (
                <S.Type key={type} onClick={() => setSelectedType(type)}
                style={{ color: selectedType === type ? '#ffd400' : "#fff" }}>
                  <FontAwesomeIcon className='icon' icon={faCheckCircle}
                  style={{ color: selectedType === type ? '#ffd400' : "#fff" }} />
                  <p>상품</p>
                </S.Type>

                ))}
                <S.Type onClick={() => setSelectedType("배송")}>
                  <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                  <p>배송</p>
                </S.Type>
                <S.Type onClick={() => setSelectedType("기타")}>
                  <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                  <p>기타</p>
                </S.Type>
              </S.TypeWrapper>
            </td>
          </tr>
          <tr>
            <th>문의 형식</th>
            <td colspan="2">
              <S.TypeWrapper>
                <S.Type onClick={() => setSelectedForm("공개")}>
                  <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                  <p>공개</p>
                </S.Type>
                <S.Type onClick={() => setSelectedForm("비공개")}>
                  <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                  <p>비공개</p>
                </S.Type>
              </S.TypeWrapper>
            </td>
          </tr>
          <tr>
            <th>제목</th>
            <td colspan="2">
            <S.InputTitle type="text" placeholder="제목을 입력하세요." value={title}
              onChange={(e) => setTitle(e.target.value)} /></td>
              </tr>
          <tr>
            <th>작성자</th>
            <td colspan="2"></td>
          </tr>
          <tr>
            <th>내용</th>
            <td colspan="2">
            <S.InputContent placeholder="내용을 입력하세요." value={content}
              onChange={(e) => setContent(e.target.value)}></S.InputContent></td>
          </tr>
          <tr>
            <th>답변 완료 알림</th>
            <td>
              <S.TypeWrapper>
                <S.Type>
                  <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                  <p>SMS</p>
                </S.Type>
                <S.Type>
                  <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                  <p>메일</p>
                </S.Type>
              </S.TypeWrapper>
            </td>
          </tr>
          <tr>
            <th>개인정보 수집, 이용 안내</th>
            <td colspan="2">
              <p>수집, 이용 목적: 문의에 대한 답변 완료 시 알림 SMS, 메일 발송</p>
              <p>수집, 이용 항목: 휴대전화번호, 이메일 주소</p>
              <p>수집, 이용 기간: 문의에 대한 답변 완료 알림 후 즉시 삭제</p>
              <S.TypeWrapper>
                <S.Type onClick={() => setIsAgreed(!isAgreed)}>
                  <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                  <p>위와 같이 개인정보 수집, 이용에 동의합니다.</p>
                </S.Type>
              </S.TypeWrapper>
            </td>
          </tr>
        </table>
      </S.Inquiry>

      <S.InquiryButton>
        <S.BackButton>취소</S.BackButton>
        <S.NextButton onClick={handleSubmit}>등록</S.NextButton>
      </S.InquiryButton>
      
    </S.InquiryWrapper>
  );
};

export default MdInquiry;