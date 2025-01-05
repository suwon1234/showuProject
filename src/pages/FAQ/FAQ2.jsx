import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';

const FAQ2 = ({ faqDatas }) => {
  const dropdownRef2 = useRef(null);
  const [isOpen2, setIsOpen2] = useDropdown(dropdownRef2, false);

  const valueClick = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <>
      <div ref={dropdownRef2}>
        <button
          type="button"
          onClick={() => setIsOpen2(!isOpen2)}
        >
          {faqDatas.map((q, i) => (
            <p key={i}>{q.question2}</p>
          ))}             
          <div>
            <FontAwesomeIcon icon={faAngleDown} className="down" />
          </div>
        </button>
       
        {isOpen2 && faqDatas.map((q, i) => (
          <div key={i} onClick={valueClick}>
            <p>{q.answer2}</p> 
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ2;
