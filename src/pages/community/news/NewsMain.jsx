// 뉴스 메인 화면  /community/newsMain

import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const newsData = [
  {
    id: 1,
    title: "뉴스 타이틀1",
    description: "뉴스 설명1",
    imageUrl: "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/moulinrouge-musical-poster.jpg?v=1678248215",
  },
  {
    id: 2,
    title: "뉴스 타이틀2",
    description: "뉴스 설명2",
    imageUrl: "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
  },
  {
    id: 3,
    title: "뉴스 타이틀3",
    category: "영화",
    description: "뉴스 설명3",
    imageUrl: "https://img.sbs.co.kr/newimg/news/20241121/202009760_1280.jpg",
  },
  {
    id: 4,
    title: "뉴스 타이틀4",
    category: "밴드",
    description: "뉴스 설명4",
    imageUrl: "https://cdn.mhns.co.kr/news/photo/202411/703781_806904_2732.jpg"
  },
  {
    id: 5,
    title: "뉴스 타이틀5",
    category: "뮤지컬",
    description: "뉴스 설명4",
    imageUrl: "https://web-cf-image.cjenm.com/crop/204x294/public/share/metamng/programs/02_FeaturedContents_detail_poster_660x950_1663231642146.jpg?v=1676454555"
  },
];

const popularData = [
  {
    id: 1,
    title: "인기 타이틀1",
    imageUrl: "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/42ndstreetonbroadway-musical-ko-003-07.jpg?v=1676454555",
  },
  {
    id: 2,
    title: "인기 타이틀2",
    imageUrl: "https://www.sac.or.kr/site/main/file/thumbnail/uu/d5eb6904359c4b5d8eae72d44160e40d",
  },
  {
    id: 3,
    title: "인기 타이틀3",
    imageUrl: "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/moulinrouge-musical-poster.jpg?v=1678248215",
  },
  {
    id: 4,
    title: "인기 타이틀4",
    imageUrl: "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/42ndstreetonbroadway-musical-ko-003-07.jpg?v=1676454555",
  },
  {
    id:5,
    title: "인기 타이틀5",
    imageUrl: "https://www.sac.or.kr/site/main/file/thumbnail/uu/d5eb6904359c4b5d8eae72d44160e40d",
  },
  {
    id: 6,
    title: "인기 타이틀6",
    imageUrl: "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/moulinrouge-musical-poster.jpg?v=1678248215",
  },
];

const Community = () => {
  return (
    <S.Wrapper>
      <S.TopTitle>
        News
      </S.TopTitle>

      <S.SubWrapper> 
        {/* 뉴스 콘텐츠 화면 */}
      <S.MainContents>
        <S.Titles>
          <S.MainTitle>News</S.MainTitle>
          <S.SubTitle>가장 먼저 접하는 showU 소식</S.SubTitle>
        </S.Titles>    
  
        <S.ButtonsAll>
          <div>
            <button>전체</button>
            <button>공연</button>
            <button>뮤지컬</button>
            <button>영화</button>
            <button>연극</button>
            <button>밴드</button>
          </div>
  
          <div>
            <Link to="/community/report">
              <button>제보하기</button>
            </Link>
            <Link to="/community/reports">
              <button>제보내역</button>
            </Link>
          </div>
        </S.ButtonsAll>
  
        <S.NewsList>
          {newsData.map((news) => (
            <S.NewsItem key={news.id}>
              <S.ImageWrapper>
                {/* <Link to={`/community/news/${news.id}`}> */}
                <Link to={`/community/newsMain/news${news.id}`}>
                  <img src={news.imageUrl} alt={news.title} />   
                </Link>      
              </S.ImageWrapper>
              <S.NewsContent>
                <S.NewsTitle>{news.title}</S.NewsTitle>
                <S.NewsDescription>{news.description}</S.NewsDescription>
              </S.NewsContent>
            </S.NewsItem>
          ))}
        </S.NewsList>
      </S.MainContents>

      {/* 인기순 사이드 */}
      <S.side>
        <S.SideTitle>인기순</S.SideTitle>
        {popularData.map((data)=>(
          <S.SideItem>
            <img src={data.imageUrl} alt={data.title} />
            <p>{data.title}</p>
          </S.SideItem>
        ))}
      </S.side>
      </S.SubWrapper>
    </S.Wrapper>
    );
  };

export default Community;