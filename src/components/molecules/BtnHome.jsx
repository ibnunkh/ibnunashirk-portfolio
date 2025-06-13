import Button from "@/components/atoms/Button"

const BtnHome = () => {
    return (
        <div className="flex justify-center gap-4">
            <a 
                href="/CV ATS Ibnu Nashir Khuluq.pdf"
                target="_blank"
            >
                <Button className="w-[8rem] bg-gradient-to-tr from-slate-800 to-blue-800/40 text-gray-200 font-montserrat font-semibold p-3 rounded-full hover:cursor-pointer hover:bg-gradient-to-tl hover:from-blue-400 hover:to-slate-400 hover:text-white">Resume</Button>
            </a>
            <a href="mailto:ibnunashirk@gmail.com">
                <Button className="w-[8rem] bg-gradient-to-tl from-blue-400 to-slate-400 text-white font-montserrat font-semibold p-3 rounded-full hover:cursor-pointer hover:bg-gradient-to-tr hover:from-slate-800 hover:to-blue-800/40 hover:text-gray-200">Contact Me</Button>
            </a>
        </div>
    )
}

export default BtnHome