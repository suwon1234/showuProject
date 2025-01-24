import styled from "styled-components";

const S = {};

S.main = styled.div`
  min-width: 1240px;
  max-width: 1240px;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 20px;

  .shop {
    width: 100%;
    height: 100%;
    border: 2px solid #FFD400;
    .title {
      font-size: 20px;
      font-weight: bold;
      margin: 20px 0;
      border-bottom: 1px solid #ccc; /* 제목 아래 구분선 */
      padding-bottom: 10px;
      color: white;
      padding-left: 10px; /* 왼쪽 여백 */
    }
  }

  .vod,
  .reservation,
  .community {
    width: 100%;
    height: 100%;
    border: 2px solid #FFD400;
    .title {
      font-size: 20px;
      font-weight: bold;
      margin: 20px 0;
      border-bottom: 1px solid #ccc; /* 제목 아래 구분선 */
      padding-bottom: 10px;
    }
  }

  .vod .title {
    color: white;
    padding-left: 10px; 
  }

  .reservation .title {
    color: white;
    padding-left: 10px; 
  }

  .community .title {
    color: white;
    padding-left: 10px;
  }

  .md-list {
    display: flex;
    flex-wrap: wrap; /* 한 줄에 5개씩 표시하고, 넘치면 다음 줄로 자동 배치 */
    gap: 20px; /* 아이템 간의 간격 */
  }

  .highlight {
    color: #ffd400; 
    font-weight: bold;
  }
`;

S.Md = styled.div`
  width: calc(20% - 20px); /* 한 줄에 5개씩 배치, 5 * 20% = 100% */
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover; /* 이미지 비율 유지하며 잘리지 않도록 */
  }

  .md-category {
    font-size: 14px;
    color: #555;
    margin: 5px 0;
  }

  .md-name {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
  }

  .md-price {
    font-size: 14px;
    color: #ff6600;
  }
`;

export default S;
