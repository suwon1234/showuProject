import React, { useEffect, useRef, useState } from 'react';
import S from '../GradeStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Area from './Area';
import useDropdown from '../../../../hooks/useDropdown';

const AreaContainer = ({ setValue, userInfo }) => {
  const dropdownRef = useRef(null);
  const [areaValue, setAreaValue] = useState("선택하세요"); // 기본값
  const [isOpen, setIsOpen] = useDropdown(dropdownRef, false);
  const areaList = [
    "서울", "경기", "경북", "경남", "충북", "충남", "전북", "전남", "인천", "강원", "제주"
  ];

  // userInfo에서 초기값 설정
  useEffect(() => {
    if (userInfo?.area) {
      setAreaValue(userInfo.area); // userInfo의 area 값을 초기화
      setValue("area", userInfo.area); // useForm에 초기 area 값 설정
    }
  }, [userInfo, setValue]);

  const handleDropdownSelect = (value) => {
    setAreaValue(value);
    setValue("area", value); // useForm에 area 값을 설정
    setIsOpen(false);
  };

  return (
    <>
      <S.LabelSelect htmlFor="area" className="area" ref={dropdownRef}>
        <span>지역</span>

        <S.DropdownButton
          type="button"
          className="dropdown"
          onClick={() => setIsOpen(!isOpen)}
          value={areaValue}
        >
          {areaValue}
          <span>
            <FontAwesomeIcon icon={faAngleDown} className="down" />
          </span>
        </S.DropdownButton>

        <S.DropdownMenu className="dropdownMenu">
          {isOpen && (
            <ul>
              {areaList.map((area, i) => (
                <Area
                  key={i}
                  value={area}
                  setAreaValue={handleDropdownSelect}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                />
              ))}
            </ul>
          )}
        </S.DropdownMenu>
      </S.LabelSelect>
    </>
  );
};

export default AreaContainer;
