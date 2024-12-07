// Dropdown.js
import React, { useState } from 'react';
import S from './styleDropdown2';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleOptionClick = (option) => {
    console.log(`선택한 옵션: ${option}`);
    setIsOpen(false); // 옵션 선택 후 드롭다운 닫기
    };
    
    return (
    <S.DropdownContainer>
      <S.DropdownButton onClick={toggleDropdown}>
        <p>-이메일 선택-</p>
        </S.DropdownButton>
        {isOpen && (
          <S.DropdownContent>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 1')}>naver.com</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 2')}>gmail.com</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 3')}>daum.net</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 4')}>yahoo.com</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 5')}>icloud.com</S.DropdownItem>
            </S.DropdownContent>
          )}
          </S.DropdownContainer>
          )
        };

export default Dropdown;

