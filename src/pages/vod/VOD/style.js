import styled from 'styled-components';

const S = {};

S.slider = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto 80px;
  position: relative;
  display: flex; /* Flexbox로 설정 */
  justify-content: center; /* 슬라이더 이미지를 가운데 정렬 */
  align-items: center; /* 버튼과 이미지 수직 정렬 */
  min-width: 1240px;
  max-width: 1240px;
  min-height: 550px;
  max-height: 550px;
  img{

  }

  /* 슬라이드 인디케이터 스타일 */
  & .slideindicator {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    min-width: 45px;
    padding: 3px 10px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    color: white;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
  }


  & .arrowrightarrow {
    position: absolute;
    right: 10px; 
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 24px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;
  }


  & .arrowleftarrow {
    position: absolute;
    left: 10px; 
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 24px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;
  }

  & .slide-image {
    max-width: 100%;
    height: auto;
    display: block;
  }

  & .swiper-pagination-current{
    color: white;
  }
  & .swiper-pagination-total{
    color: white;
  }
`;
S.Card = styled.div`
  min-width: 200px;
  max-width: 200px;
  height: 300px;
  flex-shrink: 0;
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
        }
   &:hover img {
      transform: scale(1.1); 
  }

  .badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #4169E1;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
  }
`;
S.showuRecommendationPage = styled.div`
    position: relative;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    transition-property: transform;
    box-sizing: content-box;
  &::-webkit-scrollbar {
    display: none; 
  }
`;



S.showuRecommendation = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  padding: 20px;
  min-height: 100px;
  max-height: 440px;
  color: white;
 
  
  
`;


S.categorybutton=styled.div`

display: flex; 
justify-content: center; 
align-items: center;
& .category{
width: 260px;
height: 45px;
border-radius: 50px;
font-weight: bold;
background-color: #FFD400;
color: black;
} 

`

S.titlewrapper = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  min-width: 1240px;
  min-height: 36px;

  & .title {
    font-size: 24px;
    font-weight: bold;
    color: #FFD700; 
    padding-left: 0;
  }

  & .more {
    font-size: 16px;
    color: #A5A5A5; 
    padding-right: 0;
    cursor: pointer; 
  }
`;
export default S;
