import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import S from './style';

const Musical = ({ plays }) => {
  const [selectedCategory, setSelectedCategory] = useState("인기순");
  const [musicalvideos,setMusicalVideos]=useState([]);
    const [videolist,setVideoList]=useState([]);
    useEffect(()=>{
          const filteredVideos = videolist.filter((video) => video.genre === "뮤지컬");
          let sortedVideos;
          if (selectedCategory === "인기순") {
            sortedVideos = [...filteredVideos].sort((a, b) => b.likes - a.likes); 
          } else if (selectedCategory === "최신순") {
            sortedVideos = [...filteredVideos].sort((a, b) => b.year - a.year);  
          }
          setMusicalVideos(sortedVideos);
      },[videolist,selectedCategory])
  useEffect(()=>{
      const vodVideo=async()=>{
        try{
          const response = await fetch("http://localhost:8000/vod")
          const data = await response.json();
          console.log(data)
          if(response.ok){
            setVideoList(data);
          }else{
            console.error('Error',data.message);
          }
        }catch (error){
          console.error('Error',error)
        }
  
      };
      vodVideo();
    },[])

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <S.showuRecommendation>
        <S.topwrapper className="topwrapper">
          <S.title className="title">Musical</S.title>
          <S.DropdownWrapper>
            <S.Dropdown onChange={handleCategoryChange} value={selectedCategory}>
              <option value="인기순" className="select">인기순</option>
              <option value="최신순" className="select">최신순</option>
            </S.Dropdown>
          </S.DropdownWrapper>
        </S.topwrapper>

        <S.showuRecommendationPage className="showuRecommendationPage">
          {musicalvideos.map(musical => (
            <S.Card key={musical}>
              <Link 
                to={`/vod/play/${musical._id}`} 
                role="button" 
                onClick={() => window.scrollTo(0, 0)}
              >
                <img 
                  src={musical.mainImage} 
                  alt={`Video ${musical.title}`} 
                />
              </Link>
            </S.Card>
          ))}
        </S.showuRecommendationPage>
      </S.showuRecommendation>
    </div>
  );
};

export default Musical;
