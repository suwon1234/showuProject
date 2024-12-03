// 뉴스 세부 화면

import React from 'react';
import { useParams } from 'react-router-dom';

const newsDatas = [
  {
    id: 1,
    title: "뉴스 타이틀1",
    description: "CJ 뮤지컬의 대표작 물랑루즈",
    imageUrl: "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/moulinrouge-musical-poster.jpg?v=1678248215",
    content: `막이 오르는 순간, 위대한 사랑이 시작된다! 사랑에 대한 곡을 쓰겠다는 일념으로 프랑스 파리에 건너 
              온 작곡가 ‘크리스티안’은 지상에서 가장 화려한 세계 ‘물랑루즈’의 스타 ‘사틴’을 보고 첫눈에 반하고 만다. 1899년 파리, 
              ‘물랑루즈’에서 벌어지는 거부할 수 없는 운명과 위대한 사랑 이야기.`
  },
  {
    id: 2,
    title: "뉴스 타이틀2",
    description: "뮤지컬 킹키부츠",
    imageUrl: "https://web-cf-image.cjenm.com/crop/520x748/public/share/metamng/programs/contentsdetailposterkinkybootsthemusical.jpg?v=1721176871",
    content: "새로운 뮤지컬 '킹키부츠'가 공연을 시작합니다",
  },
];

const News = () => {
  const { id } = useParams();  
  
  let newsItems = null;
  for(let news of newsDatas){
    if(news.if === Number(id)){
      newsItems = news;
    }
  }

  return (
    <div>
      <h1>{newsItems.title}</h1>
      <img src={newsItems.imageUrl} alt={newsItems.title} />
      <p>{newsItems.description}</p>
      <p>{newsItems.content}</p>
    </div>
  );
};

export default News;
