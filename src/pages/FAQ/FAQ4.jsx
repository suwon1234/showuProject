import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';
import S from './FAQStyle';

const FAQ4 = ({ faqDatas }) => {
  const dropdownRef4 = useRef(null);
  const [isOpen4, setIsOpen4] = useDropdown(dropdownRef4, false);

  const valueClick = () => {
    setIsOpen4(!isOpen4);
  };

  return (
    <>
      <S.Container ref={dropdownRef4}>
        <S.QueButton
          type="button"
          onClick={() => setIsOpen4(!isOpen4)}
        >
          {faqDatas.map((q, i) => (
            <p key={i}>{q.question4}</p>
          ))}             
          { isOpen4 ? 
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
          {isOpen4 && faqDatas.map((q, i) => (
            <p key={i}>{q.answer4}</p> 
          ))}
        </S.Answer>
      </S.Container>
    </>
  );
};

export default FAQ4;
