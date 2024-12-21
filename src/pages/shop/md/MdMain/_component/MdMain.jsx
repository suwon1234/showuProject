import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import S from "./styleMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faCircleChevronLeft, faCircleChevronRight,} from "@fortawesome/free-solid-svg-icons";

const MdMain = () => {
  const [mdItems, setMdItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 상태
  const itemsPerSlide = 3; // 한 번에 보여줄 아이템 수
  const slideWidth = 1090; // 슬라이드 영역 너비 (px 단위)

  useEffect(() => {
    
    const getMdItems = async () => {
      try {
        const response = await fetch("http://localhost:4000/md");
        const datas = await response.json();
        setMdItems(datas);
      } catch (error) {
        console.error("MdMainError", error);
      }
    };

    getMdItems();

  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === Math.ceil(mdItems.length / itemsPerSlide) - 1 ? 0 : prev + 1
    ); // 마지막 슬라이드에서 처음으로 돌아감
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(mdItems.length / itemsPerSlide) - 1 : prev - 1
    ); // 처음 슬라이드에서 마지막으로 돌아감
  };

  // 현재 슬라이드에 맞는 BEST 아이템을 선택
  const visibleBestItems = mdItems.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  );

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

          <S.BestListWrapper offset={-currentSlide * slideWidth}>
            {visibleBestItems.map((best) => (
              <S.Best key={best.id}>
                <Link to={`/shop/md/detail/${best.id}`}>
                  <img src={best.images} alt={best.name} className="image" />
                </Link>
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

      <S.CategoryButton>
        <div>
          <button>showU</button>
          <button>공연</button>
          <button>뮤지컬</button>
          <button>영화</button>
          <button>영화</button>
          <button>연극</button>
          <button>밴드</button>
        </div>
      </S.CategoryButton>

      <S.MdWrapper>
        <div className="md-list">
          {mdItems.slice(6).map((item) => (
            <S.Md key={item.id}>
              <Link to={`/shop/md/detail/${item.id}`}>
                <img src={item.images} alt={item.name} />
              </Link>
              <div className="md-name">{item.name}</div>
              <div className="md-price">{item.price.toLocaleString()}원</div>
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
