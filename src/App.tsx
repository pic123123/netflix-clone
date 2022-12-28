import React from "react";
import Router from "Router";
import GlobalStyle from "style/GlobalStyle";
import { theme } from "style/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
      <Router />
    </>
  );
}

export default App;
