import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import Main from '../pages/main/Main';
import AdminContainer from '../pages/admin/AdminContainer';
import IndexContainer from '../pages/index/IndexContainer';
import LoginContainer from '../pages/login/LoginContainer';
import ReservationContainer from '../pages/reservation/ReservationContainer';
import ShowuContainer from '../pages/showu/ShowuContainer';
import VodContainer from '../pages/vod/VOD/VodContainer';
import JoinContainer from '../pages/join/JoinContainer';
import MyActiveContainer from '../pages/mypage/myActive/MyActiveContainer';
import MyGradeContainer from '../pages/mypage/myGrade/MyGradeContainer';
import MyInfoContainer from '../pages/mypage/myInfo/MyInfoContainer';
import MyPayContainer from '../pages/mypage/myPay/MyPayContainer';
import MyResContainer from '../pages/mypage/myRes/MyResContainer';
import MyTeamContainer from '../pages/mypage/myTeam/MyTeamContainer';
import FindIdContainer from '../pages/findId/FindIdContainer';
import MyVodContainer from '../pages/mypage/myVod/MyVodContainer';
import DetailContainer from '../pages/shop/md/MdDetail/DetailContainer';
import NewsMainContainer from '../pages/community/news/NewsMainContainer';
import FindPasswordContainer from '../pages/findPassword/FindPasswordContainer';
import CommunityInfoContainer from '../pages/community/main_info/CommunityInfoContainer';
import EditCommentsMainContainer from '../pages/community/editComment/EditCommentsMainContainer';
import EditCommentsContainer from '../pages/community/editComment/EditCommentsContainer';
import NotifyContainer from '../pages/community/comment/NotifyContainer';
import HistoryContainer from '../pages/community/writing/HistoryContainer';
import HistoryCheckContainer from '../pages/community/writing/HistoryCheckContainer';
import HistoryEditContainer from '../pages/community/writingEdit/HistoryEditContainer';
import HistoryEditActiveContainer from '../pages/community/writingEdit/HistoryEditActiveContainer';
import NewsContainer from '../pages/community/newsInfo/NewsContainer';
import ReportContainer from '../pages/community/report/ReportContainer';
import ReportsContainer from '../pages/community/reports/ReportsContainer';
import PopularityContainer from '../pages/community/newspopularity/PopularityContainer';
import AuditionContainer from '../pages/community/audition/AuditionContainer';
import AuditionInfoContainer from '../pages/community/audition/AuditionInfoContainer';
import WriteContainer from '../pages/community/writing/WriteContainer';
import LikeLessonContainer from '../pages/mypage/myActive/likeLesson/LikeLessonContainer';
import LikeAuctionContainer from '../pages/mypage/myActive/likeAction/LikeAuctionContainer';
import LikeMdContainer from '../pages/mypage/myActive/likeMd/LikeMdContainer';
import LikePropContainer from '../pages/mypage/myActive/likeProp/LikePropContainer';
import LikeTicketContainer from '../pages/mypage/myActive/likeTicket/LikeTicketContainer';
import LikeSpaceContainer from '../pages/mypage/myActive/likeSpace/LikeSpaceContainer';
import MyActiveReviewContainer from '../pages/mypage/myActive/MyActiveReviewContainer';
import MyActivePostContainer from '../pages/mypage/myActive/MyActivePostContainer';
import MyActiveComContainer from '../pages/mypage/myActive/MyActiveComContainer';
import MyActiveReportContainer from '../pages/mypage/myActive/MyActiveReportContainer';
import MyResPropsContainer from '../pages/mypage/myRes/MyResPropsContainer';
import MyResReturnContainer from '../pages/mypage/myRes/MyResReturnContainer';
import MyResTicketContainer from '../pages/mypage/myRes/MyResTicketContainer';
import MyResCanceleContainer from '../pages/mypage/myRes/MyResCanceleContainer';
import MyResDetailContainer from '../pages/mypage/myRes/MyResDetailContainer';
import MyClassWatchContainer from '../pages/mypage/myClass/MyClassWatchContainer';
import MyClassCreateContainer from '../pages/mypage/myClass/MyClassCreateContainer';
import MyClassAdviceContainer from '../pages/mypage/myClass/MyClassAdviceContainer';
import MyVodSubscriptContainer from '../pages/mypage/myVod/MyVodSubscriptContainer';
import MyVodWatchContainer from '../pages/mypage/myVod/MyVodWatchContainer';
import CompleteIdContainer from '../pages/completeId/CompleteIdContainer';
import PlayContainer from '../pages/vod/video/mainpage/PlayContainer';
import CommunityContainer from '../pages/community/main/CommunityContainer';
import ReportsInfoContainer from '../pages/community/reports/ReportsInfoContainer';
import MainContainer from '../pages/shop/md/MdMain/MainContainer';
import CartContainer from '../pages/shop/md/MdCart/CartContainer';
import PaymentContainer from '../pages/shop/md/MdPayment/PaymentContainer';
import InquiryContainer from '../pages/shop/md/MdInquiry/InquiryContainer';
import InquiryListContainer from '../pages/shop/md/MdInquiryList/InquiryListContainer';
import LessonDetails from '../pages/showu/lesson/LessonMain/lessonDetails/LessonDetails';
import NonLoginContainer from '../pages/vod/video/nonloginpage/NonLoginContainer';
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
        element : <CommunityContainer />  // 커뮤니티 메인 페이지
      },
      {
        path : '/community/communityInfo',
        element : <CommunityInfoContainer /> // 커뮤니티 상세 페이지 
      },
      {
        path : '/community/communityInfo/editCommentsMain',
        element : <EditCommentsMainContainer /> // 커뮤니티 댓글 수정 메인 페이지
      },
      {
        path : '/community/communityInfo/editComments',
        element : <EditCommentsContainer /> // 커뮤니티 댓글 수정 세부 페이지
      },
      {
        path : '/community/communityInfo/Notify',
        element : <NotifyContainer /> // 커뮤니티 댓글 신고 페이지
      },
      {
        path : '/community/write',
        element : <WriteContainer /> // 커뮤니티 글쓰기 페이지
      },
      {
        path : '/community/writing/history',
        element : <HistoryContainer /> // 커뮤니티 글쓰기 내역 페이지
      },
      {
        path : '/community/write/history/check',
        element : <HistoryCheckContainer /> // 커뮤니티 글쓰기 내역 확인 페이지
      },
      {
        path : '/community/write/history/edit',
        element : <HistoryEditContainer /> // 커뮤니티 글쓰기 내역 수정/삭제 메인 페이지
      },
      {
        path : '/community/write/history/edit/active',
        element : <HistoryEditActiveContainer /> // 커뮤니티 글쓰기 내역 수정/삭제 페이지
      },
      {
        path : '/community/newsMain',
        element : <NewsMainContainer />  // 뉴스 메인 페이지
      },
      {
        path : '/community/newsMain/news:id',
        element : <NewsContainer />  // 뉴스 세부 페이지
      },
      {
        path : '/community/report',
        element : <ReportContainer />  // 제보하기 페이지
      },
      {
        path : '/community/reports',
        element : <ReportsContainer />  // 제보내역 페이지
      },
      {
        path: '/community/reports/:id',
        element: <ReportsInfoContainer />, // 제보내역 상세 페이지
      },
      {
        path : '/community/newsMain/popularity',
        element : <PopularityContainer />  // 뉴스 인기순 세부 페이지
      },
      {
        path : '/community/audition',
        element : <AuditionContainer />  // 오디션 메인 페이지
      },
      {
        path : '/community/audition/auditionInfo',
        element : <AuditionInfoContainer />  // 오디션 세부 페이지
      },    
      {
        path : '/my-active/like/my-team',
        element : <MyActiveContainer /> //찜 - 팀 매칭 페이지
      },
      {
        path : '/my-active/like/my-class',
        element : <LikeLessonContainer /> //찜 - 레슨 페이지
      },
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
        path : '/shop',
        element : <MainContainer /> // MD 메인
      },
      {
        path : '/shop/mddetail',
        element : <DetailContainer /> // MD 상세
      },
      {
        path : '/shop/mddetail/cart/',
        element : <CartContainer /> // MD 장바구니
      },
      {
        path : '/shop/mddetail/payment',
        element : <PaymentContainer /> // MD 주문/결제
      },
      {
        path : '/shop/mddetail/inquiry',
        element : <InquiryContainer /> // MD 문의
      },
      {
        path : '/shop/mddetail/inquiry/list',
        element : <InquiryListContainer /> // MD 문의목록
      },
      {
        path : '/showu',
        element : <ShowuContainer />
      },
      {
        path : '/showu/details',
        element : <LessonDetails />
      },
      {
        path : '/vod',
        element : <VodContainer />
      },
      {
        path : '/vod/play',
        element : <NonLoginContainer/>

      },
      {
        path : '/vod/play/start',
        element : <PlayContainer/>
      },

    ]
  }
])

export default router;