import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/global";
import theme from "./global/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import TeamMain from "./pages/showu/team/teamMain/TeamMain";








function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <TeamMain />
      </ThemeProvider>
    </>
  );
}

export default App;
