// 오디션 메인 화면

import React, { useState } from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




const Audition = () => {

const [filter, setFilter] = useState("전체"); 

const auditionData = [
  {
    id: 1,
    category: "뮤지컬",
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340',
    title: '브로드웨이 42번가',
    description: '2025 CJ ENM MUSICAL AUDITION',
  },
  {
    id: 2,
    category: "뮤지컬",
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340',
    title: 'Moulin Rouge',
    description: '2025 CJ ENM MUSICAL AUDITION',
  },
  {
    id: 3,
    image: '연극',
    title: '',
    description: '',
  },
  {
    id: 4,
    category: "연극",
    image: '',
    title: '',
    description: '',
  },
  {
    id: 5,
    category: "뮤지컬",
    image: '',
    title: '2025 CJ ENM Musical',
    description: '2025 오디션 준비 중',
  },
  {
    id: 6,
    category: "연극",
    image: '',
    title: '',
    description: '',
  },
  {
    id: 7,
    category: "뮤지컬",
    image: '',
    title: '',
    description: '',
  },
  {
    id: 8,
    category: "뮤지컬",
    image: '',
    title: '',
    description: '',
  },
  {
    id: 9,
    category: "연극",
    image: '',
    title: '',
    description: '',
  },
  {
    id: 10,
    category: "연극",
    image: '',
    title: '',
    description: '',
  },
  {
    id: 11,
    category: "뮤지컬",
    image: '',
    title: '',
    description: '',
  },
  {
    id: 12,
    category: "연극",
    image: '',
    title: '',
    description: '',
  },
];

const filterData = filter === "전체" ? (auditionData) : (auditionData.filter((items) => items.category === filter));

  return (
    <S.Wrapper>
        <S.TopTitle>Audition</S.TopTitle>
        <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className='icon' />
      </S.IconWrapper>

      <S.SubWrapper>
      <S.Titles>
          <S.MainTitle>Audition</S.MainTitle>
          <S.SubTitle>ShowU에서 전해드리는 다양한 오디션 소식</S.SubTitle>
      </S.Titles>    
  
        <S.ButtonsAll>
          <div>
          <button onClick={() => setFilter("전체")}>전체</button>
          <button onClick={() => setFilter("뮤지컬")}>뮤지컬</button>
          <button onClick={() => setFilter("연극")}>연극</button>
          </div>
        </S.ButtonsAll>

        <S.ImageWrapper>
          {filterData.map((audition) => (
            <Link to={`/community/audition/auditionInfo/${audition.id}`}>
            <S.Images key={audition.id}>
              <img src={audition.image} alt={audition.title} />
              <S.Info>
                <h3>{audition.title}</h3>
                <p>{audition.description}</p>
              </S.Info>
            </S.Images>
            </Link>
          ))}
        </S.ImageWrapper>
      </S.SubWrapper>   
        
    </S.Wrapper>
  );
};

export default Audition;
