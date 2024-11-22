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