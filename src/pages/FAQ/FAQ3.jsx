import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';
import S from './FAQStyle';

const FAQ3 = ({ faqDatas }) => {
  const dropdownRef3 = useRef(null);
  const [isOpen3, setIsOpen3] = useDropdown(dropdownRef3, false);

  const valueClick = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <>
      <S.Container ref={dropdownRef3}>
        <S.QueButton
          type="button"
          onClick={() => setIsOpen3(!isOpen3)}
        >
          {faqDatas.map((q, i) => (
            <p key={i}>{q.question3}</p>
          ))}             
          { isOpen3 ? 
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
          {isOpen3 && faqDatas.map((q, i) => (
            <p key={i}>{q.answer3}</p> 
          ))}
        </S.Answer>
      </S.Container>
    </>
  );
};

export default FAQ3;
