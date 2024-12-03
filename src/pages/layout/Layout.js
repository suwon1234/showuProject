import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import S from "./style";

const Layout = () => {

    const [hover, setHover] = useState(false);  // 커뮤니티 호버 상태
    const handleMouseEnter = () => {
      setHover(true);
  } 
    const handleMouseLeave = () => {
      setHover(false);
  };

  return (
    <S.Background className='Background'>
      <header className="header">
        <S.topbar className="topbar"></S.topbar>
        <S.navbar className="navbar">
          <S.logo className="logo">
            <Link to="/showU" className="logolink">
              Show <span className="highlight">U</span>
            </Link>
          </S.logo>
          <S.searchinput
            type="text"
            placeholder="너의 재능을 보여줘"
            className="searchinput"
          />
          <S.authlinks className="authlinks">
            <Link to="/upgrade" className="highlight">
              등급업 신청
            </Link>
            <span className="divider">|</span>
            <Link to="/login" className="highlight">
              로그인
            </Link>
            <Link to="/signup" className="showUlink">
              회원가입
            </Link>
          </S.authlinks>
        </S.navbar>
        <S.menubar className="menubar">
          <NavLink to={"/showU"} className="menuitem">
            showU
          </NavLink>
          <NavLink to={"/shop"} className="menuitem">
            Shop
          </NavLink>
          <NavLink to={"/vod"} className="menuitem">
            VOD
          </NavLink>
          <NavLink to={"/reservation"} className="menuitem">
            예약
          </NavLink>
          <span className="menudivider">|</span>
          <NavLink to={"/hot"} className="menuitemhot">
            HOT
          </NavLink>
          <NavLink to={"/community"} className="menuitem">
            커뮤니티
          </NavLink>
          <NavLink to={"/mypage/myInfo"} className="menuitem">
            마이페이지
          </NavLink>
        </S.menubar>
      </header>
      <S.main className="main">
        <Outlet />
      </S.main>
    </S.Background>
    
  );
};

export default Layout;