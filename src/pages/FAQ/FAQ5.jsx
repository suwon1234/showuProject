import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';
import S from './FAQStyle';

const FAQ5 = ({ faqDatas }) => {
  const dropdownRef5 = useRef(null);
  const [isOpen5, setIsOpen5] = useDropdown(dropdownRef5, false);

  const valueClick = () => {
    setIsOpen5(!isOpen5);
  };

  return (
    <>
      <S.Container ref={dropdownRef5}>
        <S.QueButton
          type="button"
          onClick={() => setIsOpen5(!isOpen5)}
        >
          {faqDatas.map((q, i) => (
            <p key={i}>{q.question5}</p>
          ))}             
          { isOpen5 ? 
          (
          <S.DownIcon>
            <FontAwesomeIcon icon={faAngleUp} className="down" />
          </S.DownIcon>
          ) :
          (
          <S.DownIcon>
            <FontAwesomeIcon icon={faAngleDown} className="down" />
          </S.DownIcon>
          )
          }
        </S.QueButton>
       
        <S.Answer onClick={valueClick}>
          {isOpen5 && faqDatas.map((q, i) => (
            <p key={i}>{q.answer5}</p> 
          ))}
        </S.Answer>
      </S.Container>
    </>
  );
};

export default FAQ5;
