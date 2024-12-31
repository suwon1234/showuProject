import React from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";

const spaceRentals = [
  {
    id: 1,
    name: "ShowU 대강당",
    location: "서울 선릉/삼성",
    price: "330,000원~/1시간",
    img: "https://img.shareit.kr/prod/img/2022-10-12/c46f4d5e-874d-4a74-9129-dcb24b8d4411.jpg",
  },
  {
    id: 2,
    name: "ShowU 대강당",
    location: "서울 선릉/삼성",
    price: "330,000원~/1시간",
    img: "https://img.shareit.kr/prod/img/2022-10-12/c46f4d5e-874d-4a74-9129-dcb24b8d4411.jpg",
  },
  {
    id: 3,
    name: "ShowU 대강당",
    location: "서울 선릉/삼성",
    price: "330,000원~/1시간",
    img: "https://img.shareit.kr/prod/img/2022-10-12/c46f4d5e-874d-4a74-9129-dcb24b8d4411.jpg",
  },
  {
    id: 4,
    name: "ShowU 대강당",
    location: "서울 선릉/삼성",
    price: "330,000원~/1시간",
    img: "https://img.shareit.kr/prod/img/2022-10-12/c46f4d5e-874d-4a74-9129-dcb24b8d4411.jpg",
  },
  // 추가 데이터...
];

const SpaceRental = () => {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/reservation/space/rentalDetail/${id}`);
  };


  return (
    <S.Container>
      <S.Title>공간 대여</S.Title>
      <S.SearchBar>
        <input type="text" placeholder="원하시는 공간을 검색해보세요." />
        <button>검색</button>
      </S.SearchBar>
      <S.RentalList>
        {spaceRentals.map((rental) => (
          <S.RentalItem key={rental.id}>
            <S.RentalImage
              src={rental.img}
              alt={rental.name}
              onClick={() => handleImageClick(rental.id)}
            />
            <S.RentalDetails>
              
              <S.RentalName>{rental.name}</S.RentalName>
              <S.RentalLocation>{rental.location}</S.RentalLocation>
              <S.RentalPrice>{rental.price}</S.RentalPrice>
              <S.NewBadge>NEW!</S.NewBadge>
            </S.RentalDetails>
          </S.RentalItem>
        ))}
      </S.RentalList>
    </S.Container>
  );
};

export default SpaceRental;
