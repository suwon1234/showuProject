import React, { useEffect, useState } from 'react';
import S from './TicketStyle';
import { useNavigate } from 'react-router-dom';

const Ticket = () => {
  const [ ticket, setTicket ] = useState([]);

  useEffect(() => {
    const getTicket = async () => {
     try {
      const response = await fetch(`http://localhost:4000/ticket`);
      const datas = await response.json();
      setTicket(datas);
     } catch (error) {
      console.log("TicketError", error)
     }
    }

    getTicket()

  }, [])

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  }

  // console.log(ticket)
  
  //예약 완료인 티켓내역만 보여주기
  const filterTicket = ticket.filter((item) => item.state.includes("예약 완료"))
  // console.log(filterTicket)

  return (
    <div>
      <S.Container className='Container'>
        { filterTicket && filterTicket.map((item, i) => (
          <S.Wrapper key={i} className='Wrapper' onClick={() => handleNavigate('/my-res/ticket/detail')}>
            <S.RightContent className='rightContent'>
              <p className='date'>{item.date}</p>
              <p className='id'>예매번호 {item.id}</p>
              <p className='ticketName'>{item.ticketName}</p>
              <p className='qty'>{item.qty}매</p>
              {/* <p className='cancellableDate'>취소 가능일 {item.cancellableDate}</p> */}
              <p className='location'>{item.location}</p>
              <p className='state'>{item.state}</p>
            </S.RightContent>
            <S.Img className='img'>
              <img src={item.ticketImgUrl} alt="티켓 포스터 이미지" />
              <div className='top'></div>
              <div className='bottom'></div>
            </S.Img>
          </S.Wrapper>
        ))
        }
      </S.Container>
    </div>
  );
};

export default Ticket;