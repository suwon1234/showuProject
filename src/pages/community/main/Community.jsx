import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import S from './styleCommunity';
import { Link } from 'react-router-dom';

const Community = () => {
  const [filterDrop, setFilterDrop] = useState(false);
  const [filter, setFilter] = useState("전체");
  const [commuData, setCommuData] = useState([]); 

  useEffect(() => {
    // 데이터 요청 (백엔드에서 가져오기)
    const fetchData = async () => {
      const token = localStorage.getItem('jwtToken'); // JWT 토큰 가져외기
      try {
        const response = await fetch('http://localhost:8000/community', {
          headers: {
            'Authorization': `Bearer ${token}`, // 헤더에 토큰 추가
          },
        });
        if (!response.ok) {
          throw new Error('네트워크 응답이 실패했습니다.');
        }
  
        const fetchedData = await response.json(); 
        setCommuData(fetchedData); // 백엔드에서 가져온 데이터만 사용
      } catch (error) {
        console.error("커뮤니티 데이터를 불러오는 데 실패했습니다.", error);
        setCommuData([]); // 데이터 로드 실패 시 
      }
    };
  
    fetchData();
  }, []);

  // 필터링된 데이터 생성
  const filteredData = filter === "전체" ? commuData : commuData.filter(item => item.category === filter);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <S.Wrapper>
      <S.TopTitle>커뮤니티</S.TopTitle>
      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className='icon' />
      </S.IconWrapper>

      <S.SubWrapper>
        <S.FilterButton onClick={() => setFilterDrop(!filterDrop)}>
          <label>Filter</label>
          <FontAwesomeIcon icon={faChevronDown} className='icon' />
        </S.FilterButton>

        {filterDrop && (
          <S.FilterDropdown>
            {["전체", "공연", "뮤지컬", "영화", "연극", "밴드"].map((category) => (
              <div key={category} onClick={() => { setFilter(category); setFilterDrop(false); }}>
                {category}
              </div>
            ))}
          </S.FilterDropdown>
        )}

        <S.Buttons>
          <S.hoverButton>둘러보기</S.hoverButton>
          <Link to={`/community/write`}>
            <button>글쓰기</button>
          </Link>
        </S.Buttons>

        <S.Info>
        {filteredData.length === 0 ? (
        <p>데이터가 없습니다.</p>
        ) : (
          filteredData.map((item) => (
            <S.Img key={item._id}>
              <Link to={`/community/communityInfo/${item._id}`}>
                <img src={item.imageUrl || item.file} alt={item.title} />
              </Link>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>{item.content}</p>
                </div>
            </S.Img>

          ))
        )}
      </S.Info>
      </S.SubWrapper>

      <S.ScrollTop onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} className="upicon" />
      </S.ScrollTop>
    </S.Wrapper>
  );
};

export default Community;
