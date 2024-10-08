import { useDarkMode } from "../contexts/darkmodecontext"

export function Projects() {
    const {darkMode} = useDarkMode();
    return (
        <>
        <hr className="border border-[#BAB2E7] ml-56 mr-52 mb-20"/>
        <div className="mx-56">
            <h1 className={`${darkMode ? "text-[#AEBCCF]" : ""} font-[inter] text-5xl font-semibold leading-10 mb-10`}>Projects</h1>
            <div className="w-full flex justify-between gap-5">
                <div className="w-1/5">
                    <img src="./src/images/workintech.png"/>
                    <h3 className={`font-[inter] text-3xl font-medium leading-7 ${darkMode ? "text-[#CFCBFF]" : ""} text-[#4338CA] my-4`}>Workintech</h3>
                    <p className={`font-[inter] text-sm font-normal leading-4 ${darkMode ? "text-[white]" : ""} text-[#6B7280]`}>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className="flex justify-between gap-1.5 w-7/12">
                        <button className={`${darkMode ? "text-[#8F88FF] bg-[#383838]" : "bg-[white]"} py-0.5 px-4 rounded border border-[#3730A3] 
                        font-[inter] text-sm font-medium leading-6 my-4 text-[#3730A3]` }>react</button>
                        <button className={`${darkMode ? "text-[#8F88FF] bg-[#383838]" : "bg-[white]"} py-0.5 px-4 rounded border border-[#3730A3] 
                        font-[inter] text-sm font-medium leading-6 my-4 text-[#3730A3]` }>redux</button>
                        <button className={`${darkMode ? "text-[#8F88FF] bg-[#383838]" : "bg-[white]"} py-0.5 px-4 rounded border border-[#3730A3] 
                        font-[inter] text-sm font-medium leading-6 my-4 text-[#3730A3]` }>axios</button>
                    </div>
                    <div className="flex justify-between">
                        <p  className={`${darkMode ? "text-[#E1E1FF] border-[#E1E1FF]" : ""} font-[inter] text-base font-medium leading-6 text-[#3730A3] border-b-2 border-[#3730A3] `}>Github</p>
                        <p  className={`${darkMode ? "text-[#E1E1FF] border-[#E1E1FF]" : ""} font-[inter] text-base font-medium leading-6 text-[#3730A3] border-b-2 border-[#3730A3] `}>View Site</p>
                    </div>
                </div>
                <div className="w-1/5"><img src="./src/images/randomjokes.png"/>
                    <h3  className={`font-[inter] text-3xl font-medium leading-7 ${darkMode ? "text-[#CFCBFF]" : ""} text-[#4338CA] my-4`}>Random Jokes</h3>
                    <p className={`font-[inter] text-sm font-normal leading-4 ${darkMode ? "text-[white]" : ""} text-[#6B7280]`}>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className="flex justify-between gap-1.5 w-7/12">
                        <button className={`${darkMode ? "text-[#8F88FF] bg-[#383838]" : "bg-[white]"} py-0.5 px-4 rounded border border-[#3730A3] 
                        font-[inter] text-sm font-medium leading-6 my-4 text-[#3730A3]` }>react</button>
                        <button className={`${darkMode ? "text-[#8F88FF] bg-[#383838]" : "bg-[white]"} py-0.5 px-4 rounded border border-[#3730A3] 
                        font-[inter] text-sm font-medium leading-6 my-4 text-[#3730A3]` }>redux</button>
                        <button className={`${darkMode ? "text-[#8F88FF] bg-[#383838]" : "bg-[white]"} py-0.5 px-4 rounded border border-[#3730A3] 
                        font-[inter] text-sm font-medium leading-6 my-4 text-[#3730A3]` }>axios</button>
                    </div>
                    <div className="flex justify-between">
                        <p className={`${darkMode ? "text-[#E1E1FF] border-[#E1E1FF]" : ""} font-[inter] text-base font-medium leading-6 text-[#3730A3] border-b-2 border-[#3730A3] `}>Github</p>
                        <p  className={`${darkMode ? "text-[#E1E1FF] border-[#E1E1FF]" : ""} font-[inter] text-base font-medium leading-6 text-[#3730A3] border-b-2 border-[#3730A3] `}>View Site</p>
                    </div></div>
                <div className="w-1/5"><img src="./src/images/journey.png"/>
                    <h3 className={`font-[inter] text-3xl font-medium leading-7 ${darkMode ? "text-[#CFCBFF]" : ""} text-[#4338CA] my-4`}>Journey</h3>
                    <p className={`font-[inter] text-sm font-normal leading-4 ${darkMode ? "text-[white]" : ""} text-[#6B7280]`}>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className="flex justify-between gap-1.5 w-7/12">
                        <button className={`${darkMode ? "text-[#8F88FF] bg-[#383838]" : "bg-[white]"} py-0.5 px-4 rounded border border-[#3730A3] 
                        font-[inter] text-sm font-medium leading-6 my-4 text-[#3730A3]` }>react</button>
                        <button className={`${darkMode ? "text-[#8F88FF] bg-[#383838]" : "bg-[white]"} py-0.5 px-4 rounded border border-[#3730A3] 
                        font-[inter] text-sm font-medium leading-6 my-4 text-[#3730A3]` }>redux</button>
                        <button className={`${darkMode ? "text-[#8F88FF] bg-[#383838]" : "bg-[white]"} py-0.5 px-4 rounded border border-[#3730A3] 
                        font-[inter] text-sm font-medium leading-6 my-4 text-[#3730A3]` }>axios</button>
                    </div>
                    <div className="flex justify-between">
                        <p  className={`${darkMode ? "text-[#E1E1FF] border-[#E1E1FF]" : ""} font-[inter] text-base font-medium leading-6 text-[#3730A3] border-b-2 border-[#3730A3] `}>Github</p>
                        <p  className={`${darkMode ? "text-[#E1E1FF] border-[#E1E1FF]" : ""} font-[inter] text-base font-medium leading-6 text-[#3730A3] border-b-2 border-[#3730A3] `}>View Site</p>
                    </div></div>
            </div>
        </div>
        </>
    )
}