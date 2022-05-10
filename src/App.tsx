import React from 'react';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import b2b from './styles/themes/b2b';
import Main from './pages/main';

function App() {
  return (
    <ThemeProvider theme={b2b}>
      <>
        <Header />
        <Main />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

export default App;
