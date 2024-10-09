import { useChangeLang } from "../contexts/changeLangContext";
import { useDarkMode } from "../contexts/darkmodecontext"
import { languagesData } from "../s12context";

export function Skills() {
    const { darkMode } = useDarkMode();
    const { lang } = useChangeLang();
    const currentLanguage = lang ? "tr" : "en";
    const text = languagesData[currentLanguage].skills;
    return (
        <>
        <div className="mx-56 mt-12 flex flex-col justify-between mb-12">
            <h1 className={`mb-10 font-[inter] text-5xl font-semibold ${darkMode ? "text-[#AEBCCF]" : ""} text-[#1F2937]`}>{text.title}</h1>
            <div className="flex justify-between">
                <div className="w-2/12">
                    <h3 className={`font-[inter] text-3xl font-medium leading-7 ${darkMode ? "text-[#B7AAFF]" : ""}  text-[#4338CA] mb-10`}>Java Script</h3>
                    <p className={`font-[inter] text-xs font-normal leading-4 ${darkMode ? "text-[#FFFFFF]" : ""} text-[#6B7280]`}>{text.textJs}</p>
                </div>
                <div className="w-2/12">
                    <h3 className={`font-[inter] text-3xl font-medium leading-7 ${darkMode ? "text-[#B7AAFF]" : ""}  text-[#4338CA] mb-10`}>React.Js</h3>
                    <p className={`font-[inter] text-xs font-normal leading-4 ${darkMode ? "text-[#FFFFFF]" : ""} text-[#6B7280]`}>{text.textReact}</p>
                </div>
                <div className="w-2/12">
                    <h3 className={`font-[inter] text-3xl font-medium leading-7 ${darkMode ? "text-[#B7AAFF]" : ""}  text-[#4338CA] mb-10`}>Node.Js</h3>
                    <p className={`font-[inter] text-xs font-normal leading-4 ${darkMode ? "text-[#FFFFFF]" : ""} text-[#6B7280]`}>{text.textNode}</p>
                </div>
            </div>
        </div>
        </>
    )
}