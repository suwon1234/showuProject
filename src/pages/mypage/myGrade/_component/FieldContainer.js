import React, { useRef, useState } from 'react';
import S from '../GradeStyle';
import useDropdown from '../../../../hooks/useDropdown';
import Field from './Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FieldContainer = () => {
  const dropdownRef = useRef(null);
  const [ fieldlValue, setFieldValue ] = useState("선택하세요");
  const fieldList = [ "선택하세요", "연기", "마술", "음악" ];
  const [ isOpen, setIsOpen ] = useDropdown(dropdownRef, false);

  return (
    <>
      <S.LabelSelectField htmlFor="field" ref={dropdownRef}>
        <p>전문분야</p>

        <S.DropdownButton 
          type='button'
          className='dropdown'
          onClick={() => setIsOpen(!isOpen)}
          value={fieldlValue}
        >
          {fieldlValue}
        </S.DropdownButton>

        <span>
          <FontAwesomeIcon icon={faAngleDown} className='down'/>
        </span>
        { isOpen &&
          <ul>
            {fieldList.map((field, i) => (
              <Field key={i} value={field} isOpen={isOpen} setFieldValue={setFieldValue} setIsOpen={setIsOpen} />
            ))}
          </ul>
        }
        
      </S.LabelSelectField> 
    </>
  );
};

export default FieldContainer;