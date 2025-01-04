import React, { useRef } from 'react';
import S from './FilterStyle';
import useDropdown from '../../../../hooks/useDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';
import State from './State';

const FilterContainer = ({ stateValue, setStateValue, completedTeams, waitingTeams }) => {
  const dropdownRef = useRef(null);
  const [ isOpen, setIsOpen ] = useDropdown(dropdownRef, false);

  // 매칭 완료와 매칭 대기 팀을 합친 후 상태값에 따라 필터링
  const allTeams = [...completedTeams, ...waitingTeams];
  
  // 상태값 중복 제거
  const filterList = Array.from(new Set(allTeams.map((item) => item.status)));  

  // 상태에 따른 모든 데이터
  // const filteredCurrentList = allTeams.filter((item) => item.status === stateValue);

  // console.log("stateValue", stateValue);
  // console.log("filterList", filterList);
  // console.log("filteredCurrentList", filteredCurrentList); 

  return (
    <S.FilterWrapper className="filterWraper">
      <S.Filter
        className="filter"
        onClick={() => setIsOpen(!isOpen)}  
        value={stateValue}
      >
        <FontAwesomeIcon icon={faArrowDownWideShort} />
        <p>{stateValue}</p>
      </S.Filter>

      {isOpen && (
        <S.DropdownMenu className="dropdownMenu">
          <ul>
            {filterList.map((state, i) => (
              <State
                key={i}
                value={state}
                setStateValue={setStateValue}
                setIsOpen={setIsOpen}
              />
            ))}
          </ul>
        </S.DropdownMenu>
      )}
    </S.FilterWrapper>
  );
};

export default FilterContainer;
