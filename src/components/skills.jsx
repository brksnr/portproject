import { useDarkMode } from "../contexts/darkmodecontext"

export function Skills() {
    const { darkMode } = useDarkMode();
    return (
        <>
        <div className="mx-56 mt-12 flex flex-col justify-between mb-12">
            <h1 className={`mb-10 font-[inter] text-5xl font-semibold ${darkMode ? "text-[#AEBCCF]" : ""} text-[#1F2937]`}>Skills</h1>
            <div className="flex justify-between">
                <div className="w-2/12">
                    <h3 className={`font-[inter] text-3xl font-medium leading-7 ${darkMode ? "text-[#B7AAFF]" : ""}  text-[#4338CA] mb-10`}>Java Script</h3>
                    <p className={`font-[inter] text-xs font-normal leading-4 ${darkMode ? "text-[#FFFFFF]" : ""} text-[#6B7280]`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="w-2/12">
                    <h3 className={`font-[inter] text-3xl font-medium leading-7 ${darkMode ? "text-[#B7AAFF]" : ""}  text-[#4338CA] mb-10`}>React.Js</h3>
                    <p className={`font-[inter] text-xs font-normal leading-4 ${darkMode ? "text-[#FFFFFF]" : ""} text-[#6B7280]`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="w-2/12">
                    <h3 className={`font-[inter] text-3xl font-medium leading-7 ${darkMode ? "text-[#B7AAFF]" : ""}  text-[#4338CA] mb-10`}>Node.Js</h3>
                    <p className={`font-[inter] text-xs font-normal leading-4 ${darkMode ? "text-[#FFFFFF]" : ""} text-[#6B7280]`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
        </>
    )
}