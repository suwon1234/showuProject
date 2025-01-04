import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { format, addDays, startOfMonth, endOfMonth, getDay, addMonths, isSameDay } from 'date-fns';
import S from './style';


const ShowDetail = () => {
  const { id } = useParams();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [availableSeats, setAvailableSeats] = useState({ R: null, S: null });
  const [activeTab, setActiveTab] = useState("상세정보");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userName] = useState("사용자1");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingComment, setEditingComment] = useState("");
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);


  const performingShows = [
    {
      id: 1,
      name: "뮤지컬 <시라노>",
      venue: "디큐브 링크 아트센터",
      dates: "2024.10.15 - 2025.1.5",
      duration: "120분",
      grade: "13세 이상",
      price: {
        R: "77,000원",
        S: "55,000원",
      },
      discounts: [
        "PAYCO VIP 회원 할인 10% 할인",
        "5차 조기예매 할인 25% 할인",
        "마티네 공연 할인 30% 할인",
        "재관람(1인1매, 본인 기준으로 티켓소지시) 25% 할인",
        "S석 청소년할인(본인, 생년월일 증명서류 지참) 30% 할인",
      ],
      img: "https://ticketimage.interpark.com/Play/image/large/24/24014885_p.gif",
      detailImage:
        "https://ticketimage.interpark.com/Play/image/etc/24/24014885-18.jpg",
      cast: [
        { name: "박정원", img: "path/to/image1.jpg" },
        { name: "손유동", img: "path/to/image2.jpg" },
        { name: "박준희", img: "path/to/image3.jpg" },
        { name: "김리현", img: "path/to/image4.jpg" },
        { name: "김재범", img: "path/to/image5.jpg" },
        { name: "김종구", img: "path/to/image6.jpg" },
        { name: "김경수", img: "path/to/image7.jpg" },
        { name: "김지철", img: "path/to/image8.jpg" },
      ],
    },
    // 추가 데이터
  ];

  const show = performingShows.find((show) => show.id === parseInt(id));
  if (!show) {
    return <p>해당 공연 정보를 찾을 수 없습니다.</p>;
  }

const handleFavoriteClick = () => {
  setIsFavorite(!isFavorite);
  // 백엔드 호출로 선호 목록에 추가/제거 처리
};

 const handleAddComment = () => {
   if (newComment.trim() && newComment.length <= 1000) {
     const comment = {
       text: newComment,
       user: userName,
       time: new Date().toLocaleString(),
     };
     setComments([...comments, comment]);
     setNewComment("");
   }
  };
  
  const handleEditComment = (index) => {
    setEditingIndex(index);
    setEditingComment(comments[index].text);
  };
  
  const handleSaveEdit = () => {
    const updatedComments = [...comments];
    updatedComments[editingIndex].text = editingComment;
    updatedComments[editingIndex].time = new Date().toLocaleString(); // 수정 시간 업데이트 
    setComments(updatedComments);
    setEditingIndex(null);
    setEditingComment("");
  };
  
  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
    setAvailableSeats({ R: null, S: null }); // 날짜 변경 시 좌석 정보 초기화
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    if (time === "16:00") {
      setAvailableSeats({ R: "매진", S: "15석" });
    } else if (time === "20:00") {
      setAvailableSeats({ R: "10석", S: "매진" });
    }
  };

  const handleBooking = () => {
    navigate("/reservation/performing-show/seat-selection", {
      state: { selectedDate, selectedTime, showName: show.name },
    });
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
              <S.SubTitle>가격:</S.SubTitle>
              <S.DetailText>
                <S.DetailTitle>R석:</S.DetailTitle> {show.price.R}
              </S.DetailText>
              <S.DetailText>
                <S.DetailTitle>S석:</S.DetailTitle> {show.price.S}
              </S.DetailText>
            </S.InfoColumn>
            <S.InfoColumn>
              <S.SubTitle>할인:</S.SubTitle>
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

        <S.StepContainerTwo>
          <S.StepTitle>STEP2 회차 선택</S.StepTitle>
          <S.TimeSlot
            onClick={() => handleTimeChange("16:00")}
            selected={selectedTime === "16:00"}
          >
            16:00분
            <br></br>
            출연진 : 홍길동, 동길홍, 이순신
          </S.TimeSlot>
          <S.TimeSlot
            onClick={() => handleTimeChange("20:00")}
            selected={selectedTime === "20:00"}
          >
            20:00분
            <br></br>
            출연진 : 홍길동, 동길홍, 이순신
          </S.TimeSlot>
        </S.StepContainerTwo>

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
        <S.FavoriteButton onClick={handleFavoriteClick} isFavorite={isFavorite}>
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
              <S.TimeInfoContent> 평일 14시, 20시 주말 및 공휴일 14시, 20시 </S.TimeInfoContent>
            </S.TimeInfoContainer>
            <S.NoticeContainer>
              <S.NoticeTitle>공지사항: 코로나19 방역 지침 준수</S.NoticeTitle>
              <S.NoticeContent> *예매마감: 공연 전일 17시 <br />
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
              <S.CommentInputContainer>
                <S.CommentInput
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="댓글을 입력하세요..."
                  maxLength={1000}
                />
                <S.CharacterCount>{newComment.length}/1000</S.CharacterCount>
              </S.CommentInputContainer>
              <S.CommentButton onClick={handleAddComment}>등록</S.CommentButton>
            </S.CommentSection>
            <S.CommentList>
              {comments.map((comment, index) => (
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
                        작성한 자: {comment.user} | {comment.time}
                      </S.CommentDetails>
                      <S.EditDeleteContainer>
                        <S.CommentButton
                          onClick={() => handleEditComment(index)}
                        >
                          수정
                        </S.CommentButton>
                        <S.CommentButton
                          onClick={() => handleDeleteComment(index)}
                        >
                          삭제
                        </S.CommentButton>
                      </S.EditDeleteContainer>
                    </>
                  )}
                </S.CommentItem>
              ))}
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
