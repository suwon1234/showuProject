import React from 'react';
import S from './AdviceStyle';

const Advice = () => {
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
            <S.RowTr>
              <th scope='row' className='num'>1</th>
              <td>2024.11.30(화) 15:00</td>
              <td>010-1234-5678</td>
              <td>aaa1234@showu.com</td>
              <td>비고</td>
            </S.RowTr>
            <S.RowTr>
              <th scope='row' className='num'>2</th>
              <td>2024.11.30(화) 15:00</td>
              <td>010-1234-5678</td>
              <td>aaa1234@showu.com</td>
              <td>비고</td>
            </S.RowTr>
            <S.RowTr>
              <th scope='row' className='num'>3</th>
              <td>2024.11.30(화) 15:00</td>
              <td>010-1234-5678</td>
              <td>aaa1234@showu.com</td>
              <td>비고</td>
            </S.RowTr>
            <S.RowTr>
              <th scope='row' className='num'>4</th>
              <td>2024.11.30(화) 15:00</td>
              <td>010-1234-5678</td>
              <td>aaa1234@showu.com</td>
              <td>비고</td>
            </S.RowTr>
            <S.RowTr>
              <th scope='row' className='num'>5</th>
              <td>2024.11.30(화) 15:00</td>
              <td>010-1234-5678</td>
              <td>aaa1234@showu.com</td>
              <td>비고</td>
            </S.RowTr>
            <S.RowTr>
              <th scope='row' className='num'>6</th>
              <td>2024.11.30(화) 15:00</td>
              <td>010-1234-5678</td>
              <td>aaa1234@showu.com</td>
              <td>비고</td>
            </S.RowTr>
            <S.RowTr>
              <th scope='row' className='num'>7</th>
              <td>2024.11.30(화) 15:00</td>
              <td>010-1234-5678</td>
              <td>aaa1234@showu.com</td>
              <td>비고</td>
            </S.RowTr>
            <S.RowTr>
              <th scope='row' className='num'>8</th>
              <td>2024.11.30(화) 15:00</td>
              <td>010-1234-5678</td>
              <td>aaa1234@showu.com</td>
              <td>비고</td>
            </S.RowTr>
          </S.Tbody>
        </S.Table>
      </div>
    </div>
  );
};

export default Advice;