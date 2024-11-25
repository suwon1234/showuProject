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
  max-width: 3840px;
  min-height: 508px;

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

  /* 오른쪽 버튼 */
  & .arrowrightarrow {
    position: absolute;
    right: 10px; /* 오른쪽에 배치 */
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

  /* 왼쪽 버튼 */
  & .arrowleftarrow {
    position: absolute;
    left: 10px; /* 왼쪽에 배치 */
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

  /* 슬라이드 이미지 */
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 10px 0;
  scroll-behavior: smooth;
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

  & .title{

  font-size: 24px;
  font-weight: bold;
  color: #FFD700;
  align-self: flex-start; /* 개별 요소를 왼쪽 끝에 배치 */
  margin-left: 190px;
  padding-left: 0;
  }

  & .more{
    font-size: 16px;
    color: #A5A5A5;
    align-self: flex-end;
    margin-right : 190px;
    padding-right: 0;
  }
  
  
`;


S.categorybutton=styled.div`

display: flex; 
justify-content: center; 
align-items: center;
& .category{
width: 260px;
height: 45px;
border-radius: 50px;
background-color: #FFD400;
} 

`
export default S;
