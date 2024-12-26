import React, { useEffect, useState } from 'react';
import S from './CanceleStyle';
import { useNavigate } from 'react-router-dom';

const Cancele = () => {
  const [ cancele, setCancele ] = useState([]);

  useEffect(() => {
    const getCanceleTicket = async () => {
     try {
      const response = await fetch(`http://localhost:4000/ticket`);
      const datas = await response.json();
      setCancele(datas);
     } catch (error) {
      console.log("CanceleTicketError", error)
     }
    }

    getCanceleTicket()

  }, [])

  // console.log(cancele)

  //전체 취소인 티켓내역만 보여주기
  const filterCanceleTicket = cancele.filter((item) => item.state.includes("전체 취소"))
  // console.log(filterCanceleTicket)

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  }

  return (
    <div>
      <S.Container className='Container'>
        { filterCanceleTicket && filterCanceleTicket.map((item, i) => (
          <S.Wrapper key={i} className='Wrapper' onClick={() => handleNavigate(`/my-res/ticket/detail/${item.id}`)}>
            <S.RightContent className='rightContent'>
              <p className='date'>{item.date}</p>
              <p className='id'>예매번호 {item.id}</p>
              <p className='ticketName'>{item.ticketName}</p>
              <p className='qty'>{item.qty}매</p>
              <p className='cancellableDate'>취소 가능일 {item.cancellableDate}</p>
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

export default Cancele;