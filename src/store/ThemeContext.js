import React, { useState } from 'react';

const Theme = 'light' | 'dark';

export const ThemeContext = React.createContext({
  theme: Theme,
  toggleTheme: () => {},
});
// theme provider wrapped the app tag in index to through the value
export const ThemeProvider = (props) => {
  const [theme, settheme] = useState('light');

  // toogler
  const toggleTheme = () => {
    settheme(theme === 'light' ? 'dark' : 'light');
  };
  // switcher between font and background
  const backgroundColor = theme === 'light' ? '#FFF' : '#333';
  const color = theme === 'light' ? '#333' : '#FFF';

  // DOM
  // document.body.style.color = color;
  // document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  // wrapped index.js
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
