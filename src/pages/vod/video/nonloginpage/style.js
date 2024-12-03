import styled from "styled-components";

const S= {};


S.VideoDetailArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width : 1240px;
  min-height: 590px;
  gap: 20px;
  padding: 20px;
  background-color: black;
  background-image: url(${(props) => props.mainImage});
  background-position: center;
  background-size: cover;
  
`
;

S.LogoBox = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

S.MetadataList = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

S.CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;

S.EssentialBox = styled.div`
  display: flex;
  gap: 20px;
`;

S.DetailInfoBox = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
`;

S.PlayerNoticeBox = styled.div`
display: flex; 
justify-content: center; 
align-items: center;
& .button{
width: 260px;
height: 45px;
border-radius: 50px;
background-color: #FFD400;
} 
`;

S.location=styled.div`
position: absolute; 
bottom: 600px; 


`

export default S;