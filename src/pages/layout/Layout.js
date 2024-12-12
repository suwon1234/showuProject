import React, { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import S from './style';
import Footer from './footer/Footer';

const Layout = () => {

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
        <Link to="/login" className="highlight">
          로그인
        </Link>
        <Link to="/join" className="showUlink">
          회원가입
        </Link>
      </S.authlinks>
        </S.navbar>
        <S.menubar className="menubar">
      <NavLink to={"/showU"} className="menuitem">
        showU
      </NavLink>
      
      {/* Shop */}
      <div
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
        >
      <NavLink to={"/shop"} className="menuitem">
        Shop
      </NavLink>
      {hover2 && (
        <S.dropdown>
          <S.dropdownItem>
            <Link to="/shop/md">MD</Link>
          </S.dropdownItem>
          <S.dropdownItem>
              <Link to="/shop/auction">경매</Link>
          </S.dropdownItem>
        </S.dropdown>
        )}
      </div>
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
      
      {/* 커뮤니티 */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
      <NavLink to={"/community"} className="menuitem">
        커뮤니티
      </NavLink>
      {hover && (
        <S.dropdown>
          <S.dropdownItem>
            <Link to="/community/newsMain">News</Link>
          </S.dropdownItem>
          <S.dropdownItem>
              <Link to="/community/audition">Audition</Link>
          </S.dropdownItem>
        </S.dropdown>
        )}
      </div>
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