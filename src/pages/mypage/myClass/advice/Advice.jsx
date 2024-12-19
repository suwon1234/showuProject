import React, { useEffect, useState } from 'react';
import S from './AdviceStyle';

const Advice = () => {
  const [ advice, setAdvice ] = useState([]);

  useEffect(() => {
    const getAdvice = async () => {
      try {
        const response = await fetch('http://localhost:4000/myClass')
        const datas = await response.json()
        setAdvice(datas)
      } catch (error) {
        console.log("AdviceError", error)
      }
    }

    getAdvice()

  }, [])

  // console.log(advice)

  return (
    <div>
      <div>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <th scope='col'>상담 번호</th>
              <th scope='col'>방문 날짜</th>
              <th scope='col'>전화 번호</th>
              <th scope='col'>이메일</th>
              <th scope='col'>비고</th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            { advice && advice.map((item, i) => (
              <S.RowTr key={i}>
                <th scope='row' className='num'>{item.id}</th>
                <td>{item.date}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.etc}</td>
              </S.RowTr>
            ))}
          </S.Tbody>
        </S.Table>
      </div>
    </div>
  );
};

export default Advice;