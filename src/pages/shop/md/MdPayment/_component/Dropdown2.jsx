import React, { useState } from 'react';
import S from './styleDropdown2';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('--메시지 선택(선택 사항)--');
  const [customMessage, setCustomMessage] = useState(''); // 직접 입력할 메시지 상태

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // 선택된 옵션 상태 업데이트
    if (option !== '직접 입력') {
      setCustomMessage(''); // '직접 입력'이 아니면 기존 입력값 초기화
    }
    setIsOpen(false); // 옵션 선택 후 드롭다운 닫기
  };

  const handleCustomMessageChange = (e) => {
    setCustomMessage(e.target.value); // 직접 입력 필드 값 상태 업데이트
  };

  return (
    <S.DropdownContainer>
      {/* '직접 입력'일 경우, 드롭다운 버튼 대신 input 필드로 바꿔서 사용자 입력 받기 */}
      {selectedOption === '직접 입력' ? (
        <S.CustomInput
          type="text"
          value={customMessage}
          onChange={handleCustomMessageChange}
          placeholder="배송 메시지를 입력해주세요."
        />
      ) : (
        <S.DropdownButton onClick={toggleDropdown}>
          <p>{selectedOption}</p>
        </S.DropdownButton>
      )}

      {isOpen && selectedOption !== '직접 입력' && (
        <S.DropdownContent>
          <S.DropdownItem onClick={() => handleOptionClick('배송 전에 미리 연락바랍니다.')}>
            배송 전에 미리 연락바랍니다.
          </S.DropdownItem>
          <S.DropdownItem onClick={() => handleOptionClick('부재 시 경비실에 맡겨주세요.')}>
            부재 시 경비실에 맡겨주세요.
          </S.DropdownItem>
          <S.DropdownItem onClick={() => handleOptionClick('부재 시 문 앞에 놓아주세요.')}>
            부재 시 문 앞에 놓아주세요.
          </S.DropdownItem>
          <S.DropdownItem onClick={() => handleOptionClick('빠른 배송 부탁드립니다.')}>
            빠른 배송 부탁드립니다.
          </S.DropdownItem>
          <S.DropdownItem onClick={() => handleOptionClick('택배함에 보관해 주세요.')}>
            택배함에 보관해 주세요.
          </S.DropdownItem>
          <S.DropdownItem onClick={() => handleOptionClick('직접 입력')}>
            직접 입력
          </S.DropdownItem>
        </S.DropdownContent>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
