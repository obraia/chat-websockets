import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import userPersistedState from './utils/userPersistedState';
import GlobalStyle from './styles/global'

import Header from './components/Header';

// --> Projects subpages
import Chat from './pages/Chat';

function App() {

  const [theme, setTheme] = userPersistedState('theme', light);
  const [sideBarToggle, setSideBarToggle] = useState(false);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const toggleSideBar = () => {
    setSideBarToggle(!sideBarToggle);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} toggleSideBar={toggleSideBar} />
      <Chat />
    </ThemeProvider>
  );
}

export default App;
