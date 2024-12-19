import React, { useEffect, useRef, useState } from 'react';
import S from './FilterStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';
import State from './State';
import useDropdown from '../../../../../hooks/useDropdown';

const FilterContainer = ({ stateValue, setStateValue }) => {
  const dropdownRef = useRef(null);
  const [ allData, setAllData ] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [ isOpen, setIsOpen ] = useDropdown(dropdownRef, false);

  useEffect(() => {
    const getState = async () => {
      try {
        const response = await fetch(`http://localhost:4000/myResProps`);
        const datas = await response.json();
        setAllData(datas)
      }catch (error){
        console.log("FilterContainerError" ,error)
      }
    }

    getState();
      
  }, [])

  useEffect(() => {
    if (stateValue === "남은 기간") {
      setFilteredData(allData.filter(item => item.status.includes("남음")));
    } else if (stateValue === "반납 완료") {
      setFilteredData(allData.filter(item => item.status.includes("반납 완료")));
    }
  }, [stateValue, allData]);

  const filterList = ["남은 기간", "반납 완료"]
  
  return (
    <>
      <S.FilterWrapper className='filterWraper'>

        <S.Filter 
          className='filter'
          onClick={() => setIsOpen(!isOpen)}  
          value={stateValue}
        >
          <FontAwesomeIcon icon={faArrowDownWideShort} />
          <p>{stateValue}</p>
        </S.Filter>

        <S.DropdownMenu className='dropdownMenu'>
          { isOpen &&
            <ul>
              {filterList.map((state, i) => (
                <State key={i} value={state} isOpen={isOpen} setStateValue={setStateValue} setIsOpen={setIsOpen} />
              ))}
            </ul>
          }
        </S.DropdownMenu>

      </S.FilterWrapper>
    </>
  );
};

export default FilterContainer;