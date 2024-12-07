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
        <p>--메시지 선택(선택 사항)--</p>
        </S.DropdownButton>
        {isOpen && (
          <S.DropdownContent>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 1')}>배송 전에 미리 연락바랍니다.</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 2')}>부재 시 경비실에 맡겨주세요.</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 3')}>부재 시 문 앞에 놓아주세요.</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 4')}>빠른 배송 부탁드립니다.</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 5')}>택배함에 보관해 주세요.</S.DropdownItem>
            <S.DropdownItem onClick={() => handleOptionClick('옵션 6')}>직접 입력</S.DropdownItem>
            </S.DropdownContent>
          )}
          </S.DropdownContainer>
          )
        };

export default Dropdown;

