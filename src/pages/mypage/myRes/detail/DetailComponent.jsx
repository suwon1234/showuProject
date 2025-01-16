import React from 'react';
import S from './DetailStyle';

const DetailComponent = () => {
  const jwtToken = localStorage.getItem("jwtToken");

  const handleDeleteTicket = async (data) => {
    const { userId } = data;

    if(window.confirm("티켓을 취소하시겠습니까?")){
      await fetch(`http://localhost:8000/my/reservation/ticket/delete`, {
        method : "DELETE",
        headers : {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        body : JSON.stringify({
          userId : userId
        })
      })
        .then((res) => res.json())
        .then((res) => {
          if(!res.deleteTicketSuccess){
            console.log(res.message)
          }

        })
    }
  }

  return (
    <>
      <S.Table>
        <tbody>
          <S.Tr>
            <th scope='row'>티켓명</th>
            <td>
              <span>{ticket.ticketName}</span>
            </td>
            <th scope='row'>예매자</th>
            <td>{ticket.name}</td>
          </S.Tr>
          <S.Tr>
            <th scope='row'>관람 일시</th>
            <td>{ticket.date}</td>
            <th scope='row'>장소</th>
            <td>{ticket.location}</td>
          </S.Tr>
          <S.Tr>
            <th scope='row'>좌석</th>
            <td>{ticket.seat}</td>
            <th>예매일</th>
            <td>{ticket.bookingDay}</td>
          </S.Tr>
          <S.Tr>
            <th>현재상태</th>
            <td>{ticket.state}</td>
          </S.Tr>
        </tbody>
      </S.Table>

      <div>
        <S.Title>티켓 예매 내역</S.Title>

        <S.DetailTable>
          <S.DetailThead>
            <S.DetailTrTitle>
            {/* <Checkbox /> */}
              <th scope='col'>예매 번호</th>
              <th scope='col'>좌석</th>
              {/* <th scope='col'>권종</th> */}
              <th scope='col'>가격</th>
              <th scope='col'>취소 여부</th>
              <th scope='col'>취소(가능)일</th>
            </S.DetailTrTitle>
          </S.DetailThead>

          <S.DetailTbody>

            <S.DetailTr>
              {/* <Checkbox /> */}
              <th scope='row' className='num'>{ticket.id}</th>
              <td>{ticket.seat}</td>
              {/* <td>L열 20번</td> */}
              <td>{ticket.price}</td>
              <td>{ticket.cancellationStatus}</td>
              <td>{ticket.cancellableDate}</td>
            </S.DetailTr>
      
          </S.DetailTbody>
        </S.DetailTable>

        <S.ButtonContainer className='ButtonContainer'>
          <S.Button onClick={() => handleNavigate(-1)}>이전으로</S.Button>
          <S.Button>취소하기</S.Button>
        </S.ButtonContainer>

      </div>
    </>
  );
};

export default DetailComponent;