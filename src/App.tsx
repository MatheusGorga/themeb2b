import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import b2b from './styles/themes/b2b';
import Main from './pages/main';
import Table from './pages/table';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={b2b}>
        <Header />
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/table' element={<Table />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
