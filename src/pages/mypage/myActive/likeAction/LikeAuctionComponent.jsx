import React from 'react';
import S from './LikeAuctionStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHeart } from '@fortawesome/free-solid-svg-icons';
import Paging from '../../_component/Paging';

const LikeAuctionComponent = ({ page, currentList, setPage, totalPost, PAGINATION }) => {
  return (
    <div>
      <S.Container>
        { currentList && currentList.length > 0 ?
        (currentList.map((item, i) => (
          <S.Wrapper key={i}>
            <S.Image>
              <img src={item.image} alt="md 이미지" />
            </S.Image>
            <S.Content>
              <p className='title'>{item.auctionName}</p>
              <S.AuctionBox>
                <S.AuctionWrapper>
                  <p className='auction'>입찰 {item.count}회</p>
                  <p>|</p>
                  <FontAwesomeIcon icon={faClock} className='alram' />
                  <p className='time'>{item.time}</p>
                </S.AuctionWrapper>
              </S.AuctionBox>
              <FontAwesomeIcon icon={faHeart} className='heart'/>
            </S.Content>
          </S.Wrapper> 
        ))) : (
          <p>찜한 경매가 없습니다</p>
        )
        }
        <Paging 
          page={page}
          setPage={setPage}
          totalPost={totalPost}
          btnRange={PAGINATION.btnRange}
          pageRange={PAGINATION.pageRange}
      />
      </S.Container>
    </div>
  );
};

export default LikeAuctionComponent;