import React, { useEffect, useState } from 'react';
import S from './DetailStyle';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Detail = () => {
  const { id } = useParams();
  // console.log(id)
  const [ ticket, setTicket ] = useState([]);
  const jwtToken = localStorage.getItem("jwtToken");

  const { currentUser } = useSelector((state) => state.user)


  useEffect(() => {
    const getTicket = async () => {
     try {
      const response = await fetch(`http://localhost:8000/my/reservation/ticket/${id}`, {
        method : "GET",
        headers : {
          "Authorization": `Bearer ${jwtToken}`
        }
      })
        .then((res) => res.json())
        .then((res) => {
          if(!res.ticketsuccess){
            console.log(res.message)
          }
          setTicket(res.resTicketList)
          console.log(res.message)
          console.log(res.resTicketList)
        })
     } catch (error) {
      console.log("TicketError", error)
     }
    }

    getTicket()

  }, [jwtToken])

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  }

  const handleDeleteTicket = async (ticketId) => {
    console.log("전달받은 ticketId:", ticketId);
    if (!ticketId) return alert("티켓 정보를 확인할 수 없습니다.");
    
    if (window.confirm("티켓을 취소하시겠습니까?")) {
      try {
        const response = await fetch(`http://localhost:8000/my/reservation/ticket/delete`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken}`
          },
          body: JSON.stringify({
            ticketId: ticketId
          })
        });
  
        const result = await response.json();
        if (result.deleteTicketSuccess) {
          alert(result.message);
          setTicket((prevTickets) => prevTickets.filter(ticket => ticket.id !== ticketId));
          navigate(-1)
        } else {
          alert(result.message || "티켓 취소 실패했습니다.");
        }
      } catch (error) {
        console.error("Ticket delete error:", error);
        alert("티켓 취소 중 오류가 발생했습니다.");
      }
    }
  };

  // console.log("ticket", ticket)

  return (
    <>
      { ticket && ticket.map((ticket, i) => (
        <S.Table key={i} >
        <tbody>
          <S.Tr>
            <th scope='row'>티켓명</th>
            <td>
              <span>{ticket.name}</span>
            </td>
            <th scope='row'>예매자</th>
            <td>{currentUser.name}</td>
          </S.Tr>
          <S.Tr>
            <th scope='row'>관람 일시</th>
            <td>{ticket.dates}</td>
            <th scope='row'>장소</th>
            <td>{ticket.venue}</td>
          </S.Tr>
          <S.Tr>
            <th scope='row'>좌석</th>
            <td>{ticket.seatNumbers.map((seatNumbers) => (seatNumbers)).join(", ")}</td>
            <th>예매일</th>
            <td>{ticket.createdAt}</td>
          </S.Tr>
          <S.Tr>
            {/* <th>현재상태</th> */}
            {/* <td>{ticket.state}</td> */}
          </S.Tr>
        </tbody>
      </S.Table>
      ))
      }

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
              {/* <th scope='col'>취소 여부</th>
              <th scope='col'>취소(가능)일</th> */}
            </S.DetailTrTitle>
          </S.DetailThead>

          <S.DetailTbody>

            { ticket && ticket.map((ticket, i) => (
              <S.DetailTr key={i} >
                {/* <Checkbox /> */}
                <th scope='row' className='num'>{ticket.id}</th>
                <td>{ticket.seatNumbers.map((seatNumbers) => (seatNumbers)).join(", ")}</td>
                {/* <td>L열 20번</td> */}
                <td>{ticket.price.R}</td>
                {/* <td>{ticket.cancellationStatus}</td>
                <td>{ticket.cancellableDate}</td> */}
              </S.DetailTr>
            ))
            }
      
          </S.DetailTbody>
        </S.DetailTable>
        
        { ticket && ticket.map((ticket, i) => (
          <S.ButtonContainer key={i}>
            <S.Button onClick={() => handleNavigate('/my-res/ticket')}>이전으로</S.Button>
            <S.Button onClick={() => {
              handleDeleteTicket(ticket.id)
              console.log("ticket.id", ticket)
            }}
            >
            취소하기</S.Button>
          </S.ButtonContainer>
        ))
        }
      </div>
    </>
  );
};

export default Detail;