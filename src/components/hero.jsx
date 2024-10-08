import { useDarkMode } from "../contexts/darkmodecontext"

export function Hero() {

    const {darkMode} = useDarkMode();

    return (
        
        <div className="mr-52 ml-56 flex justify-between align-center mt-20">
        
        <div className="w-6/12">
            <div className={`flex w-1/2 font-[inter] w-1/2 font-medium ${darkMode ? "text-[#B7AAFF]" : ""} text-[#4338CA] gap-4 items-center`}>
            <img className= {`w-28 h-0 border ${darkMode ? "border-[#B7AAFF]" : ""} border-[#3730A3]" src="./src/images/line.png`}/>
                <a>Berk Şener</a>
            </div>
             <h1 className={`font-[inter] text-7xl my-10 ${darkMode ? "text-[#AEBCCF]" : ""}`}>Creative thinker Minimalism lover</h1>
            <p className={`font-[inter] text-lg font-normal font-bold leading-7 ${darkMode ? "text-[#FFFFFF]" : "text-[#6B7280]"} `} >Hi, I’m Almila. I’m a full-stack developer. 
            If you are looking for a Developer who to craft solid and scalable frontend
            products with great user experiences. Let’s shake hands with me.</p>
            <div className="flex mt-10 gap-3 mb-20">
                <button className={`rounded-md ${darkMode ? "text-[#000000] bg-[#E1E1FF] border-none" : "text-[white]"} 
            font-[inter] text-sm font-medium border border-[#3730A3] p-3 w-28 bg-[#3730A3]`}>Hire Me</button>
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