import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import Main from '../pages/main/Main';
import AdminContainer from '../pages/admin/AdminContainer';
import IndexContainer from '../pages/index/IndexContainer';
import LoginContainer from '../pages/login/LoginContainer';
import MypageContainer from '../pages/mypage/MypageContainer';
import ReservationContainer from '../pages/reservation/ReservationContainer';
import ShopContainer from '../pages/shop/md/ShopContainer';
import ShowuContainer from '../pages/showu/ShowuContainer';
import VodContainer from '../pages/vod/VOD/VodContainer';
import JoinContainer from '../pages/join/JoinContainer';
import MyActiveContainer from '../pages/mypage/myActive/MyActiveContainer';
import MyClassContainer from '../pages/mypage/myClass/MyClassContainer';
import MyGradeContainer from '../pages/mypage/myGrade/MyGradeContainer';
import MyInfoContainer from '../pages/mypage/myInfo/MyInfoContainer';
import MyPayContainer from '../pages/mypage/myPay/MyPayContainer';
import MyResContainer from '../pages/mypage/myRes/MyResContainer';
import MyTeamContainer from '../pages/mypage/myTeam/MyTeamContainer';
import FindIdContainer from '../pages/findId/FindIdContainer';
import MyVodContainer from '../pages/mypage/myVod/MyVodContainer';
import DetailContainer from '../pages/shop/md/DetailContainer';
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
import MyActiveComContainer from '../pages/mypage/myActive/post/CommentContainer';

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
        path : '/community/communityInfo',
        element : <CommunityInfoContainer /> // 커뮤니티 세부 페이지 
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
        path : '/community/newsMain/news',
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
        path : '/mypage',
        element : <MypageContainer />
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
        path : '/my-active/like/space',
        element : <LikeSpaceContainer /> //찜 - 공간 페이지
      },
      {
        path : '/my-active/like/prop',
        element : <LikePropContainer /> //찜 - 소품 페이지
      },
      {
        path : '/my-active/like/tickets',
        element : <LikeTicketContainer /> //찜 - 티켓 페이지
      },
      {
        path : '/my-active/like/md',
        element : <LikeMdContainer /> //찜 - md 페이지
      },
      {
        path : '/my-active/like/auction',
        element : <LikeAuctionContainer /> //찜 - 경매 페이지
      },
      {
        path : '/my-active/reviews',
        element : <MyActiveReviewContainer /> //후기관리 페이지
      },
      {
        path : '/my-active/posts',
        element : <MyActivePostContainer /> //작성한 글 관리 페이지
      },
      {
        path : '/my-active/comments',
        element : <MyActiveComContainer /> //작성한 댓글 관리 페이지
      },
      {
        path : '/my-active/like/auction',
        element : <LikeAuctionContainer /> //찜 - 경매 페이지
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