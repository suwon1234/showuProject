import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  getDay,
  addMonths,
  isSameDay,
} from "date-fns";
import { useSelector } from "react-redux";
import S from "./style";

const ShowDetail = () => {
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.user); // Redux에서 현재 유저 정보 가져오기
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [availableSeats, setAvailableSeats] = useState({ R: null, S: null });
  const [activeTab, setActiveTab] = useState("상세정보");
  const [comments, setComments] = useState([]); // 빈 배열로 초기화
  const [newComment, setNewComment] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingComment, setEditingComment] = useState("");
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [show, setShow] = useState(null); // 쇼 데이터를 상태로 관리

 useEffect(() => {
   const fetchShow = async () => {
     const token = localStorage.getItem("jwtToken");
     try {
       const response = await fetch(
         `http://localhost:8000/reservation/performingShows/${id}`,
         {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         }
       );
       if (!response.ok) {
         throw new Error("네트워크 응답이 실패했습니다.");
       }
       const fetchedData = await response.json();
       console.log("Fetched Show Data:", fetchedData); // 콘솔 로그 추가
       setShow(fetchedData);
       setIsFavorite(
         fetchedData.hearts && fetchedData.hearts.includes(currentUser._id)
       ); // 초기 좋아요 상태 설정
       setComments(
         Array.isArray(fetchedData.comments) ? fetchedData.comments : []
       ); // 초기 댓글 설정
       console.log("Fetched Comments:", fetchedData.comments); // 콘솔 로그 추가
     } catch (error) {
       console.error("공연 데이터를 가져오는 중 오류 발생:", error);
       setComments([]); // 오류 발생 시 빈 배열로 초기화
     }
   };

   fetchShow();
 }, [id, currentUser._id]);

  if (!show) {
    return <p>해당 공연 정보를 찾을 수 없습니다.</p>;
  }

  const handleFavoriteClick = async () => {
    const token = localStorage.getItem("jwtToken");
    try {
      const response = await fetch(
        `http://localhost:8000/reservation/performingShows/${id}/likes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userId: currentUser._id }), // 유저 ID 포함
        }
      );
      if (!response.ok) {
        throw new Error("좋아요 토글 중 오류 발생");
      }
      const result = await response.json();
      setIsFavorite(!isFavorite);
      console.log(result.message); // 서버에서 받은 메시지를 콘솔에 출력
      if (!isFavorite) {
        alert("마이페이지 나의 찜 목록에서 확인할 수 있습니다!");
      } else {
        alert("찜이 취소되었습니다.");
      }
    } catch (error) {
      console.error("좋아요 토글 중 오류 발생:", error);
    }
  };


  const handleAddComment = async () => {
    const token = localStorage.getItem("jwtToken");
    if (newComment.trim() && newComment.length <= 1000) {
      try {
        const response = await fetch(
          `http://localhost:8000/reservation/performingShows/${id}/comments`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userId: currentUser._id, text: newComment }), // 유저 ID 포함
          }
        );
        if (!response.ok) {
          throw new Error("댓글 추가 중 오류 발생");
        }
        const result = await response.json();
        setComments(result); // 응답으로 받은 댓글 목록 업데이트
        setNewComment(""); // 입력 필드 초기화
      } catch (error) {
        console.error("댓글 추가 중 오류 발생:", error);
      }
    }
  };

  const handleSaveEdit = async () => {
    const token = localStorage.getItem("jwtToken");
    try {
      const response = await fetch(
        `http://localhost:8000/reservation/performingShows/${id}/comments/${comments[editingIndex]._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ text: editingComment }),
        }
      );
      if (!response.ok) {
        throw new Error("댓글 수정 중 오류 발생");
      }
      const result = await response.json();
      setComments(result);
      setEditingIndex(null);
      setEditingComment("");
    } catch (error) {
      console.error("댓글 수정 중 오류 발생:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    const token = localStorage.getItem("jwtToken");
    try {
      const response = await fetch(
        `http://localhost:8000/reservation/performingShows/${id}/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("댓글 삭제 중 오류 발생");
      }
      const result = await response.json();
      setComments(result);
    } catch (error) {
      console.error("댓글 삭제 중 오류 발생:", error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
    setAvailableSeats({ R: null, S: null }); // 날짜 변경 시 좌석 정보 초기화
  };

  const handleTimeChange = async (time) => {
    setSelectedTime(time);
    setAvailableSeats({ R: null, S: null }); // 초기화

    try {
      const formattedDate = encodeURIComponent(
        new Date(selectedDate).toISOString()
      ); // 날짜 형식 변환 후 URL 인코딩
      const response = await fetch(
        `http://localhost:8000/reservation/availableSeats?showId=${show._id}&date=${formattedDate}&time=${time}`
      );
      if (!response.ok) {
        throw new Error("잔여 좌석 조회 중 오류 발생");
      }
      const availableSeatsData = await response.json();
      console.log("Available Seats Data:", availableSeatsData); // 콘솔 로그 추가

      const RSeats = availableSeatsData.filter(
        (seat) => parseInt(seat.split("-")[0]) > 3
      ).length; // R석 예시 (row가 4 이상)
      const SSeats = availableSeatsData.filter(
        (seat) => parseInt(seat.split("-")[0]) <= 3
      ).length; // S석 예시 (row가 3 이하)

      setAvailableSeats({
        R: RSeats > 0 ? `${RSeats}석` : "매진",
        S: SSeats > 0 ? `${SSeats}석` : "매진",
      });
    } catch (error) {
      console.error("잔여 좌석 조회 중 오류 발생:", error);
    }
  };

  const previousMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const renderCalendar = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    const dateArray = [];
    let currentDate = start;

    while (currentDate <= end) {
      dateArray.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }

    const daysInWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const firstDayOfMonth = getDay(start);

    return (
      <S.CalendarGrid>
        {daysInWeek.map((day) => (
          <S.CalendarHeader key={day}>{day}</S.CalendarHeader>
        ))}
        {Array(firstDayOfMonth)
          .fill(null)
          .map((_, index) => (
            <S.CalendarDay key={`empty-${index}`} />
          ))}
        {dateArray.map((date) => (
          <S.CalendarDay
            key={date}
            onClick={() => handleDateChange(date)}
            selected={isSameDay(date, selectedDate)}
          >
            {format(date, "d")}
          </S.CalendarDay>
        ))}
      </S.CalendarGrid>
    );
  };

  const renderTimeSlots = () => (
    <S.StepContainerTwo>
      <S.StepTitle>STEP2 회차 선택</S.StepTitle>
      {show.times.map((time, index) => (
        <S.TimeSlot
          key={time}
          onClick={() => handleTimeChange(time)}
          selected={selectedTime === time}
        >
          {time}
          <br />
          출연진 :{" "}
          {show.cast
            .slice(index * 3, index * 3 + 3)
            .map((actor) => actor.name)
            .join(", ")}
        </S.TimeSlot>
      ))}
    </S.StepContainerTwo>
  );

  const handleBooking = () => {
    navigate("/reservation/performing-show/seat-selection", {
      state: {
        selectedDate,
        selectedTime,
        showId: show._id,
        showName: show.name,
        price: show.price,
      },
    });
  };

  const renderTabs = () => (
    <S.Tabs>
      {["상세정보", "관람후기", "기대평", "장소정보", "예매/취소안내"].map(
        (tab) => (
          <S.Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </S.Tab>
        )
      )}
    </S.Tabs>
  );

  return (
    <S.Container>
      <S.DetailContainer>
        <S.Image src={show.img} alt={show.name} />
        <S.InfoContainer>
          <S.Title>{show.name}</S.Title>
          <S.InfoRow>
            <S.InfoColumn>
              <S.DetailText>
                <S.DetailTitle>장소:</S.DetailTitle> {show.venue}
              </S.DetailText>
              <S.DetailText>
                <S.DetailTitle>기간:</S.DetailTitle> {show.dates}
              </S.DetailText>
            </S.InfoColumn>
            <S.InfoColumn>
              <S.DetailText>
                <S.DetailTitle>관람시간:</S.DetailTitle> {show.duration}
              </S.DetailText>
              <S.DetailText>
                <S.DetailTitle>관람등급:</S.DetailTitle> {show.grade}
              </S.DetailText>
            </S.InfoColumn>
          </S.InfoRow>
          <S.HorizontalLine />
          <S.InfoRow>
            <S.InfoColumn>
              <S.SubTitle>가격</S.SubTitle>
              <S.DetailText>
                <S.DetailTitle>R석:</S.DetailTitle> {show.price.R}
              </S.DetailText>
              <S.DetailText>
                <S.DetailTitle>S석:</S.DetailTitle> {show.price.S}
              </S.DetailText>
            </S.InfoColumn>
            <S.InfoColumn>
              <S.SubTitle>할인 정보</S.SubTitle>
              <S.DiscountList>
                {show.discounts.map((discount, index) => (
                  <li key={index}>{discount}</li>
                ))}
              </S.DiscountList>
            </S.InfoColumn>
          </S.InfoRow>
        </S.InfoContainer>
      </S.DetailContainer>

      <S.HorizontalLine />
      <S.DateTimeContainer>
        <S.StepContainer>
          <S.StepTitle>STEP1 날짜 선택</S.StepTitle>
          <S.MonthNavigation>
            <S.NavButton onClick={previousMonth}>{"<"}</S.NavButton>
            <S.MonthTitle>{format(currentMonth, "yyyy년 MM월")}</S.MonthTitle>
            <S.NavButton onClick={nextMonth}>{">"}</S.NavButton>
          </S.MonthNavigation>
          <S.CalendarContainer>{renderCalendar()}</S.CalendarContainer>
        </S.StepContainer>
        <S.VerticalLine />
        {renderTimeSlots()} {/* 공연 시간 및 출연진 선택 */}
        <S.VerticalLine />
        <S.StepContainer>
          <S.StepTitle>잔여 좌석:</S.StepTitle>
          {availableSeats.R !== null && availableSeats.S !== null && (
            <S.SeatsInfo>
              <S.SeatText>R석: {availableSeats.R}</S.SeatText>
              <S.SeatText>S석: {availableSeats.S}</S.SeatText>
            </S.SeatsInfo>
          )}
        </S.StepContainer>
      </S.DateTimeContainer>

      <S.ReserveButtonContainer>
        <S.FavoriteButton
          onClick={handleFavoriteClick}
          $isFavorite={isFavorite}
        >
          ♥
        </S.FavoriteButton>
        <S.ReserveButtonWithHeart
          onClick={handleBooking}
          disabled={!selectedDate || !selectedTime}
        >
          예매하기
        </S.ReserveButtonWithHeart>
      </S.ReserveButtonContainer>

      <S.CastContainer>
        <S.CastTitle>출연진</S.CastTitle>
        <S.CastList>
          {show.cast.map((actor) => (
            <S.CastItem key={actor.name}>
              <S.CastImage src={actor.img} alt={actor.name} />
              <S.CastName>{actor.name}</S.CastName>
            </S.CastItem>
          ))}
        </S.CastList>
      </S.CastContainer>

      {renderTabs()}

      <S.TabContentContainer>
        {activeTab === "상세정보" && (
          <S.TabContent>
            <S.TimeInfoContainer>
              <S.TimeInfoTitle>공연시간 정보</S.TimeInfoTitle>
              <S.TimeInfo>{show.dates}</S.TimeInfo>
              <S.TimeInfoContent>
                평일 14시, 20시 주말 및 공휴일 14시, 20시
              </S.TimeInfoContent>
            </S.TimeInfoContainer>
            <S.NoticeContainer>
              <S.NoticeTitle>공지사항: 코로나19 방역 지침 준수</S.NoticeTitle>
              <S.NoticeContent>
                *예매마감: 공연 전일 17시 <br />
                *취소마감: 공연 전일 17시 <br />
                *관람연령: 13세 이상
              </S.NoticeContent>
            </S.NoticeContainer>
            <img src={show.detailImage} alt="공연내용" />
          </S.TabContent>
        )}
        {activeTab === "관람후기" && (
          <S.TabContent>
            <S.CommentSection>
              {/* <S.NoticeContainer>
                <S.NoticeTitle>관람후기</S.NoticeTitle>
                <S.NoticeContent>
                  showU 운영규정에 맞지 않는 글은 사전 통보없이 삭제될 수 있습니다
                </S.NoticeContent>
              </S.NoticeContainer> */}
              <S.CommentInputContainer>
                <S.CommentInput
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="관람후기를 입력해주세요!"
                  maxLength={1000}
                />
                <S.CharacterCount>{newComment.length}/1000</S.CharacterCount>
              </S.CommentInputContainer>
              <S.CommentButton onClick={handleAddComment}>등록</S.CommentButton>
            </S.CommentSection>
            <S.CommentList>
              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <S.CommentItem key={index}>
                    {index === editingIndex ? (
                      <>
                        <S.EditCommentInput
                          type="text"
                          value={editingComment}
                          onChange={(e) => setEditingComment(e.target.value)}
                          maxLength={1000}
                        />
                        <S.CharacterCount>
                          {editingComment.length}/1000
                        </S.CharacterCount>
                        <S.CommentButton onClick={handleSaveEdit}>
                          저장
                        </S.CommentButton>
                      </>
                    ) : (
                      <>
                        {comment.text}
                        <S.CommentDetails>
                          작성자: {comment.user.name} / {comment.createdAt}
                        </S.CommentDetails>
                        <S.EditDeleteContainer>
                          {comment.user._id === currentUser._id && (
                            <>
                              <S.CommentButton
                                onClick={() => {
                                  setEditingIndex(index);
                                  setEditingComment(comment.text);
                                }}
                              >
                                수정
                              </S.CommentButton>
                              <S.CommentButton
                                onClick={() => handleDeleteComment(comment._id)}
                              >
                                삭제
                              </S.CommentButton>
                            </>
                          )}
                        </S.EditDeleteContainer>
                      </>
                    )}
                  </S.CommentItem>
                ))
              ) : (
                <p>관람후기가 없습니다</p>
              )}
            </S.CommentList>
          </S.TabContent>
        )}
        {activeTab === "기대평" && (
          <S.TabContent>관람후기와 동일한 댓글 입력 페이지</S.TabContent>
        )}
        {activeTab === "장소정보" && (
          <S.TabContent>카카오 지도 api</S.TabContent>
        )}
        {activeTab === "예매/취소안내" && (
          <S.TabContent>예매/취소안내 내용</S.TabContent>
        )}
      </S.TabContentContainer>
    </S.Container>
  );
};

export default ShowDetail;
