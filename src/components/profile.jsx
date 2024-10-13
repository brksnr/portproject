import { useChangeLang } from "../contexts/changeLangContext";
import { useDarkMode } from "../contexts/darkmodecontext"
import { languagesData } from "../s12context";

export function Profile() {
    const {darkMode} = useDarkMode();
    const { lang } = useChangeLang();
    const currentLanguage = lang ? "tr" : "en";
    const profile = languagesData[currentLanguage].profile;
    const title = `font-[inter] text-lg font-semibold leading-9 ${darkMode ? "text-[white]" : ""} text-[black]`;
    const texts = `font-[inter] text-lg font-normal leading-9 ${darkMode ? "text-[white]" : ""} text-[black]`;

    
    return (
        <>
        <hr className="border border-[#BAB2E7] mx-56 mb-20"/>
        <h1 className={`font-[inter] text-5xl font-semibold leading-10 ${darkMode ? "text-[#AEBCCF]" : ""} text-[#1F2937] ml-56 mb-10`}>{profile.title}</h1>
        <div className="mx-56 font-sans flex justify-between ">
    
    <div className="flex flex-col w-4/12">
    <h1 className={`${darkMode ? "text-[#B7AAFF]" : ""} text-[#4338CA] font-[inter] text-3xl font-medium leading-7 mb-5`}>{profile.title}</h1>
        {profile.items.map((profil, index) => (
            <div key={index} className="flex justify-between">
            <span className={title}>{profil.profileTitle}</span>
            <span className={texts}>{profil.text}</span>
        </div>
        ))}
    </div>
    <div className="mr-80 mb-20 w-4/12 h-44">
        <h1 className={`${darkMode ? "text-[#B7AAFF]" : ""} text-[#4338CA] font-[inter] text-3xl font-medium leading-7 mb-5`}>{profile.aboutMe}</h1>
        <p className={`font-[inter] text-lg font-normal leading-7 ${darkMode ? "text-[white]" : ""} text-[#6B7280] mb-4`}>{profile.aboutMeText}</p>
        
    </div>
</div>
        </>
    )
}