import { styled } from "styled-components";



// 전체 컨테이너
const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 20px;
  margin-top: 40px;
  width: 100%;
  min-height: 100vh;
`;

S.DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

S.MainImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  position: relative;
  max-width: 1200px;
`;

S.Image = styled.img`
  max-width: 600px; /* 메인 이미지 최대 크기 */
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-right: 2px;
  margin-bottom: 10px;
  transition: 0.3s ease; /* 호버 효과를 위한 트랜지션 */
  cursor: pointer;
  &:hover {
    filter: brightness(70%);
  }
`;

S.AdditionalImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2px;
`;

S.AdditionalImage = styled.img`
  max-width: 298px; /* 추가 이미지 최대 크기 */
  width: 100%;
  height: 224px;
  border-radius: 5px;
  transition: 0.3s ease; /* 호버 효과를 위한 트랜지션 */
  cursor: pointer;
  &:hover {
    filter: brightness(70%);
  }
`;

S.InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  max-width: 1200px; /* 고정 너비 */
`;

S.InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 800px; /* 고정 너비 */
`;

S.Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #ffd400;
  margin-bottom: 20px;
`;

S.InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

S.InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

S.DetailText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  color: #bdbdbd;
  margin-bottom: 10px;
`;

S.DetailTitle = styled.span`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #ffd400;
`;

S.HorizontalLine = styled.hr`
  width: 100%;
  border: 0.5px solid #555;
  margin: 20px 0;
`;

S.SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  color: #ffd400;
  margin-bottom: 10px;
`;

S.AmenitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    font-size: ${({ theme }) => theme.FONT_SIZE.body};
    color: #bdbdbd;
    margin-bottom: 5px;
  }
`;

S.NavButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 800px; /* 고정 너비 */
  margin-bottom: 20px;

  button {
    /* background-color: #ffd400; */
    background-color: #fff;
    color: #000;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    width: 200px;
    font-size: ${({ theme }) => theme.FONT_SIZE.body};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    transition: 0.3s ease;

    &:hover {
      /* background-color: #ffaf00; */
      background-color: #ffd400;
    }
  }
`;

S.Danger = styled.div`
  width: 800px; /* 고정 너비 */
  /* background-color: #ffd400; */
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
`;

S.DangerTitle = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: red;
  margin-bottom: 10px;
`;

S.DangerContent = styled.h4`
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  color: black;
`;

/* 가격 및 예약하기 섹션 */
S.PriceContainer = styled.div`
  width: 350px; 
  height: 230px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  align-self: flex-start; 
`;

S.Price = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: #000;
  margin-bottom: 20px;
`;

S.ReserveButton = styled.button`
  background-color: #ffd400;
  width: 260px;
  color: #000;
  border: none;
  padding: 15px 30px;
  cursor: pointer;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.FONT_SIZE.body};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  transition: 0.3s ease;

  &:hover {
    background-color: #ffaf00;
  }
`;

S.DetailIconWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`

S.DetailIconContent = styled.div`
  /* width: 800px; */
  width: 100px;
  display: flex;
  flex-direction: row;
  & img{
    width: 40px;
    height: 40px;
    background-color: darkblue;
    border-radius: 5px;
  }
`;
S.DetailIconText = styled.p`
  display: flex;
  align-items: center;
  margin-left: 5px;
  text-align: center;

`
/* 모달 스타일 */
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#000",
    border: "none",
    padding: 0,
    borderRadius: "10px",
    width: "1000px",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

/* 슬라이더 스타일 */
S.SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 400px;
  position: relative;
  overflow: hidden;
`;

S.SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transform: ${(props) =>
    props.isActive ? "translateX(0)" : "translateX(100%)"};
`;

S.PrevButton = styled.button`
  position: absolute;
  left: 0;
  z-index: 1;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

S.NextButton = styled.button`
  position: absolute;
  right: 0;
  z-index: 1;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

S.CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 20px;
  background: none;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  &:hover {
    filter: brightness(70%);
  }
`;

S.ImageCounter = styled.div`
  position: absolute;
  bottom: 10px;
  color: white;
  font-size: 1rem;
`;

S.FavoriteButton = styled.button`
  background-color: lightgray;
  color: ${(props) => (props.isFavorite ? "red" : "grey")};
  width: 45.5px;
  height: 45.5px;
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  cursor: pointer;
  margin-right: 10px;
`;

export { S, modalStyles };
