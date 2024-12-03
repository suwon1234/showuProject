// 오디션 세부 페이지

import React from 'react';
import S from './styleAuditionInfo';
import { useParams } from 'react-router-dom';

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

const AuditionInfo = () => {
    const { id } = useParams();
    let audition = null;

    for (const data of auditionData) {
        if (data.id === Number(id)) {
            audition = data;
        }
    }

    return (
        <S.Wrapper>
            <img src={audition.image} alt={audition.title} />
            <h1>{audition.title}</h1>
            <p>{audition.description}</p>
        </S.Wrapper>
    );
};

export default AuditionInfo;