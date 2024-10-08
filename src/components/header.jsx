import { useDarkMode } from "../contexts/darkmodecontext"

export function Header() {
    const {darkMode, toggleDarkMode} = useDarkMode();


    return (
    <section className="pt-4 mr-52 ml-56">
        <div className="flex justify-end max-w-full gap-4">
            <div className="dark-mode">
                <label className="switch">
                <input type="checkbox" onClick={toggleDarkMode}/>
                <span className="slider round"></span>
                </label>
                {!darkMode ? <p>DARK MODE</p> : <p>LIGHT MODE</p>}
            </div>
            <p>|</p>
            <p>TÜRKÇE'YE GEÇ</p>
        </div>
        <div className="flex justify-between max-w-full align-center mt-6">
            
            <div className="relative inline-block">
             <img src="./src/images/ellipse.png"/>
             <p className="absolute top-4 left-1/3 text-2xl rotate-12
             font-bold text-[#7B61FF]">B</p> 
            </div>
            <div className="flex gap-20">
            
           
                <p className="font-inter text-lg font-medium text-[#6B7280]">Skills</p>   
                <p className="font-inter text-lg font-medium text-[#6B7280]">Projects</p>   
                <button className="font-inter text-lg font-medium leading-7 text-[#3730A3] bg-white
                border border-[#3730A3] rounded-md w-32">Hire me</button>   
            </div>   
        </div>
    </section>
    )
}