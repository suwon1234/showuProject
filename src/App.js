import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/global";
import theme from "./global/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import TeamMaking from "./pages/showu/team/teamMaking/TeamMaking";






function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <TeamMaking />
      </ThemeProvider>
    </>
  );
}

export default App;
