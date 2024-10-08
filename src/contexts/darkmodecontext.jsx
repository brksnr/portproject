import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("tıklandı");
    }
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};
