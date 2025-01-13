import React, { useState } from 'react';
import S from './styleDropdown1';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('-이메일 선택-'); // 선택된 옵션 상태 추가
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); 
    setIsOpen(false); // 옵션 선택 후 드롭다운 닫기
  };

  return (
    <S.DropdownContainer>
      <S.DropdownButton onClick={toggleDropdown}>
        <p>{selectedOption}</p> 
      </S.DropdownButton>
      {isOpen && (
        <S.DropdownContent>
          <S.DropdownItem onClick={() => handleOptionClick('naver.com')}>naver.com</S.DropdownItem>
          <S.DropdownItem onClick={() => handleOptionClick('gmail.com')}>gmail.com</S.DropdownItem>
          <S.DropdownItem onClick={() => handleOptionClick('daum.net')}>daum.net</S.DropdownItem>
          <S.DropdownItem onClick={() => handleOptionClick('yahoo.com')}>yahoo.com</S.DropdownItem>
          <S.DropdownItem onClick={() => handleOptionClick('icloud.com')}>icloud.com</S.DropdownItem>
        </S.DropdownContent>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
