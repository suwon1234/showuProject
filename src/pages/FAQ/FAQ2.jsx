import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';
import S from './FAQStyle';

const FAQ2 = ({ faqDatas }) => {
  const dropdownRef2 = useRef(null);
  const [isOpen2, setIsOpen2] = useDropdown(dropdownRef2, false);

  const valueClick = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <>
      <S.Container ref={dropdownRef2}>
        <S.QueButton
          type="button"
          onClick={() => setIsOpen2(!isOpen2)}
        >
          {faqDatas.map((q, i) => (
            <p key={i}>{q.question2}</p>
          ))}             
          { isOpen2 ? 
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
          {isOpen2 && faqDatas.map((q, i) => (
            <p key={i}>{q.answer2}</p> 
          ))}
        </S.Answer>
      </S.Container>
    </>
  );
};

export default FAQ2;
