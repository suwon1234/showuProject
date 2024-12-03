import React from 'react';
import S from './style';

const PerformingShow = () => {
  const performing = [
    {
      id: 1,
      name: "뮤지컬 <시라노>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.15 - 2025.1.5",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24014885_p.gif&w=384&q=75",
    },
    {
      id: 2,
      name: "뮤지컬 <스윙 데이즈_암호명 A>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.8 - 11.3",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013619_p.gif&w=384&q=75",
    },
    {
      id: 3,
      name: "뮤지컬 <광화문 연가>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.29 - 2025.1.19",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24011935_p.gif&w=384&q=75",
    },
    {
      id: 4,
      name: "뮤지컬 <베르테르>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.8 - 12.29",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24017198_p.gif&w=384&q=75",
    },
    {
      id: 5,
      name: "뮤지컬 <지킬앤하이드>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.17 - 11.9",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013928_p.gif&w=384&q=75",
    },
    {
      id: 6,
      name: "뮤지컬 <시라노>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.15 - 2025.1.5",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24014885_p.gif&w=384&q=75",
    },
    {
      id: 7,
      name: "뮤지컬 <스윙 데이즈_암호명 A>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.8 - 11.3",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013619_p.gif&w=384&q=75",
    },
    {
      id: 8,
      name: "뮤지컬 <광화문 연가>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.29 - 2025.1.19",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24011935_p.gif&w=384&q=75",
    },
    {
      id: 9,
      name: "뮤지컬 <베르테르>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.8 - 12.29",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24017198_p.gif&w=384&q=75",
    },
    {
      id: 10,
      name: "뮤지컬 <지킬앤하이드>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.17 - 11.9",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013928_p.gif&w=384&q=75",
    },
    {
      id: 11,
      name: "뮤지컬 <시라노>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.15 - 2025.1.5",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24014885_p.gif&w=384&q=75",
    },
    {
      id: 12,
      name: "뮤지컬 <스윙 데이즈_암호명 A>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.8 - 11.3",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013619_p.gif&w=384&q=75",
    },
    {
      id: 13,
      name: "뮤지컬 <광화문 연가>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.29 - 2025.1.19",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24011935_p.gif&w=384&q=75",
    },
    {
      id: 14,
      name: "뮤지컬 <베르테르>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.8 - 12.29",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24017198_p.gif&w=384&q=75",
    },
    {
      id: 15,
      name: "뮤지컬 <지킬앤하이드>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.17 - 11.9",
      img: "https://tickets.interpark.com/_next/image?url=https%3A%2F%2Fticketimage.interpark.com%2FPlay%2Fimage%2Flarge%2F24%2F24013928_p.gif&w=384&q=75",
    },
  ];

  return (
    <S.MainContainer>
      <S.SectionTitle>상연중</S.SectionTitle>
      <S.PerformingBoxContainer>
        {performing.map((show) => (
          <S.PerformingBox key={show.id}>
            <S.PerformingImage src={show.img} alt={show.name} />
            <h3>{show.name}</h3>
            <p>{show.venue}</p>
            <p>{show.dates}</p>
          </S.PerformingBox>
        ))}
      </S.PerformingBoxContainer>
    </S.MainContainer>
  );
};
  

export default PerformingShow;