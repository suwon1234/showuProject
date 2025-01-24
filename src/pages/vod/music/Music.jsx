import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import S from './style';

const Music = () => {
  const [videolist, setVideoList] = useState([]);
  const [musicVideos, setMusicVideos] = useState([]);


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

  useEffect(() => {
    const filteredVideos = videolist.filter(video => video.genre === "음악");
    setMusicVideos(filteredVideos);
  }, [videolist]);
  return (
    <div>
      <S.showuRecommendation>
        <S.topwrapper className="topwrapper">
          <S.title className="title">Music</S.title>
        </S.topwrapper>

        <S.showuRecommendationPage className="showuRecommendationPage">
          {musicVideos.map(video => (
            <S.Card key={video.id}>
              <Link 
                to={`/vod/play/${video._id}`} 
                role="button" 
                onClick={() => window.scrollTo(0, 0)}
              >
                <img 
                  src={video.mainImage} 
                  alt={`Video ${video.title}`} 
                />
              </Link>
            </S.Card>
          ))}
        </S.showuRecommendationPage>
      </S.showuRecommendation>
    </div>
  );
};

export default Music;
