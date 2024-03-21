import { createContext, useContext, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/themes';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const theme = localStorage.getItem('theme') || 'light';

  const [isDarkTheme, setIsDarkTheme] = useState(() => {

    if (theme === 'light' || theme === null) {
      return 'light';
    } else {
      return 'dark';
    }
  });

  // useEffect(() => {
  //   const currentHour = new Date().getHours();

  //   // Se estiver entre 18h e 6h, definimos o tema como 'dark', caso contrário, como 'light'
  //   const newTheme = currentHour >= 18 || currentHour < 6 ? 'dark' : 'light';

  //   // Atualiza o tema se for diferente do tema atual armazenado no localStorage
  //   if (newTheme !== theme) {
  //     setTheme(newTheme);
  //     localStorage.setItem('theme', newTheme);
  //   }
  // }, [theme]); // A dependência theme garante que este useEffect seja chamado sempre que o tema for alterado


  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme}}>
      <ThemeProvider theme={isDarkTheme === 'dark' ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}


export const useThemeContext = () => {

  const { isDarkTheme, setIsDarkTheme, theme } = useContext(ThemeContext);

  function changeTheme() {
    if (isDarkTheme === 'dark') {
      setIsDarkTheme('light');
      localStorage.setItem('theme', 'light');
      // window.location.reload(false);
    }
    if (isDarkTheme === 'light') {
      setIsDarkTheme('dark');
      localStorage.setItem('theme', 'dark');
      // window.location.reload(false);
    }
  }

  return {
    changeTheme,
    theme
  }
}

