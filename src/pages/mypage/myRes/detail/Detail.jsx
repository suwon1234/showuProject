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
            <S.Checkbox>
                <input type="checkbox" id='check' />
                <label for="check"></label>
              </S.Checkbox>
              <th scope='col'>예매 번호</th>
              <th scope='col'>좌석 등급</th>
              <th scope='col'>권종</th>
              <th scope='col'>가격</th>
              <th scope='col'>취소 여부</th>
              <th scope='col'>취소(가능)일</th>
            </S.DetailTrTitle>
          </S.DetailThead>

          <S.DetailTbody>

            <S.DetailTr>
              <S.Checkbox>
                <input type="checkbox" id='check' />
                <label for="check"></label>
              </S.Checkbox>
              <th scope='row' className='num'>1</th>
              <td>S석</td>
              <td>L열 20번</td>
              <td>55,000원</td>
              <td>취소 가능</td>
              <td>2024.11.29
                  <br />
                  17:00
              </td>
            </S.DetailTr>
      
          </S.DetailTbody>
        </S.DetailTable>
        <S.Button>취소하기</S.Button>
      </div>
    </div>
  );
};

export default Detail;