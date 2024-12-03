import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import Main from '../pages/main/Main';
import AdminContainer from '../pages/admin/AdminContainer';
import IndexContainer from '../pages/index/IndexContainer';
import LoginContainer from '../pages/login/LoginContainer';
import ReservationContainer from '../pages/reservation/ReservationContainer';
import ShopContainer from '../pages/shop/md/ShopContainer';
import ShowuContainer from '../pages/showu/ShowuContainer';
import VodContainer from '../pages/vod/VodContainer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/admin",
        element: <AdminContainer />,
      },
      {
        index : true,
        element : <Main />
      },
      {
        path: "/index",
        element: <IndexContainer />,
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
        path: "/reservation/ticket-open",
        element: <TicketOpen />,
      },
      {
        path: "/shop",
        element: <ShopContainer />,
      },
      {
        path : '/shop/mdDetail',
        element : <DetailContainer />
      },
      {
        path: "/showu",
        element: <ShowuContainer />,
      },
      {
        path: "/vod",
        element: <VodContainer />,
      },

    ]
  }
])

export default router;