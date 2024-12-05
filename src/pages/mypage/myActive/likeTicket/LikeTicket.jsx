import React from 'react';
import S from './LikeTicketStyle';

const LikeTicket = () => {
  return (
    <S.Conatiner className='Container'>
      <S.Wrapper className='Wrapper'>

        <S.TicketBox className='ticketBox'>
          <p>뮤지컬 &lt;클로버&gt;</p>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>예매번호</th>
                <th scope='col'>관람일시</th>
                <th scope='col'>티켓</th>
                <th scope='col'>결제금액</th>
                <th scope='col'>취소가능일</th>
                <th scope='col'>현재상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>2024.11.30(금) 13:00</td>
                <td>1매</td>
                <td>66,000원</td>
                <td>2024.11.29 19:30</td>
                <td>예매완료</td>
              </tr>
            </tbody>
          </table>
        </S.TicketBox>
      </S.Wrapper>
      
    </S.Conatiner>
  );
};

export default LikeTicket;