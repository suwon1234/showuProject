// 뉴스 메인 화면  /community/newsMain

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NewsMain = () => {
  const [newsData, setNewsData] = useState([]);
  const [filter, setFilter] = useState("전체");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:8000/community/newsMain");
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("뉴스 데이터 오류 발생:", error);
        setError("데이터를 불러오지 못했습니다.");
      }
    };

    fetchNews();
  }, []);

  const filterNews = Array.isArray(newsData)
    ? filter === "전체"
      ? newsData
      : newsData.filter((news) => news.category === filter)
    : [];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (newsData.length === 0 && !error) {
    return <p>로딩 중입니다...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }





  return (
    <S.Wrapper>
      <S.TopTitle>News</S.TopTitle>
      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className='icon' />
      </S.IconWrapper>

      <S.SubWrapper> 
      <S.MainContents>
        <S.Titles>
          <S.MainTitle>News</S.MainTitle>
          <S.SubTitle>가장 먼저 접하는 showU 소식</S.SubTitle>
        </S.Titles>    
  
        <S.ButtonsAll>
          <div>
              {['전체', '공연', '뮤지컬', '영화', '연극', '밴드'].map(category => (
                <button key={category} onClick={() => setFilter(category)} >
                  {category}
                </button>
              ))}
            </div>
  
          <div>
            <Link to="/community/report">
              <button>제보하기</button>
            </Link>
            {/* <Link to="/community/reports">
              <button>제보내역</button>
            </Link> */}
          </div>
        </S.ButtonsAll>
  
        <S.NewsList>
          {filterNews.map((news) => (
            <S.NewsItem key={news._id}>
                <Link to={`/community/newsMain/news/${news._id}`}>
              <S.ImageWrapper>
                {/* <Link to={`/community/news/${news.id}`}> */}
                  <img src={news.imageUrl} alt={news.title} />
              </S.ImageWrapper>
                </Link>
              <S.NewsContent>
                <S.NewsTitle>{news.title}</S.NewsTitle>
                <S.NewsDescription>{news.description}</S.NewsDescription>
              </S.NewsContent>
            </S.NewsItem>
          ))}
        </S.NewsList>
      </S.MainContents>
      
      </S.SubWrapper>

      <S.ScrollTop onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} className="upicon" />
      </S.ScrollTop>

    </S.Wrapper>
    );
  };

export default NewsMain;