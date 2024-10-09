import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
    const [darkMode, setDarkMode] = useLocalStorage("Dark Mode" , false);

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
