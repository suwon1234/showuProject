import React, { useRef, useState } from 'react';
import S from '../GradeStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Area from './Area';
import useDropdown from '../../../../hooks/useDropdown';

const AreaContainer = () => {
  const dropdownRef = useRef(null);
  const [ areaValue, setAreaValue ] = useState("선택하세요");
  const areaList = [ "선택하세요", "서울", "경기", "경북", "경남", "충북", "충남", "전북", "전남", "인천", "강원", "제주"];

  const [ isOpen, setIsOpen ] = useDropdown(dropdownRef, false);

  return (
    <>
      <S.LabelSelect htmlFor="area" className='area' ref={dropdownRef}>
        <span>지역</span>

        <S.DropdownButton 
        type='button'
        className='dropdown'
        onClick={() => setIsOpen(!isOpen)}
        value={areaValue}
        >
          {areaValue}
        <span>
          <FontAwesomeIcon icon={faAngleDown} className='down'/>
        </span>
        </S.DropdownButton>

        <S.DropdownMenu className='dropdownMenu'>
          { isOpen &&
            <ul>
              {areaList.map((area, i) => (
                <Area key={i} value={area} setAreaValue={setAreaValue} setIsOpen={setIsOpen} isOpen={isOpen} />
            ))}
            </ul>
          }
        </S.DropdownMenu>
      </S.LabelSelect>
    </>
  );
};

export default AreaContainer;