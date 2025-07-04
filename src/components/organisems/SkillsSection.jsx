import Image from "next/image";
import { ScrollFadeIn } from "../animations/AnimatedComponents";

const SkillsSection = () => {
    const skillsData = [
        {
            name: "HTML",
            icon: "/icons/html5-brands.svg",
            level: "Expert",
        },
        {
            name: "CSS",
            icon: "/icons/css3-alt-brands.svg",
            level: "Expert",
        },
        {
            name: "JavaScript",
            icon: "/icons/js-brands.svg",
            level: "Advanced",
        },
        {
            name: "React",
            icon: "/icons/react-brands.svg",
            level: "Intermediate",
        },
        {
            name: "Next.js",
            icon: "/icons/Next.js.svg",
            level: "Intermediate",
        },
        {
            name: "Tailwind CSS",
            icon: "/icons/Tailwind CSS.svg",
            level: "Intermediate",
        },
    ];

    return (
        <section className="relative py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
            <ScrollFadeIn>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-montserrat font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
                            My Skills
                        </h2>

                        <p className="font-lato text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                            Mastering cutting-edge technologies to build exceptional digital experiences
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-6 md:p-10">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="group relative">
                                <div className="relative bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 md:p-6 transform group-hover:scale-105 transition-all duration-500 h-full">

                                    <div className="relative mb-6">
                                        <div className="w-20 h-20 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center transition-all duration-500">
                                            <span className="text-3xl md:text-4xl filter group-hover:brightness-125 transition-all duration-500">
                                                <Image src={skill.icon} alt={skill.name} width={100} height={100} className="w-15 h-15 md:w-[100px] md:h-[100px]" />
                                            </span>
                                        </div>
                                        
                                    </div>

                                    <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-2 text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text transition-all duration-500">
                                        {skill.name}
                                    </h3>

                                    <div className="text-center mb-4">
                                        <p className="text-sm md:text-lg font-lato font-semibold text-gray-300">{skill.level}</p>
                                    </div>

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