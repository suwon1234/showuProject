import styled from "styled-components";

const S = {};

S.container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: black;
`;

S.Wapper = styled.div`
  width: 100%;
  height: 100%;
`;

S.VideoDetailArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1240px;
  min-height: 590px;
  gap: 20px;
  padding: 20px;
  background-color: black;
  position: relative;

  img {
    max-width: 1240px;
    height: 654px;
    object-fit: contain;
  }

  .content-area {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: white;
    bottom: 400px;

    h1 {
      font-size: 2rem;
      font-weight: bold;
    }

    .button {
      width: 260px;
      height: 45px;
      border-radius: 50px;
      background-color: #ffd400;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: black;
    }
  }
`;
S.moreclick=styled.div`
display: inline-flex;
span {
  height: 50px;
   display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 10px;
  max-width: 400px;
  overflow-wrap: break-word;
}
button{
  font-size: 16px;
  display: flex;
  align-items: end;
  background: transparent;  /* 배경 제거 */
  border: none;             /* 테두리 제거 */
  color: #ffd400;
}
`

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
`;

S.location = styled.div`
  position: absolute;
  left: auto;
  bottom: 600px;
`;

S.buttonstyle = styled.div`
  display: inline-flex;
  height: 45px;
  gap: 10px;
`;

S.page = styled.div`
  & ul {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
  }

  & li {
    font-size: 17px;
    font-weight: 400;
    color: #444444;
    padding-bottom: 3px;
    position: relative;
    transition: color 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    &.active {
      color: #ffffff;
      box-shadow: 0 3px 0 0 #ffd400;
    }
  }

  & li:hover {
    color: #ffffff;
    box-shadow: 0 3px 0 0 #ffd400;
  }
`;

S.hert = styled.nav`
  width: 100%;
  height: 100px;

  & p {
    color: #ffffff;
  }

  .icon.filled {
    font-size: 24px;
    padding: 4px;
    cursor: pointer;
    path {
      fill: red; 
      transition: fill 0.3s ease;
    }
  }
  .icon.outlined {
    font-size: 24px;
    padding: 4px;
    cursor: pointer;
    path {
      fill: white; 
      transition: fill 0.3s ease;
    }
  }
  
`;

S.bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

S.pages = styled.main`
  width: 100%;
  height: 400px;
  overflow: hidden;
  min-width: 1240px;
  background-color: black;
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
    transition: transform 0.5s ease;
    
  }

  &:hover img {
    transform: scale(1.1);
  }

  .badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #4169e1;
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
    gap: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

S.showuRecommendation = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  min-height: 100px;
  max-height: 440px;
  color: white;
  align-items: flex-start;
`;

S.MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
  align-items: flex-start;
`;

S.Poster = styled.div`
  flex: 0 0 250px;
  margin-right: 30px;

  img {
    width: 100%;
    min-height: 277px;
    border-radius: 8px;
    background-color: #333;
    object-fit: cover;
  }
`;

S.MovieDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

S.Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

S.Subtitle = styled.h2`
  color: gray;
  font-size: 1rem;
  margin-bottom: 20px;
`;

S.Info = styled.div`
  margin-bottom: 20px;

  p {
    margin: 5px 0;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }

  span {
    font-weight: bold;
    width: 60px;
    color: #fdde39;
    display: inline-block;
  }

  img {
    height: 20px;
    margin-left: 10px;
  }
`;

S.Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: gray;
`;

export default S;
