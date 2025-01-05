import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';

const FAQ1 = ({ faqDatas }) => {
  const dropdownRef1 = useRef(null);
  const [isOpen1, setIsOpen1] = useDropdown(dropdownRef1, false);

  const valueClick = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <>
      <div ref={dropdownRef1}>
        <button
          type="button"
          onClick={() => setIsOpen1(!isOpen1)}
        >
          {faqDatas.map((q, i) => (
            <p key={i}>{q.question1}</p>
          ))}             
          <div>
            <FontAwesomeIcon icon={faAngleDown} className="down" />
          </div>
        </button>
       
        {isOpen1 && faqDatas.map((q, i) => (
          <div key={i} onClick={valueClick}>
            <p>{q.answer1}</p> 
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ1;
