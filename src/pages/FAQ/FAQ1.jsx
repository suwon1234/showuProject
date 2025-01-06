import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import useDropdown from '../../hooks/useDropdown';
import S from './FAQStyle';

const FAQ1 = ({ faqDatas }) => {
  const dropdownRef1 = useRef(null);
  const [isOpen1, setIsOpen1] = useDropdown(dropdownRef1, false);

  const valueClick = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <>
      <S.Container ref={dropdownRef1}>
        <S.QueButton
          type="button"
          onClick={() => setIsOpen1(!isOpen1)}
        >
          {faqDatas.map((q, i) => (
            <p key={i}>{q.question1}</p>
          ))}
          { isOpen1 ? 
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
            {isOpen1 && faqDatas.map((q, i) => (
              <p key={i}>{q.answer1}</p> 
            ))}
          </S.Answer>
      </S.Container>
    </>
  );
};

export default FAQ1;
