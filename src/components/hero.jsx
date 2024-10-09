import { useChangeLang } from "../contexts/changeLangContext";
import { useDarkMode } from "../contexts/darkmodecontext"
import { languagesData } from "../s12context";

export function Hero() {

    const {darkMode} = useDarkMode();
    const { lang } = useChangeLang();
    const currentLanguage = lang ? "tr" : "en";
    const text = languagesData[currentLanguage].hero;

    return (
        
        <div className="mr-52 ml-56 flex justify-between align-center mt-20">
        
        <div className="w-6/12">
            <div className={`flex w-1/2 font-[inter] w-1/2 font-medium ${darkMode ? "text-[#B7AAFF]" : ""} text-[#4338CA] gap-4 items-center`}>
            <img className= {`w-28 h-0 border ${darkMode ? "border-[#B7AAFF]" : ""} border-[#3730A3]" src="./src/images/line.png`}/>
                <a>Berk Şener</a>
            </div>
             <h1 className={`font-[inter] text-7xl my-10 ${darkMode ? "text-[#AEBCCF]" : ""}`}>{text.title}</h1>
            <p className={`font-[inter] text-lg font-normal font-bold leading-7 ${darkMode ? "text-[#FFFFFF]" : "text-[#6B7280]"} `} >{text.text}</p>
            <div className="flex mt-10 gap-3 mb-20">
                <button className={`rounded-md ${darkMode ? "text-[#000000] bg-[#E1E1FF] border-none" : "text-[white]"} 
            font-[inter] text-sm font-medium border border-[#3730A3] p-3 w-28 bg-[#3730A3]`}>{text.hireMe}</button>
                <button className={`rounded-md ${darkMode ? "text-[#E1E1FF] bg-[#383838] border-[#383838]" : "text-[#3730A3]"} 
            font-[inter] text-sm font-medium border border-[#3730A3] p-3`}><i className="fab fa-github w-8"></i>Github</button>
                <button className={`rounded-md ${darkMode ? "text-[#E1E1FF] bg-[#383838] border-[#383838]" : "text-[#3730A3]"} 
            font-[inter] text-sm font-medium border border-[#3730A3] p-3`}><i className="fa-brands fa-linkedin-in w-8"></i> Linkedin</button>
            </div>
        </div>
        <div className="hero-img">
        <img className="rounded-2xl max-w-full h-96" src="./src/images/almina.png"/>
        </div>
        </div>
            
    )
}