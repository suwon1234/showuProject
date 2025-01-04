import React, { useEffect, useState } from 'react';
import S from './styleShop';
import { faChevronDown, faChevronRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Shop = () => {
  
  const [mdItems, setMdItems] = useState([]);
  const [auctionItems, setAuctionItems] = useState([]);

  useEffect(() => {
    
    const getMdItems = async () => {
      try {
        // const response = await fetch("http://localhost:4000/md");
        const response = await fetch("http://localhost:8000/shop/md");
        const datas = await response.json();
        setMdItems(datas);
      } catch (error) {
        console.error("MdMainError", error);
      }
    };

    getMdItems();
  
  }, []);

  useEffect(() => {

    const getAuction = async () => {
      try {
        // const response = await fetch('http://localhost:4000/auction');
        const response = await fetch('http://localhost:8000/shop/auction');
        const datas = await response.json();
        setAuctionItems(datas);
      } catch (error) {
        console.error("AuctionMainError", error);
      }
    };

    getAuction();

  }, [])

  return (
    <S.ShopWrapper>
      
       <S.ShopTitle>
        <h1 className="shop-title">Shop</h1>
        <FontAwesomeIcon icon={faChevronDown} className="icon1" />
      </S.ShopTitle>

      <S.ShopButton>
        <Link to={'/shop/md'}>
        <S.MdButton>MD</S.MdButton>
        </Link>
        <Link to={'/shop/auction'}>
          <S.AuctionButton>경매</S.AuctionButton>
        </Link>
      </S.ShopButton>
      
      <S.Title>MD</S.Title>

      <S.MdWrapper>
        <div className="md-list">
          {mdItems.slice(6,12).map((item) => (
            <S.Md key={item._id}>
              <Link to={`/shop/md/detail/${item._id}`}>
                <img src={item.image} alt={item.name} />
              </Link>
              <div className="md-category">{item.category}</div>
              <div className="md-name">{item.mdName}</div>
              <div className="md-price">
                {item.price ? item.price.toLocaleString() : "가격 정보 없음"}원</div>
            </S.Md>
          ))}
        </div>
      </S.MdWrapper>

      <S.ButtonWrapper>
        <Link to={"/shop/md"}>
        <button>
          <FontAwesomeIcon icon={faChevronRight} className='icon2'/>
          MD 더보기
        </button>
        </Link>
      </S.ButtonWrapper>

      <S.Title>경매</S.Title>

      <S.AuctionWrapper>
        <div className='auction-list'>
          {auctionItems.slice(6,12).map((auction) => (
          <S.Closing key={auction._id}>
            <Link to={`/shop/auction/detail/${auction._id}`}>
            <img src={auction.image} alt={auction.image} className='image'/>
            </Link>   
            <div className='closing-category'>{auction.category}</div>
            <div className='closing-name'>{auction.auctionName}</div>
            <S.Closing2>
              <div className='closing-number'>{auction.count}회 |</div>
              <FontAwesomeIcon className='icon' icon={faClock} />
              <div className='closing-time'>{auction.time}</div>
            </S.Closing2>
          </S.Closing>
        ))}
        </div>
      </S.AuctionWrapper>

      <S.ButtonWrapper>
        <Link to={"/shop/auction"}>
        <button>
          <FontAwesomeIcon icon={faChevronRight} className='icon2'/>
          경매 더보기
        </button>
        </Link>
      </S.ButtonWrapper>
      
    </S.ShopWrapper>
  );
};

export default Shop;