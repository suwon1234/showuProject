import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import S from './style';
import Footer from './footer/Footer';
import { setUser, setUserStatus } from '../../modules/user';
import HoverMenu from './_component/HoverMenu';

const Layout = () => {

  const { isLogin, currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("jwtToken") || searchParams.get("jwtToken");

  const handleLogout = () => {
    localStorage.removeItem("jwtToken") //토큰 삭제
    dispatch(setUser({})) //리덕스 초기화
    dispatch(setUserStatus(false))
    console.log("로그아웃")
  }

  const location = useLocation();

  //index 페이지에서 헤더 숨김
  const hideHeaderPage = ['/']
  
  // console.log("jwtToken", jwtToken)
  useEffect(() => {

    if(searchParams.get("jwtToken")){
      localStorage.setItem("jwtToken", jwtToken)
      navigate("/main")
    }

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

  }, [searchParams, dispatch, navigate, jwtToken]);

  return (
    <div>
      <S.Background className="Background">
        {!hideHeaderPage.includes(location.pathname) && (
          <header className="header">
            <S.topbar className="topbar"></S.topbar>

            <S.navbar className="navbar">
              <S.LogoBox className="logoBox">
                <S.logo className="logo">
                  <Link to="/main" className="logolink">
                    Show <span className="highlight">U</span>
                  </Link>
                </S.logo>

                <S.SearchBox className="searchBox">
                  <input
                    type="text"
                    placeholder="너의 재능을 보여줘"
                    className="searchinput"
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="search"
                  />
                </S.SearchBox>
              </S.LogoBox>

              <S.authlinks className="authlinks">
                <Link to="/up-grade" className="highlight">
                  등급업 신청
                </Link>
                <span className="divider">|</span>

                {isLogin ? (
                  <S.AfterLogin className="afterLogin">
                    <span>{currentUser.name}님</span>
                    <button onClick={handleLogout}>로그아웃</button>
                  </S.AfterLogin>
                ) : (
                  <>
                    <Link to="/login" className="highlight">
                      로그인
                    </Link>
                    <Link to="/join" className="showUlink">
                      회원가입
                    </Link>
                  </>
                )}
              </S.authlinks>
            </S.navbar>

            <S.menubar className="menubar">
              {/* showU  */}
              <HoverMenu
                menuLabel="showU"
                to="/showu"
                dropdownLinks={[
                  { to: "/showu/lesson", label: "레슨" },
                  { to: "/showu/team", label: "팀매칭" },
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
                  { to: "/reservation/space/space-rental", label: "공간 대여" },
                  { to: "/reservation", label: "티켓 예매" },
                ]}
              />

              <span className="menudivider">|</span>

              <NavLink to={"/hot"} className="menuitemhot">
                <S.HotBox className="HotBox">
                  <FontAwesomeIcon icon={faFire} className="fire" />
                  <p>HOT</p>
                </S.HotBox>
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
          </header>
        )}

        {/* 메인 */}
        <S.main className="main">
          <Outlet />
        </S.main>
      </S.Background>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default Layout;