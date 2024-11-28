// 오디션 메인 화면

import React from 'react';
import S from './style';





const auditionData = [
  {
    id: 1,
    image: 'https://i.namu.wiki/i/fqnNQjQbmB_m_s7CzSyzXSvUVH3s_Z0HW-_H3dgc5P3QD2B0TtpkRaVAeR3bWX0qOvrEtIopFW5fTIoQboTsNg.webp',
    title: 'Mata Hari',
    description: '2024 Audition - 뮤지컬 오디션',
  },
  {
    id: 2,
    image: 'https://i.namu.wiki/i/fqnNQjQbmB_m_s7CzSyzXSvUVH3s_Z0HW-_H3dgc5P3QD2B0TtpkRaVAeR3bWX0qOvrEtIopFW5fTIoQboTsNg.webp',
    title: 'Moulin Rouge',
    description: '뮤지컬 오디션 정보',
  },
  {
    id: 3,
    image: 'https://i.namu.wiki/i/fqnNQjQbmB_m_s7CzSyzXSvUVH3s_Z0HW-_H3dgc5P3QD2B0TtpkRaVAeR3bWX0qOvrEtIopFW5fTIoQboTsNg.webp',
    title: '2025 CJ ENM Musical',
    description: '2025 오디션 준비 중',
  },
  {
    id: 4,
    image: 'https://i.namu.wiki/i/fqnNQjQbmB_m_s7CzSyzXSvUVH3s_Z0HW-_H3dgc5P3QD2B0TtpkRaVAeR3bWX0qOvrEtIopFW5fTIoQboTsNg.webp',
    title: '2025 CJ ENM Musical',
    description: '2025 오디션 준비 중',
  },
  {
    id: 5,
    image: 'https://i.namu.wiki/i/fqnNQjQbmB_m_s7CzSyzXSvUVH3s_Z0HW-_H3dgc5P3QD2B0TtpkRaVAeR3bWX0qOvrEtIopFW5fTIoQboTsNg.webp',
    title: '2025 CJ ENM Musical',
    description: '2025 오디션 준비 중',
  },
  {
    id: 6,
    image: 'https://i.namu.wiki/i/fqnNQjQbmB_m_s7CzSyzXSvUVH3s_Z0HW-_H3dgc5P3QD2B0TtpkRaVAeR3bWX0qOvrEtIopFW5fTIoQboTsNg.webp',
    title: '2025 CJ ENM Musical',
    description: '2025 오디션 준비 중',
  },
  {
    id: 7,
    image: 'https://i.namu.wiki/i/fqnNQjQbmB_m_s7CzSyzXSvUVH3s_Z0HW-_H3dgc5P3QD2B0TtpkRaVAeR3bWX0qOvrEtIopFW5fTIoQboTsNg.webp',
    title: '2025 CJ ENM Musical',
    description: '2025 오디션 준비 중',
  },
  {
    id: 8,
    image: 'https://i.namu.wiki/i/fqnNQjQbmB_m_s7CzSyzXSvUVH3s_Z0HW-_H3dgc5P3QD2B0TtpkRaVAeR3bWX0qOvrEtIopFW5fTIoQboTsNg.webp',
    title: '2025 CJ ENM Musical',
    description: '2025 오디션 준비 중',
  },
  {
    id: 9,
    image: 'https://i.namu.wiki/i/fqnNQjQbmB_m_s7CzSyzXSvUVH3s_Z0HW-_H3dgc5P3QD2B0TtpkRaVAeR3bWX0qOvrEtIopFW5fTIoQboTsNg.webp',
    title: '2025 CJ ENM Musical',
    description: '2025 오디션 준비 중',
  },
];

const Audition = () => {
  return (
    <S.Wrapper>
        <S.TopTitle>
          Audition
        </S.TopTitle>
      <S.SubWrapper>
      <S.Titles>
          <S.MainTitle>Audition</S.MainTitle>
          <S.SubTitle>ShowU에서 전해드리는 다양한 오디션 소식</S.SubTitle>
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
        </S.ButtonsAll>

        <S.ImageWrapper>
          {auditionData.map((audition) => (
            <S.Images key={audition.id}>
              <img src={audition.image} alt={audition.title} />
              <S.Info>
                <h3>{audition.title}</h3>
                <p>{audition.description}</p>
              </S.Info>
            </S.Images>
          ))}
        </S.ImageWrapper>
      </S.SubWrapper>     
    </S.Wrapper>
  );
};

export default Audition;
