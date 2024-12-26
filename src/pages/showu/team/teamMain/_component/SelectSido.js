import React from 'react';
import { useState } from 'react'; 
const hangjungdong = {sido:[{sido:'11', codeNm:'서울특별시'},
    {sido:'26', codeNm:'부산광역시'},
    {sido:'27', codeNm:'대구광역시'},
    {sido:'28', codeNm:'인천광역시'},
    {sido:'29', codeNm:'광주광역시'},
    {sido:'30', codeNm:'대전광역시'},
    {sido:'31', codeNm:'울산광역시'},
    {sido:'36', codeNm:'세종특별자치시'},
    {sido:'41', codeNm:'경기도'},
    {sido:'42', codeNm:'강원도'},
    {sido:'43', codeNm:'충청북도'},
    {sido:'44', codeNm:'충청남도'},
    {sido:'45', codeNm:'전라북도'},
    {sido:'46', codeNm:'전라남도'},
    {sido:'47', codeNm:'경상북도'},
    {sido:'48', codeNm:'경상남도'},
    {sido:'50', codeNm:'제주특별자치도'}],
    }

const SelectSido = () => {
    const {val1, setVal1} = useState("");
    const { sido } = hangjungdong;
    return (
        <select onChange={(e) => setVal1(e.target.value)} className='lessonCategory' style={{
            backgroundColor : "#000",
            padding : "5px"
        }}>
        <option value="">선택</option>
        {sido.map((el) => (
          <option key={el.sido} value={el.sido} >
            {el.codeNm}
          </option>
        ))}
      </select>
    );
};

export default SelectSido;