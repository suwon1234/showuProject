import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/global";
import theme from "./global/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import MdCartContainer from "./pages/shop/md/MdCart/MdCartContainer";
import MdInquiryContainer from "./pages/shop/md/MdInquiry/MdInquiryContainer";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MdInquiryContainer />
        {/* <RouterProvider router={router} /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
