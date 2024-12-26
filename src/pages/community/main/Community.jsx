import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import S from './styleCommunity';
import { Link } from 'react-router-dom';

const Community = () => {

  const [filterDrop, setFilterDrop] = useState(false);

  const [filter, setFilter] = useState("전체"); 

  const commuData = [
    {
      id: 1,
      title: "타이틀1",
      category: "뮤지컬",
      description: "설명1",
      imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/kingkyboots-musical-ko-001-06.jpg?v=1732606423",
    },
    {
      id: 2,
      title: "타이틀2",
      category: "공연",
      description: "설명2",
      imageUrl: "https://www.sac.or.kr//site/main/file/thumbnail/uu/d5eb6904359c4b5d8eae72d44160e40d",
    },
    {
      id: 3,
      title: "타이틀3",
      description: "설명3",
      category: "밴드",
      imageUrl: "https://lv2-cdn.azureedge.net/day6/42990251ca404e40bb4fcf81f7be9680-[%ED%81%B4%EB%A6%B0]%200830_%20Concept%20Photo_%20Group%201-2.jpg",
    },
    {
      id: 4,
      title: "타이틀4",
      description: "설명4",
      category: "영화",
      imageUrl: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20241015_196%2F1728982918695jsvLp_JPEG%2Fmovie_image.jpg"
    },
    {
      id: 5,
      title: "타이틀5",
      description: "설명5",
      category: "뮤지컬",
      imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/42ndstreetonbroadway-musical-ko-003-07.jpg?v=1676454555"
    },
    {
      id: 6,
      title: "타이틀6",
      description: "설명6",
      category: "연극",
      imageUrl: "https://www.sejongpac.or.kr/cmmn/file/imageSrc.do?fileStreCours=faec0c25744c22e99776405c0fa72802b034c11453522f543494e84872ada102&streFileNm=4be0a06b6afe2f47cbcd2948ad228dbf52e2f1440befb29c34155b70a7ef77fe"
    },
    {
      id: 7,
      title: "타이틀7",
      description: "설명7",
      category: "뮤지컬",
      imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/gwangwhamunlovesong-musical-ko-004-03.jpg?v=1727398714"
    },
    {
      id: 8,
      title: "타이틀8",
      description: "설명8",
      category: "뮤지컬",
      imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/maybe-a-happy-ending-musical-ko-007-05.jpg?v=1728331267"
    },
    {
      id: 9,
      title: "타이틀9",
      description: "설명",
      category: "뮤지컬",
      imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/contents-detail-image-moulin-rouge-the-musical-10.jpg?v=1678248215"
    },
    {
      id: 10,
      title: "타이틀10",
      description: "설명",
      category: "연극",
      imageUrl: "https://ticketimage.interpark.com/Play/image/large/24/24016563_p.gif"
    },
    {
      id: 11,
      title: "타이틀11",
      description: "설명",
      category: "연극",
      imageUrl: "https://ticket7.bscc.or.kr/Down/Perf/202409/(%EC%A0%80)%ED%8F%AC%EC%8A%A4%ED%84%B0_%EB%8D%94%EB%93%9C%EB%A0%88%EC%84%9C_%EC%98%A4%EB%A7%8C%EC%84%9D_1.jpg"
    },
    {
      id: 12,
      title: "타이틀12",
      description: "설명",
      category: "영화",
      imageUrl: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20241121_127%2F1732160737384GksgQ_JPEG%2Fmovie_image.jpg"
    },
    {
      id: 13,
      title: "타이틀13",
      description: "설명",
      category: "공연",
      imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTdfMjEw%2FMDAxNzI5MTI4NTA0MTQw.eeACUu17qoSxerChvfAFTnB3GSmv9fGUMSFUDjKM4oYg.2lM6VyGTKd3YJpIhvl1K7hYxX7KvuvvfUodRTdKquaAg.JPEG%2FKakaoTalk_20241017_101915748.jpg&type=sc960_832"
    },
    {
      id: 14,
      title: "타이틀14",
      description: "설명",
      category: "공연",
      imageUrl: "https://www.lotteconcerthall.com/Down/Perf/202407/BBC_4%ED%9A%8C%EC%B0%A8_%EC%8A%A4%EB%AA%B0%EB%B0%B0%EB%84%88_228x304.jpg"
    },
    {
      id: 15,
      title: "타이틀15",
      description: "설명",
      category: "뮤지컬",
      imageUrl: "https://www.shownote.com/Down/Perf/202305/%EB%A9%A4%ED%94%BC%EC%8A%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
    },
    {
      id: 16,
      title: "타이틀16",
      description: "설명",
      category: "영화",
      imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTNfMzAg%2FMDAxNjc4NjgwODUzMzY1.sLqZKH1qG0QuafM-9X3G1_GCZ7Cva7ldocRuBWBRHNcg.KFiATwpymi6gS4WvpV8avG5lsFtJjeOHFratzPdlPeAg.PNG.dhoooonl%2F2.png&type=sc960_832"
    },
    {
      id: 17,
      title: "타이틀17",
      description: "설명",
      category: "밴드",
      imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzEyMDhfMTM3%2FMDAxNTEyNjYyMzYzNDA2.j-51okeAx4uxlFIRGkz9WCieAt2QTkrjC-nLXRw276Eg.8LayRTd0OwTOP6DatIBC6Ur1bul63d689ZltRAQC7SUg.JPEG.whitesthoo%2FIMG_6057.jpg&type=sc960_832"
    },
    {
      id: 18,
      title: "타이틀18",
      description: "설명",
      category: "공연",
      imageUrl: "https://www.daejeon.go.kr/FileUpload/KMUSIC/202411/20241115103304249.jpg"
    },
    
    {
      id: 19,
      title: "타이틀19",
      description: "설명",
      category: "뮤지컬",
      imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjZfMjQ4%2FMDAxNjcyMDY0MTA5NzIw.FNdA_U9JmR0gk9OWCa5IZFyE60Z6jrtS_qc-UlvL7Qkg.td4UF7FQT3YeIUVBEP4-t_2bI1NL4gZbyjwfmAJuLbAg.JPEG.dddyeon314%2F%25B1%25D7%25B8%25B21.jpg&type=sc960_832"
    },
    
    {
      id: 20,
      title: "타이틀20",
      description: "설명",
      category: "연극",
      imageUrl: "https://ticketimage.interpark.com/Play/image/large/24/24014999_p.gif"
    },  
  ];

  const filteredData = filter === "전체" ? (commuData) : (commuData.filter(items => items.category === filter));

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  return (
    <S.Wrapper>
      <S.TopTitle>커뮤니티</S.TopTitle>


      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className='icon' />
      </S.IconWrapper>

      
      <S.SubWrapper>
      <S.FilterButton onClick={() => setFilterDrop(!filterDrop)}>
        <label>Filter</label> 
        <FontAwesomeIcon icon={faChevronDown} className='icon' />
      </S.FilterButton>

      {filterDrop && (
          <S.FilterDropdown>
            {["전체", "공연", "뮤지컬", "영화", "연극", "밴드"].map((category) => (
              <div key={category} onClick={() => { setFilter(category); setFilterDrop(false); }}>
                {category}
              </div>
            ))}
          </S.FilterDropdown>
        )}
          <S.Buttons>
            <S.hoverButton>둘러보기</S.hoverButton>
            <Link to={`/community/write`}>
              <button>글쓰기</button>
            </Link>
          </S.Buttons>

        <S.Info>
          {filteredData.map((item) => (
            <S.Img key={item.id}>
              <Link to={`/community/communityInfo/${item.id}`}>
              {/* <Link to={`/community/communityInfo`}> */}
              <img src={item.imageUrl} alt={item.title} />
              </Link>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </S.Img>
          ))}
        </S.Info>
      </S.SubWrapper>

      <S.ScrollTop onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} className="upicon" />
      </S.ScrollTop>

    </S.Wrapper>
  );
};

export default Community;