import { useChangeLang } from "../contexts/changeLangContext";
import { useDarkMode } from "../contexts/darkmodecontext"
import { languagesData } from "../s12context";

export function Header() {
    const {darkMode, toggleDarkMode} = useDarkMode();
    const { lang, toggleLang } = useChangeLang();
    const currentLanguage = lang ? "tr" : "en";
    const text = languagesData[currentLanguage].header;
    const links = "font-inter text-lg font-medium text-[#6B7280]";
    
    return (
    <section className="pt-4 mr-52 ml-56">
        <div className="flex justify-end items-center max-w-full gap-4">
            <div className={`flex items-center gap-2`}>
            <label className="switch">
                <input type="checkbox" onClick={toggleDarkMode}/>
                <span className="slider round"></span>
                </label>
                {!darkMode ? <p className={`font-[inter] text-sm font-bold leading-4 text-[#777777]`}>{text.mode}</p>
                 : <p className={`font-[inter] text-sm font-bold leading-4 ${darkMode ? "text-[#D9D9D9]" : ""} text-[#777777]`}>{text.mode2}</p>}
            </div>
            <p>|</p>
            <p onClick={toggleLang} className={`font-[inter] text-sm font-bold leading-4 text-[#777777]`}><a onClick={toggleLang}>{lang ? "SWITCH TO ENGLISH" : "TÜRKÇE"}</a>{text.ek}</p>
        </div>
        <div className="flex justify-between max-w-full align-center mt-6">
            
            <div className="relative inline-block">
             <img src={` ${darkMode ? "./src/images/ellipse2.png" : "./src/images/ellipse.png"} `}/>
             <p className={`absolute top-4 left-1/3 text-2xl rotate-12
             font-bold ${darkMode ? "text-[#8F88FF]" : ""} text-[#7B61FF]`}>B</p> 
            </div>
            <div className="flex items-center gap-20">
            
           
                <p className={links}>{text.skills}</p>   
                <p className={links}>{text.projects}</p>   
                <button className={`p-2 font-inter text-lg font-medium leading-7 text-[#3730A3] ${darkMode ? "bg-[white]" : ""}
                border border-[#3730A3] rounded-md w-32`}>{text.hireMe}</button>   
            </div>   
        </div>
    </section>
    )
}