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
  padding: 20px;
  max-width: 1240px;
  margin: 0 auto;
  color: white;
  position: relative;
  `;
S.topwrapper=styled.div`
 display: flex;
 width: 1040px;
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


S.DropdownWrapper = styled.div`
  position: relative; 
  z-index: 10; 
`;

S.Dropdown = styled.select`
  background-color: #fdde39;
  color: black;
  border-radius: 5px;
  padding: 8px 10px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  width: 180px;
  border-radius: 10px;
  .select{
    color: black;
  }
`;


export default S;