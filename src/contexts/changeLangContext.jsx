import { createContext, useContext, useState } from "react";

const changeLangContext = createContext();

export function ChangeLangProvider({children}) {
    const [lang, setLang] = useState(false);

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
