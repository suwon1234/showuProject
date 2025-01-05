import React from 'react';
import S from './TicketStyle';
import Paging from '../../_component/Paging';

const TicketComponent = ({ page, currentList, setPage, totalPost, PAGINATION, handleNavigate }) => {
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