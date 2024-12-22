import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/global";
import theme from "./global/theme";
import { Route, Router, RouterProvider, Routes } from "react-router-dom";
import router from "./routes/router";
import DetailContainer from "./pages/shop/md/MdDetail/DetailContainer";
import ShopContainer from "./pages/shop/ShopContainer";
import ManagementContainer from "./pages/shop/auction/AuctionManagement/ManagementContainer";
import StateContainer from "./pages/shop/auction/AuctionState/StateContainer";
import MainContainer from "./pages/shop/md/MdMain/MainContainer";





function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        {/* <ManagementContainer/> */}
        {/* <StateContainer /> */}
        {/* <MainContainer /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
