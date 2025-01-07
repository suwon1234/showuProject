import React, { useEffect, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const More = () => {
  const [videolist, setVideoList] = useState([]);


  // Fetch 비디오 데이터
  useEffect(() => {
    const vodVideo = async () => {
      try {
        const response = await fetch("http://localhost:8000/vod");
        const data = await response.json();
        if (response.ok) {
          setVideoList(data);
        } else {
          console.error('Error', data.message);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    vodVideo();
  }, []);

  return (
    <div>
      <S.showuRecommendation>
        <S.topwrapper className="topwrapper">
          <S.title className="title">ShowU 추천</S.title>
        </S.topwrapper>
        <S.showuRecommendationPage className="showuRecommendationPage">
          {videolist.map(video => (
            <S.Card key={video.id}>
              <Link 
                to={`/vod/play/${video._id}`} 
                role="button" 
                onClick={() => window.scrollTo(0, 0)}
              >
                {video.mainImage && (
                  <img 
                    src={video.mainImage} 
                    alt={`Video ${video.title}`} 
                  />
                )}
              </Link>
            </S.Card>
          ))}
        </S.showuRecommendationPage>
      </S.showuRecommendation>
    </div>
  );
};

export default More;
