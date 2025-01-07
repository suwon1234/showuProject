import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';
import S from './FAQStyle';

const FAQ6 = ({ faqDatas }) => {
  const dropdownRef6 = useRef(null);
  const [isOpen6, setIsOpen6] = useDropdown(dropdownRef6, false);

  const valueClick = () => {
    setIsOpen6(!isOpen6);
  };

  return (
    <>
      <S.Container ref={dropdownRef6}>
        <S.QueButton
          type="button"
          onClick={() => setIsOpen6(!isOpen6)}
        >
          {faqDatas.map((q, i) => (
            <p key={i}>{q.question6}</p>
          ))}             
          { isOpen6 ? 
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
          {isOpen6 && faqDatas.map((q, i) => (
            <p key={i}>{q.answer6}</p> 
          ))}
        </S.Answer>
      </S.Container>
    </>
  );
};

export default FAQ6;
