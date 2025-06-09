
const EducationItem = () => {
    const educationData = [
        {
            degree: "Social Science",
            institution: "SMA ISTIQAMAH Bandung",
            period: "2017 - 2020",
            gpa: "83/100",
        },
        {
            degree: "Frontend Development",
            institution: "Bootcamp Fullstack Web Developer Harisenin.com",
            period: "2024 - 2025",
            gpa: "4.0/4.0",
        },
    ];

    return (
        <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl sm:text-5xl  md:text-6xl lg:text-8xl font-montserrat font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
                    Education
                </h2>

                <p className="font-lato text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                    Continuously evolving through structured learning and innovative educational experiences
                </p>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:justify-between items-start gap-12 md:gap-6 px-4">
                {educationData.map((edu, index) => (
                    <div key={index} className="relative w-full md:w-1/2">
                        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 md:p-8 group hover:scale-[1.02] transition-transform">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-bl-2xl rounded-tr-2xl"></div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-4">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                                <span className="text-[#87CEFA] text-sm font-medium">{edu.period}</span>
                            </div>
                            <h3 className="text-2xl font-montserrat font-bold mb-2 text-transparent bg-gradient-to-r from-blue-400 via-gray-300 to-blue-400 bg-clip-text transition-all duration-500">
                                {edu.degree}
                            </h3>
                            <p className="text-gray-300 text-lg font-lato font-semibold mb-4">{edu.institution}</p>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-300">GPA:</span>
                                <span className="text-gray-300 font-bold text-lg">{edu.gpa}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EducationItem    