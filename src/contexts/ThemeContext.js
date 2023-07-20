// import React, { createContext, useState, useContext } from "react";
// import { noop } from "utils";

import { createContext, useContext, useEffect, useState } from "react";

// const AppContext = createContext({
//   theme: null,
//   changeTheme: noop
// });

// export const useTheme = () => useContext(AppContext);

// export const ThemeProvider = ( {children}) => {
//   const [theme, setTheme] = useState('light');

//   const changeTheme = () => {
//     theme === 'dark' ? setTheme('light') : setTheme('dark');
//   }

//   const contextValue = {
//     theme,
//     changeTheme
//   };
//   return (
//     <AppContext.Provider value={contextValue}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default ThemeProvider;

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        if (darkTheme) {
            document.body.className = "theme-dark";
        } else {
            document.body.className = "theme-light";
        }
    }, [darkTheme]);

    return (
        <>
            <ThemeContext.Provider
                value={{
                    darkTheme,
                    setDark: () => setDarkTheme(true),
                    setLight: () => setDarkTheme(false),
                }}
            >
                {children}
            </ThemeContext.Provider>
        </>
    );
};

export const useTheme = () => useContext(ThemeContext);
