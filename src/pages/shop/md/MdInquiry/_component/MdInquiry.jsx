// MD - 문의 페이지
import React, { useState } from 'react';
import S from './styleInquiry';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const MdInquiry = () => {
  const navigate = useNavigate();
  
  const inquiryTypes = ['상품', '배송', '기타'];
  const inquiryForms = ['공개', '비공개'];
  const alarmTypes = ['SMS', '메일'];

  const [selectedType, setSelectedType] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null); 
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [selectedAlarm, setSelectedAlarm] = useState(null); 
  const [isAgreed, setIsAgreed] = useState(false);

  const location = useLocation();
  const { mdName, mdInquiryId } = location.state || {}; 
  // const { mdInquiryId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // 유효성 검사
    if (!selectedType) {
      alert('문의 유형을 선택하세요.');
      return;
    }
    if (!selectedForm) {
      alert('문의 형식을 선택하세요.');
      return;
    }
    if (!title) {
      alert('제목을 입력하세요.');
      return;
    }
    if (!content) {
      alert('내용을 입력하세요.');
      return;
    }
    if (!selectedAlarm) {
      alert('답변 완료 알림을 선택하세요.');
      return;
    }
    if (!isAgreed) {
      alert('개인정보 수집, 이용에 동의해주세요.');
      return;
    }
  
    // mdInquiryId가 제대로 전달되었는지 확인
    // const { mdInquiryId } = location.state || {};
    // if (!mdInquiryId) {
    //   alert('상품 정보가 올바르게 전달되지 않았습니다.');
    //   return;
    // }
  
    // 등록 확인
    if (window.confirm('등록하시겠습니까?')) {
      const inquiryData = {
        type: selectedType,
        form: selectedForm,
        mdInquiryId,  // mdInquiryId 전달
        title,
        content,
        selectedAlarm,
        isAgreed,

      };
  
      try {
        const response = await fetch('http:localhost:8000/shop/md', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inquiryData),
        });
  
        if (!response.ok) {
          throw new Error('서버에서 오류가 발생했습니다.');
        }
  
        const data = await response.json();  
        if (response.ok) {
          alert('문의 등록이 완료되었습니다!');
          navigate('/shop/md/inquiry/list');
        } else {
          alert(data.message || '문의 등록 중 오류가 발생했습니다.');
        }
      } catch (error) {
        console.error("문의 등록 오류:", error.message);
        alert('문의 등록 중 오류가 발생했습니다.');
      }
    }
  };

  const handleCancel = () => {
    if (title || content || selectedType || selectedForm || selectedAlarm || isAgreed) {
      if (window.confirm('작성하신 내용이 모두 사라집니다. 취소하시겠습니까?')) {
        navigate(-1);
      }
    } else {
      if (window.confirm('이전 화면으로 돌아가시겠습니까?')) {
        navigate(-1);
      }
    }
  };

  return (
    <S.InquiryWrapper>
      <S.InquiryTitle>
        <h1>문의하기</h1>
      </S.InquiryTitle>

      <S.Inquiry>
        <table className="inquiry-table">
          <tr>
            <th>상품명</th>
            <td colSpan="2">{mdName}</td>
          </tr>
          <tr>
            <th>문의 유형</th>
            <td colSpan="2">
              <S.TypeWrapper>
                {inquiryTypes.map((type) => (
                  <S.Type key={type} onClick={() => setSelectedType(selectedType === type ? null : type)} selected={selectedType === type}>
                    <S.Icon icon={faCheckCircle} selected={selectedType === type} />
                    <p>{type}</p>
                  </S.Type>
                ))}
              </S.TypeWrapper>
            </td>
          </tr>
          <tr>
            <th>문의 형식</th>
            <td colSpan="2">
              <S.TypeWrapper>
              {inquiryForms.map((form) => (
                  <S.Type key={form} onClick={() => setSelectedForm(selectedForm === form ? null : form)} selected={selectedForm === form}>
                    <S.Icon icon={faCheckCircle} selected={selectedForm === form} />
                    <p>{form}</p>
                  </S.Type>
                ))}
              </S.TypeWrapper>
            </td>
          </tr>
          <tr>
            <th>제목</th>
            <td colSpan="2">
              <S.InputTitle type="text" placeholder="제목을 입력하세요." value={title}
                onChange={(e) => setTitle(e.target.value)} />
            </td>
          </tr>
          <tr>
            <th>작성자</th>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <th>내용</th>
            <td colSpan="2">
              <S.InputContent text="text" placeholder="내용을 입력하세요." value={content}
                onChange={(e) => setContent(e.target.value)} />
            </td>
          </tr>
          <tr>
            <th>답변 완료 알림</th>
            <td>
              <S.TypeWrapper>
                {alarmTypes.map((alarm) => (
                  <S.Type key={alarm} onClick={() => setSelectedAlarm(selectedAlarm === alarm ? null : alarm)} selected={selectedAlarm === alarm}>
                    <S.Icon icon={faCheckCircle} selected={selectedAlarm === alarm} />
                    <p>{alarm}</p>
                  </S.Type>
                ))}
              </S.TypeWrapper>
            </td>
          </tr>
          <tr>
            <th>개인정보 수집, 이용 안내</th>
            <td colSpan="2">
              <p>수집, 이용 목적: 문의에 대한 답변 완료 시 알림 SMS, 메일 발송</p>
              <p>수집, 이용 항목: 휴대전화번호, 이메일 주소</p>
              <p>수집, 이용 기간: 문의에 대한 답변 완료 알림 후 즉시 삭제</p>
              <S.TypeWrapper>
                <S.Type onClick={() => setIsAgreed(!isAgreed)} selected={isAgreed}>
                  <S.Icon icon={faCheckCircle} selected={isAgreed} />
                  <p>위와 같이 개인정보 수집, 이용에 동의합니다.</p>
                </S.Type>
              </S.TypeWrapper>
            </td>
          </tr>
        </table>
      </S.Inquiry>

      <S.InquiryButton>
        <S.BackButton onClick={handleCancel}>취소</S.BackButton>
          <S.NextButton onClick={handleSubmit}>등록</S.NextButton>
      </S.InquiryButton>
    </S.InquiryWrapper>
  );
};

export default MdInquiry;