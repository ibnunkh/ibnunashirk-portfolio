
const Footer = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full px-4 py-4 bg-gradient-to-r from-slate-900 to-gray-700 shadow-sm">
                <p className="text-sm md:text-md font-lato text-gray-200">&copy; {new Date().getFullYear()} ibnunashirk. All rights reserved</p>
            </div>
        </>
    )
}

export default Footer