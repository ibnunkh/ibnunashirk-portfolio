import Image from "next/image";
import { ScrollFadeIn } from "../animations/AnimatedComponents";

const SkillsSection = () => {
    const skillsData = [
        {
            name: "HTML",
            icon: "/icons/html5-brands.svg",
            level: "Expert",
            percentage: 90,
        },
        {
            name: "CSS",
            icon: "/icons/css3-alt-brands.svg",
            level: "Expert",
            percentage: 90,
        },
        {
            name: "JavaScript",
            icon: "/icons/js-brands.svg",
            level: "Advanced",
            percentage: 88,
        },
        {
            name: "React",
            icon: "/icons/react-brands.svg",
            level: "Intermediate",
            percentage: 82,
        },
        {
            name: "Next.js",
            icon: "/icons/Next.js.svg",
            level: "Intermediate",
            percentage: 80,
        },
        {
            name: "Tailwind CSS",
            icon: "/icons/Tailwind CSS.svg",
            level: "Intermediate",
            percentage: 80,
        },
    ];

    return (
        <section className="relative py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
            <ScrollFadeIn>
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-px animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent w-px animate-pulse delay-700"></div>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-blue-300 text-sm font-medium tracking-wider uppercase">Technical Sets</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-montserrat font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
                            My Skills
                        </h2>

                        <p className="font-lato text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                            Mastering cutting-edge technologies to build exceptional digital experiences
                        </p>
                    </div>

                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                                
                                <div className="relative bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 md:p-8 transform group-hover:scale-105 transition-all duration-500 h-full">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>

                                    <div className="relative mb-6">
                                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-500">
                                            <span className="text-3xl md:text-4xl filter group-hover:brightness-125 transition-all duration-500">
                                                <Image src={skill.icon} alt={skill.name} width={50} height={50} />
                                            </span>
                                        </div>
                                        
                                        <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 mx-auto border-2 border-blue-400/30 rounded-2xl animate-pulse group-hover:border-blue-400/60 transition-all duration-500"></div>
                                    </div>

                                    <h3 className="font-montserrat text-xl md:text-2xl font-bold text-white mb-2 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                                        {skill.name}
                                    </h3>

                                    <div className="text-center mb-4">
                                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                                            skill.level === 'Expert' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                                            skill.level === 'Advanced' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                                            'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                        }`}>
                                            <div className={`w-1.5 h-1.5 rounded-full font-lato animate-pulse ${
                                                skill.level === 'Expert' ? 'bg-green-400' :
                                                skill.level === 'Advanced' ? 'bg-blue-400' :
                                                'bg-purple-400'
                                            }`}></div>
                                            {skill.level}
                                        </span>
                                    </div>

                                    <div className="relative">
                                        <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2">
                                            <div 
                                                className={`h-2 rounded-full bg-gradient-to-r transition-all duration-1000 group-hover:shadow-lg ${
                                                    skill.level === 'Expert' ? 'from-green-400 to-emerald-500 group-hover:shadow-green-400/50' :
                                                    skill.level === 'Advanced' ? 'from-blue-400 to-cyan-500 group-hover:shadow-blue-400/50' :
                                                    'from-purple-400 to-pink-500 group-hover:shadow-purple-400/50'
                                                }`}
                                                style={{ width: `${skill.percentage}%` }}
                                            ></div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-gray-400 text-sm font-medium">
                                                {skill.percentage}%
                                            </span>
                                        </div>
                                    </div>

                                    <div className="absolute -z-10 top-4 right-4 w-16 h-16 bg-blue-500/5 rounded-full blur-xl animate-pulse delay-300"></div>
                                    <div className="absolute -z-10 bottom-4 left-4 w-12 h-12 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-700"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <div className="text-center group">
                            <div className="relative">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                                    6+
                                </div>
                                <div className="text-gray-400 text-sm">Technologies</div>
                                <div className="absolute inset-0 bg-blue-400/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>

                        <div className="text-center group">
                            <div className="relative">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                                    10+
                                </div>
                                <div className="text-gray-400 text-sm">Months Learning</div>
                                <div className="absolute inset-0 bg-purple-400/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>

                                            <div className="text-center group">
                            <div className="relative">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                                    3+
                                </div>
                                <div className="text-gray-400 text-sm">Projects Built</div>
                                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollFadeIn>
        </section>
    )
}

export default SkillsSection