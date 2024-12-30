import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import S from "./styleMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faCircleChevronLeft,
  faCircleChevronRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const MdMain = () => {
  const [mdProducts, setMdProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]); // Best 제품 상태
  const [currentSlide, setCurrentSlide] = useState(0);
  const ProductsPerSlide = 3; // 한 번에 3개씩 보여줌
  const slideWidth = 1090;
  const [currentCategory, setCurrentCategory] = useState("전체");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getMdProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/shop/md");

        if (!response.ok) {
          throw new Error(`서버 응답 오류: ${response.status}`);
        }

        const datas = await response.json();
        if (datas.length === 0) {
          console.log("데이터가 존재하지 않습니다.");
        } else {
          setMdProducts(datas);
          setFilteredProducts(datas);
          // Best 제품은 별도의 상태로 초기화 (독립적으로 관리)
          setBestProducts(datas.slice(0, ProductsPerSlide)); // 초기 Best 제품
        }
      } catch (error) {
        console.error("MdMainError", error);
      }
    };

    getMdProducts();
  }, []);

  // Best 슬라이드 관련 핸들러
  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === Math.ceil(mdProducts.length / ProductsPerSlide) - 1 ? 0 : prev + 1
    );

    const nextStartIndex =
      (currentSlide + 1) * ProductsPerSlide >= mdProducts.length
        ? 0
        : (currentSlide + 1) * ProductsPerSlide;

    setBestProducts(
      mdProducts.slice(nextStartIndex, nextStartIndex + ProductsPerSlide)
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(mdProducts.length / ProductsPerSlide) - 1 : prev - 1
    );

    const prevStartIndex =
      currentSlide === 0
        ? (Math.ceil(mdProducts.length / ProductsPerSlide) - 1) * ProductsPerSlide
        : (currentSlide - 1) * ProductsPerSlide;

    setBestProducts(
      mdProducts.slice(prevStartIndex, prevStartIndex + ProductsPerSlide)
    );
  };

  // 하트 클릭 핸들러 (카테고리 하단)
  const handleHeartClickCategory = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();

    setMdProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId
          ? { ...product, ishearted: !product.ishearted }
          : product
      )
    );
  };

  // 하트 클릭 핸들러 (Best 제품)
  const handleHeartClickBest = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();

    setBestProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId
          ? { ...product, ishearted: !product.ishearted }
          : product
      )
    );
  };

  // 카테고리 변경 핸들러
  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  useEffect(() => {
    if (currentCategory === "전체") {
      setFilteredProducts(mdProducts);
    } else {
      setFilteredProducts(
        mdProducts.filter((product) => product.category === currentCategory)
      );
    }
  }, [mdProducts, currentCategory]);

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

          {/* Best 상품 */}
          <S.BestListWrapper offset={-currentSlide * slideWidth}>
            {bestProducts.map((best) => (
              <S.Best key={best._id}>
                <Link to={`/shop/md/detail/${best._id}`}>
                  <div className="image-wrapper">
                    <img src={best.image} alt={best.name} className="image" />
                    <S.HeartIconWrapper
                      isHearted={best.ishearted}
                      onClick={(e) => handleHeartClickBest(e, best._id)}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </S.HeartIconWrapper>
                  </div>
                </Link>
                <div className="best-category">{best.category}</div>
                <div className="best-name">{best.name}</div>
                <div className="best-price">
                  {best.price.toLocaleString()}원
                </div>
              </S.Best>
            ))}
          </S.BestListWrapper>

          <S.RightIconWrapper onClick={handleNext}>
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </S.RightIconWrapper>
        </S.BestItems>
      </S.BestWrapper>

      <S.CategoryButtonWrapper>
        {["전체", "뮤지컬", "영화", "연극"].map((category) => (
          <S.CategoryButton
            key={category}
            onClick={() => handleCategoryChange(category)}
            isActive={currentCategory === category}
          >
            {category}
          </S.CategoryButton>
        ))}
      </S.CategoryButtonWrapper>

      {/* 일반 MD 상품 */}
      <S.MdWrapper>
        <div className="md-list">
          {filteredProducts.map((product) => (
            <S.Md key={product._id}>
              <Link to={`/shop/md/detail/${product._id}`}>
                <div className="image-wrapper">
                  <img src={product.image} alt={product.name} />
                  <S.HeartIconWrapper
                    isHearted={product.ishearted}
                    onClick={(e) => handleHeartClickCategory(e, product._id)}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </S.HeartIconWrapper>
                </div>
              </Link>
              <div className="md-category">{product.category}</div>
              <div className="md-name">{product.name}</div>
              <div className="md-price">
                {product.price.toLocaleString()}원
              </div>
            </S.Md>
          ))}
        </div>
      </S.MdWrapper>

      <S.ButtonWrapper>
        <button>
          <FontAwesomeIcon icon={faChevronRight} className="icon2" />
          MD 더보기
        </button>
      </S.ButtonWrapper>
    </S.MainWrapper>
  );
};

export default MdMain;
