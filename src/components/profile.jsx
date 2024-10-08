import { useDarkMode } from "../contexts/darkmodecontext"

export function Profile() {
    const {darkMode} = useDarkMode();
    return (
        <>
        <hr className="border border-[#BAB2E7] mx-56 mb-20"/>
        <h1 className={`font-[inter] text-5xl font-semibold leading-10 ${darkMode ? "text-[#AEBCCF]" : ""} text-[#1F2937] ml-56 mb-10`}>Profile</h1>
        <div className="mx-56 font-sans flex justify-between ">
    
    <div className="flex flex-col w-4/12">
    <h1 className={`${darkMode ? "text-[#B7AAFF]" : ""} text-[#4338CA] font-[inter] text-3xl font-medium leading-7 mb-5`}>Profile</h1>
        <div className="flex justify-between">
            <span className={`font-[inter] text-lg font-semibold leading-9 ${darkMode ? "text-[white]" : ""} text-[black]`}>Doğum tarihi</span>
            <span className={`font-[inter] text-lg font-normal leading-9 ${darkMode ? "text-[white]" : ""} text-[black]`}>24.03.1996</span>
        </div>
        <div className="flex justify-between">
            <span className={`font-[inter] text-lg font-semibold leading-9 ${darkMode ? "text-[white]" : ""} text-[black]`}>İkamet Şehri</span>
            <span className={`font-[inter] text-lg font-normal leading-9 ${darkMode ? "text-[white]" : ""} text-[black]`}>Ankara</span>
        </div>
        <div className="flex justify-between">
            <span className={`font-[inter] text-lg font-semibold leading-9 ${darkMode ? "text-[white]" : ""} text-[black]`}>Eğitim Durumu</span>
            <span className={`font-[inter] text-lg font-normal leading-9 ${darkMode ? "text-[white]" : ""} text-[black]`}>Hacettepe Ünv. Biyoloji<br/>Lisans, 2016</span>
        </div>
        <div className="flex justify-between">
            <span className={`font-[inter] text-lg font-semibold leading-9 ${darkMode ? "text-[white]" : ""} text-[black]`}>Tercih Ettiği Rol</span>
            <span className={`font-[inter] text-lg font-normal leading-9 ${darkMode ? "text-[white]" : ""} text-[black]`}>Frontend, UI</span>
        </div>
    </div>
    <div className="mr-80 mb-20 w-4/12 h-44">
        <h1 className={`${darkMode ? "text-[#B7AAFF]" : ""} text-[#4338CA] font-[inter] text-3xl font-medium leading-7 mb-5`}>About Me</h1>
        <p className={`font-[inter] text-lg font-normal leading-7 ${darkMode ? "text-[white]" : ""} text-[#6B7280] mb-4`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
        <p className={`font-[inter] text-lg font-normal leading-7 ${darkMode ? "text-[white]" : ""} text-[#6B7280]`}>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
    </div>
</div>
        </>
    )
}