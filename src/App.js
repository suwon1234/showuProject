import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/global";
import theme from "./global/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import LessonDetails from "./pages/showu/lesson/LessonMain/lessonDetails/LessonDetails";

import ManagementContainer from "./pages/shop/auction/AuctionManagement/ManagementContainer";




function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ManagementContainer />
        {/* <RouterProvider router={router} /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
