// Dropdown.js
import React, { useState } from 'react';
import S from './styleDropdown';

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
        <p>반품 사유 선택</p>
        </S.DropdownButton>
        {isOpen && (
          <S.DropdownContent>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 1')}>고객단순변심</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 2')}>상품 불만족</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 3')}>상품 불량</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 4')}>주문 오류</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 5')}>상품 파손</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 6')}>오배송</S.DropdownItem>
            </S.DropdownContent>
          )}
          </S.DropdownContainer>
          )
        };

export default Dropdown;

