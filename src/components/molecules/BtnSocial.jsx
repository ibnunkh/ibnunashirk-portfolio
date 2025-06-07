import { FaGithub, FaLinkedin } from "react-icons/fa"

const BtnSocial = () => {
    return (
        <div className="flex justify-center mt-4 gap-4">
            <a 
                href="https://linkedin.com/in/ibnunashirk" 
                target="_blank" 
                rel="noopener noreferrer"
            >   
                <FaLinkedin size={30} className="text-gray-200 hover:cursor-pointer hover:text-slate-900 duration-300 transition hover:scale-105 ease-in-out" />
            </a>
            <a 
                href="https://github.com/ibnunkh"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FaGithub size={30} className="text-gray-200 hover:cursor-pointer hover:text-slate-900 duration-300 transition hover:scale-105 ease-in-out" />
            </a>
        </div>
    )
}

export default BtnSocial