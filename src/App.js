import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/global";
import theme from "./global/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import LessonDetails from "./pages/showu/lesson/LessonMain/lessonDetails/LessonDetails";
import RefundInfoContainer from "./pages/shop/md/MdRefundInfo/RefundInfoContainer";
import PayInfoContainer from "./pages/shop/md/MdPayInfo/PayInfoContainer";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RefundInfoContainer />
        {/* <RouterProvider router={router} /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
