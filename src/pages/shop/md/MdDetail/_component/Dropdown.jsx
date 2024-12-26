// Dropdown.js
import React, { useState } from 'react';
import S from './styleDropdown';

const Dropdown = ({ options, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleOptionClick = (option) => {
    // console.log(`선택한 옵션: ${option}`);
    handleSelect(option);
    setIsOpen(false); // 옵션 선택 후 드롭다운 닫기
    };
    
    return (
    <S.DropdownContainer>
      <S.DropdownButton onClick={toggleDropdown}>
        <p>- [필수] 옵션을 선택해 주세요 -</p>
        </S.DropdownButton>
        {isOpen && (
          <S.DropdownContent>
            {options.map((option, i) => (
              <S.DropdownItem key={i} onClick={() => handleOptionClick(option)}>
              {option}
              </S.DropdownItem>
              // <S.DropdownItem onClick={() => handleOptionClick('옵션 1')}>옵션 1</S.DropdownItem>
              // <S.DropdownItem onClick={() => handleOptionClick('옵션 2')}>옵션 2</S.DropdownItem>
              // <S.DropdownItem onClick={() => handleOptionClick('옵션 3')}>옵션 3</S.DropdownItem>
            ))}
            </S.DropdownContent>
          )}
          </S.DropdownContainer>
          )
        };

export default Dropdown;

