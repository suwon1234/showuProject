// 뉴스 메인 화면  /community/newsMain

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const newsData = [
  {
    id: 1,
    title: "뉴스 타이틀1",
    category: "뮤지컬",
    description: "뉴스 설명1",
    imageUrl: "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/moulinrouge-musical-poster.jpg?v=1678248215",
  },
  {
    id: 2,
    title: "뉴스 타이틀2",
    category: "뮤지컬",
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
    description: "뉴스 설명5",
    imageUrl: "https://web-cf-image.cjenm.com/crop/204x294/public/share/metamng/programs/02_FeaturedContents_detail_poster_660x950_1663231642146.jpg?v=1676454555"
  },
  {
    id: 6,
    title: "뉴스 타이틀6",
    category: "연극",
    description: "뉴스 설명6",
    imageUrl: "https://search.pstatic.net/common?quality=90&direct=true&src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5041%2F2024%2F11%2F29%2F0001014154_001_20241129122612985.jpg"
  },
  {
    id: 7,
    title: "뉴스 타이틀7",
    category: "영화",
    description: "뉴스 설명7",
    imageUrl: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20111222_69%2F1324540063006G6LQ4_JPEG%2Fmovie_image.jpg"
  },
  {
    id: 8,
    title: "뉴스 타이틀8",
    category: "밴드",
    description: "뉴스 설명8",
    imageUrl: "https://ticketimage.interpark.com/Play/image/large/24/24014487_p.gif"
  },
  {
    id: 9,
    title: "뉴스 타이틀9",
    category: "영화",
    description: "뉴스 설명9",
    imageUrl: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20111222_122%2F13245071685017jMJu_JPEG%2Fmovie_image.jpg"
  },
  {
    id: 10,
    title: "뉴스 타이틀10",
    category: "뮤지컬",
    description: "뉴스 설명10",
    imageUrl: "https://ticket7.bscc.or.kr/Down/Perf/202305/%ED%8F%AC%EC%8A%A4%ED%84%B0_4.jpg"
  },
  {
    id: 11,
    title: "뉴스 타이틀11",
    category: "영화",
    description: "뉴스 설명11",
    imageUrl: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20111222_109%2F1324542413119OftfB_JPEG%2Fmovie_image.jpg"
  },
  {
    id: 12,
    title: "뉴스 타이틀12",
    category: "공연",
    description: "뉴스 설명12",
    imageUrl: "https://www.snart.or.kr/upload/image/20241122/929BD91AA2FA4CDF882D358A8C97F463.gif" 
  },
  {
    id: 13,
    title: "뉴스 타이틀13",
    category: "밴드",
    description: "뉴스 설명13",
    imageUrl: "https://search.pstatic.net/common?type=a&size=3000&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fab43feac-a2bf-429e-8164-ff52d70e40ee.jpg"
  },
  {
    id: 14,
    title: "뉴스 타이틀14",
    category: "뮤지컬",
    description: "뉴스 설명14",
    imageUrl: "https://search.pstatic.net/common?quality=90&direct=true&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMjFfNTQg%2FMDAxNjY5MDQxNjk3MDQx.oMs1Vhm6kztVBy_qXDtJHn1l8ZN2eGnhX4sBdSaYQ0Eg.K6LPVxEER7qvLcTfFYPwsdRj7jqgP5nNf3xONdQ1Gi8g.PNG.jixiah%2Fimage.png" 
  },
  {
    id: 15,
    title: "뉴스 타이틀15",
    category: "뮤지컬",
    description: "뉴스 설명15",
    imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDExMjFfMTgg%2FMDAxNzMyMTQ5NDQwNjU5.lkleZf810S6M6N4aXSdPbElskjMrMIwwGfS-6w_g-Hog._A2GoufbWz_5XWcn8VJzRtb9SuJf2RGxfSaVBFdyW94g.JPEG%2FIMG_6549.jpg&type=sc960_832"
  },
  {
    id: 16,
    title: "뉴스 타이틀16",
    category: "밴드",
    description: "뉴스 설명16",
    imageUrl: "https://storageciggallery.addons.business/12201/cig-cozy-gallery-5482tuy-Matias-Feliu-hd.jpg?c=00"
  },
  {
    id: 17,
    title: "뉴스 타이틀17",
    category: "뮤지컬",
    description: "뉴스 설명17",
    imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMDlfMjAz%2FMDAxNzA0NzgwNTM4OTIw.OKTTgD7XqIhTaBwa7szMAZLqjmn5JGB4e_UZt_zIKskg.ggCfsRYtMM_YYzKPv3yxk00sMkc55tumqZ-MS40x3M0g.JPEG.hunimoya%2FScreenshot%25A3%25DF20240109%25A3%25AD150720%25A3%25DFSamsung_Internet.jpg&type=sc960_832"
  },
  {
    id: 18,
    title: "뉴스 타이틀18",
    category: "뮤지컬",
    description: "뉴스 설명18",
    imageUrl: "https://www.shownote.com/Down/Perf/202401/HWG_poster_390x555_1.jpg"
  },
  {
    id: 19,
    title: "뉴스 타이틀19",
    category: "공연",
    description: "뉴스 설명19",
    imageUrl: "https://ticketimage.interpark.com/Play/image/large/24/24010664_p.gif"
  },
  {
    id: 20,
    title: "뉴스 타이틀20",
    category: "연극",
    description: "뉴스 설명20",
    imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMDFfOTAg%2FMDAxNzMzMDI4NTkwMjY3.oIYgOOuztRGmU8MueWjel7xyxMdEHZi7dEllZFe58EUg.cjpLGiSRFYABq-kHgJEfWRDHn1drTUeLg6IQXwzf0ugg.JPEG%2FKakaoTalk_20241201_131912153.jpg&type=sc960_832"
  },
];

const popularData = [
  {
    id: 1,
    title: "인기 타이틀1",
    imageUrl: "https://search.pstatic.net/common?type=a&size=3000&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fab43feac-a2bf-429e-8164-ff52d70e40ee.jpg",
  },
  {
    id: 2,
    title: "인기 타이틀2",
    imageUrl: "https://img.sbs.co.kr/newimg/news/20241121/202009760_1280.jpg",
  },
  {
    id: 3,
    title: "인기 타이틀3",
    imageUrl: "https://storageciggallery.addons.business/12201/cig-cozy-gallery-5482tuy-Matias-Feliu-hd.jpg?c=00",
  },
  {
    id: 4,
    title: "인기 타이틀4",
    imageUrl: "https://www.shownote.com/Down/Perf/202401/HWG_poster_390x555_1.jpg",
  },
  {
    id: 5,
    title: "인기 타이틀5",
    imageUrl: "https://storageciggallery.addons.business/12201/cig-cozy-gallery-5482tuy-Matias-Feliu-hd.jpg?c=00",
  },
];

const NewsMain = () => {

  

  const [filter, setFilter] = useState("전체");

  // const filterNews = filter === "전체" ? (newsData) : (newsData.filter(news => ));

    let filterNews;
    
    if(filter === "전체"){
      filterNews = newsData;
    }else{
      filterNews = newsData.filter(
        news => news.category === filter);
    };

  return (
    <S.Wrapper>
      <S.TopTitle>News</S.TopTitle>
      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className='icon' />
      </S.IconWrapper>

      <S.SubWrapper> 
        {/* 뉴스 콘텐츠 화면 */}
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
            <Link to="/community/reports">
              <button>제보내역</button>
            </Link>
          </div>
        </S.ButtonsAll>
  
        <S.NewsList>
          {filterNews.map((news) => (
            <S.NewsItem key={news.id}>
                <Link to={`/community/newsMain/news/${news.id}`}>
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

      {/* 인기순 사이드 */}
      <S.side>
        <S.SideTitle>TOP5</S.SideTitle>
        {popularData.map((data)=>(
          <S.SideItem key={data.id}>
            {/* <Link to={`/community/newsMain/popularity`}> */}
            {/* <Link to={`/community/newsMain/popularity${data.id}`}> */}
            <img src={data.imageUrl} alt={data.title} />
            <p>{data.title}</p>
            {/* </Link> */}
          </S.SideItem>
        ))}
      </S.side>
      </S.SubWrapper>
    </S.Wrapper>
    );
  };

export default NewsMain;