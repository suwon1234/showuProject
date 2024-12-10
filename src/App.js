import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/global";
import theme from "./global/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import LessonDetails from "./pages/showu/lesson/LessonMain/lessonDetails/LessonDetails";
import RefundContainer from "./pages/shop/md/MdRefund/RefundContainer";






function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RefundContainer />
        {/* <RouterProvider router={router} /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
