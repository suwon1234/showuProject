import React from 'react';
import S from './TicketStyle';

const Ticket = () => {
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
            <S.Tr>
              <th scope='row'>1</th>
              <td>뮤지컬&lt;클로버&gt;</td>
              <td>2024.11.30(화) 15:00</td>
              <td>2</td>
              <td>2024.11.29 17:00</td>
              <td>예약 완료</td>
            </S.Tr>
            <S.Tr>
              <th scope='row'>2</th>
              <td>뮤지컬&lt;광화문연가&gt;</td>
              <td>2024.11.30(화) 15:00</td>
              <td>2</td>
              <td>2024.11.29 17:00</td>
              <td>예약 완료</td>
            </S.Tr>
            <S.Tr>
              <th scope='row'>3</th>
              <td>뮤지컬&lt;랭보&gt;</td>
              <td>2024.11.30(화) 15:00</td>
              <td>2</td>
              <td>2024.11.29 17:00</td>
              <td>예약 완료</td>
            </S.Tr>
            <S.Tr>
              <th scope='row'>4</th>
              <td>뮤지컬&lt;글루미 선데이&gt;</td>
              <td>2024.11.30(화) 15:00</td>
              <td>2</td>
              <td>2024.11.29 17:00</td>
              <td>예약 완료</td>
            </S.Tr>
            <S.Tr>
              <th scope='row'>5</th>
              <td>뮤지컬&lt;해피 오! 해피&gt;</td>
              <td>2024.11.30(화) 15:00</td>
              <td>2</td>
              <td>2024.11.29 17:00</td>
              <td>예약 완료</td>
            </S.Tr>
            <S.Tr>
              <th scope='row'>6</th>
              <td>뮤지컬&lt;해적&gt;
                : THE LAST LOVE
              </td>
              <td>2024.11.30(화) 15:00</td>
              <td>2</td>
              <td>2024.11.29 17:00</td>
              <td>예약 완료</td>
            </S.Tr>
            <S.Tr>
              <th scope='row'>7</th>
              <td>뮤지컬&lt;클로버&gt;</td>
              <td>2024.11.30(화) 15:00</td>
              <td>2</td>
              <td>2024.11.29 17:00</td>
              <td>예약 완료</td>
            </S.Tr>
            <S.Tr>
              <th scope='row'>8</th>
              <td>뮤지컬&lt;클로버&gt;</td>
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

export default Ticket;