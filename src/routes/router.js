import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import Main from '../pages/main/Main';
import AdminContainer from '../pages/admin/AdminContainer';
import CommunityContainer from '../pages/community/CommunityContainer';
import IndexContainer from '../pages/index/IndexContainer';
import LoginContainer from '../pages/login/LoginContainer';
import MypageContainer from '../pages/mypage/MypageContainer';
import ReservationContainer from '../pages/reservation/ReservationContainer';
import ShopContainer from '../pages/shop/md/ShopContainer';
import ShowuContainer from '../pages/showu/ShowuContainer';
import VodContainer from '../pages/vod/VOD/VodContainer';
import Reports from '../pages/community/news/Reports';
import Report from '../pages/community/news/Report';
import News1 from '../pages/community/news/News1';
import JoinContainer from '../pages/join/JoinContainer';
import MyActiveContainer from '../pages/mypage/myActive/MyActiveContainer';
import MyClassContainer from '../pages/mypage/myClass/MyClassContainer';
import MyGradeContainer from '../pages/mypage/myGrade/MyGradeContainer';
import MyInfoContainer from '../pages/mypage/myInfo/MyInfoContainer';
import MyPayContainer from '../pages/mypage/myPay/MyPayContainer';
import MyResContainer from '../pages/mypage/myRes/MyResContainer';
import MyTeamContainer from '../pages/mypage/myTeam/MyTeamContainer';
import FindIdContainer from '../pages/findId/FindIdContainer';
import Audition from '../pages/community/audition/Audition';
import MyVodContainer from '../pages/mypage/myVod/MyVodContainer';
import DetailContainer from '../pages/shop/md/DetailContainer';
import NewsMainContainer from '../pages/community/news/NewsMainContainer';
import FindPasswordContainer from '../pages/findPassword/FindPasswordContainer';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        index : true,
        element : <IndexContainer />
      },
      {
        path : '/main',
        element : <Main />
      },
      {
        path : '/admin',
        element : <AdminContainer />
      },
      {
        path : '/community',
        element : <CommunityContainer />
      },
      {
        path : '/community/report',
        element : <Report />  // 제보하기 페이지
      },
      {
        path : '/community/reports',
        element : <Reports />  // 제보내역 페이지
      },
      {
        path : '/community/newsMain',
        element : <NewsMainContainer />  // 뉴스 메인 페이지
      },
      {
        path : '/community/news/news1',
        element : <News1 />  // 뉴스 세부 페이지
      },
      {
        path : '/community/audition',
        element : <Audition />  // 오디션 페이지
      },     
      {
        path : '/mypage',
        element : <MypageContainer />
      },
      {
        path : '/mypage/myActive',
        element : <MyActiveContainer /> //활동 정보
      },
      {
        path : '/mypage/myClass',
        element : <MyClassContainer /> //레슨 정보
      },
      {
        path : '/mypage/myGrade',
        element : <MyGradeContainer /> //등급 정보
      },
      {
        path : '/mypage/myInfo',
        element : <MyInfoContainer /> //회원 정보
      },
      {
        path : '/mypage/myPay',
        element : <MyPayContainer /> //결제 정보
      },
      {
        path : '/mypage/myRes',
        element : <MyResContainer /> //예약 정보
      },
      {
        path : '/mypage/myTeam',
        element : <MyTeamContainer /> //팀매칭 정보
      },
      {
        path : '/mypage/myVod',
        element : <MyVodContainer /> //VOD 정보
      },
      {
        path : '/reservation',
        element : <ReservationContainer />
      },
      {
        path : '/shop',
        element : <ShopContainer />
      },
      {
        path : '/shop/mdDetail',
        element : <DetailContainer />
      },
      {
        path : '/showu',
        element : <ShowuContainer />
      },
      {
        path : '/vod',
        element : <VodContainer />
      },

    ]
  },
  {
    path : '/login',
    element : <LoginContainer />,
  },
  {
    path : '/join',
    element : <JoinContainer />
  },
  {
    path : '/findId',
    element : <FindIdContainer />
  },
  {
    path : '/findPassword',
    element : <FindPasswordContainer />
  }
])

export default router;
