import { useChangeLang } from "../contexts/changeLangContext";
import { useDarkMode } from "../contexts/darkmodecontext"
import { languagesData } from "../s12context";

export function Projects() {                        
    const {darkMode} = useDarkMode();
    const { lang } = useChangeLang();
    const currentLanguage = lang ? "tr" : "en";
    const text = languagesData[currentLanguage].projects;
    const projectButtons = `${darkMode ? "text-[#8F88FF] bg-[#383838]" : "bg-[white]"} py-0.5 px-4 rounded border border-[#3730A3] 
    font-[inter] text-sm font-medium leading-6 my-4 text-[#3730A3]`;
    const projectText = `font-[inter] text-sm font-normal leading-4 ${darkMode ? "text-[white]" : ""} text-[#6B7280]`;
    const projectLinks = `${darkMode ? "text-[#E1E1FF] border-[#E1E1FF]" : ""} font-[inter] text-base font-medium leading-6 text-[#3730A3] border-b-2 border-[#3730A3] `;
    const projectTitle = `font-[inter] text-3xl font-medium leading-7 ${darkMode ? "text-[#CFCBFF]" : ""} text-[#4338CA] my-4`;
    
    return (
        <>
        <hr className="border border-[#BAB2E7] ml-56 mr-52 mb-20"/>
        <div className="mx-56">
            <h1 className={`${darkMode ? "text-[#AEBCCF]" : ""} font-[inter] text-5xl font-semibold leading-10 mb-10`}>{text.title}</h1>
            <div className="w-full flex justify-between gap-5">
                <div className="w-1/5">
                    <img src="./src/images/workintech.png"/>
                    <h3 className={projectTitle}>{text.projectTitle}</h3>
                    <p className={projectText}>{text.text}</p>
                    <div className="flex justify-between gap-1.5 w-7/12">
                        <button className={projectButtons}>react</button>
                        <button className={projectButtons}>redux</button>
                        <button className={projectButtons}>axios</button>
                    </div>
                    <div className="flex justify-between">
                        <p  className={projectLinks}>Github</p>
                        <p  className={projectLinks}>{text.site}</p>
                    </div>
                </div>
                <div className="w-1/5"><img src="./src/images/randomjokes.png"/>
                    <h3  className={projectTitle}>{text.projectTitle2}</h3>
                    <p className={projectText}>{text.text2}</p>
                    <div className="flex justify-between gap-1.5 w-7/12">
                        <button className={projectButtons}>react</button>
                        <button className={projectButtons}>redux</button>
                        <button className={projectButtons}>axios</button>
                    </div>
                    <div className="flex justify-between">
                        <p className={projectLinks}>Github</p>
                        <p  className={projectLinks}>{text.site}</p>
                    </div></div>
                <div className="w-1/5"><img src="./src/images/journey.png"/>
                    <h3 className={projectTitle}>{text.projectTitle3}</h3>
                    <p className={projectText}>{text.text3}</p>
                    <div className="flex justify-between gap-1.5 w-7/12">
                        <button className={projectButtons}>react</button>
                        <button className={projectButtons}>redux</button>
                        <button className={projectButtons}>axios</button>
                    </div>
                    <div className="flex justify-between">
                        <p  className={projectLinks}>Github</p>
                        <p  className={projectLinks}>{text.site}</p>
                    </div></div>
            </div>
        </div>
        </>
    )
}