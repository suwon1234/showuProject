import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/global";
import theme from "./global/theme";
import { Route, Router, RouterProvider, Routes } from "react-router-dom";
import router from "./routes/router";
import DetailContainer from "./pages/shop/md/MdDetail/DetailContainer";
import ShopContainer from "./pages/shop/ShopContainer";





function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        {/* <ShopContainer/> */}
      </ThemeProvider>
    </>
  );
}

export default App;
