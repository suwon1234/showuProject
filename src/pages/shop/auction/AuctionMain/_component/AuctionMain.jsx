// 경매 - 메인페이지
import React, { useEffect, useState } from 'react';
import S from './styleMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCircleChevronLeft, faCircleChevronRight, faClock, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AuctionMain = () => {
  const [auctionProducts, setAuctionProducts] = useState([]);
  const [heartedProducts, setHeartedProducts] = useState([]); 
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 상태
  const ProductsPerSlide = 3; // 한 번에 3개씩 보여줌
  const slideWidth = 1090; // 슬라이드 너비
  const [currentCategory, setCurrentCategory] = useState("전체"); // 현재 선택된 카테고리
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {

    const getAuctionProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/auction');
        const datas = await response.json();
        setAuctionProducts(datas);
        setFilteredProducts(datas);
      } catch (error) {
        console.error("AuctionMainError", error);
      }
    };

    getAuctionProducts();

  }, [])

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === Math.ceil(auctionProducts.length / ProductsPerSlide) - 1 ? 0 : prev + 1
    ); // 마지막 슬라이드에서 처음으로 돌아감
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(auctionProducts.length / ProductsPerSlide) - 1 : prev - 1
    ); // 처음 슬라이드에서 마지막으로 돌아감
  };

  // 현재 슬라이드에 맞는 BEST 아이템을 선택
  const visibleBestProduct = auctionProducts.slice(
    currentSlide *ProductsPerSlide,
    (currentSlide + 1) * ProductsPerSlide
  );
  
  const handleHeartClick = (e, id) => {
    e.preventDefault(); // 하트 클릭 => 링크 이동 X
    setHeartedProducts((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id) // 하트 제거
        : [...prev, id] // 하트 추가
    );
  };

      // 카테고리 변경 시 필터링
      const handleCategoryChange = (category) => {
        setCurrentCategory(category);
        if (category === "전체") {
          setFilteredProducts(auctionProducts); // 전체 상품 표시
        } else {
          setFilteredProducts(
            auctionProducts.filter((product) => product.category === category)
          );
        }
      };

  return (
    <S.MainWrapper>
      <S.MdTitle>
        <h1 className='auction-title'>경매</h1>
        <FontAwesomeIcon icon={faChevronDown} className='icon1' />
      </S.MdTitle>

      <S.ClosingWrapper>
        <S.ClosingTitle>
          <h1 className='closing-title'>오늘 마감</h1>
        </S.ClosingTitle>
    
        <S.ClosingItems>
          <S.LeftIconWrapper>
            <FontAwesomeIcon icon={faCircleChevronLeft} />
          </S.LeftIconWrapper>

          {/* 오늘 마감 상품 */}
          <S.ClosingListWrapper>
            {visibleBestProduct.map((closing) => (
              <S.Closing key={closing.id}>
                <Link to={`/shop/auction/detail/${closing.id}`}>
                <div className="image-wrapper">
                  <img src={closing.image} alt={closing.image} className='image' />
                  <S.HeartIconWrapper isHearted={heartedProducts.includes(closing.id)}
                    onClick={(e) => handleHeartClick(e, closing.id)} >
                      <FontAwesomeIcon icon={faHeart} />
                  </S.HeartIconWrapper>
                </div>
                </Link>
                <div className='closing-category'>{closing.category}</div>
                <div className='closing-name'>{closing.name}</div>
                <S.Closing2>
                  <div className='closing-number'>{closing.count}회 |</div>
                  <FontAwesomeIcon className='icon' icon={faClock} />
                  <div className='closing-time'>{closing.time}</div>
                </S.Closing2>
              </S.Closing>
            ))}
          </S.ClosingListWrapper>
          
          <S.RightIconWrapper>
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </S.RightIconWrapper>
        </S.ClosingItems>
      </S.ClosingWrapper>

      <S.CategoryButtonWrapper>
        <S.CategoryButton onClick={() => handleCategoryChange("전체")}
          isActive={currentCategory === "전체"}>전체</S.CategoryButton>
        <S.CategoryButton onClick={() => handleCategoryChange("뮤지컬")}
          isActive={currentCategory === "뮤지컬"}>뮤지컬</S.CategoryButton>
        <S.CategoryButton onClick={() => handleCategoryChange("영화")}
          isActive={currentCategory === "영화"}>영화</S.CategoryButton>
        <S.CategoryButton onClick={() => handleCategoryChange("연극")}
          isActive={currentCategory === "연극"}>연극</S.CategoryButton>
      </S.CategoryButtonWrapper>

      {/* 일반 경매 상품 */}
      <S.AuctionWrapper>
        <div className='auction-list'>
          {filteredProducts.map((auction) => (
          <S.Auction key={auction.id}>
            <Link to={`/shop/auction/detail/${auction.id}`}>
            <div className="image-wrapper">
            <img src={auction.image} alt={auction.image} className='image'/>
            <S.HeartIconWrapper isHearted={heartedProducts.includes(auction.id)}
              onClick={(e) => handleHeartClick(e, auction.id)} >
                <FontAwesomeIcon icon={faHeart} />
            </S.HeartIconWrapper>
            </div>
            </Link> 
            <div className='auction-category'>{auction.category}</div>
            <div className='auction-name'>{auction.name}</div>
            <S.Closing2>
              <div className='closing-number'>{auction.count}회 |</div>
              <FontAwesomeIcon className='icon' icon={faClock} />
              <div className='closing-time'>{auction.time}</div>
            </S.Closing2>
          </S.Auction>
        ))}
        </div>
      </S.AuctionWrapper>

      <S.ButtonWrapper>
        <button>
          <FontAwesomeIcon icon={faChevronRight} className='icon2'/>
          경매 더보기
        </button>
      </S.ButtonWrapper>
    </S.MainWrapper>
  );
};

export default AuctionMain;