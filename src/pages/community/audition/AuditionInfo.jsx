import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import S from "./styleAuditionInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const AuditionInfo = () => {
  const { id } = useParams(); 
  const [audition, setAudition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Received ID:", id);
    const fetchAuditionById = async () => {
      try {
        const response = await fetch(`http://localhost:8000/community/audition/${id}`);
        if (!response.ok) {
          throw new Error("오디션 데이터를 가져오는 데 실패했습니다.");
        }
        const data = await response.json();
        console.log("Fetched Data:", data);
        setAudition(data); 
      } catch (error) {
        console.error("오디션 데이터 로드 오류:", error);
        setError("기간이 마감된 오디션 정보입니다.");
      }
    };
    fetchAuditionById();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!audition) {
    return <div>데이터 로딩중..</div>; 
  }

  return (
    <S.Wrapper>
      <S.TopTitle>Audition</S.TopTitle>
      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </S.IconWrapper>

      <S.SubWrapper>
        <S.Titles>
          <S.MainTitle>{audition.title}</S.MainTitle>
          <S.SubTitle>ShowU에서 전해드리는 다양한 오디션 소식</S.SubTitle>
        </S.Titles>
        <S.Line2 />

        <S.imageWrapper>
          <img src={audition.imageUrl} alt={audition.title} />
        </S.imageWrapper>

        <S.Description>
          <p>{audition.description}</p>
        </S.Description>
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default AuditionInfo;







