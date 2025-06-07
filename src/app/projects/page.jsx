import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Layout from "@/layouts/Layout";
import { SlideFromTop, SlideFromBottom } from "@/components/animations/AnimatedComponents";

const ProjectsPage = () => {

    const projectData = [
        {
            title: "Shoppedia",
            desc: "Featured Project",
            image: "/images/shoppedia.png",
            tools: "e-commerce Platform. Built using Next.js, Tailwind, Zustand and Toastify.",
            githubUrl: "https://github.com/ibnunkh/shoppedia.git",
            liveUrl: "https://shoppedia-zeta.vercel.app/", 
        },
        {
            title: "Videobelajar",
            desc: "Featured Project",
            image: "/images/videobelajar.png",
            tools: "e-learning Platform. Built using Next.js, Tailwind and integrated with API.",
            githubUrl: "https://github.com/ibnunkh/video-belajar-app.git",
            liveUrl: "https://videobelajar-tau.vercel.app/",
        },
        {
            title: "Nongkrong Bandung",
            desc: "Landing Page",
            image: "/images/nongkrong-bandung.png",
            tools: "Cafe roadmap. Built using React, Tailwind and react-router-dom.",
            githubUrl: "https://github.com/ibnunkh/nongkrong-bandung.git",
            liveUrl: "https://nongkrongbandung.vercel.app/",
        },
    ];

    return (
        <Layout>
            <section className="min-h-screen px-4 py-30 md:px-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
                <SlideFromTop delay={1.2}>
                    <div className="text-center">
                        <h2 className="text-4xl sm:text-5xl  md:text-6xl lg:text-8xl font-montserrat font-bold leading-tight bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                            My Projects
                        </h2>
                    </div>
                </SlideFromTop>
                
                <SlideFromBottom delay={2.0}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mt-10 p-6">
                        {projectData.map((project, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r p-6 from-slate-900/60 to-gray-800 rounded-xl border shadow-[0.8rem_0.8rem_0px_0px_#e2e8f0] hover:shadow-[1rem_1rem_0px_0px_#8700FF] transition hover:scale-105 duration-300"
                            >
                                <div className="relative mb-4">
                                    <a href={project.liveUrl}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={300}
                                            height={300}
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                    </a>
                                </div>
                                <p className="text-md md:text-lg text-purple-600 font-lato font-semibold">{project.desc}</p>
                                <h3 className="text-xl md:text-3xl font-montserrat text-gray-200 font-bold mt-1">{project.title}</h3>
                                {project.tools && (
                                    <p className="text-gray-300 mt-2">{project.tools}</p>
                                )}
                                <div className="flex items-center justify-between mt-4">
                                    <a 
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-md md:text-xl text-gray-300 font-lato hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-300 font-medium hover:text-slate-100"
                                    >
                                        <FaGithub size={40} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </SlideFromBottom>
            </section>
        </Layout>
    )
}

export default ProjectsPage