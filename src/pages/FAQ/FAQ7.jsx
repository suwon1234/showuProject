import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';
import S from './FAQStyle';

const FAQ7 = ({ faqDatas }) => {
  const dropdownRef7 = useRef(null);
  const [isOpen7, setIsOpen7] = useDropdown(dropdownRef7, false);

  const valueClick = () => {
    setIsOpen7(!isOpen7);
  };

  return (
    <>
      <S.Container ref={dropdownRef7}>
        <S.QueButton
          type="button"
          onClick={() => setIsOpen7(!isOpen7)}
        >
          {faqDatas.map((q, i) => (
            <p key={i}>{q.question7}</p>
          ))}             
          { isOpen7 ? 
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
          {isOpen7 && faqDatas.map((q, i) => (
            <p key={i}>{q.answer7}</p> 
          ))}
        </S.Answer>
      </S.Container>
    </>
  );
};

export default FAQ7;
