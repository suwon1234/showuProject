import React from 'react';
import S from './DetailStyle';

const Detail = () => {
  return (
    <div>
      <S.Table>
        <tbody>
          <S.Tr>
            <th scope='row'>티켓명</th>
            <td>
              <span>뮤지컬&lt;클로버&gt;</span>
            </td>
            <th scope='row'>예매자</th>
            <td>홍길동</td>
          </S.Tr>
          <S.Tr>
            <th scope='row'>관람 일시</th>
            <td>2024.11.30(토) 15:00</td>
            <th scope='row'>장소</th>
            <td>대학로 자유극장</td>
          </S.Tr>
          <S.Tr>
            <th scope='row'>좌석</th>
            <td>S석 L열 20번</td>
            <th scope='row'>티켓수령 방법</th>
            <td>현장수령</td>
          </S.Tr>
          <S.Tr>
            <th>예매일</th>
            <td>2024.11.02</td>
            <th>현재상태</th>
            <td>예매완료</td>
          </S.Tr>
        </tbody>
      </S.Table>

      <div>
        <S.Title>티켓 예매 내역</S.Title>

        <S.DetailTable>
          <S.DetailThead>
            <S.DetailTrTitle>
              <th scope='col'>예매 번호</th>
              <th scope='col'>티켓명</th>
              <th scope='col'>관람 일시</th>
              <th scope='col'>매수</th>
              <th scope='col'>취소 가능일</th>
              <th scope='col'>상태</th>
            </S.DetailTrTitle>
          </S.DetailThead>

          <S.DetailTbody>

            <S.DetailTr>
              <th scope='row'>1</th>
              <td>뮤지컬&lt;클로버&gt;</td>
              <td>2024.11.30(화) 15:00</td>
              <td>2</td>
              <td>2024.11.29 17:00</td>
              <td>전체 취소
                  <br />
                  2024.11.02
              </td>
            </S.DetailTr>
      
          </S.DetailTbody>
        </S.DetailTable>
      </div>
    </div>
  );
};

export default Detail;