import React from 'react';
import S from './TicketStyle';
import Paging from '../../_component/Paging';
import { Link } from 'react-router-dom';

const TicketComponent = ({ page, currentList, setPage, totalPost, PAGINATION, handleNavigate }) => {

  if (currentList.length === 0) {
    return (
      <S.NoneItem>
        <p>아직 예매한 티켓이 없네요!</p>
        <p>원하는 공연을 찾아 예매해보세요.</p>
        <Link to={"/reservation"}>
          <S.LinkToPath>티켓예매 보러가기</S.LinkToPath>
        </Link>
      </S.NoneItem>
    );
  }

  return (
    <>
      <S.Container className='Container'>
        { currentList && currentList.map((item, i) => (
          <S.Wrapper key={i} className='Wrapper' onClick={() => handleNavigate(`/my-res/ticket/detail/${item.id}`)}>
            <S.RightContent className='rightContent'>
              <p className='date'>{item.dates}</p>
              <p className='id'>예매번호 {item.id}</p>
              <p className='ticketName'>{item.name}</p>
              {/* <p className='qty'>{item.qty}매</p> */}
              {/* <p className='cancellableDate'>취소 가능일 {item.cancellableDate}</p> */}
              <p className='location'>{item.venue}</p>
              {/* <p className='state'>{item.state}</p> */}
            </S.RightContent>
            <S.Img className='img'>
              <img src={item.img} alt="티켓 포스터 이미지" />
              <div className='top'></div>
              <div className='bottom'></div>
            </S.Img>
          </S.Wrapper>
        ))}
        <Paging 
          page={page}
          setPage={setPage}
          totalPost={totalPost}
          btnRange={PAGINATION.btnRange}
          pageRange={PAGINATION.pageRange}
        />  
      </S.Container>
    </>
  );
};

export default TicketComponent;