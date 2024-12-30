import React, { useEffect, useRef, useState } from 'react';
import S from '../GradeStyle';
import useDropdown from '../../../../hooks/useDropdown';
import Field from './Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FieldContainer = ({ setValue, userInfo }) => {
  const dropdownRef = useRef(null);
  const [fieldValue, setFieldValue] = useState("선택하세요"); // 기본값
  const [isOpen, setIsOpen] = useDropdown(dropdownRef, false);
  const fieldList = ["연기", "마술", "음악"];

  // userInfo에서 초기값 설정
  useEffect(() => {
    if (userInfo?.field) {
      setFieldValue(userInfo.field); // userInfo의 field 값을 초기화
      setValue("field", userInfo.field); // useForm에 초기 field 값 설정
    }
  }, [userInfo, setValue]);

  const handleDropdownSelect = (value) => {
    setFieldValue(value);
    setValue("field", value); // useForm에 field 값을 설정
    setIsOpen(false);
  };

  return (
    <>
      <S.LabelSelectField htmlFor="field" ref={dropdownRef}>
        <p>전문분야</p>

        <S.DropdownButton 
          type="button"
          className="dropdown"
          onClick={() => setIsOpen(!isOpen)}
          value={fieldValue}
        >
          {fieldValue}
          <span>
            <FontAwesomeIcon icon={faAngleDown} className="down" />
          </span>
        </S.DropdownButton>

        <S.DropdownMenu className="dropdownMenu">
          {isOpen && (
            <ul>
              {fieldList.map((field, i) => (
                <Field 
                  key={i} 
                  value={field} 
                  isOpen={isOpen} 
                  setFieldValue={handleDropdownSelect} 
                  setIsOpen={setIsOpen} 
                />
              ))}
            </ul>
          )}
        </S.DropdownMenu>
      </S.LabelSelectField>
    </>
  );
};

export default FieldContainer;
