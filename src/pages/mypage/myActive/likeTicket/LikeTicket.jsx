import React, { useEffect, useState } from 'react';
import S from './LikeTicketStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const LikeTicket = () => {
  const [ ticket, setTicket ] = useState([]);

  useEffect(() => {
    const getTicket = async () => {
     try {
      const response = await fetch(`http://localhost:8000/my/like/ticket`);
      const datas = await response.json();
      setTicket(datas);
     } catch (error) {
      console.log("LikeTicketError", error)
     }
    }

    getTicket()

  }, [])

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  }

  return (
    <div>
      <S.Container className='Container'>
        { ticket && ticket.map((item, i) => (
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

export default LikeTicket;