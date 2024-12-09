import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/global";
import theme from "./global/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import LessonDetails from "./pages/showu/lesson/LessonMain/lessonDetails/LessonDetails";
import CompletedContainer from "./pages/shop/md/MdCompleted/CompletedContainer";
import CartContainer from "./pages/shop/md/MdCart/CartContainer";
import ReturnContainer from "./pages/shop/md/MdReturn/ReturnContainer";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ReturnContainer/>
        {/* <RouterProvider router={router} /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
