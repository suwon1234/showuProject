import React, { useEffect, useRef, useState } from 'react';
import S from '../GradeStyle';
import useDropdown from '../../../../hooks/useDropdown';
import Field from './Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FieldContainer = () => {
  const dropdownRef = useRef(null);
  const [ fieldlValue, setFieldValue ] = useState("선택하세요");
  const [ isOpen, setIsOpen ] = useDropdown(dropdownRef, false);
  const [ fieldList, setFieldList ] = useState([]);
  // const fieldList = [ "선택하세요", "연기", "마술", "음악" ];
  useEffect(() => {
    const getField = async () => {
      try {
      const response = await fetch(`http://localhost:4000/fieldList`)
      const datas = await response.json()
      setFieldList(datas)
      } catch (error) {
       console.log("FieldContainerError", error) 
      }
    }

    getField()

  }, [])

  // console.log(fieldList)

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
        <span>
          <FontAwesomeIcon icon={faAngleDown} className='down'/>
        </span>
        </S.DropdownButton>


        <S.DropdownMenu className='dropdownMenu'>
          { isOpen &&
            <ul>
              {fieldList.map((field, i) => (
                <Field key={i} value={field.name} isOpen={isOpen} setFieldValue={setFieldValue} setIsOpen={setIsOpen} />
              ))}
            </ul>
          }
        </S.DropdownMenu>
        
      </S.LabelSelectField> 
    </>
  );
};

export default FieldContainer;