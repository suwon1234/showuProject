import React, { useState, useEffect } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Audition = () => {
  const [auditionData, setAuditionData] = useState([]);
  const [filter, setFilter] = useState("전체");

  useEffect(() => {
    const fetchAuditions = async () => {
      try {
        const response = await fetch("http://localhost:8000/community/audition"); 
        if (!response.ok) {
          throw new Error("오디션 데이터를 불러오는 데 실패했습니다.");
        }
        const data = await response.json();
        setAuditionData(data); 
      } catch (error) {
        console.error("오디션 데이터 로드 오류:", error);
        setAuditionData([]);
      }
    };

    fetchAuditions();
  }, []);


  const filteredData =
    filter === "전체"
      ? auditionData
      : auditionData.filter((item) => item.category === filter);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <S.Wrapper>
      <S.TopTitle>Audition</S.TopTitle>
      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </S.IconWrapper>

      <S.SubWrapper>
        <S.Titles>
          <S.MainTitle>Audition</S.MainTitle>
          <S.SubTitle>ShowU에서 전해드리는 다양한 오디션 소식</S.SubTitle>
        </S.Titles>

        {/* 필터 버튼 */}
        <S.ButtonsAll>
          <div>
            {["전체", "뮤지컬", "연극"].map((category) => (
              <button key={category} onClick={() => setFilter(category)}>
                {category}
              </button>
            ))}
          </div>
        </S.ButtonsAll>

        <S.ImageWrapper>
          {filteredData.length === 0 ? (
            <p>오디션 데이터가 없습니다.</p>
          ) : (
            filteredData.map((audition) => (
              <Link
                to={`/community/audition/${audition._id}`}
                key={audition._id}
              >
                <S.Images>
                  <img src={audition.imageUrl} alt={audition.title} />
                  <S.Info>
                    <h3>{audition.title}</h3>
                    <p>{audition.description}</p>
                  </S.Info>
                </S.Images>
              </Link>
            ))
          )}
        </S.ImageWrapper>
      </S.SubWrapper>

      {/* 스크롤 탑 버튼 */}
      <S.ScrollTop onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} className="upicon" />
      </S.ScrollTop>
    </S.Wrapper>
  );
};

export default Audition;
