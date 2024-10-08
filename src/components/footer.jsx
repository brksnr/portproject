export function Footer() {
    return (
        <div className="w-full pb-40 mt-40 bg-[#F9F9F9] text-[#1F2937]">
            <h1 className="font-[inter] text-5xl font-semibold leading-10 ml-56 pt-28 mb-20">Let's work together on<br/>your next product.</h1>
            <div className="flex justify-between mx-56">
                <div className="flex item-center"><p>👉</p> <p className=" font-[inter] text-xl font-medium leading-6 text-[#AF0C48] border-b-2 border-[#AF0C48]">berksener04@gmail.com</p></div>
                <div className="flex gap-4">
                    <a className="font-[inter] text-lg font-medium leading-7 text-[#00AB6B]" href="/">Personal Blog</a>
                    <a className="font-[inter] text-lg font-medium leading-7 text-[#0077B5]" href="/">Github</a>
                    <a className="font-[inter] text-lg font-medium leading-7 text-[#0A0A14]" href="/">Linkedin</a>
                </div>
            </div>
        </div>
    )
}