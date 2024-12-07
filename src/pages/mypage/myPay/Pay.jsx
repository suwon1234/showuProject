import React from 'react';
import S from './PayStyle';

const Pay = () => {
  return (
    <div>
      <div>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <th scope='col'>No</th>
              <th scope='col'>날짜</th>
              <th scope='col'>상품명</th>
              <th scope='col'>결제금액</th>
              <th scope='col'>
                <S.Select name="category" id="category">
                  <option value="MD">전체</option>
                  <option value="MD">MD</option>
                  <option value="경매">경매</option>
                </S.Select>
              </th>
              <th scope='col'>결제상태</th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            <S.ContentTr>
              <th scope='row'>1</th>
              <td>2024.11.29 17:00</td>
              <td>베르사유의 장미</td>
              <td>66,000원</td>
              <td>MD</td>
              <td>결제 완료</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>2</th>
              <td>2024.11.29 17:00</td>
              <td>베르사유의 장미</td>
              <td>66,000원</td>
              <td>MD</td>
              <td>결제 완료</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>3</th>
              <td>2024.11.29 17:00</td>
              <td>베르사유의 장미</td>
              <td>66,000원</td>
              <td>MD</td>
              <td>결제 완료</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>4</th>
              <td>2024.11.29 17:00</td>
              <td>베르사유의 장미</td>
              <td>66,000원</td>
              <td>MD</td>
              <td>결제 완료</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>5</th>
              <td>2024.11.29 17:00</td>
              <td>베르사유의 장미</td>
              <td>66,000원</td>
              <td>MD</td>
              <td>결제 완료</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>6</th>
              <td>2024.11.29 17:00</td>
              <td>베르사유의 장미</td>
              <td>66,000원</td>
              <td>MD</td>
              <td>결제 완료</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>7</th>
              <td>2024.11.29 17:00</td>
              <td>베르사유의 장미</td>
              <td>66,000원</td>
              <td>MD</td>
              <td>결제 완료</td>
            </S.ContentTr>
            <S.ContentTr>
              <th scope='row'>8</th>
              <td>2024.11.29 17:00</td>
              <td>베르사유의 장미</td>
              <td>66,000원</td>
              <td>MD</td>
              <td>결제 완료</td>
            </S.ContentTr>
          </S.Tbody>
        </S.Table>
      </div>
    </div>
  );
};

export default Pay;