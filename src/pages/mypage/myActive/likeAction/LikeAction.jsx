import React, { useEffect, useState } from 'react';
import S from './LikeAuctionStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHeart } from '@fortawesome/free-solid-svg-icons';

const LikeAction = () => {
  const [ auctions, setAuctions ] = useState([]);

  useEffect(() => {
    const getAuctions = async () => {
      try {
        const response = await fetch(`http://localhost:4000/md`);
        const datas = await response.json();
        setAuctions(datas)
      } catch (error) {
        console.log("LikeAuctionError", error)
      }
    }

    getAuctions()

  }, [])

  // console.log(auctions)

  return (
    <div>
      <S.Container>

      { auctions && auctions.map((item, i) => (
        <S.Wrapper key={i}>
        <S.Image>
          <img src={item.mdImgUrl} alt="md 이미지" />
        </S.Image>
        <S.Content>
          <p className='title'>{item.mdName}</p>
          <S.AuctionBox>
            <S.AuctionWrapper>
              <p className='auction'>입찰 {item.auctionCount}</p>
              <p>|</p>
              <FontAwesomeIcon icon={faClock} className='alram' />
              <p className='time'>{item.time}</p>
            </S.AuctionWrapper>
          </S.AuctionBox>
          <FontAwesomeIcon icon={faHeart} className='heart'/>
        </S.Content>
      </S.Wrapper> 
      ))}

    </S.Container>
    </div>
  );
};

export default LikeAction;