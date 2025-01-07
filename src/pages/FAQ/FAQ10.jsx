import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';
import S from './FAQStyle';

const FAQ10 = ({ faqDatas }) => {
  const dropdownRef10 = useRef(null);
  const [isOpen10, setIsOpen10] = useDropdown(dropdownRef10, false);

  const valueClick = () => {
    setIsOpen10(!isOpen10);
  };

  return (
    <>
      <S.Container ref={dropdownRef10}>
        <S.QueButton
          type="button"
          onClick={() => setIsOpen10(!isOpen10)}
        >
          {faqDatas.map((q, i) => (
            <p key={i}>{q.question10}</p>
          ))}             
          { isOpen10 ? 
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
          {isOpen10 && faqDatas.map((q, i) => (
            <p key={i} >{q.answer10}</p> 
          ))}
        </S.Answer>
      </S.Container>
    </>
  );
};

export default FAQ10;
