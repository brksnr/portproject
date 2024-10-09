import { useChangeLang } from "../contexts/changeLangContext";
import { useDarkMode } from "../contexts/darkmodecontext"
import { languagesData } from "../s12context";

export function Profile() {
    const {darkMode} = useDarkMode();
    const { lang } = useChangeLang();
    const currentLanguage = lang ? "tr" : "en";
    const text = languagesData[currentLanguage].profile;
    const title = `font-[inter] text-lg font-semibold leading-9 ${darkMode ? "text-[white]" : ""} text-[black]`;
    const texts = `font-[inter] text-lg font-normal leading-9 ${darkMode ? "text-[white]" : ""} text-[black]`;
    return (
        <>
        <hr className="border border-[#BAB2E7] mx-56 mb-20"/>
        <h1 className={`font-[inter] text-5xl font-semibold leading-10 ${darkMode ? "text-[#AEBCCF]" : ""} text-[#1F2937] ml-56 mb-10`}>{text.title}</h1>
        <div className="mx-56 font-sans flex justify-between ">
    
    <div className="flex flex-col w-4/12">
    <h1 className={`${darkMode ? "text-[#B7AAFF]" : ""} text-[#4338CA] font-[inter] text-3xl font-medium leading-7 mb-5`}>Profile</h1>
        <div className="flex justify-between">
            <span className={title}>{text.born}</span>
            <span className={texts}>{text.bornText}</span>
        </div>
        <div className="flex justify-between">
            <span className={title}>{text.city}</span>
            <span className={texts}>{text.cityText}</span>
        </div>
        <div className="flex justify-between">
            <span className={title}>{text.education}</span>
            <span className={texts}>{text.educationText}</span>
        </div>
        <div className="flex justify-between">
            <span className={title}>{text.role}</span>
            <span className={texts}>{text.roleText}</span>
        </div>
    </div>
    <div className="mr-80 mb-20 w-4/12 h-44">
        <h1 className={`${darkMode ? "text-[#B7AAFF]" : ""} text-[#4338CA] font-[inter] text-3xl font-medium leading-7 mb-5`}>{text.aboutMe}</h1>
        <p className={`font-[inter] text-lg font-normal leading-7 ${darkMode ? "text-[white]" : ""} text-[#6B7280] mb-4`}>{text.aboutMeText}</p>
        
    </div>
</div>
        </>
    )
}