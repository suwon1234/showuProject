import React, { useEffect, useRef, useState } from 'react';
import S from './FilterStyle';
import useDropdown from '../../../../hooks/useDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';
import State from './State';

const FilterContainer = ({ stateValue, setStateValue }) => {
  const dropdownRef = useRef(null);
  const [ allData, setAllData ] = useState([]);
  const [ isOpen, setIsOpen ] = useDropdown(dropdownRef, false);

  useEffect(() => {
    const getState = async () => {
      try {
        const response = await fetch(`http://localhost:4000/myTeam`);
        const datas = await response.json();
          setAllData(datas)
      }catch (error){
        console.log(error)
      }
    }

    getState();
      
  }, [stateValue])


  const filterList = Array.from(new Set(allData.map((items) => items.state)))

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