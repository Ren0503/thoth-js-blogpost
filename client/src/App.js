import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthRoutes from 'routes/AuthRoutes';
import MainRoutes from 'routes/MainRoutes';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <AuthRoutes />
          <MainRoutes />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
