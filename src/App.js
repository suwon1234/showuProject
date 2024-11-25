import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/global";
import theme from "./global/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import ShopContainer from "./pages/shop/ShopContainer";
import MdMain from "./pages/shop/md/MdMain";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MdMain />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
