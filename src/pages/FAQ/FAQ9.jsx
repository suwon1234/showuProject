import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';
import S from './FAQStyle';

const FAQ9 = ({ faqDatas }) => {
  const dropdownRef9 = useRef(null);
  const [isOpen9, setIsOpen9] = useDropdown(dropdownRef9, false);

  const valueClick = () => {
    setIsOpen9(!isOpen9);
  };

  return (
    <>
      <S.Container ref={dropdownRef9}>
        <S.QueButton
          type="button"
          onClick={() => setIsOpen9(!isOpen9)}
        >
          {faqDatas.map((q, i) => (
            <p key={i}>{q.question9}</p>
          ))}             
          { isOpen9 ? 
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
          {isOpen9 && faqDatas.map((q, i) => (
            <p key={i} >{q.answer9}</p> 
          ))}
        </S.Answer>
      </S.Container>
    </>
  );
};

export default FAQ9;
