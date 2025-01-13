import React, { useState } from 'react';
import S from './styleDropdown2';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('--메시지 선택(선택 사항)--');
  const [customMessage, setCustomMessage] = useState(''); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); 
    if (option !== '직접 입력') {
      setCustomMessage(''); 
    }
    setIsOpen(false); 
  };

  const handleCustomMessageChange = (e) => {
    setCustomMessage(e.target.value); 
  };

  return (
    <S.DropdownContainer>
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
