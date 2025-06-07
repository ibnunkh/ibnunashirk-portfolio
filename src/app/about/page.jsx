import Layout from "@/layouts/Layout"
import Image from "next/image"
import AboutInfo from "@/components/molecules/AboutInfo"
import EducationItem from "@/components/molecules/EducationItem"
import SkillsSection from "@/components/organisems/SkillsSection"
import {
    SlideFromBottom,
    SlideFromTop,
    ScrollFadeIn,
} from "@/components/animations/AnimatedComponents"

const AboutPage = () => {
    return (
        <Layout>

            <section className="relative flex flex-col text-center justify-center py-30 px-4 md:px-10 overflow-hidden bg-gradient-to-br from-blue-900 via-[#0081FB] to-blue-900">
                <SlideFromTop delay={1.2}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[120px] z-0"></div>
                    <h2 className="text-4xl sm:text-5xl  md:text-6xl lg:text-8xl font-montserrat font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                </SlideFromTop>

                <SlideFromBottom delay={2.0}>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 mt-10 mx-auto max-w-7xl bg-slate-900/60 border border-slate-600 rounded-2xl p-6 md:p-10 backdrop-blur-lg shadow-2xl transition-all">
                        <Image
                            src="/images/profile2.jpg"
                            alt="profil2"
                            width={300}
                            height={300}
                            className="object-cover w-60 h-60 md:w-[300px] md:h-[300px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                        <AboutInfo />
                    </div>
                </SlideFromBottom>
            </section>

            <SkillsSection />

            <section className="relative py-12 md:py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-800 to-slate-900 overflow-hidden">
                <ScrollFadeIn>
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
                    </div>
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent h-px animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent w-px animate-pulse delay-700"></div>
                    </div>
                    <EducationItem />
                </ScrollFadeIn>
            </section>
        </Layout>
    )
}

export default AboutPage