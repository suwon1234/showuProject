import React, { useRef, useState } from 'react';
import S from '../GradeStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import useDropdown from '../../../../hooks/useDropdown';
import Total from './Total';

const TotalContainer = () => {
  const dropdownRef = useRef(null);
  const [ totalValue, setTotalValue ] = useState('선택하세요');
  const totalList = [ "선택하세요", "신입", "1년", "2년", "3년", "4년", "5년", "6년", "7년", "8년", "9년", "10년 이상" ];
  
  const [ isOpen, setIsOpen ] = useDropdown(dropdownRef, false);
  return (
    <>
      <S.LabelSelectTotal htmlFor="total" ref={dropdownRef} >
        <p>총 경력기간</p>

        <S.DropdownButton 
          type='button'
          className='dropdown'
          onClick={() => setIsOpen(!isOpen)}
          value={totalValue}
        >
          {totalValue}
        </S.DropdownButton>

        <span>
          <FontAwesomeIcon icon={faAngleDown} className='down'/>
        </span>

        { isOpen &&
          <ul>
            { totalList.map((total, i) => (
              <Total key={i} value={total} setIsOpen={setIsOpen} setTotalValue={setTotalValue} isOpen={isOpen} />
            ))}
          </ul>
        }

        
      </S.LabelSelectTotal>
    </>
  );
};

export default TotalContainer;