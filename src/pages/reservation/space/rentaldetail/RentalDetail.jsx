import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { S, modalStyles } from "./style";

Modal.setAppElement("#root");

const RentalDetail = () => {
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const [rental, setRental] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false); // 기본 상태는 하트가 눌리지 않은 상태
  const navigate = useNavigate();

  const infoRef = useRef(null);
  const precautionsRef = useRef(null);
  const locationRef = useRef(null);
  const refundRef = useRef(null);

  useEffect(() => {
    const fetchRental = async () => {
      const token = localStorage.getItem("jwtToken");
      try {
        const response = await fetch(
          `http://localhost:8000/reservation/spaces/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("대여 정보를 불러오는 중 오류 발생");
        }
        const data = await response.json();
        setRental(data);

        const likeStatusResponse = await fetch(
          `http://localhost:8000/reservation/spaces/${id}/likeStatus?userId=${currentUser._id}&type=space`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!likeStatusResponse.ok) {
          throw new Error("좋아요 상태를 확인하는 중 오류 발생");
        }
        const likeStatusData = await likeStatusResponse.json();
        setIsFavorite(likeStatusData.isFavorite);
      } catch (error) {
        console.error("대여 정보를 불러오는 중 오류 발생:", error);
      }
    };

    fetchRental();
  }, [id, currentUser._id]);

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

  const handleFavoriteClick = async () => {
    const token = localStorage.getItem("jwtToken");
    try {
      const response = await fetch(
        `http://localhost:8000/reservation/spaces/${id}/likes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userId: currentUser._id, type: "space" }),
        }
      );
      if (!response.ok) {
        throw new Error("좋아요 토글 중 오류 발생");
      }
      const result = await response.json();
      setIsFavorite(!isFavorite);
      console.log(result.message);
      if (!isFavorite) {
        alert("마이페이지 나의 찜 목록에서 확인할 수 있습니다!");
      } else {
        alert("찜이 취소되었습니다.");
      }
    } catch (error) {
      console.error("좋아요 토글 중 오류 발생:", error);
    }
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
                  <S.DetailTitle>가격:</S.DetailTitle> {rental.price}~ / 1시간
                </S.DetailText>
                <S.DetailIconWrapper>
                  {rental.icons.map((icon, index) => (
                    <S.DetailIconContent key={index}>
                      <img src={icon.icon} alt={icon.name} />
                      <S.DetailIconText>{icon.name}</S.DetailIconText>
                    </S.DetailIconContent>
                  ))}
                </S.DetailIconWrapper>
              </S.InfoColumn>
            </S.InfoRow>
            <S.HorizontalLine />
            <S.SubTitle>시설 정보</S.SubTitle>
            {rental.descriptions.map((description, index) => (
              <S.DetailText key={index}>{description}</S.DetailText>
            ))}
            <S.HorizontalLine />
            <S.SubTitle>편의 시설</S.SubTitle>
            <S.AmenitiesList>
              {rental.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </S.AmenitiesList>
          </div>
          <S.HorizontalLine />
          <div ref={precautionsRef} style={{ width: "800px" }}>
            <S.SubTitle>주의사항</S.SubTitle>
            <S.DetailText>
              - 대여 시간보다 적게 사용하더라도 대관비는 환불되지 않습니다.{" "}
              <br />
              - 기물 파손 및 청소 등의 사유로 보증금을 호스트에게 입금하여야
              합니다. <br />
              - 무료 주차 가능하나, 주차 대수 제한이 있으니 미리 가능 여부 확인
              필수 <br />
              - 사용자 인원이나 사용 시간이 추가될 경우, 현장에서 추가 과금이
              진행됩니다. <br />
              - 입실은 정시, 퇴실은 5분 전에 준비해서 예약 시간 안에 이용
              <br />
              - 시설 훼손 및 기물 파손 시 손해액을 호스트에게 배상하여야 합니다.
              <br />
              (CCTV는 방범/분실/기물파손/인원확인 등의 이유로 녹화됨)
            </S.DetailText>
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
          <S.PriceContainer>
            <S.Price>{rental.price}~ / 1시간</S.Price>
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
