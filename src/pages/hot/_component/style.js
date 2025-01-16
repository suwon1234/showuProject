import styled from "styled-components";

const S = {};

S.Wrapper = styled.div`
  display: flex-wrap;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 20px 40px;
`;

S.TopTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #ffd400;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

S.IconWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
        height: 100%;
        padding-bottom: 50px;

        .icon{
            font-size: 20px;

        path {
            color : #ffd400;
        }
    }
    `

S.CategoryWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;

  button {
    background-color: transparent;
    border: 1px solid #ffd400;
    border-radius: 50px;
    color: #ffd400;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #ffd400;
      color: #000;
    }
  }
`;

S.CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

S.Card = styled.div`
  background-color: #111;
  border-radius: 10px;
  overflow: hidden;
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

S.CardImage = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

S.CardInfo = styled.div`
  padding: 10px;

  h3 {
    font-size: 16px;
    margin: 5px 0;
  }

  p {
    font-size: 14px;
    margin: 3px 0;
  }

  p:nth-child(2) {
    color: #ffd400;
    font-weight: bold;
  }
`;

S.ArrowWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  svg {
    font-size: 24px;
    color: #ffd400;
    cursor: pointer;
  }
`;

export default S;
