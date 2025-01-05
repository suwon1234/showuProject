import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';

const FAQ3 = ({ faqDatas }) => {
  const dropdownRef3 = useRef(null);
  const [isOpen3, setIsOpen3] = useDropdown(dropdownRef3, false);

  const valueClick = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <>
      <div ref={dropdownRef3}>
        <button
          type="button"
          onClick={() => setIsOpen3(!isOpen3)}
        >
          {faqDatas.map((q, i) => (
            <p key={i}>{q.question3}</p>
          ))}             
          <div>
            <FontAwesomeIcon icon={faAngleDown} className="down" />
          </div>
        </button>
       
        {isOpen3 && faqDatas.map((q, i) => (
          <div key={i} onClick={valueClick}>
            <p>{q.answer3}</p> 
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ3;
