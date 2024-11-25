import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import Main from '../pages/main/Main';
import AdminContainer from '../pages/admin/AdminContainer';
import CommunityContainer from '../pages/community/CommunityContainer';
import IndexContainer from '../pages/index/IndexContainer';
import LoginContainer from '../pages/login/LoginContainer';
import MypageContainer from '../pages/mypage/MypageContainer';
import ReservationContainer from '../pages/reservation/ReservationContainer';
import ShopContainer from '../pages/shop/ShopContainer';
import ShowuContainer from '../pages/showu/ShowuContainer';
import VodContainer from '../pages/vod/VodContainer';
import Reports from '../pages/community/news/Reports';
import Report from '../pages/community/news/Report';
import News1 from '../pages/community/news/News1';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        index : true,
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
        path : '/community/news/news1',
        element : <News1 />  // 뉴스 세부 페이지
      },
      {
        path : '/index',
        element : <IndexContainer />
      },
      {
        path : '/login',
        element : <LoginContainer />
      },
      {
        path : '/mypage',
        element : <MypageContainer />
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
        path : '/showu',
        element : <ShowuContainer />
      },
      {
        path : '/vod',
        element : <VodContainer />
      },

    ]
  }
])

export default router;