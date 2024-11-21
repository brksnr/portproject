import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const changeLangContext = createContext();

export function ChangeLangProvider({children}) {
    const [lang, setLang] = useLocalStorage("Language", false);

    const toggleLang = () => {
        setLang(!lang);
    console.log("tıklandı");
    }
    return (
        <changeLangContext.Provider value={{lang, toggleLang}}>
            {children}
        </changeLangContext.Provider>
    )
}

export const useChangeLang = () => {
    return useContext(changeLangContext);
};
