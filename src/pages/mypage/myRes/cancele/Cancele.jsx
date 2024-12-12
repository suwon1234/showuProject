import React from 'react';
import S from './CanceleStyle';
import { useNavigate } from 'react-router-dom';

const Cancele = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    console.log(path);
    navigate(path);
  }

  return (
    <div>
      <S.Table>
          <S.Thead>
            <S.TrTitle>
              <th scope='col'>예매 번호</th>
              <th scope='col'>티켓명</th>
              <th scope='col'>관람 일시</th>
              <th scope='col'>매수</th>
              <th scope='col'>취소 가능일</th>
              <th scope='col'>상태</th>
            </S.TrTitle>
          </S.Thead>
          <S.Tbody>
            <S.Tr onClick={() => handleNavigate('/my-res/ticket/detail')}>
              <th scope='row'>1</th>
              <td>뮤지컬&lt;클로버&gt;</td>
              <td>2024.11.30(화) 15:00</td>
              <td>2</td>
              <td>2024.11.29 17:00</td>
              <td>예약 완료</td>
            </S.Tr>
            <S.Tr onClick={() => handleNavigate('/my-res/ticket/detail')}>
              <th scope='row'>2</th>
              <td>뮤지컬&lt;광화문연가&gt;</td>
              <td>2024.11.30(화) 15:00</td>
              <td>2</td>
              <td>2024.11.29 17:00</td>
              <td>예약 완료</td>
            </S.Tr>
            <S.Tr onClick={() => handleNavigate('/my-res/ticket/detail')}>
              <th scope='row'>3</th>
              <td>뮤지컬&lt;해적&gt;
                : THE LAST LOVE</td>
              <td>2024.11.30(화) 15:00</td>
              <td>2</td>
              <td>2024.11.29 17:00</td>
              <td>예약 완료</td>
            </S.Tr>
          </S.Tbody>
        </S.Table>
    </div>
  );
};

export default Cancele;