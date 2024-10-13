import { useChangeLang } from "../contexts/changeLangContext";
import { useDarkMode } from "../contexts/darkmodecontext"
import { languagesData } from "../s12context";

export function Skills() {
    const { darkMode } = useDarkMode();
    const { lang } = useChangeLang();
    const currentLanguage = lang ? "tr" : "en";
    const skills = languagesData[currentLanguage].skills;
    const titleCss = `font-[inter] text-3xl font-medium leading-7 ${darkMode ? "text-[#B7AAFF]" : ""}  text-[#4338CA] mb-10`;
    const textsCss = `font-[inter] text-xs font-normal leading-4 ${darkMode ? "text-[#FFFFFF]" : ""} text-[#6B7280]`
    return (
        <>
        <div className="mx-56 mt-12 flex flex-col justify-between mb-12">
            <h1 className={`mb-10 font-[inter] text-5xl font-semibold ${darkMode ? "text-[#AEBCCF]" : ""} text-[#1F2937]`}>{skills.title}</h1>
            <div className="flex justify-between">
                {skills.items.map((skill, index) => (
                    <div key={index} className="w-2/12">
                    <h3 className={titleCss}>{skill.skillTitle}</h3>
                    <p className={textsCss}>{skill.text}</p>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}