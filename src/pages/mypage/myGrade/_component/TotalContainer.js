import React, { useEffect, useRef, useState } from 'react';
import S from '../GradeStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import useDropdown from '../../../../hooks/useDropdown';
import Total from './Total';

const TotalContainer = ({ setValue, userInfo }) => {
  const dropdownRef = useRef(null);
  const [totalValue, setTotalValue] = useState('선택하세요'); // 기본값은 '선택하세요'
  const [isOpen, setIsOpen] = useDropdown(dropdownRef, false);
  const totalList = ["신입", "1년", "2년", "3년", "4년", "5년", "6년", "7년", "8년", "9년", "10년 이상"];

  // userInfo에서 초기값 설정
  useEffect(() => {
    if (userInfo?.total) {
      setTotalValue(userInfo.total); // userInfo의 total 값으로 설정
      setValue("total", userInfo.total); // useForm에 초기 total 값 설정
    }
  }, [userInfo, setValue]);

  const handleDropdownSelect = (value) => {
    setTotalValue(value); 
    setValue("total", value); // useForm에 total 값을 설정
    setIsOpen(false); 
  };

  return (
    <>
      <S.LabelSelectTotal htmlFor="total" ref={dropdownRef}>
        <p>총 경력기간</p>

        <S.DropdownButton 
          type="button"
          className="dropdown"
          onClick={() => setIsOpen(!isOpen)}
          value={totalValue}
        >
          {totalValue}
          <span>
            <FontAwesomeIcon icon={faAngleDown} className="down" />
          </span>
        </S.DropdownButton>

        <S.DropdownMenu className="dropdownMenu">
          {isOpen && (
            <ul>
              {totalList.map((total, i) => (
                <Total
                  key={i}
                  value={total}
                  setIsOpen={setIsOpen}
                  setTotalValue={handleDropdownSelect}
                  isOpen={isOpen}
                />
              ))}
            </ul>
          )}
        </S.DropdownMenu>
      </S.LabelSelectTotal>
    </>
  );
};

export default TotalContainer;
