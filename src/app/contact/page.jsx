import Layout from "@/layouts/Layout"
import { Mail, MapPin , Phone } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SlideFromTop, SlideFromBottom } from "@/components/animations/AnimatedComponents"

const ContactPage = () => {
    return (
        <Layout>
            <div className="min-h-screen py-15 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
                    <SlideFromTop delay={1.2}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-8xl font-montserrat font-bold text-white mb-6">
                                <span className="bg-gradient-to-r from-blue-400 via-gray-200 to-blue-400 bg-clip-text text-transparent">
                                    My Contact
                                </span>
                            </h2>
                            <p className="text-slate-300 text-lg font-lato max-w-2xl mx-auto leading-relaxed">
                                Mari berkolaborasi dan wujudkan ide-ide inovatif bersama. Hubungi saya untuk diskusi proyek atau sekadar berbagi pemikiran.
                            </p>
                        </div>
                    </SlideFromTop>

                    <div className="max-w-2xl mx-auto">
                        <SlideFromBottom delay={2.0}>
                            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-500 group">
                                <h2 className="text-2xl font-montserrat text-gray-200 mb-8 group-hover:text-blue-400 transition-colors">
                                    Informasi Kontak
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-sm">Email</p>
                                            <p className="text-white font-light">ibnunashirk@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-sm">Phone</p>
                                            <p className="text-white font-light">+6285137269035</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-sm">Address</p>
                                            <p className="text-white font-light">Bandung, Indonesia</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <p className="text-slate-400 text-sm mb-4">Follow Me</p>
                                    <div className=" flex space-x-4">
                                        <a href="https://github.com/ibnunkh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                            <FaGithub className="w-10 h-10" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/ibnunashirk/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                            <FaLinkedin className="w-10 h-10" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SlideFromBottom>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage