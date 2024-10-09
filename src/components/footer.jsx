import { useChangeLang } from "../contexts/changeLangContext";
import { useDarkMode } from "../contexts/darkmodecontext"
import { languagesData } from "../s12context";

export function Footer() {

    const {darkMode } = useDarkMode();
    const { lang } = useChangeLang();
    const currentLanguage = lang ? "tr" : "en";
    const text = languagesData[currentLanguage].footer;
    
    return (            
        <div className={`w-full pb-40 mt-40 text-[#1F2937] ${darkMode ? "bg-[#141414]": "bg-[#F9F9F9]"} `}>
            <h1 className={`font-[inter] text-5xl font-semibold leading-10 ml-56 pt-28 mb-20 w-1/4 ${darkMode ? "text-[#AEBCCF]" : ""}`}>{text.title}</h1>
            <div className="flex justify-between mx-56">
                <div className="flex item-center"><p>👉</p> <p className={`font-[inter] text-xl font-medium leading-6 ${darkMode ? "text-[#BAB2E7] border-b-2 border-[#BAB2E7]":"text-[#AF0C48]"} border-b-2 border-[#AF0C48]`}>berksener04@gmail.com</p></div>
                <div className="flex gap-4">
                    <a className={`font-[inter] text-lg font-medium leading-7 ${darkMode ? "text-[#E1E1FF]" : "text-[#00AB6B]"} `} href="/">Personal Blog</a>
                    <a className={`font-[inter] text-lg font-medium leading-7 ${darkMode ? "text-[#17D18B]" : "text-[#0077B5]"} `} href="/">Github</a>
                    <a className={`font-[inter] text-lg font-medium leading-7 ${darkMode ? "text-[#0BA6F6]" : "text-[#0A0A14]"} `} href="/">Linkedin</a>
                </div>
            </div>      
        </div>
    )
}