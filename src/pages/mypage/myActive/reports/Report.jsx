import React, { useEffect, useState } from 'react';
import S from './ReportStyle';


const Report = () => {
  const [ reports, setReports ] = useState([]);

  useEffect(() => {
    const getReports = async () => {
      try {
        const response = await fetch(`http://localhost:4000/reports`);
        const datas = await response.json();
        setReports(datas)
      } catch (error) {
        console.log("ReportsError", error)
      }
    }

    getReports()

  }, [])

  // console.log(reports)

  return (
    <div>
      <S.Table>
          <S.Thead>
            <S.Tr>
              <th scope='col'>No</th>
              <th scope='col'>제목</th>
              <th scope='col'>내용</th>
              <th scope='col'>작성일</th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            { reports && reports.map((item, i) => (
              <S.ContentTr key={i}>
                <th scope='row'>{item.id}</th>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.date}</td>
              </S.ContentTr>
            ))}
          </S.Tbody>
        </S.Table>
    </div>
  );
};

export default Report;