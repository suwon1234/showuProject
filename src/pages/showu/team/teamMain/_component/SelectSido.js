import React from 'react';
import { useState } from 'react'; 
import hangjungdong from './constants/hangjungdong'

const SelectSido = () => {
    const {val1, setVal1} = useState("");
    const { sido } = hangjungdong;
    return (
        <select className='teamLocation' onChange={(e)=> setVal1(e.target.value)}>
        <option value="">지역</option>
        {sido && sido.map((el)=>{
            console.log(el.codeNm)
        })}
    </select>
    );
};

export default SelectSido;