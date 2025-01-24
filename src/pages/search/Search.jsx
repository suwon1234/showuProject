import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import S from './style'; // 스타일 가져오기

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  const [shoplist, setShopList] = useState([]);
  const [filteredShoplist, setFilteredShoplist] = useState([]);
  const [filteredReservationlist, setFilteredReservationlist] = useState([]);
  const [ticketEvents, setTicketEvents] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [filteredVodlist, setFilteredVodlist] = useState([]);
  const [auditionData, setAuditionData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [commuData, setCommuData] = useState([]);

  // Shop 데이터
  useEffect(() => {
    const getMdItems = async () => {
      try {
        const response = await fetch("http://localhost:8000/shop/md");
        const datas = await response.json();
        setShopList(datas);
        setFilteredShoplist(
          datas.filter(item => item.mdName.toLowerCase().includes(query.toLowerCase()))
        );
      } catch (error) {
        console.error("MdMainError", error);
      }
    };

    getMdItems();
  }, [query]);

  // Reservation 데이터
  useEffect(() => {
    const fetchTicketEvents = async () => {
      const token = localStorage.getItem("jwtToken");
      try {
        const response = await fetch(
          "http://localhost:8000/reservation/ticketEvents",
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
        setTicketEvents(fetchedData);
        setFilteredReservationlist(
          fetchedData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        );
      } catch (error) {
        console.error("티켓 이벤트를 가져오는 중 오류 발생:", error);
        setTicketEvents([]);
      }
    };

    fetchTicketEvents();
  }, [query]);

  // Vod 데이터
  useEffect(() => {
    const vodVideo = async () => {
      try {
        const response = await fetch("http://localhost:8000/vod");
        const data = await response.json();
        if (response.ok) {
          setVideoList(data);
          setFilteredVodlist(
            data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
          );
        } else {
          console.error('Error', data.message);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };

    vodVideo();
  }, [query]);

  // Audition 데이터
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

  // News 데이터
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:8000/community/newsMain");
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("뉴스 데이터 오류 발생:", error);
      }
    };

    fetchNews();
  }, []);

  // General Community 데이터
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('jwtToken');
      try {
        const response = await fetch('http://localhost:8000/community', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('데이터를 불러오는 데 실패했습니다.');
        }
        const fetchedData = await response.json(); 
        setCommuData(fetchedData); 
      } catch (error) {
        console.error("커뮤니티 데이터를 불러오는 데 실패했습니다.", error);
        setCommuData([]);
      }
    };

    fetchData();
  }, []);

  console.log('검색어:', query); // 검색어 출력

  return (
    <S.main className='main'>
    
      <div className='shop'>
      <div className="title">
    <span className="highlight">Shop</span> 검색 결과
        </div>
        {filteredShoplist.length > 0 ? (
          <div className="md-list">
            {filteredShoplist.map(item => (
              <S.Md key={item.id}>
                <Link to={`/shop/md/detail/${item._id}`}>
                  <img src={item.image} alt={item.mdName} />
                </Link>
                <div className="md-category">{item.category}</div>
                <div className="md-name">{item.mdName}</div>
                <div className="md-price">
                {item.price ? item.price.toLocaleString() : "가격 정보 없음"}원
                </div>
              </S.Md>
            ))}
          </div>
        ) : (
          <p>검색 결과가 없습니다...</p>
        )}
      </div>

    
      <div className='reservation'>
      <div className="title">
    <span className="highlight">예약</span> 검색 결과
        </div>
        {filteredReservationlist.length > 0 ? (
          <div className="md-list">
            {filteredReservationlist.map(item => (
              <S.Md key={item.id}>
                <Link to={`/reservation/ticket-open/openDetail/${item._id}`}>
                  <img src={item.img} alt={item.name} />
                </Link>
                <div className="md-category">{item.category}</div>
                <div className="md-name">{item.name}</div>
                <div className="md-price">
                  {item.type}
                </div>
              </S.Md>
            ))}
          </div>
        ) : (
          <p>검색 결과가 없습니다...</p>
        )}
      </div>

      <div className='vod'>
      <div className="title">
    <span className="highlight">Vod</span> 검색 결과
        </div>
        {filteredVodlist.length > 0 ? (
          <div className="md-list">
            {filteredVodlist.map(item => (
              <S.Md key={item.id}>
                <Link to={`/vod/play/${item._id}`}>
                  <img src={item.mainImage} alt={item.title} />
                </Link>
                <div className="md-category">{item.category}</div>
                <div className="md-name">{item.title}</div>
              </S.Md>
            ))}
          </div>
        ) : (
          <p>검색 결과가 없습니다...</p>
        )}
      </div>

   
      <div className='community'>
      <div className="title">
    <span className="highlight">커뮤니티</span> 검색 결과
        </div>
<div className='audition'>
  <p className='title'>오디션</p>
  {auditionData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).length > 0 ? (
    <div className="md-list">
      {auditionData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).map(item => (
        <S.Md key={item.id}>
          <Link to={`/community/audition/${item._id}`}>
            <img src={item.imageUrl} alt={item.title} />
          </Link>
          <div className="md-category">{item.category || '오디션'}</div>
          <div className="md-name">{item.title}</div>
        </S.Md>
      ))}
    </div>
  ) : (
    <p>검색 결과가 없습니다...</p>
  )}
</div>


<div className='news'>
  <p className='title'>뉴스</p>
  {newsData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).length > 0 ? (
    <div className="md-list">
      {newsData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).map(item => (
        <S.Md key={item.id}>
          <Link to={`/community/newsMain/news/${item._id}`}>
            <img src={item.imageUrl} alt={item.title} />
          </Link>
          <div className="md-category">{item.category || '뉴스'}</div>
          <div className="md-name">{item.title}</div>
        </S.Md>
      ))}
    </div>
  ) : (
    <p>검색 결과가 없습니다...</p>
  )}
</div>
<div className='general-community'>
  <p className='title'>일반 커뮤니티</p>
  {commuData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).length > 0 ? (
    <div className="md-list">
      {commuData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).map(item => (
        <S.Md key={item.id}>
          <Link to={`/community/communityInfo/${item._id}`}>
            <img src={item.imageUrl} alt={item.title} />
          </Link>
          <div className="md-category">{item.category || '일반'}</div>
          <div className="md-name">{item.title}</div>
        </S.Md>
      ))}
    </div>
  ) : (
    <p>검색 결과가 없습니다...</p>
  )}
</div>

      </div>
    </S.main>
  );
};

export default Search;
