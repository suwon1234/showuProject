// MD - 메인페이지
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import S from "./styleMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faCircleChevronLeft, faCircleChevronRight, faHeart,} from "@fortawesome/free-solid-svg-icons";

const MdMain = () => {
  const [mdProducts, setMdProducts] = useState([]);
  const [heartedProducts, setHeartedProducts] = useState([]); 
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 상태
  const ProductsPerSlide = 3; // 한 번에 3개씩 보여줌
  const slideWidth = 1090; // 슬라이드 너비
  const [currentCategory, setCurrentCategory] = useState("전체"); // 현재 선택된 카테고리
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    
    const getMdProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/md");
        const datas = await response.json();
        setMdProducts(datas);
        setFilteredProducts(datas);
      } catch (error) {
        console.error("MdMainError", error);
      }
    };

    getMdProducts();

  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === Math.ceil(mdProducts.length / ProductsPerSlide) - 1 ? 0 : prev + 1
    ); // 마지막 슬라이드에서 처음으로 돌아감
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(mdProducts.length / ProductsPerSlide) - 1 : prev - 1
    ); // 처음 슬라이드에서 마지막으로 돌아감
  };

  // 현재 슬라이드에 맞는 BEST 아이템을 선택
  const visibleBestProducts = mdProducts.slice(
    currentSlide * ProductsPerSlide,
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
        setFilteredProducts(mdProducts); // 전체 상품 표시
      } else {
        setFilteredProducts(
          mdProducts.filter((product) => product.category === category)
        );
      }
    };


  return (
    <S.MainWrapper>
      <S.MdTitle>
        <h1 className="md-title">MD</h1>
        <FontAwesomeIcon icon={faChevronDown} className="icon1" />
      </S.MdTitle>

      <S.BestWrapper>
        <S.BestTitle>
          <h1 className="best-title">BEST</h1>
        </S.BestTitle>

        <S.BestItems>
          <S.LeftIconWrapper onClick={handlePrev}>
            <FontAwesomeIcon icon={faCircleChevronLeft} />
          </S.LeftIconWrapper>

          {/* BEST 상품 */}
          <S.BestListWrapper offset={-currentSlide * slideWidth}>
            {visibleBestProducts.map((best) => (
              <S.Best key={best.id}>
                <Link to={`/shop/md/detail/${best.id}`}>
                  <div className="image-wrapper">
                    <img src={best.image} alt={best.name} className="image" />
                      <S.HeartIconWrapper isHearted={heartedProducts.includes(best.id)}
                        onClick={(e) => handleHeartClick(e, best.id)}>
                        <FontAwesomeIcon icon={faHeart}/>
                      </S.HeartIconWrapper>
                  </div>
                </Link>
                <div className="best-category">{best.category}</div>
                <div className="best-name">{best.name}</div>
                <div className="best-price">{best.price.toLocaleString()}원</div>
              </S.Best>
            ))}
          </S.BestListWrapper>

          <S.RightIconWrapper onClick={handleNext}>
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </S.RightIconWrapper>
        </S.BestItems>
      </S.BestWrapper>

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


      {/* 일반 MD 상품 */}
      <S.MdWrapper>
        <div className="md-list">
          {filteredProducts.map((product) => (
            <S.Md key={product.id}>
              <Link to={`/shop/md/detail/${product.id}`}>
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
                <S.HeartIconWrapper isHearted={heartedProducts.includes(product.id)}
                  onClick={(e) => handleHeartClick(e, product.id)} >
                    <FontAwesomeIcon icon={faHeart} />
                </S.HeartIconWrapper>
                
              </div>
              </Link>
              <div className="md-category">{product.category}</div>
              <div className="md-name">{product.name}</div>
              <div className="md-price">{product.price.toLocaleString()}원</div>
            </S.Md>
          ))}
        </div>
      </S.MdWrapper>

      <S.ButtonWrapper>
        <button>
          <FontAwesomeIcon icon={faChevronRight} className='icon2'/>
          MD 더보기
        </button>
      </S.ButtonWrapper>

    </S.MainWrapper>
  );
};


export default MdMain;
