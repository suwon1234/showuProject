import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import S from './style';
import Footer from './footer/Footer';
import { setUser, setUserStatus } from '../../modules/user';
import HoverMenu from './_component/HoverMenu';

const Layout = () => {
  const { isLogin, currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [jwtToken, setJwtToken] = useState("");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("jwtToken") //토큰 삭제
    dispatch(setUser({})) //리덕스 초기화
    dispatch(setUserStatus(false))
    console.log("로그아웃")
  }

  const [hover, setHover] = useState(false);  // 커뮤니티 호버 상태
    const handleMouseEnter = () => {
      setHover(true);
  } 
    const handleMouseLeave = () => {
      setHover(false);
  };

    const [hover2, setHover2] = useState(false);  // Shop 호버 상태
    const handleMouseEnter2 = () => {
      setHover2(true);
  } 
    const handleMouseLeave2 = () => {
      setHover2(false);
  };

  const location = useLocation();

  //index 페이지에서 헤더 숨김
  const hideHeaderPage = ['/']
  
  // console.log("jwtToken", jwtToken)
  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("jwtToken") || searchParams.get("jwtToken");
    
    if (tokenFromStorage) {
      // 토큰이 있다면 로컬 스토리지에 저장
      localStorage.setItem("jwtToken", tokenFromStorage);
      navigate("/main", { replace: true });
    }

    const jwtToken = localStorage.getItem("jwtToken");

    if (jwtToken) {
      const isAuthenticate = async () => {
        const response = await fetch(`http://localhost:8000/auth/jwt`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
          },
        });
        const getAuthenticate = await response.json();
        return getAuthenticate;
      };

      isAuthenticate()
        .then((res) => {
          console.log(res);
          // 유저 정보 파싱 후 리덕스에 저장
          dispatch(setUser(res.user));
          dispatch(setUserStatus(true));
        })
        .catch(console.error);
    }

  }, [searchParams, dispatch, navigate]);

    

  return (
    <div>
      <S.Background className='Background'>
        { !hideHeaderPage.includes(location.pathname) && <header className="header">
        <S.topbar className="topbar"></S.topbar>
        <S.navbar className="navbar">
      <S.logo className="logo">
        <Link to="/main" className="logolink">
          Show <span className="highlight">U</span>
        </Link>
      </S.logo>
      <S.searchinput
        type="text"
        placeholder="너의 재능을 보여줘"
        className="searchinput"
      />
      <S.authlinks className="authlinks">
        <Link to="/up-grade" className="highlight">
          등급업 신청
        </Link>
        <span className="divider">|</span>
        { isLogin ? (
          <>
            <span>{currentUser.email}</span>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <>
          <Link to="/login" className="highlight">
            로그인
          </Link>
          <Link to="/join" className="showUlink">
            회원가입
          </Link>
        </>
        )
        }
      </S.authlinks>
        </S.navbar>
        <S.menubar className="menubar">

        {/* showU  */}
        <HoverMenu 
        menuLabel="showU"
        to="/showu"
        dropdownLinks={[
          {to: "/showu", label: "팀매칭"},
          {to: "/showu", label: "레슨"}
        ]}
      />
      
      {/* Shop */}
      <HoverMenu 
        menuLabel="Shop"
        to="/shop"
        dropdownLinks={[
          { to: "/shop/md", label: "MD" },
          { to: "/shop/auction", label: "경매" },
        ]}
      />

      <NavLink to={"/vod"} className="menuitem">
        VOD
      </NavLink>

      {/* 예약 */}
      <HoverMenu 
        menuLabel="예약"
        to="/reservation"
        dropdownLinks={[
          {to: "/reservation", label: "공간 대여"},
          {to: "/reservation", label: "티켓 예매"}
        ]}
      />

      <span className="menudivider">|</span>
      
      <NavLink to={"/hot"} className="menuitemhot">
        HOT
      </NavLink>
      
      {/* 커뮤니티 */}
      <HoverMenu 
        menuLabel="커뮤니티"
        to="/community"
        dropdownLinks={[
          { to: "/community/newsMain", label: "News" },
          { to: "/community/audition", label: "Audition" },
        ]}
      />
      <NavLink to={"/mypage"} className="menuitem">
        마이페이지
      </NavLink>
        </S.menubar>
      </header>}
      <S.main className='main'>
        <Outlet/>
      </S.main>
      </S.Background>
      
      <Footer />
    </div>

    
  );
};

export default Layout;