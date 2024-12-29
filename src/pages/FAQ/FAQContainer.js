import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';
import FaqList from './FaqList';

const FAQContainer = () => {
  const dropdownRef = useRef(null);
  const [ isOpen, setIsOpen ] = useDropdown(dropdownRef, false);

  return (
    <div className='Container'>
      <div className='fqaTitle'>
        <p>자주 묻는 질문(FAQ)</p>
      </div>
      <div>
        <FaqList isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default FAQContainer;