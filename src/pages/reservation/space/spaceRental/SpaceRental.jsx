import React, { useEffect, useState } from "react";
import S from "./style";
import { useNavigate } from "react-router-dom";

const SpaceRental = () => {
  const navigate = useNavigate();
  const [spaceRentals, setSpaceRentals] = useState([]);

  useEffect(() => {
    const fetchSpaceRentals = async () => {
      const token = localStorage.getItem("jwtToken"); // 토큰 가져오기
      try {
        const response = await fetch(
          "http://localhost:8000/reservation/spaces",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("데이터를 불러오는 중 오류 발생");
        }
        const data = await response.json();
        setSpaceRentals(data);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchSpaceRentals();
  }, []);

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
          <S.RentalItem key={rental._id}>
            <S.RentalImage
              src={rental.img}
              alt={rental.name}
              onClick={() => handleImageClick(rental._id)}
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
