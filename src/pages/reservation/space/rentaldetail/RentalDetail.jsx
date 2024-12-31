import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { S, modalStyles } from "./style";

Modal.setAppElement("#root"); // 모달을 사용할 앱 요소 설정

const spaceRentals = [
  {
    id: 1,
    name: "ShowU 대강당",
    location: "서울 선릉/삼성",
    price: "330,000원~/1시간",
    pricePerHour: 330000,
    pricePerDay: 4800000,
    img: "https://img.shareit.kr/prod/img/2022-10-12/c46f4d5e-874d-4a74-9129-dcb24b8d4411.jpg",
    description: "시설정보 그림 논의필요.",
    amenities: ["WiFi", "주차 공간", "프로젝터", "음향 시스템"],
    additionalImages: [
      "https://img.shareit.kr/prod/img/2022-09-30/312dc9ca-b0aa-4c0b-8411-f3d6a190fb74.jpg",
      "https://img.shareit.kr/prod/img/2022-09-30/4edcc5e0-51b8-4c9f-8363-4aa641cd5184.jpg",
      "https://img.shareit.kr/prod/img/2022-09-30/9f11d616-d0d5-4d23-8201-9fa82de51ab1.jpg",
      "https://img.shareit.kr/prod/img/2022-09-30/8cc7d4a7-7245-4991-a1d1-1eaf449b6b06.jpg",
    ],
  },
  // 추가 데이터...
];

const RentalDetail = () => {
  const { id } = useParams();
  const rental = spaceRentals.find((r) => r.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const infoRef = useRef(null);
  const precautionsRef = useRef(null);
  const locationRef = useRef(null);
  const refundRef = useRef(null);

  if (!rental) {
    return <p>해당 대여 정보를 찾을 수 없습니다.</p>;
  }

  const images = [rental.img, ...rental.additionalImages];

  const handleReserveClick = (rental) => {
    navigate("/reservation/space/rental-selection", {
      state: {
        name: rental.name,
        location: rental.location,
        pricePerHour: rental.pricePerHour,
        pricePerDay: rental.pricePerDay,
        img: rental.img,
      },
    });
  };
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    // 백엔드 호출로 선호 목록에 추가/제거 처리 
  };
  return (
    <S.Container>
      <S.DetailContainer>
        <S.MainImageContainer>
          <S.Image
            src={rental.img}
            alt={rental.name}
            onClick={() => handleImageClick(0)}
          />
          <S.AdditionalImages>
            {rental.additionalImages.map((image, index) => (
              <S.AdditionalImage
                key={index}
                src={image}
                alt={`추가 이미지 ${index + 1}`}
                onClick={() => handleImageClick(index + 1)}
              />
            ))}
          </S.AdditionalImages>
        </S.MainImageContainer>
      </S.DetailContainer>
      <S.InfoWrapper>
        <S.InfoContainer>
          <S.Title style={{ color: "#ffd400" }}>{rental.name}</S.Title>

          {/* 네비게이션 버튼 */}
          <S.NavButtons>
            <button onClick={() => scrollToRef(infoRef)}>공간정보</button>
            <button onClick={() => scrollToRef(precautionsRef)}>
              주의사항
            </button>
            <button onClick={() => scrollToRef(locationRef)}>위치</button>
            <button onClick={() => scrollToRef(refundRef)}>환불규정</button>
          </S.NavButtons>

          <div ref={infoRef} style={{ width: "800px" }}>
            <S.Danger>
              <S.DangerTitle>직거래 유도 주의 안내</S.DangerTitle>
              <S.DangerContent>
                호스트 현금 결제 유도 시, 신고바랍니다. <br />
                ShowU는 현금 직거래로 발생하는 사고를 책임지지 않습니다.
              </S.DangerContent>
            </S.Danger>
            <S.SubTitle>공간정보</S.SubTitle>
            <S.InfoRow>
              <S.InfoColumn>
                <S.DetailText>
                  <S.DetailTitle>위치:</S.DetailTitle> {rental.location}
                </S.DetailText>
                <S.DetailText>
                  <S.DetailTitle>가격:</S.DetailTitle> {rental.price}
                </S.DetailText>
                {/* <S.HorizontalLine /> */}
                <S.DetailIconWrapper>
                  <S.DetailIconContent>
                    <img
                      src="https://img.shareit.kr/front-assets/icons/crystal_lineRegularOut_white.svg?version=1.0"
                      alt=""
                    />
                    <S.DetailIconText>냉방기</S.DetailIconText>
                  </S.DetailIconContent>
                  <S.DetailIconContent>
                    <img
                      src="https://img.shareit.kr/front-assets/icons/crystal_lineRegularOut_white.svg?version=1.0"
                      alt=""
                    />
                    <S.DetailIconText>냉방기</S.DetailIconText>
                  </S.DetailIconContent>
                  <S.DetailIconContent>
                    <img
                      src="https://img.shareit.kr/front-assets/icons/crystal_lineRegularOut_white.svg?version=1.0"
                      alt=""
                    />
                    <S.DetailIconText>냉방기</S.DetailIconText>
                  </S.DetailIconContent>
                  <S.DetailIconContent>
                    <img
                      src="https://img.shareit.kr/front-assets/icons/crystal_lineRegularOut_white.svg?version=1.0"
                      alt=""
                    />
                    <S.DetailIconText>냉방기</S.DetailIconText>
                  </S.DetailIconContent>
                </S.DetailIconWrapper>
              </S.InfoColumn>
            </S.InfoRow>
            <S.HorizontalLine />
            <S.DetailText>{rental.description}</S.DetailText>
            <S.HorizontalLine />
            <S.SubTitle>편의 시설:</S.SubTitle>
            <S.AmenitiesList>
              {rental.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </S.AmenitiesList>
          </div>
          <S.HorizontalLine />
          <div ref={precautionsRef} style={{ width: "800px" }}>
            <S.SubTitle>주의사항:</S.SubTitle>
            <S.DetailText>여기에 주의사항 내용이 들어갑니다.</S.DetailText>
            <S.HorizontalLine />
          </div>

          <div ref={locationRef} style={{ width: "800px" }}>
            <S.SubTitle>위치</S.SubTitle>
            <S.DetailText>API</S.DetailText>
            <S.HorizontalLine />
          </div>

          <div ref={refundRef} style={{ width: "800px" }}>
            <S.SubTitle>환불규정</S.SubTitle>
            <S.DetailText>
              결제 후, 3시간 이내 취소 시, 100% 환불됩니다. <br />
              단, 이용시작 시간 12시간 이내 취소 시에는 환불 불가합니다.
            </S.DetailText>
            <S.HorizontalLine />
          </div>
        </S.InfoContainer>

        {/* 가격 및 예약하기 */}
        <div>
          {spaceRentals.map((rental) => (
            <div key={rental.id}>
              <S.PriceContainer>
                <S.Price>{rental.price}</S.Price>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <S.FavoriteButton
                    onClick={handleFavoriteClick}
                    isFavorite={isFavorite}
                  >
                    ♥
                  </S.FavoriteButton>
                  <S.ReserveButton onClick={() => handleReserveClick(rental)}>
                    예약하기
                  </S.ReserveButton>
                </div>
              </S.PriceContainer>
            </div>
          ))}
        </div>
      </S.InfoWrapper>

      {/* 이미지 팝업 모달 */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={modalStyles}
      >
        <S.CloseButton onClick={handleCloseModal}>닫기 X</S.CloseButton>
        <S.SliderContainer>
          <S.PrevButton onClick={handlePrev}>{"<"}</S.PrevButton>
          {images.map((image, index) => (
            <S.SliderImage
              key={index}
              src={image}
              alt={`슬라이드 이미지 ${index + 1}`}
              isActive={index === selectedImageIndex}
            />
          ))}
          <S.NextButton onClick={handleNext}>{">"}</S.NextButton>
        </S.SliderContainer>
        <S.ImageCounter>
          {selectedImageIndex + 1} / {images.length}
        </S.ImageCounter>
      </Modal>
    </S.Container>
  );
};

export default RentalDetail;
