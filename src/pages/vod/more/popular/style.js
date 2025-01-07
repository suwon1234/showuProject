import styled from "styled-components";

const S={}

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
    position: relative; 
    z-index: 1; 
        }
   &:hover img {
      transform: scale(1.1); 
  }
`;

S.showuRecommendationPage = styled.div`
  width: 1240px;
  height: 100%;
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  margin: auto;
  padding-top: 43px;
`;



S.showuRecommendation = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1240px;
  margin: 0 auto;
  color: white;
  position: relative;
  `;
S.topwrapper=styled.div`
 display: flex;
 width: 1240px;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
  padding: 20px;
  position: relative;  
  gap: 16px;

`

S.title=styled.div`
 font-size: 1.5rem;
  color: #fdde39;
  font-weight: bold;
  margin: 0;
`



export default S;