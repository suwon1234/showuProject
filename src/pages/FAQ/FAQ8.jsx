import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';
import S from './FAQStyle';

const FAQ8 = ({ faqDatas }) => {
  const dropdownRef8 = useRef(null);
  const [isOpen8, setIsOpen8] = useDropdown(dropdownRef8, false);

  const valueClick = () => {
    setIsOpen8(!isOpen8);
  };

  return (
    <>
      <S.Container ref={dropdownRef8}>
        <S.QueButton
          type="button"
          onClick={() => setIsOpen8(!isOpen8)}
        >
          {faqDatas.map((q, i) => (
            <p key={i}>{q.question8}</p>
          ))}             
          { isOpen8 ? 
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
          {isOpen8 && faqDatas.map((q, i) => (
            <p key={i} >{q.answer8}</p> 
          ))}
        </S.Answer>
      </S.Container>
    </>
  );
};

export default FAQ8;
