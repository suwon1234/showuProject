import React from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Hot = () => {
  const hotData = [
    {
      id: "1",
      imageUrl: "/images/showu/magic/portfolio6.jpg",
      title: "대기업 협력사 | 로고 | 브랜딩",
      rating: 4.9,
      reviews: 844,
      price: "60,000원~",
      category: "보호 디자인",
    },
    {
      id: "2",
      imageUrl: "/images/showu/magic/portfolio6.jpg",
      title: "KS 1위 크몽에이전시",
      rating: 4.9,
      reviews: 2739,
      price: "150,000원~",
      category: "지구점프",
    },
    {
      id: "3",
      imageUrl: "/images/showu/magic/portfolio6.jpg",
      title: "크몽어워즈 1등 | 포트폴리오 제작",
      rating: 4.9,
      reviews: 4119,
      price: "75,000원~",
      category: "그리마타 디자인",
    },
    {
      id: "4",
      imageUrl: "/images/showu/magic/portfolio6.jpg",
      title: "2023 크몽어워즈 고객 한분만",
      rating: 4.9,
      reviews: 638,
      price: "150,000원~",
      category: "제이디컴퍼니",
    },
    {
      id: "5",
      imageUrl: "/images/showu/magic/portfolio6.jpg",
      title: "선착순 하루만 제작합니다.",
      rating: 4.9,
      reviews: 3370,
      price: "55,000원~",
      category: "원스팟디자인",
    },
    {
      id: "1",
      imageUrl: "/images/showu/magic/portfolio6.jpg",
      title: "대기업 협력사 | 로고 | 브랜딩",
      rating: 4.9,
      reviews: 844,
      price: "60,000원~",
      category: "보호 디자인",
    },
    {
      id: "2",
      imageUrl: "/images/showu/magic/portfolio6.jpg",
      title: "KS 1위 크몽에이전시",
      rating: 4.9,
      reviews: 2739,
      price: "150,000원~",
      category: "지구점프",
    },
    {
      id: "3",
      imageUrl: "/images/showu/magic/portfolio6.jpg",
      title: "크몽어워즈 1등 | 포트폴리오 제작",
      rating: 4.9,
      reviews: 4119,
      price: "75,000원~",
      category: "그리마타 디자인",
    },
    {
      id: "4",
      imageUrl: "/images/showu/magic/portfolio6.jpg",
      title: "2023 크몽어워즈 고객 한분만",
      rating: 4.9,
      reviews: 638,
      price: "150,000원~",
      category: "제이디컴퍼니",
    },
    {
      id: "5",
      imageUrl: "/images/showu/magic/portfolio6.jpg",
      title: "선착순 하루만 제작합니다.",
      rating: 4.9,
      reviews: 3370,
      price: "55,000원~",
      category: "원스팟디자인",
    },
  ];

  return (
    <S.Wrapper>
      <S.TopTitle>🔥 HOT 🔥</S.TopTitle>
      <S.IconWrapper>
                    <FontAwesomeIcon icon={faChevronDown} className='icon' />
            </S.IconWrapper>
      <S.CategoryWrapper>
        {[ "VOD", "레슨", "팀", "ShowU 공연"].map(
          (category) => (
            <button key={category}>{category}</button>
          )
        )}
      </S.CategoryWrapper>
      <S.CardWrapper>
        {hotData.map((item) => (
          <S.Card key={item.id}>
            <S.CardImage>
              <img src={item.imageUrl} alt={item.title} />
            </S.CardImage>
            <S.CardInfo>
              <h3>{item.title}</h3>
              <p>{item.rating} ({item.reviews})</p>
              <p>{item.price}</p>
              <p>{item.category}</p>
            </S.CardInfo>
          </S.Card>
        ))}
      </S.CardWrapper>
      <S.ArrowWrapper>
        {/* <FontAwesomeIcon icon={faChevronRight} /> */}
      </S.ArrowWrapper>
    </S.Wrapper>
  );
};

export default Hot;
